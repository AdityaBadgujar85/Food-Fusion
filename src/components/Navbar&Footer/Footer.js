import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './Footer.module.css';

function Footer() {
    const year = new Date().getFullYear();
  return (
    <Container fluid className={classes.mainContainer}>
      <Row>
        <Col className="text-center">
          <h4 className={classes.heading}>© {year}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
