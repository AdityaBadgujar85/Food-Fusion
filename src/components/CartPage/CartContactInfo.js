import React, { useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import classes from './CartContactInfo.module.css';

function CartContactInfo() {
    const [email,setemail]=useState('')
    const [contact, setContact] = useState('')
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [add1, setAdd1] = useState('');
    const [add2, setAdd2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postal, setPostal] = useState('');
    const [country, setCountry] = useState('');
  
    const phoneCondition=/^[0-9]{10}$/;
    const emailCondition=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, contact, first, last, add1, add2, city, state, postal, country);
    if (!email) {
      alert('Please enter your email');
      return;
    }
    if (!emailCondition.test(email)) {
      alert('Please enter valid email');
      return;
    }
    if (!contact) {
      alert('Please enter your phone number');
      return;
    }
    if (!phoneCondition.test(contact)) {
      alert('Phone number must be 10 digits');
      return;
    }
    if (!first || !last || !add1 || !city || !state || !postal || !country) {
      alert('Please fill all the details');
      return;
    }
    alert('Submitted Successfully');
  };
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <form action="" className={classes.formContainer}>
            <h3>Contact Information</h3>
            <label>Email address</label>
            <input type="email" placeholder="Type your email address" className="form-control" value={email} onChange={(e)=>setemail(e.target.value)}/>
            <label>Phone</label>
            <input type='tel' placeholder="Type your phone number" className="form-control" value={contact} onChange={(e)=>setContact(e.target.value)}/>
          </form>
        </Col>
      </Row>
      <Row>
        <Col md={12} >
          <form action="" className={classes.formControlAddress}>
            <h3>Shipping Address</h3>
            <Row className={classes.nameContainer}>
              <Col md={6}>
                <label>First name</label>
                <input type="text" placeholder="Type your first name" className="form-control" onChange={(e) => setFirst(e.target.value)}/>
              </Col>
              <Col md={6}>
                <label>Last name</label>
                <input type="text" placeholder="Type your last name" className="form-control"  onChange={(e) => setLast(e.target.value)}/>
              </Col>
            </Row>
            <Row className={classes.addressContainer}>
              <Col xs={12}>
                <label>Address</label>
                <input type="text" placeholder="Address line 1" className="form-control" onChange={(e) => setAdd1(e.target.value)}/>
              </Col>
              <Col xs={12}>
                <label>Address Line 2</label>
                <input type="text" placeholder="Apartment, suite, etc. (optional)" className="form-control" onChange={(e) => setAdd2(e.target.value)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label>City</label>
                <input type="text" placeholder="City" className="form-control" onChange={(e) => setCity(e.target.value)}/>
              </Col>
              <Col xs={12} md={6}>
                <label>State</label>
                <input type="text" placeholder="State" className="form-control" onChange={(e) => setState(e.target.value)}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <label>Postal code</label>
                <input type="number" placeholder="Postal code" className="form-control" onChange={(e) => setPostal(e.target.value)}/>
              </Col>
              <Col xs={12} md={6}>
                <label>Country</label>
                <input type="text" placeholder="Country" className="form-control" onChange={(e) => setCountry(e.target.value)}/>
              </Col>
              <Col>
              <Button type="submit" variant='success' onClick={handleSubmit} style={{width:'100%', marginTop:'1rem'}}>Submit</Button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default CartContactInfo;
