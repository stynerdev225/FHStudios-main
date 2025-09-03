import { debounce } from './utils.js';

// Define minimal ContentTools types
interface ContentToolsEditorApp {
  init(selector: string, attributeName: string): void;
  addEventListener(event: string, callback: (ev: ContentToolsSavedEvent) => void): void;
  destroy(): void;
}

interface ContentToolsSavedEvent {
  detail(): {
    regions: {
      [key: string]: string;
    };
  };
}

// Token for edit mode
declare global {
  interface Window {
    __EDIT_TOKEN?: string;
    ContentTools?: {
      EditorApp: {
        get(): ContentToolsEditorApp;
      };
    };
  }
}

// ContentTools editor instance
let editor: ContentToolsEditorApp | null = null;

// Initialize ContentTools editor
export function initContentTools(): void {
  if (!window.ContentTools || editor) {
    return;
  }

  editor = window.ContentTools.EditorApp.get();
  
  // Configure editor
  if (editor) {
    editor.init('*[data-editable]', 'data-name');
    
    // Add save callback
    editor.addEventListener('saved', handleContentSaved);

    console.log('ContentTools initialized');
  }
}

// Handle saved content
function handleContentSaved(ev: ContentToolsSavedEvent): void {
  const regions = ev.detail().regions;
  
  // Process each edited region
  Object.keys(regions).forEach(async (path) => {
    const value = regions[path];
    
    // Determine content type (text or image)
    const type = determineContentType(value);
    
    try {
      // Save the content
      await saveContent(path, type, value);
      
      // Track the edit for quota
      await trackEdit();
    } catch (error) {
      showToast('Error saving content. Please try again.');
      console.error('Error saving content:', error);
    }
  });
}

// Determine if content is text or image
function determineContentType(value: string): 'text' | 'image' | 'video' {
  if (value.includes('<img')) {
    return 'image';
  }
  if (value.includes('<video') || value.includes('video/mp4')) {
    return 'video';
  }
  return 'text';
}

// Save content to API (debounced)
const saveContent = debounce(async (path: string, type: 'text' | 'image' | 'video', value: string) => {
  try {
    const response = await fetch('/api/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ path, type, value }),
    });

    if (!response.ok) {
      throw new Error(`Failed to save: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.ok) {
      showToast('Content saved successfully');
    } else {
      throw new Error(data.error || 'Unknown error');
    }
  } catch (error) {
    showToast('Error saving content. Please try again.');
    console.error('Error saving content:', error);
    throw error;
  }
}, 800);

// Track edit for quota
async function trackEdit(): Promise<void> {
  try {
    // Use fake IDs for demo
    const clientId = 'demo-client';
    const siteId = 'francisco-herrera-site';
    
    const response = await fetch('/api/track-edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ clientId, siteId }),
    });

    if (!response.ok) {
      throw new Error(`Failed to track edit: ${response.statusText}`);
    }

    const data = await response.json();
    
    if (data.quotaReached) {
      showQuotaReachedBanner();
      disableEditing();
    }
  } catch (error) {
    console.error('Error tracking edit:', error);
  }
}

// Show a toast message
function showToast(message: string): void {
  // Simple toast implementation
  const toast = document.createElement('div');
  toast.className = 'ct-toast';
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  toast.style.color = 'white';
  toast.style.padding = '10px 20px';
  toast.style.borderRadius = '4px';
  toast.style.zIndex = '10000';
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.5s ease';
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 500);
  }, 3000);
}

// Show quota reached banner
function showQuotaReachedBanner(): void {
  const banner = document.createElement('div');
  banner.className = 'ct-quota-banner';
  banner.textContent = 'Edit limit reached. Please upgrade your plan.';
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.left = '0';
  banner.style.right = '0';
  banner.style.backgroundColor = '#f44336';
  banner.style.color = 'white';
  banner.style.padding = '10px';
  banner.style.textAlign = 'center';
  banner.style.zIndex = '10000';
  
  document.body.appendChild(banner);
}

// Disable editing when quota is reached
function disableEditing(): void {
  if (editor) {
    editor.destroy();
    editor = null;
  }
}
