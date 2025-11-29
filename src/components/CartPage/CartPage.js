import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increment, decrement, remove } from "../Redux/CartAction";
import classes from "./CartPage.module.css";
import PaymentForm from "./PaymentForm";
import CartContactInfo from "./CartContactInfo";
import { FaPlus, FaMinus} from "react-icons/fa";
function CartPage(props) {
  const cart = props.cart
  const increment = props.increment
  const decrement = props.decrement
  const remove = props.remove
  const totalItems = cart.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cart.reduce((total, item) => total + item.FoodPrice * item.qty, 0);

  return (
    <Container className={classes.mainContainer}>
      <h1 className={classes.textDecorationH1}>Your Cart</h1>

      {cart.length === 0 ? (
        <h4 className={classes.textDecorationH4}>Your cart is empty</h4>
      ) : (
        <Row>
          <Col>
            <CartContactInfo/>
          </Col>
          <Col md={4} sm={12}>
            <Card className="shadow border-0 p-3">
              <Col md={12} sm={12}>
            {cart.map((item) => (
              <Card key={item.id} className="shadow-sm mt-1" >
               <Row className={classes.rowContainer}>
                  <Col xs={3} sm={3} md={3}>
                    <img src={item.FoodImg}alt={item.FoodName}className={classes.CartImg}/>
                  </Col>
                  <Col xs={4} sm={4} md={5} style={{textAlign:'left'}}>
                    <h5 className={classes.heading5}>{item.FoodName}</h5>
                    <p className={classes.pricepara}>Price: ₹{item.FoodPrice}</p>
                    
                  </Col>
                  <Col xs={5} sm={4} md={4} className={classes.counterCol}>
                  <div>
                    <Button variant="outline-dark" className={classes.DecrementTextButton} onClick={() => decrement(item.id)}><FaMinus size={8}/></Button>
                    <span className={classes.CounterNumber}>{item.qty}</span>
                    <Button variant="dark" className={classes.incrementTextButton} onClick={() => increment(item.id)}><FaPlus size={8}/></Button>
                    </div>
                    <div>
                      <strong className={classes.pricepara}>Subtotal: ₹{item.FoodPrice * item.qty}</strong>
                    </div>
                  </Col>
                  
                </Row>
              </Card>
            ))}
          </Col>
              <h5 className="mb-3 mt-4">Order Summary</h5>
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
            <Card className="shadow border-0 p-3 mt-2">
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
