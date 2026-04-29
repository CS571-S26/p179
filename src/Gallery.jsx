import { Link } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";
import FlowerCard from "./FlowerCard";
import { all } from "./data/slides";

// Gallery Page
export default function Gallery() {
  const wedding = all.filter(f => f.event.toLowerCase() === "wedding").slice(0, 3);;
  const birthday = all.filter(f => f.event.toLowerCase() === "birthday").slice(0, 3);;
  const summer = all.filter(f => f.season.toLowerCase() === "summer").slice(0, 3);;

  return (
    <Container fluid className="px-4 py-4">
      <div
        className="position-relative d-flex align-items-center mb-4"
        style={{ minHeight: "50px" }}
      >
        <h1 className="fw-bold text-uppercase text-center w-100 m-0">
          GALLERY HIGHLIGHTS
        </h1>

        <Button
          as={Link}
          to="/gallery/all"
          variant="success"
          className="rounded-0 position-absolute end-0"
        >
          See All
        </Button>
      </div>

      <WeddingSection data={wedding} />
      <BirthdaySection data={birthday} />
      <SummerSection data={summer} />
    </Container>
  );
}

function WeddingSection({ data }) {
  return (
    <div className="mb-5">
      <h2 className="fw-bold">Wedding Arrangements</h2>
      <p className="text-secondary">
        Over 10 years of experience designing elegant wedding florals...
      </p>

      <Row className="g-4">
        {data.map((item, i) => (
          <Col md={4} key={i} className="d-flex">
            <FlowerCard
              title={item.title}
              description={item.alt}
              image={item.url}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function BirthdaySection({ data }) {
  return (
    <div className="mb-5">
      <h2 className="fw-bold">Birthday Arrangements</h2>
      <p className="text-secondary">
        We’ve created custom birthday floral arrangements for celebrations of all sizes,
        from intimate gatherings to large milestone events across Wisconsin.
      </p>

      <Row className="g-4">
        {data.map((item, i) => (
          <Col md={4} key={i} className="d-flex">
            <FlowerCard
              title={item.title}
              description={item.alt}
              image={item.url}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

function SummerSection({ data }) {
  return (
    <div className="mb-5">
      <h2 className="fw-bold">Summer Arrangements</h2>
      <p className="text-secondary">
        Bright seasonal blooms sourced from local growers...
      </p>

      <Row className="g-4">
        {data.map((item, i) => (
          <Col md={4} key={i} className="d-flex">
            <FlowerCard
              title={item.title}
              description={item.alt}
              image={item.url}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}