import type { VercelRequest, VercelResponse } from '../src/types/vercel';
import fs from 'fs';
import path from 'path';

// Simple quota tracking for development
// In production, this would connect to a database
const QUOTA_PATH = path.join(process.cwd(), 'edit-quotas.json');

// Default quota limits
const DEFAULT_QUOTA = 100; // edits per client

interface TrackRequest {
  clientId: string;    // Client identifier
  siteId: string;      // Site identifier
}

interface QuotaData {
  [clientId: string]: {
    [siteId: string]: {
      count: number;
      limit: number;
      lastEdit: string;
    }
  }
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the data from the request
    const trackData = req.body as TrackRequest;
    
    if (!trackData.clientId || !trackData.siteId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Load existing quota data
    let quotaData: QuotaData = {};
    
    try {
      if (fs.existsSync(QUOTA_PATH)) {
        quotaData = JSON.parse(fs.readFileSync(QUOTA_PATH, 'utf8'));
      }
    } catch (error) {
      console.error('Error reading quota data:', error);
      // Continue with empty data if file doesn't exist or is invalid
    }

    // Initialize client data if not exists
    if (!quotaData[trackData.clientId]) {
      quotaData[trackData.clientId] = {};
    }

    // Initialize site data if not exists
    if (!quotaData[trackData.clientId][trackData.siteId]) {
      quotaData[trackData.clientId][trackData.siteId] = {
        count: 0,
        limit: DEFAULT_QUOTA,
        lastEdit: new Date().toISOString()
      };
    }

    // Increment edit count
    quotaData[trackData.clientId][trackData.siteId].count += 1;
    quotaData[trackData.clientId][trackData.siteId].lastEdit = new Date().toISOString();

    // Save the updated data
    fs.writeFileSync(QUOTA_PATH, JSON.stringify(quotaData, null, 2));

    // Calculate remaining quota
    const site = quotaData[trackData.clientId][trackData.siteId];
    const remaining = Math.max(0, site.limit - site.count);
    const quotaReached = remaining <= 0;

    // Return the remaining quota
    return res.status(200).json({ 
      ok: true,
      remaining,
      quotaReached,
      message: quotaReached ? 'Edit quota reached' : 'Edit tracked successfully'
    });
  } catch (error) {
    console.error('Error tracking edit:', error);
    return res.status(500).json({ 
      error: 'Failed to track edit',
      details: error instanceof Error ? error.message : String(error)
    });
  }
}
