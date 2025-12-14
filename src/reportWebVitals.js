

// ========================================
// reportWebVitals.js
// ========================================
// This file is used to measure the performance of your React app
// As a beginner, you don't need to worry about this file for now
// It's automatically created by create-react-app

// This function measures how fast your website loads and runs
// onPerfEntry is a callback function (a function that gets called later)
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry exists and is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Import web-vitals library (this measures performance metrics)
    // CLS = Cumulative Layout Shift (how much the page jumps around)
    // FID = First Input Delay (how fast the page responds to clicks)
    // FCP = First Contentful Paint (how fast something appears on screen)
    // LCP = Largest Contentful Paint (how fast the main content loads)
    // TTFB = Time to First Byte (how fast the server responds)
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);   // Measure layout shifts
      getFID(onPerfEntry);   // Measure input delay
      getFCP(onPerfEntry);   // Measure first paint
      getLCP(onPerfEntry);   // Measure largest paint
      getTTFB(onPerfEntry);  // Measure server response
    });
  }
};

// Export this function so other files can use it (like index.js)
export default reportWebVitals;

// ========================================
// BEGINNER NOTE:
// ========================================
// You can IGNORE this file for now!
// It just measures how fast your website is.
// Focus on learning React first, then come back to this later.
// This file won't affect your app's appearance or functionality.