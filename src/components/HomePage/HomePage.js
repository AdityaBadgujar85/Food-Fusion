import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Restaurant from '../Images/Restrarent.jpeg';
import classes from './HomePage.module.css';
import { FaCartShopping } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import MenuData from './MenuData';
function HomePage(props) {
  const cart = props.cart
  const navigate = useNavigate()
  const totalItem = cart.reduce((total,item)=> total+item.qty,0)
  return (
    <>
      <Container fluid md={6}>
                <Row>
                    <Col>
                        <Carousel fade variant='light' style={{marginTop:'6rem'}} className='shadow' >
                            <Carousel.Item interval={1000}>
                            <img src={require("../Images/food-dishes-1.jpg")} className={classes.CarouselDesn} style={{objectPosition:'bottom'}}/>
                            <Carousel.Caption className={classes.LeftcaptionDesign}>
                                <div className={classes.containerEdit}>
                                <h2 className={classes.heading2}>Chili Garlic Veg Noodles</h2>
                                <p className={classes.paradesign}>A hearty bowl of springy noodles tossed with colorful garden-fresh vegetables, infused with a bold chili-garlic sauce, and finished with fragrant cilantro. Bright, spicy, and full of flavor—pure comfort in every bite.</p>
                                <Button variant='success' className={classes.buttonDesign}>Explore Veg</Button>
                                </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>
                            <img src={require("../Images/food-dishes-2.jpg")} className={classes.CarouselDesn} style={{objectPosition:'bottom'}} />  
                            <Carousel.Caption className={classes.RightcaptionDesign}>
                                 <div className={classes.containerEdit}>
                                <h2 className={classes.heading2}>Herb-Roasted Chicken Drumsticks</h2>
                                <p className={classes.paradesign}>Tender, juicy chicken drumsticks slow-roasted to golden perfection, lightly seasoned with aromatic herbs and warm spices. Crispy on the outside, succulent on the inside—simple, flavorful, and irresistibly satisfying.</p>
                                <Button variant='success' className={classes.buttonDesign}>Explore Non-Veg</Button>
                            </div>
                            </Carousel.Caption>                        
                            </Carousel.Item>
                             <Carousel.Item interval={1000}>                           
                            <img src={require("../Images/food-dishes-3.jpg")}  className={classes.CarouselDesn} style={{objectPosition:''}}/>      
                            <Carousel.Caption className={classes.RightcaptionDesignIce}>
                              <div className={classes.containerEditIce}>
                                <h2 className={classes.heading2}>Vanilla Almond Ice Cream </h2>
                                <p className={classes.paradesign}>Vanilla ice cream served in a waffle cone, topped with chocolate syrup and surrounded by almonds</p>
                                <Button variant='success' className={classes.buttonDesign}>Explore Desert's</Button>
                            </div>
                            </Carousel.Caption>                     
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>

      <Container fluid className="mt-2">
        <Row className="align-items-center" style={{flexWrap:'nowrap'}}>
          <Col md={10} xs={9} className={classes.colDesign}>
            <h3 className={classes['Font-Design']}>Menu</h3>
          </Col>
          <Col md={2} xs={3} className="text-end">
            <Button style={{width:'fit-content', display:'flex', float:'right'}} variant="dark" onClick={()=>navigate('/cart')}>
              <FaCartShopping size={23}  /><span className={classes.badgeDesign}>{totalItem}</span>
            </Button>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <MenuData />
      </Container>
        <Container fluid style={{marginBottom:'2rem'}}>
                <Row>
                    <Col>
                        <Carousel fade variant='light' className='shadow' >
                            <Carousel.Item interval={1000}>
                            <img src={require("../Images/cheif_img.jpg")} className={classes.lastImg} style={{marginTop:'0rem'}}/>
                            <Carousel.Caption className={classes.LeftcaptionDesign}>
                                <div className={classes.containerEdit}>
                                <h1 className={classes.lastImgHeading1}>Get Upto 30%</h1>
                                <p className={classes.lastImgPara}>On Your First Order on FoodFusion</p>
                                <Button variant='success' onClick={()=>navigate('./contact')} className={classes.lastImgButton}>Book Appoinments</Button>
                                </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                            <img src={require("../Images/last_img.jpg")} className={classes.lastImg} style={{marginTop:'0rem'}}/>
                            <Carousel.Caption className={classes.LeftcaptionDesign}>
                                <div className={classes.containerEdit}>
                                <h1 className={classes.lastImgHeading1}>Savor the Spice of 'Shakshuka'</h1>
                                <p className={classes.lastImgPara}>Now at Flat 20% OFF!</p>
                                <Button variant='success' className={classes.lastImgButton}>Explore</Button>
                                </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={1000}>
                            <img src={require("../Images/last_img2.jpg")} className={classes.lastImg} style={{marginTop:'0rem'}}/>
                            <Carousel.Caption className={classes.LeftcaptionDesign}>
                                <div className={classes.containerEdit}>
                                <h1 className={classes.lastImgHeading1}>Pasta Shells with Vegetables</h1>
                                <p className={classes.lastImgPara}>Pasta Lovers Rejoice! Flat 20% OFF on Veg Shell Pasta!</p>
                                <Button variant='success' className={classes.lastImgButton}>Explore</Button>
                                </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
    </>
  );
}

const mapDispatchToProps = (state) =>({
    cart: state.cart
})

export default connect(mapDispatchToProps) (HomePage);
