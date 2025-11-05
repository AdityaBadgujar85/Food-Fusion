import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import classes from './MenuData.module.css';
import { FaCartShopping, FaInfo } from 'react-icons/fa6';
import FoodModal from './FoodModal';
import { AddToCart } from '../Redux/CartAction';
import { connect } from 'react-redux';
const baseURL = 'https://68a48c83c123272fb9b31f39.mockapi.io/Menu';

function MenuData(props) {
  const [myData, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedFood, setSelectedFood] = useState(null);

  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);

  const handleOpen = (item) => {
    setSelectedFood(item);
    setShowModal(true);
  };

  return (
    <Container fluid>
      <Row>
        {myData.map((item) => (
          <Col key={item.id} md={3} xs={6}>
            <Card className="mb-3 shadow">
              <img className={classes.FoodImg} src={item.image} alt={item.name} />
              <Card.Title style={{ marginTop: '1rem' }} className={classes['Font-Design']}>
                {item.name}
              </Card.Title>
              <Card.Text className={classes['Font-Design']}>
                ₹{item.price}/-
              </Card.Text>
              <Container fluid>
                <Row style={{ marginBottom: '1rem' }}>
                  <Col md={6} xs={6}>
                    <Button onClick={() => handleOpen(item)} variant="danger" style={{ width: '100%' }}><FaInfo /></Button>
                  </Col>
                  <Col md={6} xs={6}>
                    <Button variant="dark" style={{ width: '100%' }} onClick={()=>props.AddToCart(item)}>+<FaCartShopping /></Button>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        ))}
      </Row>
      <FoodModal show={showModal} onClose={() => setShowModal(false)} food={selectedFood}/>
    </Container>
  );    
}
const mapStateToProps = (state) => {
  return {
    Cart: state.Cart
  }
}
const mapDispatchToProps =(dispatch) =>{
  return{
    AddToCart:(item)=>dispatch(AddToCart({ id:item.id, FoodImg:item.image, FoodName:item.name,FoodPrice:item.price})) 
  } 
}
export default connect(mapStateToProps,mapDispatchToProps) ( MenuData );
    