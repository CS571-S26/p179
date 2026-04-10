import { Card, Button } from "react-bootstrap";

export default function FlowerCard({ title, description }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="outline-success">View Details</Button>
      </Card.Body>
    </Card>
  );
}