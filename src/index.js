// Import React library
import React from 'react';

// Import ReactDOM to render our app in the browser
import ReactDOM from 'react-dom/client';

// Import our main App component
import App from './App';

// Import reportWebVitals (for measuring performance - optional)
import reportWebVitals from './reportWebVitals';

// Get the root element from HTML file (usually in public/index.html)
// This is where our React app will be displayed
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render our App component inside the root element
// React.StrictMode helps us find potential problems in our code
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This helps measure performance (optional - you can ignore this for now)
reportWebVitals();