import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="shadow-lg">
      <Container fluid>
        <Row className="text-center">
          <Col md={4} xs={12}>
          <h6 className={classes.Brand}>Food Fusion</h6>
          </Col>
          <Col className={classes.linkContiner} md={4} xs={6}>
            <a className={classes.linkDesign} href="/">Home</a>
            <a className={classes.linkDesign} href="/contact">Contact</a>
            <a className={classes.linkDesign} href="/about">About</a>
          </Col>
          <Col md={4} xs={6} className={classes.iconDesginContainer}>
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
        <hr />
        <Row>
          <Col className={classes.allRightsDesign}>
          <p className={classes['text-Font']}>© {new Date().getFullYear()} All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
