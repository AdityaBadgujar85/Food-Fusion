import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increment, decrement, remove } from "../Redux/CartAction";
import classes from "./CartPage.module.css";
import PaymentForm from "./PaymentForm";

function CartPage(props) {
  const cart = props.cart
  const increment = props.increment
  const decrement = props.decrement
  const remove = props.remove
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce((total, item) => total + item.FoodPrice * item.qty, 0);

  return (
    <Container fluid className={classes.mainContainer}>
      <h1 className={classes.textDecorationH1}>Your Cart</h1>

      {cart.length === 0 ? (
        <h4 className={classes.textDecorationH4}>Your cart is empty</h4>
      ) : (
        <Row>
          <Col md={8}>
            {cart.map((item) => (
              <Card key={item.id} className="mb-3 shadow-sm border-0 p-3">
                <Row className="align-items-center">
                  <Col md={3}>
                    <img src={item.FoodImg} alt={item.FoodName} className={classes.CartImg}/>
                  </Col>
                  <Col md={5}>
                    <h5>{item.FoodName}</h5>
                    <p className="text-muted">Price: ₹{item.FoodPrice}</p>
                    <strong>Subtotal: ₹{item.FoodPrice * item.qty}</strong>
                  </Col>
                  <Col md={4} className="text-center">
                    <Button variant="dark" size="sm" onClick={() => increment(item.id)}>+</Button>
                    <span className={classes.CounterNumber}>{item.qty}</span>
                    <Button variant="outline-dark" size="sm" onClick={() => decrement(item.id)}>-</Button>
                  </Col>
                </Row>
                <Row>
                  
                </Row>
              </Card>
            ))}
          </Col>
          <Col md={4}>
            <Card className="shadow-sm border-0 p-3">
              <h5 className="mb-3">Order Summary</h5>
              <hr />
              <div className="d-flex justify-content-between">
                <span>Total Items:</span>
                <strong>{totalItems}</strong>
              </div>
              <div className="d-flex justify-content-between">
                <span>Total Price:</span>
                <strong>₹{totalPrice}</strong>
              </div>
              <hr />
              <Button variant="success" className="w-100" onClick={remove}>Clear Cart</Button>
            </Card>
            <Card className="shadow-sm border-0 p-3 mt-2">
              <PaymentForm/>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default connect(mapStateToProps, { increment, decrement, remove })(CartPage);
