import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import CallUs from '../Img/Call_Us.jpg'
import Email from '../Img/email.png'
import VisitUs from '../Img/VisitUs.png'
function Contact() {

  return (
    <Container fluid style={{ marginTop: "6rem" , marginBottom:'5rem' }}>
      <Row className="justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h2 style={{ color: "#5a3c20", marginBottom: "20px" }}>Contact Us</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            We’d love to hear from you! Whether you have questions, feedback, or
            just want to say hello, reach out to us.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Card  className="text-center">
            <Card.Img
              variant="top"
              src={CallUs}
              style={{ borderRadius: "12px", height: "25rem"}}
            />
            <Card.Body>
              <Card.Title style={{ color: "#5a3c20" }}>Call Us</Card.Title>
              <Card.Text>+91 98765 43210</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card  className="text-center">
            <Card.Img
              variant="top"
              src= {Email}
              style={{ borderRadius: "12px", height: "25rem" }}
            />
            <Card.Body>
              <Card.Title style={{ color: "#5a3c20" }}>Email Us</Card.Title>
              <Card.Text>support@foodfusion.com</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card  className="text-center">
            <Card.Img
              variant="top"
              src={VisitUs}
              style={{ borderRadius: "12px", height: "25rem"}}
            />
            <Card.Body>
              <Card.Title style={{ color: "#5a3c20" }}>Visit Us</Card.Title>
              <Card.Text>123 Food Street, Mumbai, India</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
