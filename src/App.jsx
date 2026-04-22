import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button, Carousel, Row, Col } from "react-bootstrap";
import { useState } from "react";
import FlowerCard from "./FlowerCard";
import AllGallery from "./AllGallery";
import ContactForm from "./ContactForm";

// Navbar Component
function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/">Bloom & Petal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/gallery/all">Gallery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Home Page
function Home() {
  const navigate = useNavigate();

  const slides = [
    {
      url: "/images/download-5.jpg", 
      title: "Fresh Spring Collections",
    },
    {
      url: "/images/download-3.jpg", 
      title: "Elegant Wedding Bouquets",
    },
    {
      url: "/images/download-4.jpg",
      title: "Custom Event Styling",
    }
  ];

  return (
    <Container className="mt-4 text-center">
      <Row className="justify-content-center mb-3">
        <Col lg={12}>
          <Carousel fade indicators={false} className="shadow rounded overflow-hidden">
            {slides.map((slide, index) => (
              <Carousel.Item key={index} style={{ height: "400px" }}>
                <img
                  className="d-block w-100 h-100"
                  src={slide.url}
                  alt={slide.title}
                  style={{ objectFit: "cover" }}
                />
                <Carousel.Caption className="bg-dark bg-opacity-25 rounded pb-3">
                  <h5 className="text-uppercase fw-bold">{slide.title}</h5>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>

      <section className="mx-auto py-4" style={{ maxWidth: "800px" }}>
        <h1 className="fw-bold text-uppercase mb-3" style={{ fontSize: "2.5rem" }}>
          Bloom & Petal Florist
        </h1>
        <div style={{ height: "3px", width: "50px", background: "#198754", margin: "0 auto 20px" }}></div>
        
        <p className="text-muted mb-4 fs-5" style={{ lineHeight: "1.8" }}>
          Located in the heart of Madison, we specialize in handcrafted floral arrangements 
          that bring beauty and life to every occasion.
        </p>

        <div className="d-flex justify-content-center gap-3">
          <Button 
            variant="success" 
            size="lg" 
            className="rounded-0 px-5 fw-bold"
            onClick={() => navigate("/gallery")}
          >
            SHOP ARRANGEMENTS
          </Button>
        </div>
      </section>
    </Container>
  );
}

// Gallery Page
function Gallery() {
  return (
    <Container className="mt-4">
    <div className="position-relative d-flex align-items-center mb-4" style={{ minHeight: '50px' }}>
        <h1 className="fw-bold text-uppercase text-center w-100 m-0">Our Arrangements</h1>
        <Button 
          as={Link} 
          to="/gallery/all" 
          variant="success" 
          className="rounded-0 position-absolute end-0"
        >
          See All
        </Button>
      </div>
      <Row className="g-4">
        <Col md={4}><FlowerCard title="Higlights" description="blah blah blah" /></Col>
        <Col md={4}><FlowerCard title="Wedding" description="blah blah blah" /></Col>
        <Col md={4}><FlowerCard title="Prom" description="blah blah blah" /></Col>
      </Row>
    </Container>
  );
}

function Footer() {
  return (
    <div className="text-center mt-5 p-3 bg-light border-top">
      <p className="mb-0">© 2026 Bloom & Petal Florist</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/all" element={<AllGallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}