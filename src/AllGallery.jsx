import { useState } from "react";
import { Container, Card, Button, ButtonGroup } from "react-bootstrap";
import FlowerCard from "./FlowerCard";

export default function AllGallery() {
  const [filter, setFilter] = useState("all");

  const flowers = [
    { title: "Spring", type: "spring", description: "blah blah blah" },
    { title: "Summer", type: "summer", description: "blah blah blah" },
    { title: "Fall", type: "fall", description: "blah blah blah" },
    { title: "Winter", type: "winter", description: "blah blah blah" }
  ];

  const filtered =
    filter === "all"
      ? flowers
      : flowers.filter((f) => f.type === filter);

  return (
    <Container className="mt-4">
      <h1>All Arrangements</h1>

      <ButtonGroup className="mb-3">
        <Button variant="outline-dark" onClick={() => setFilter("all")}>
          All
        </Button>
        <Button variant="outline-success" onClick={() => setFilter("spring")}>
          Spring
        </Button>
        <Button variant="outline-success" onClick={() => setFilter("summer")}>
          Summer
        </Button>
        <Button variant="outline-success" onClick={() => setFilter("fall")}>
          Fall
        </Button>
      </ButtonGroup>

      {filtered.map((f, i) => (
        <FlowerCard key={i} title={f.title} description={f.description} />
      ))}
    </Container>
  );
}