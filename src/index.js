import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
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

// This helps measure performance 
reportWebVitals();