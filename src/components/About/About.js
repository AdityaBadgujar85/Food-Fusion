import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import FreshIngredient from '../Img/Fresh_Ingredient.webp'
import GlobalFlavours from '../Img/Global_Flavours.webp'
import CozyDinning from '../Img/Cozy_Dinning.jpg'
import Fast_Delivery from '../Img/Fast_Delivery.png'
function About() {
  const cardStyle = {
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 6px 16px rgba(0,0,0,0.2)"
  };

  const [hovered, setHovered] = React.useState(null);

  return (
    <Container fluid style={{ marginTop: "6rem" , marginBottom:'5rem' }}>
      <Row className="justify-content-center mb-5">
        <Col md={8} className="text-center">
          <h2 style={{ color: "#5a3c20", marginBottom: "20px" }}>About Food-Fusion</h2>
          <p style={{ fontSize: "18px", lineHeight: "1.6" }}>
            At <strong>Food-Fusion</strong>, we believe food is more than just a meal – it’s
            an experience. We bring together taste, creativity, and culture to serve
            dishes that make your moments special.
          </p>
        </Col>
      </Row>
      <Row className="g-4">
        {[
          {
            title: "Fresh Ingredients",
            text: "We source only the freshest ingredients to ensure top quality.",
            img: FreshIngredient
          },
          {
            title: "Global Flavors",
            text: "From Indian spices to Italian herbs, explore dishes from around the world.",
            img: GlobalFlavours
          },
          {
            title: "Cozy Dining",
            text: "Enjoy a warm and welcoming atmosphere for you and your loved ones.",
            img: CozyDinning
          },
          {
            title: "Fast Delivery",
            text: "Get your favorite meals delivered hot and fresh to your doorstep.",
            img: Fast_Delivery
          }
        ].map((item, index) => (
          <Col md={6} lg={3} key={index}>
            <Card
              style={hovered === index ? { ...cardStyle, ...hoverStyle } : cardStyle}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Card.Img variant="top" src={item.img} style={{ height: "20rem", objectFit: "cover" }} />
              <Card.Body>
                <Card.Title style={{ color: "#5a3c20" }}>{item.title}</Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>{item.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default About;
