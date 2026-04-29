import { Card } from "react-bootstrap";

export default function FlowerCard({ title, description, image }) {
  return (
    <Card className="h-100 w-100 d-flex flex-column shadow-sm rounded-0">
      <div style={{ height: "220px", overflow: "hidden" }}>
        <Card.Img
          src={image}
          alt={description}
          style={{ height: "220px", width: "100%", objectFit: "cover" }}
        />
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="text-muted">
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}