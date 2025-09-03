import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initFromUrlToken } from './editing/token';

// Initialize edit mode from URL token
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    initFromUrlToken();
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
