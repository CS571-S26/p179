import { useState } from "react";
import { Container, Form, Button, Card, Row, Col, Stack } from "react-bootstrap";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    date: ""
  });

  const today = new Date().toISOString().split("T")[0];
  const contactEmail = "hello@yourdomain.com";

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
  }

  const resetForm = () => {
    setSubmitted(false);
    setShowForm(false);
    setFormData({ name: "", email: "", message: "", date: "" });
  };

  return (
    <Container className="py-5 text-start">
      <header className="mb-5">
        <h1 className="fw-bold text-uppercase text-center">Contact Us</h1>
        <div style={{ height: "3px", width: "50px", background: "#198754", margin: "0 auto" }}></div>
      </header>

      <Row className="g-5 justify-content-center">
        <Col lg={5}>
          <div className="pe-lg-5 pt-5">
            <section className="mb-4 border-start ps-4">
              <h6 className="text-success fw-bold text-uppercase small mb-3">Office Location</h6>
              <p className="text-dark">
                123 Botanical Way<br />
                Madison, WI 53703
              </p>
            </section>

            <section className="mb-4 border-start ps-4">
              <h6 className="text-success fw-bold text-uppercase small mb-3">Direct Contact</h6>
              <p className="text-dark mb-1"><strong>Phone:</strong> (608) 555-0123</p>
              <p className="text-dark mb-3"><strong>Email:</strong> {contactEmail}</p>
            </section>

            <section className="mb-4 border-start ps-4">
              <h6 className="text-success fw-bold text-uppercase small mb-3">Working Hours</h6>
              <div className="text-muted small" style={{ maxWidth: "300px" }}>
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
          {!showForm ? (
            <div className="bg-light p-5 rounded border shadow-sm text-center justify-content-center">
              <Stack gap={5}>
                <div>
                  <h4 className="mb-4 fw-bold">Ready to work together?</h4>
                  <p className="text-muted small mb-3">Schedule a specific time to meet with our team.</p>
                  <Button 
                    variant="success" 
                    size="md" 
                    onClick={() => setShowForm(true)}
                    className="px-5 rounded-0 shadow-sm fw-bold"
                  >
                    BOOK A CONSULTATION
                  </Button>
                </div>

                <div className="pt-4 border-top">
                  <p className="text-muted small fw-bold text-uppercase mb-2">Just have a question?</p>
                  <Button 
                    variant="outline-secondary" 
                    size="md" 
                    onClick={() => setShowForm(true)}
                    className="px-5 rounded-0 shadow-sm fw-bold"
                  >
                    LEAVE A MESSAGE
                  </Button>
                </div>
              </Stack>
            </div>
          ) : (
            <Card className="border-0 shadow-sm p-4 rounded-0 bg-white">
              {submitted ? (
                <div className="py-4">
                  <h4 className="fw-bold mb-3 text-success text-uppercase">Thank You</h4>
                  <p>Your request has been received. We will be in touch shortly.</p>
                  <div className="d-flex gap-3 mt-4">
                    <Button variant="dark" size="sm" href={`mailto:${contactEmail}`} className="rounded-0 px-4">
                      EMAIL DIRECTLY
                    </Button>
                    <Button variant="link" className="text-muted small p-0" onClick={resetForm}>
                      Back to Contact Page
                    </Button>
                  </div>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label className="small fw-bold">NAME</Form.Label>
                        <Form.Control type="text" name="name" className="rounded-0" onChange={handleChange} required />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-bold">EMAIL</Form.Label>
                    <Form.Control type="email" name="email" className="rounded-0" onChange={handleChange} required />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="small fw-bold">MESSAGE</Form.Label>
                    <Form.Control as="textarea" rows={4} className="rounded-0" name="message" placeholder="How can we help you?" onChange={handleChange} required />
                  </Form.Group>

                  <div className="d-flex gap-2">
                    <Button type="submit" variant="success" className="rounded-0 py-2 fw-bold px-5 shadow-sm">
                      SUBMIT
                    </Button>
                    <Button variant="outline-secondary" className="rounded-0 px-4" onClick={() => setShowForm(false)}>
                      CANCEL
                    </Button>
                  </div>
                </Form>
              )}
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}