import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Container, Card, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartActions";
import cartImg from "../Img/shopping-cart.png";
import infoIcon from "../Img/infoIcon.png";
import classes from "./menuData.module.css";

function MenuData() {
  const [foods, setFoods] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://68a48c83c123272fb9b31f39.mockapi.io/Menu")
      .then((res) => {
        const allFoods = Array.isArray(res.data) ? res.data : Object.values(res.data).flat();
        setFoods(allFoods);
      })
      .catch((err) => console.error("Error fetching foods:", err));
  }, []);

  const handleInfoClick = (food) => {
    setSelectedFood(food);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container fluid>
      <Row className="mt-4">
        {foods.map((food) => (
          <Col key={food.id} sm={6} md={4} lg={3} className="mb-4 px-2">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={food.image}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{food.name}</Card.Title>
                <Card.Text>Price: ₹{food.price}</Card.Text>
                <Row>
                  <Col>
                    <Button
                      className={classes.ButtonSize}
                      onClick={() => handleInfoClick(food)}
                    >
                      <img src={infoIcon} alt="info" className={classes.cartIcon} />
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      onClick={() => dispatch(addToCart(food))}
                      className={classes.ButtonSize}
                    >
                      +<img src={cartImg} alt="cart" className={classes.cartIcon} />
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal show={show} onHide={handleClose} centered>
        {selectedFood && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedFood.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={selectedFood.image}
                alt={selectedFood.name}
                style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
              />
              <p><strong>Price:</strong> ₹{selectedFood.price}</p>
              <p><strong>Description:</strong> {selectedFood.description || "No description available."}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button onClick={() => dispatch(addToCart(selectedFood))}>
                Add to Cart
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default MenuData;
