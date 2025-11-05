import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="shadow-lg">
      <Container>
        <Row className="text-center">
          <Col>
          <h6 className={classes['text-Font']}>© {new Date().getFullYear()}</h6>
          <p className={classes['text-Font']}>All rights reserved.</p>
          </Col>
          <Col>
          <h6 className={classes.Brand}>Food Fusion</h6>
          </Col>
          <Col>
          <a href="https://facebook.com" className="text-dark mx-2">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="text-dark mx-2">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="text-dark mx-2">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" className="text-dark mx-2">
              <FaLinkedin size={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
