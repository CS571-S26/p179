import { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  }

  return (
    <Container className="mt-4 text-center">
      <h1>Contact Us</h1>

      {!showForm && (
        <Button
          variant="success"
          onClick={() => setShowForm(true)}
          className="mt-3"
        >
          Book a Consultation 🌷
        </Button>
      )}

      {showForm && (
        <Card className="p-4 mt-4 shadow-sm text-start" style={{ maxWidth: "600px", margin: "0 auto" }}>
          {submitted ? (
            <div className="text-center">
              <h5>Thank you!</h5>
              <p>We’ll get back to you shortly.</p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Preferred Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button type="submit" variant="success">
                Submit Request
              </Button>
            </Form>
          )}
        </Card>
      )}
    </Container>
  );
}