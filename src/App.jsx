import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Card, Button, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import FlowerCard from "./FlowerCard";
import AllGallery from "./AllGallery";

// Navbar Component
function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Bloom & Petal</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

// Home Page
function Home() {
  return (
    <Container className="mt-4 text-center">
      <h1>Bloom & Petal Florist</h1>
      <p>Handcrafted floral arrangements for every occasion</p>
      <Button variant="success">Shop Arrangements</Button>
    </Container>
  );
}

// Contact Page
function Contact() {
  return (
    <Container className="mt-4">
      <h1>Contact Us</h1>
      <ul>
        <li>Email: TODO</li>
        <li>Phone: TODO</li>
        <li>Insta: TODO</li>
      </ul>
    </Container>
  );
}

// Gallery Page
function Gallery() {
  return (
    <Container className="mt-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Our Arrangements</h1>
        <Button as={Link} to="/gallery/all" variant="success">
          See All
        </Button>
      </div>

      <FlowerCard title="Wedding" description="blah blah blah" />
      <FlowerCard title="Prom" description="blah blah blah" />
      <FlowerCard title="Other events" description="blah blah blah" />
    </Container>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="text-center mt-5 p-3 bg-light">
      <p>© 2026 Bloom & Petal Florist</p>
    </div>
  );
}

// App Component
export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/all" element={<AllGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}
