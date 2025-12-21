import React from 'react';

//  Import the components we need from react-bootstrap library
// We are importing: Navbar, Container, Nav, Card, Button
import { Navbar, Container, Nav, Card, Button } from 'react-bootstrap';

// Import Bootstrap CSS file to make everything look nice
import 'bootstrap/dist/css/bootstrap.min.css';

// Create our App component (this is a function component)
function App() {
  // Return JSX - this is what will be displayed on the screen
  return (
    // React Fragment - this is like an invisible wrapper, it doesn't add extra HTML tags
    <>
      {/* Main div with className "App" */}
      <div className="App">
        
        {/* ========== NAVBAR SECTION ========== */}
        {/* This creates a navigation bar at the top of the page */}
        <Navbar bg="dark" variant="dark" expand="lg">
          {/* Container keeps content centered and organized */}
          <Container>
            {/* Brand/Logo - this appears on the left side of navbar */}
            <Navbar.Brand href="#home">My First React App</Navbar.Brand>
            
            {/* Toggle button for mobile view (hamburger menu) */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
            {/* Navbar links - these collapse on mobile */}
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {/* Navigation links */}
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* ========== MAIN CONTENT SECTION ========== */}
        {/* Container with margin on top and bottom (my-5) */}
        <Container className="my-5">
          
          {/* ========== HEADING ========== */}
          {/* Main title - centered text with margin at bottom */}
          <h1 className="text-center mb-4">Welcome to My First React App</h1>

          {/* ========== CARDS SECTION ========== */}
          {/* Row creates a horizontal layout for our cards */}
          <div className="row">
            
            {/* CARD 1 */}
            {/* col-md-4 means: take 4 columns out of 12 on medium screens (makes 3 equal cards) */}
            {/* mb-3 adds margin at the bottom */}
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Body>
                  {/* Card title */}
                  <Card.Title>Card Number 1</Card.Title>
                  {/* Card description text */}
                  <Card.Text>
                    This is my first card. I am learning React and React Bootstrap!
                  </Card.Text>
                  {/* Button with blue color (primary) */}
                  <Button variant="primary">Click Me</Button>
                </Card.Body>
              </Card>
            </div>

            {/* CARD 2 */}
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card Number 2</Card.Title>
                  <Card.Text>
                    This is my second card. Cards are very useful for organizing content.
                  </Card.Text>
                  {/* Button with green color (success) */}
                  <Button variant="success">Click Me</Button>
                </Card.Body>
              </Card>
            </div>

            {/* CARD 3 */}
            <div className="col-md-4 mb-3">
              <Card>
                <Card.Body>
                  <Card.Title>Card Number 3</Card.Title>
                  <Card.Text>
                    This is my third card. I can add as many cards as I want!
                  </Card.Text>
                  {/* Button with light blue color (info) */}
                  <Button variant="info">Click Me</Button>
                </Card.Body>
              </Card>
            </div>
            
          </div> {/* End of row */}
        </Container> {/* End of Container */}
      </div> {/* End of App div */}
    </> // End of React Fragment
  );
}

// Export the App component so we can use it in other files (like index.js)
export default App;