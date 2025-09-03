// Register editable elements in the DOM

import { initContentTools } from './contentToolsClient';

/**
 * Observer to watch for new editable content
 */
let observer: MutationObserver | null = null;

/**
 * Initialize the mutation observer to watch for new editable elements
 */
function setupMutationObserver() {
  if (observer) return;

  observer = new MutationObserver((mutations) => {
    // Check if any new nodes were added
    const newNodes = mutations
      .filter(mutation => mutation.type === 'childList')
      .flatMap(mutation => Array.from(mutation.addedNodes))
      .filter(node => node.nodeType === Node.ELEMENT_NODE) as Element[];

    if (newNodes.length > 0) {
      // Re-register editable elements if new nodes were added
      registerEditableElements();
    }
  });

  // Start observing the entire document
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

/**
 * Register all editable elements in the document
 */
export function registerEditableElements() {
  // This is only needed if we're dynamically adding data-editable attributes
  // If we're pre-marking elements in our components, ContentTools will find them automatically
  
  // For images that should be editable
  document.querySelectorAll('img:not([data-editable])').forEach(img => {
    const parent = img.parentElement;
    if (parent && !parent.hasAttribute('data-editable')) {
      const wrapper = document.createElement('figure');
      wrapper.className = parent.className;
      wrapper.setAttribute('data-editable', '');
      wrapper.setAttribute('data-name', `image-${Date.now()}`);
      
      parent.replaceChild(wrapper, img);
      wrapper.appendChild(img);
    }
  });

  // For videos that should be editable
  document.querySelectorAll('video:not([data-editable])').forEach(video => {
    const parent = video.parentElement;
    if (parent && !parent.hasAttribute('data-editable')) {
      parent.setAttribute('data-editable', '');
      parent.setAttribute('data-name', `video-${Date.now()}`);
    }
  });
}

/**
 * Enable edit mode by initializing ContentTools and registering elements
 */
export function enableEditMode(token: string) {
  if (validateEditToken(token)) {
    window.__EDIT_TOKEN = token;
    
    // Setup mutation observer
    setupMutationObserver();
    
    // Register any elements that might need it
    registerEditableElements();
    
    // Initialize ContentTools
    initContentTools();
    
    return true;
  }
  
  return false;
}

/**
 * Check if a token is valid
 * This is a stub - in production, you would validate against your backend
 */
export function validateEditToken(token: string): boolean {
  // For demo purposes, accept any non-empty token
  // In production, this would validate the token with your backend
  return Boolean(token && token.length > 0);
}
