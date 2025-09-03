/**
 * Type declarations for the Vercel API
 */

// Vercel Request type
export interface VercelRequest {
  method: string;
  url: string;
  headers: {
    [key: string]: string | string[] | undefined;
  };
  query: {
    [key: string]: string | string[] | undefined;
  };
  cookies: {
    [key: string]: string;
  };
  body: unknown;
}

// Vercel Response type
export interface VercelResponse {
  status: (statusCode: number) => VercelResponse;
  send: (body: unknown) => VercelResponse;
  json: (jsonBody: Record<string, unknown>) => VercelResponse;
  setHeader: (name: string, value: string) => VercelResponse;
  end: () => void;
}
