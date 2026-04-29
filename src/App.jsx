import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Button, Carousel, Row, Col } from "react-bootstrap";
import AllGallery from "./AllGallery";
import Gallery from "./Gallery";
import Contact from "./Contact";
import { highlights } from "./data/slides";

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

  return (
    <>
      <Carousel>
        {highlights.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={item.url}
              alt={item.alt}
              style={{ height: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <Container fluid className="text-center py-5">
        <section className="mx-auto py-4" style={{ maxWidth: "800px" }}>
          <h1 className="fw-bold text-uppercase mb-3" style={{ fontSize: "2.5rem" }}>
            Bloom & Petal Florist
          </h1>
          <div style={{ height: "3px", width: "50px", background: "#198754", margin: "0 auto 20px" }}></div>
          
          <p className="text-secondary mb-4 fs-5" style={{ lineHeight: "1.8" }}>
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
              VIEW ARRANGEMENTS
            </Button>
          </div>
        </section>
      </Container>
    </>
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/all" element={<AllGallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}