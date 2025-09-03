// Token management for ContentTools editing
import { enableEditMode, validateEditToken } from './registerEditable';

/**
 * Enable edit mode with a token
 * This function is re-exported from registerEditable for convenience
 */
export { enableEditMode, validateEditToken };

/**
 * Get token from URL query string
 */
export function getTokenFromUrl(): string | null {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('token');
}

/**
 * Check if edit mode is enabled
 */
export function isEditModeEnabled(): boolean {
  return Boolean(window.__EDIT_TOKEN);
}

/**
 * Clear edit token
 */
export function clearEditToken(): void {
  window.__EDIT_TOKEN = undefined;
}

/**
 * Initialize edit mode from URL token
 * Call this at application startup
 */
export function initFromUrlToken(): boolean {
  const token = getTokenFromUrl();
  if (token) {
    // Import is already at the top of the file
    return enableEditMode(token);
  }
  return false;
}
