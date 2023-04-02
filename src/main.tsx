// Dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// App
import App from '@/App';

// Styles
import 'reset-css';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
