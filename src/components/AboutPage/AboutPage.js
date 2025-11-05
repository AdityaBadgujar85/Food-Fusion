import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import classes from "./AboutPage.module.css";
import Restrarent_Food_fusion from '../Images/Restrarent_Food_Fusion.jpg'
import Kitchen from '../Images/Restrarent_kitchen.jpg'
function AboutPage() {
  return (
    <div className={classes.mainContaier}>
      <Container fluid className={classes.Container}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <h5 className={classes.aboutTitle}>ABOUT US</h5>
              <h1 className={classes.title}>Food Fusion</h1>
              <p className={classes.text}>
                Food Fusion is where great taste meets simplicity.  
                We bring together authentic flavors and modern presentation —  
                whether you dine in or order online.
              </p>
            </Col>
            <Col lg={6}>
                <img className={classes.restrarent_img} src={Restrarent_Food_fusion} alt="Food Fusion"/>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container className="py-5">
        <Row className="gy-4">
          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title className={classes.CardTitle}>Our Mission</Card.Title>
                <Card.Text className={classes.text}>
                  To deliver fresh, flavorful, and perfectly crafted dishes — every time.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title className={classes.CardTitle}>Our Vision</Card.Title>
                <Card.Text className={classes.text}>
                  To be a trusted name for fusion cuisine — combining global inspiration with local taste.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card className="h-100 border-0 shadow-sm">
              <Card.Body>
                <Card.Title className={classes.CardTitle}>Our Values</Card.Title>
                <ul className={classes.text}>
                  <li>Quality ingredients</li>
                  <li>Respect for flavor</li>
                  <li>Honest service</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="pb-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <img className={classes.restrarent_img} src={Kitchen} alt="Food Fusion"/>
            </Col>
            <Col lg={6}>
              <h2 className={classes.Storytitle}>Our Story</h2>
              <p className={classes.text}>
                Food Fusion began with a love for blending cuisines.  
                What started as a small kitchen has now grown into a place  
                where people come to enjoy fresh, creative, and comforting meals.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default AboutPage