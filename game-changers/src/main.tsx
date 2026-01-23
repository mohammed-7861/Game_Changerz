import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'

// Global type declarations
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)