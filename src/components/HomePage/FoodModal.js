import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import classes from "./FoodModal.module.css";

function FoodModal(props) {
  const show = props.show;
  const onClose = props.onClose;
  const food = props.food;

  if (!show || !food) return null;

  return (
    <div className={classes.mainContainer}>
      <Container className={classes.modalBox}>
        <Row>
          <Col>
            <img src={food.image} alt={food.name} className={classes.foodImage}/>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <h4 className={classes.textFormating}>{food.name}</h4>
            <h5 className={classes.textFormating}>{food.description}</h5>
            <h6 className={classes.textFormating}>₹{food.price}/-</h6>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <Button variant="danger" onClick={onClose}> Close </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FoodModal;
