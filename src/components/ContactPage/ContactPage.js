import React, { useState } from "react";
import { Container, Row, Col,Card, Button } from "react-bootstrap";
import classes from "./ContactPage.module.css";

function ContactPage() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phone,setPhone] = useState('')
  const handleSubmitName=(e)=>{
    e.preventDefault()
    setName(e.target.value)
  }
  const handleSubmitEmail=(e)=>{
    e.preventDefault()
    setEmail(e.target.value)
  }
  const handleSubmitPhone=(e)=>{
    e.preventDefault()
    setPhone(e.target.value)
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name)
    console.log(email)
    console.log(phone)
    alert("Appoiments Is Booked Successfully")
    setName('')
    setEmail('')
    setPhone('')
  }

  return (
    <Container fluid>
      <Row>
        <img src={require('../Images/Rest_Contact.png')} alt="" className={classes.ImgStyle} />
      </Row>
    <Container className={classes.mainContainer}>
      <Row>
        <Col xs={12}>
          <h2 className={classes['text-Formating-Contact']}>Contact Us</h2>
          <p>
            We'd love to hear from you! Reach out to us for orders, catering, or feedback.
          </p>
        </Col>
        <Col xs={12} md={4}>
        <Card className="p-5 shadow-sm">
          <h5 className={classes['text-Formating-Contact']}>Visit Us</h5>
          <p>123 Food Street, Mumbai</p>
        </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="p-5 shadow-sm">
          <h5 className={classes['text-Formating-Contact']}>Call Us</h5>
          <p>+91 12345-67890</p>
          </Card>
        </Col>

        <Col xs={12} md={4}>
        <Card className="p-5 shadow-sm">
          <h5 className={classes['text-Formating-Contact']}>Email Us</h5>
          <p>hello@foodwebsite.com</p>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs={12}>
          <h6 className={classes['text-Formating-Contact']}>Business Hours</h6>
          <p>Mon — Sun: 10:00 AM — 10:00 PM</p>
        </Col>
      </Row>
    </Container>
    <Container className={classes.formContainer}>
      <form className="">
        <label htmlFor="" className="">Name:</label>
        <input type="text" className="form-control" placeholder="Enter Your Name" value={name} onChange={handleSubmitName}/>
        <br />
        <label htmlFor="">Email:</label>
        <input type="email" name="" id="" className="form-control" placeholder="Enter Email" value={email} onChange={handleSubmitEmail}/>
        <br />
        <label htmlFor="">Phone:</label>
        <input type="number" name="" id="" className="form-control" placeholder="Enter Phone Number" value={phone} onChange={handleSubmitPhone}/>
        <br />
        <Button onClick={handleSubmit}>Book Appoinment</Button>
      </form>
    </Container>
    </Container>
  );
}
export default ContactPage