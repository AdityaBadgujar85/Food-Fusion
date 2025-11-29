import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Col, Row, Card, Button } from 'react-bootstrap';
import classes from './MenuData.module.css';
import { FaCartShopping, FaInfo } from 'react-icons/fa6';
import { AddToCart } from '../Redux/CartAction';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const baseURL = 'https://68a48c83c123272fb9b31f39.mockapi.io/Menu';

function MenuData(props) {
  const navigate=useNavigate()
  const [myData, setData] = useState([]);
  const [filter,setFilter] = useState('veg')
  useEffect(() => {
    Axios.get(baseURL).then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <Container fluid className={classes.mainContainer}>
    <form style={{display:'flex', justifyContent:'left' , gap:'2rem', marginBottom:'1rem'}} className={classes.CategoryButton}>
      <Button variant={filter==='veg' ? 'success' : 'outline-success'} onClick={()=> setFilter('veg')} className={classes.buttonDesign}>Veg</Button>
      <Button variant={filter==='non veg' ? 'danger' : 'outline-danger'} onClick={()=> setFilter('non veg')} className={classes.buttonDesign}>Non-Veg</Button>
      <Button variant={filter==='desert' ? 'primary' : 'outline-primary'} onClick={()=> setFilter('desert')} className={classes.buttonDesign}>Desert</Button>
    </form>
     <Row>
        {myData.filter((item)=>item.type===filter).map((item) => (
          <Col key={item.id} md={4} xl={3} xs={12}>
            <Card className={classes.foodCard}>
              <img className={classes.FoodImg} src={item.image} alt={item.name} />
              <div className={classes.textDesign}>
              <div style={{textAlign:'left'}}>
              <Card.Title className={classes['Font-Design']} style={{margin:'0'}}>
                {item.name}
              </Card.Title>
              <Card.Text className={classes['Font-Design']} style={{margin:'0'}}>
                ₹{item.price}/- 
              </Card.Text>
              </div>
              <div style={{textAlign:'left'}}>
              <Card.Text className={classes['Font-Design']} style={{margin:'0'}}>
                Rating: {item.rating}/5
              </Card.Text>
              <Card.Text className={classes['Font-Design']} style={{margin:'0'}}>
                Preperation: {item.prepTime}min
              </Card.Text>
              </div>
              </div>
              <Container className='p-0'>
                <Row>
                  <Col md={6} xs={12}>
                    <Button onClick={() => navigate(`/info/${item.id}`)} variant="success" className={classes.infoButton}><FaInfo size={14} /></Button>
                  </Col>
                  <Col md={12} xs={12}>
                    <Button variant="outline-dark" className={classes.cartButton} onClick={()=>props.AddToCart(item)}>Add To Cart</Button>
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
        ))}
      </Row>
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
    