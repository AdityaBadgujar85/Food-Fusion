import React from "react";
import { Container, Row, Col,Card } from "react-bootstrap";
import classes from "./ContactPage.module.css";

function ContactPage() {
  return (
    <div>
      <Row>
        <img src={require('../Images/Rest_Contact.png')} alt="" className={classes.ImgStyle} />
      </Row>
    <Container fluid className={classes.mainContainer}>
      <Row>
        <Col xs={12}>
          <h2 className={classes['text-Formating-Contact']}>Contact Us</h2>
          <p>
            We'd love to hear from you! Reach out to us for orders, catering, or feedback.
          </p>
        </Col>
        <Col xs={12} md={4}>
        <Card className="p-5 shadow-sm">
          <h5 className={classes['text-Formating-Contact']}>Visit Us</h5>
          <p>123 Food Street, Mumbai</p>
        </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="p-5 shadow-sm">
          <h5 className={classes['text-Formating-Contact']}>Call Us</h5>
          <p>+91 12345-67890</p>
          </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className="p-5 shadow-sm">
          <h5 className={classes['text-Formating-Contact']}>Email Us</h5>
          <p>hello@foodwebsite.com</p>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <h6 className={classes['text-Formating-Contact']}>Business Hours</h6>
          <p>Mon — Sun: 10:00 AM — 10:00 PM</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
export default ContactPage