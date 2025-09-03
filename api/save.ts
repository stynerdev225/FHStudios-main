import type { VercelRequest, VercelResponse } from '../src/types/vercel';

interface SaveRequest {
  path: string;      // The data-name attribute value
  type: 'text' | 'image' | 'video';
  value: string;     // The new content value
  siteId?: string;   // Optional site identifier
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
    const saveData = req.body as SaveRequest;
    
    if (!saveData.path || !saveData.type || saveData.value === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    // In a production environment, you would save to a database here
    // For example, with KV store:
    // if (process.env.VERCEL_ENV === 'production') {
    //   // Save to KV store or other database
    //   const { kv } = require('@vercel/kv');
    //   await kv.hset(`content:${saveData.siteId || 'default'}`, {
    //     [saveData.path]: {
    //       type: saveData.type,
    //       value: saveData.value,
    //       updatedAt: new Date().toISOString()
    //     }
    //   });
    // }
    
    // For now, we'll just simulate success and log the data
    console.log('Content saved:', {
      path: saveData.path,
      type: saveData.type,
      length: saveData.value.length,
      updatedAt: new Date().toISOString()
    });

    // Return success
    return res.status(200).json({ 
      ok: true,
      message: 'Content saved successfully'
    });
  } catch (error) {
    console.error('Error saving content:', error);
    return res.status(500).json({ 
      error: 'Failed to save content',
      details: error instanceof Error ? error.message : String(error)
    });
  }
}
