import type { VercelRequest, VercelResponse } from '../src/types/vercel';
import fs from 'fs';
import path from 'path';

// Simple storage implementation for development
// In production, this would connect to a database or cloud storage
const DATA_PATH = path.join(process.cwd(), 'content-data.json');

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

    // Load existing data
    let contentData: Record<string, {
      type: string;
      value: string;
      updatedAt: string;
    }> = {};
    
    try {
      if (fs.existsSync(DATA_PATH)) {
        contentData = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
      }
    } catch (error) {
      console.error('Error reading content data:', error);
      // Continue with empty data if file doesn't exist or is invalid
    }

    // Update the content
    contentData[saveData.path] = {
      type: saveData.type,
      value: saveData.value,
      updatedAt: new Date().toISOString()
    };

    // Save the updated data
    fs.writeFileSync(DATA_PATH, JSON.stringify(contentData, null, 2));

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
