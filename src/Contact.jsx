import { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Stack } from "react-bootstrap";

export default function Contact() {
  const [showForm, setShowForm] = useState("none");
  const contactEmail = "hello@yourdomain.com";

  return (
    <Container className="py-5 text-start">
      <header className="mb-5">
        <h1 className="fw-bold text-uppercase text-center">Contact Us</h1>
        <div style={{ height: "3px", width: "50px", background: "#198754", margin: "0 auto" }}></div>
      </header>

      <Row className="g- justify-content-center">
        <Col lg={5}>
          <div className="pe-lg-5 pt-5">
            <section className="mb-4 border-start ps-4">
              <h2 className="text-success fw-bold text-uppercase small mb-3">Office Location</h2>
              <p className="text-dark">
                123 Botanical Way<br />
                Madison, WI 53703
              </p>
            </section>

            <section className="mb-4 border-start ps-4">
              <h2 className="text-success fw-bold text-uppercase small mb-3">Direct Contact</h2>
              <p className="text-dark mb-1"><strong>Phone:</strong> (608) 555-0123</p>
              <p className="text-dark mb-3"><strong>Email:</strong> {contactEmail}</p>
            </section>

            <section className="mb-4 border-start ps-4">
              <h2 className="text-success fw-bold text-uppercase small mb-3">Working Hours</h2>
              <div className="text-secondary small" style={{ maxWidth: "300px" }}>
                <Row className="mb-1">
                  <Col xs={7}>Monday - Friday</Col>
                  <Col xs={5} className="text-end">9am - 6pm</Col>
                </Row>
                <Row className="mb-1">
                  <Col xs={7}>Saturday</Col>
                  <Col xs={5} className="text-end">10am - 2pm</Col>
                </Row>
                <Row>
                  <Col xs={7}>Sunday</Col>
                  <Col xs={5} className="text-end">Closed</Col>
                </Row>
              </div>
            </section>
          </div>
        </Col>

        <Col lg={5}>
          {showForm === "booking" ? (
            <BookingForm setShowForm={setShowForm} />
          ) : showForm === "message" ? (
            <MessageForm setShowForm={setShowForm} />
          ) : (
            <div className="bg-light p-5 rounded border shadow-sm text-center justify-content-center">
              <Stack gap={4}>
                
                <div>
                  <h2 className="mb-4 fw-bold fs-4">Ready to work together?</h2>
                  <p className="text-secondary small mb-3">
                    Schedule a specific time to meet with our team.
                  </p>

                  <Button
                    variant="success"
                    className="px-5 rounded-0 shadow-sm fw-bold"
                    onClick={() => setShowForm("booking")}
                  >
                    BOOK A CONSULTATION
                  </Button>
                </div>

                <div className="pt-4 border-top">
                  <p className="text-secondary small fw-bold text-uppercase mb-2">
                    Just have a question?
                  </p>

                  <Button
                    variant="outline-secondary"
                    className="px-5 rounded-0 shadow-sm fw-bold"
                    onClick={() => setShowForm("message")}
                  >
                    LEAVE A MESSAGE
                  </Button>
                </div>

              </Stack>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

function MessageForm({ setShowForm }) {
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact:", formData);
    setSubmitted(true);
  }

  return (
    <Card className="p-4 border-0 shadow-sm rounded-0">
      {submitted ? (
        <div className="text-center">
          <h1 className="text-success fw-bold fs-4">Message sent!</h1>
          <Button
              type="button"
              variant="outline-secondary"
              className="w-50 rounded-0"
              onClick={() => setShowForm("none")}
            >
              Return
            </Button>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="contact-email">Email</Form.Label>
            <Form.Control
              id="contact-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              as="textarea"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-flex gap-2 mt-3">
            <Button
              type="submit"
              variant="success"
              className="w-50 rounded-0"
            >
              Send Message
            </Button>

            <Button
              type="button"
              variant="outline-secondary"
              className="w-50 rounded-0"
              onClick={() => setShowForm("none")}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Card>
  );
}

function BookingForm({ setShowForm }) {
  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: today,
    time: "",
    details: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.date < today) {
      alert("Please choose today or a future date.");
      return;
    }

    console.log("Booking:", formData);
    setSubmitted(true);
  }

  return (
    <Card className="p-4 border-0 shadow-sm rounded-0">

      {submitted ? (
        <div className="text-center">
          <h1 className="text-success fw-bold fs-4">Booking Received</h1>
          <p>We will contact you soon to confirm your event.</p>

          <Button
              type="button"
              variant="outline-secondary"
              className="w-50 rounded-0"
              onClick={() => setShowForm("none")}
            >
              Return
            </Button>

        </div>
      ) : (
        <Form onSubmit={handleSubmit}>

          {/* Name */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.Control
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label htmlFor="booking-email">Email</Form.Label>
            <Form.Control
              id="booking-email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Row className="mb-3">
            {/* Date */}
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="date">Booking Date</Form.Label>
                <Form.Control
                  id="date"
                  type="date"
                  name="date"
                  min={today}
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            {/* Time */}
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="time">Booking Time</Form.Label>
                <Form.Control
                  id="time"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Details */}
          <Form.Group className="mb-4">
            <Form.Label htmlFor="details">Event Details</Form.Label>
            <Form.Control
              id="details"
              as="textarea"
              rows={4}
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="Tell us about your event..."
              required
            />
          </Form.Group>

          <div className="d-flex gap-2 mt-3">
            <Button
              type="submit"
              variant="success"
              className="w-50 rounded-0"
            >
              Book Event
            </Button>

            <Button
              type="button"
              variant="outline-secondary"
              className="w-50 rounded-0"
              onClick={() => setShowForm("none")}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Card>
  );
}
