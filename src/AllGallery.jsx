import { useState } from "react";
import { Container, Button, Form, Row, Col, Card } from "react-bootstrap";
import { all } from "./data/slides";
import FlowerCard from "./FlowerCard";

export default function AllGallery() {
  const [seasonFilter, setSeasonFilter] = useState("all");
  const [eventFilter, setEventFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = all.filter((f) => {
    const matchesSeason =
      seasonFilter === "all" ||
      f.season.toLowerCase() === seasonFilter.toLowerCase();
  
    const matchesEvent =
      eventFilter === "all" ||
      f.event.toLowerCase() === eventFilter.toLowerCase();
  
    const searchLower = searchTerm.toLowerCase();
  
    const matchesSearch =
      f.title.toLowerCase().includes(searchLower) ||
      f.alt.toLowerCase().includes(searchLower);
  
    return matchesSeason && matchesEvent && matchesSearch;
  });

  return (
    <Container className="py-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold text-uppercase">Our Arrangements</h1>
        <div style={{ height: "3px", width: "50px", background: "#198754", margin: "0 auto" }}></div>
      </div>

      <Card className="p-2 mb-5 border-0 shadow-sm bg-light rounded-0">
        <div className="d-flex align-items-center justify-content-between px-2 gap-3">
          
          {/* Search*/}
          <div style={{ flex: "1", minWidth: "150px" }}>
            <Form.Control
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-0 border-0 shadow-none bg-white"
            />
          </div>

          {/* Season Group */}
          <div className="d-flex gap-1 border-start border-end px-3">
            {["all", "spring", "summer", "fall", "winter"].map((s) => (
              <Button 
                key={s}
                variant={seasonFilter === s ? "success" : "outline-success"} 
                onClick={() => setSeasonFilter(s)}
                className="rounded-0 text-capitalize py-1 px-2 border-0"
                style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
              >
                {s}
              </Button>
            ))}
          </div>

          {/* Event Group */}
          <div className="d-flex gap-1">
            {["all", "wedding", "prom", "birthday"].map((e) => (
              <Button 
                key={e}
                variant={eventFilter === e ? "dark" : "outline-dark"} 
                onClick={() => setEventFilter(e)}
                className="rounded-0 text-capitalize py-1 px-2 border-0"
                style={{ fontSize: '0.85rem', whiteSpace: 'nowrap' }}
              >
                {e}
              </Button>
            ))}
          </div>

        </div>
      </Card>

      {filtered.length === 0 ? (
        <div className="text-center text-muted mt-5">
          No arrangements match your filters.
        </div>
      ) : (
        <Row className="g-4">
          {filtered.map((f, i) => (
            <Col key={i} md={6} lg={4} className="d-flex">
              <FlowerCard
                title={f.title}
                description={f.alt}
                image={f.url}
                season={f.season}
                event={f.event}
                color={f.color}
              />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}