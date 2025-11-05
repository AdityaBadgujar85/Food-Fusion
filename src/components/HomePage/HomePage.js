import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Restaurant from '../Images/Restrarent.jpeg';
import classes from './HomePage.module.css';
import MenuData from './MenuData';
import { FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

function HomePage(props) {
  const cart = props.cart
  const navigate = useNavigate()
  const totalItem = cart.reduce((total,item)=> total+item.qty,0)
  return (
    <>
      <Container fluid className="p-0" style={{ marginTop: '3rem' }}>
        <img src={Restaurant} className={classes.DisplayImg} alt="Restaurant" />
      </Container>

      <Container className="my-4">
        <Row className="align-items-center">
          <Col md={11}>
            <h3 className={classes['Font-Design']}>Menu</h3>
          </Col>
          <Col md={1}  className="text-end">
            <Button style={{width:'100%'}} variant="dark" onClick={()=>navigate('/cart')}>
              <FaCartShopping size={23}  /><span className={classes.badgeDesign}>{totalItem}</span>
            </Button>
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <MenuData />
      </Container>
    </>
  );
}

const mapDispatchToProps = (state) =>({
    cart: state.cart
})

export default connect(mapDispatchToProps) (HomePage);
