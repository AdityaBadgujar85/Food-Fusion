import React, {Suspense,lazy} from 'react';
import { Col, Row, Container, Card, Button ,Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HomePage.module.css';
import HomePageImage from '../Img/restraurant_HomePage_IMG.webp';
import CartIcon from '../UI/CartIcon';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router";
import { useState } from 'react';
import CartPage from '../Redux/CartPage';
const Menu= lazy(()=>import('../menuData/MenuData'))
function HomePage() {  
  let navigate = useNavigate();
  const { totalQty } = useSelector((state) => state.cart);
  const [showCart, setShowCart] = useState(false);
  return (
    <Container fluid className="mt-5" style={{marginBottom:'5rem'}}>
  <Row className={classes.image}>
    <Col className="p-0">
      <img src={HomePageImage} alt="Restaurant Home" />
    </Col>
  </Row>
  <Row className="px-3 mt-4">
    <Col md={10}>
    <h2 className={classes.heading}>Menu</h2>
    </Col>
    <Col md={2}>
    <Button className={classes['btn-design']} onClick={()=> navigate('/cart')}><CartIcon/> Cart {totalQty > 0 && <Badge bg='#d4b483' style={{marginLeft:'1rem',background:'#d4b483', color:'black'}}>{totalQty}</Badge>}</Button>
    </Col>
  </Row>
  <Suspense fallback={<div className={classes.Loading}><div></div><div></div><div></div><div></div></div>}>
  <Row>
      <Menu/>
    </Row>
  </Suspense>
</Container>
  );
}

export default HomePage;
