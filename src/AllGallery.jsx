import { useState } from "react";
import { Container, Button, ButtonGroup, Form, Row, Col, InputGroup, Card } from "react-bootstrap";
import FlowerCard from "./FlowerCard";

export default function AllGallery() {
  const [seasonFilter, setSeasonFilter] = useState("all");
  const [eventFilter, setEventFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const flowers = [
    { title: "Spring Wedding", season: "spring", event: "wedding", description: "Soft pink peonies, white lace ribbons, and garden roses." },
    { title: "Pastel Prom", season: "spring", event: "prom", description: "Sweetheart roses and baby's breath wristlet." },
    { title: "Tulip Terrace", season: "spring", event: "event", description: "A vibrant mix of Dutch tulips in a glass vase." },
    { title: "Orchid Elegance", season: "spring", event: "prom", description: "Dainty white orchids with a silver shimmer band." },
    { title: "Summer Sun", season: "summer", event: "event", description: "Bright sunflowers, yellow daisies, and solidago." },
    { title: "Citrus Punch", season: "summer", event: "event", description: "Bold orange lilies and lime green hydrangeas." },
    { title: "Coastal Breeze", season: "summer", event: "wedding", description: "Light blue delphiniums and sandy-colored roses." },
    { title: "Tropical Night", season: "summer", event: "prom", description: "Exotic hibiscus and lush palm greenery." },
    { title: "Autumn Gala", season: "fall", event: "event", description: "Rustic textures, deep red dahlias, and dried wheat." },
    { title: "Harvest Moonlight", season: "fall", event: "wedding", description: "Burgundy calla lilies and copper-toned eucalyptus." },
    { title: "Golden Glow", season: "fall", event: "event", description: "Goldenrod, marigolds, and miniature pumpkins." },
    { title: "Amber Prom", season: "fall", event: "prom", description: "Small burnt-orange roses with bronze accents." },
    { title: "Winter Vows", season: "winter", event: "wedding", description: "Crisp white roses, pine cones, and velvet ribbon." },
    { title: "Midnight Sparkle", season: "winter", event: "prom", description: "Blue thistles and silver-sprayed ruscus." },
    { title: "Evergreen Gala", season: "winter", event: "event", description: "Holiday berries, cedar branches, and red amaryllis." },
    { title: "Frosted Forest", season: "winter", event: "event", description: "Dusty miller, white carnations, and silver bells." }
  ];

  const filtered = flowers.filter((f) => {
    const matchesSeason = seasonFilter === "all" || f.season === seasonFilter;
    const matchesEvent = eventFilter === "all" || f.event === eventFilter;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      f.title.toLowerCase().includes(searchLower) || 
      f.description.toLowerCase().includes(searchLower);
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
            {["all", "wedding", "prom", "event"].map((e) => (
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

      <Row className="g-4">
        {filtered.map((f, i) => (
          <Col key={i} md={6} lg={4}>
            <FlowerCard title={f.title} description={f.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}