import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Container, Button, Form, Card } from "react-bootstrap";
import { removeFromCart, changeQty, clearCart } from "../Redux/cartActions";

function CartPage() {
  const dispatch = useDispatch();
  const { items, totalQty, totalPrice } = useSelector((state) => state.cart);

  const [paymentMethod, setPaymentMethod] = useState("card");

  if (!items || items.length === 0) {
    return (
      <Container className="mt-5 pt-5 text-center">
        <h3>Your cart is empty</h3>
      </Container>
    );
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert(`Payment through ${paymentMethod} submitted!`);
  };

  return (
    <Container fluid style={{ marginTop: "6rem", marginBottom:'6rem' }}>
      <h2>Cart</h2>
      <Row className="mt-3">
        <Col md={8}>
          {items.map((it) => (
            <Row key={it.id} className="mb-3 align-items-center">
              <Col xs={3} md={4}>
                <img
                  src={it.image}
                  alt={it.name}
                  style={{ width: "70%", height: "20vh", borderRadius: 8 }}
                />
              </Col>
              <Col xs={9} md={4}>
                <h5>{it.name}</h5>
                <p>₹{it.price}</p>
              </Col>
              <Col xs={12} md={2}>
                <Form.Select
                  value={it.qty}
                  onChange={(e) =>
                    dispatch(changeQty(it.id, Number(e.target.value)))
                  }
                >
                  {[...Array(10).keys()].map((n) => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col xs={6} md={2}>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(it.id))}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          ))}
        </Col>
        <Col md={4}>
          <div style={{ border: "1px solid #ddd", padding: 16, borderRadius: 8 }}>
            <h5>Summary</h5>
            <p>Total items: {totalQty}</p>
            <p>Total price: ₹{totalPrice.toFixed(2)}</p>
            <Button
              className="w-100 mb-2"
              onClick={() => alert("Checkout flow not implemented")}
            >
              Checkout
            </Button>
            <Button
              variant="secondary"
              className="w-100 mb-3"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
            <Card>
              <Card.Body>
                <h6>Payment Method</h6>
                <Form onSubmit={handlePaymentSubmit}>
                  <Form.Check
                    type="radio"
                    label="Credit / Debit Card"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    label="Internet Banking"
                    name="paymentMethod"
                    value="netbanking"
                    checked={paymentMethod === "netbanking"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="mb-3"
                  />

                  {paymentMethod === "card" && (
                    <>
                      <Form.Group className="mb-2">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control type="text" placeholder="1234 5678 9012 3456" />
                      </Form.Group>
                      <Form.Group className="mb-2">
                        <Form.Label>Expiry</Form.Label>
                        <Form.Control type="text" placeholder="MM/YY" />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>CVV</Form.Label>
                        <Form.Control type="password" placeholder="***" />
                      </Form.Group>
                    </>
                  )}

                  {paymentMethod === "netbanking" && (
                    <Form.Group className="mb-3">
                      <Form.Label>Select Bank</Form.Label>
                      <Form.Select>
                        <option value="">Choose Bank</option>
                        <option>HDFC Bank</option>
                        <option>ICICI Bank</option>
                        <option>SBI</option>
                        <option>Axis Bank</option>
                      </Form.Select>
                    </Form.Group>
                  )}

                  <Button type="submit" className="w-100">
                    Pay Now
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CartPage;
