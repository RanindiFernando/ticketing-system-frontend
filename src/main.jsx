// Import StrictMode from React to highlight potential problems in the application
import { StrictMode } from 'react';

// Import createRoot from React DOM to render the root React component
import { createRoot } from 'react-dom/client';

// Import the main App component
import App from './App.jsx';

// Render the App component inside the root element in the HTML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* StrictMode helps identify potential issues in the application */}
    <App />
  </StrictMode>
);

