// Health check API endpoint for monitoring
// Provides basic and detailed health status of the application

interface RequestHeaders {
  [key: string]: string | string[] | undefined;
}

interface RequestQuery {
  [key: string]: string | string[] | undefined;
}

interface VercelRequest {
  headers: RequestHeaders;
  query: RequestQuery;
}

interface VercelResponse {
  status: (statusCode: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
}

interface HealthStatus {
  status: 'ok' | 'degraded' | 'error';
  version: string;
  timestamp: string;
  environment: string;
  services: {
    api: {
      status: 'ok' | 'degraded' | 'error';
      latency: number;
    };
    storage: {
      status: 'ok' | 'degraded' | 'error';
      provider: string;
    };
    quota: {
      status: 'ok' | 'degraded' | 'error';
      remaining: number;
    };
  };
  uptime: number;
}

// Get the service start time for uptime calculation
const serviceStartTime = Date.now();

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<void> {
  const startTime = Date.now();
  
  // Check if this is an authorized health check
  const authHeader = req.headers.authorization as string | undefined;
  const expectedToken = process.env.HEALTH_CHECK_TOKEN || 'default-health-token';
  const isDetailedRequest = req.query.detailed === 'true';
  
  if (isDetailedRequest && (!authHeader || typeof authHeader !== 'string' || !authHeader.includes('Bearer ') || authHeader.split(' ')[1] !== expectedToken)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    // Basic health check that always returns OK
    if (!isDetailedRequest) {
      return res.status(200).json({ status: 'ok' });
    }
    
    // Detailed health check for monitoring systems
    const version = '1.0.0'; // Hardcoded version to avoid require()
    
    // Check services
    const apiLatency = Date.now() - startTime;
    
    // In a real system, you would actually check these services
    // For now, we'll simulate all services being healthy
    const healthStatus: HealthStatus = {
      status: 'ok',
      version: version,
      timestamp: new Date().toISOString(),
      environment: process.env.VERCEL_ENV || 'development',
      services: {
        api: {
          status: 'ok',
          latency: apiLatency,
        },
        storage: {
          status: 'ok',
          provider: process.env.STORAGE_TYPE || 'json',
        },
        quota: {
          status: 'ok',
          remaining: parseInt(process.env.DEFAULT_QUOTA || '100', 10),
        },
      },
      uptime: Math.floor((Date.now() - serviceStartTime) / 1000),
    };
    
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.status(200).json(healthStatus);
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'error',
      error: 'Internal server error during health check',
      timestamp: new Date().toISOString(),
    });
  }
}
