import { useEffect, useState } from "react";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
import classes from './InfoPage.module.css'

function InfoPage() {
  const { id } = useParams();
  const [food, setFood] = useState({
    tags:[]
  });
  const [suggested, setSuggested] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
  Axios.get("https://68a48c83c123272fb9b31f39.mockapi.io/Menu")
    .then((response) => {
      const data = response.data;

      const current = data.find((item) => item.id == id);
      setFood(current);

      const otherItems = data.filter((item) => item.id != id);
      setSuggested(otherItems.slice(0, 4));
    });
}, [id]);
let chips = [];
    if (food.ingredients) {
      chips = food.ingredients.split(",");
    }
    
  return (
    <>
    <Container className={classes.mainContainer}>
      <Row style={{textAlign:'left'}}>
        <Col>
          <Button variant="success" onClick={() => navigate(-1)} className={classes.GoHomeButton}>Go Home</Button>
        </Col>
      </Row>
      <Row className={classes.rowDesign}>
        <Col style={{ textAlign: 'left' }}>
          <img src={food.image} alt="" className={classes.infoImage} />
        </Col>
        <Col className={classes.descriptionContainer}>
          <h1 className={classes.heading1}>{food.name}</h1>
          <p className={classes.paragraph}>₹{food.price}</p>
          <strong className={classes.strongDesn}>Description</strong>
          <p className={classes.paragraph}>{food.description}</p>
          <hr/>
          <strong className={classes.strongDesn}>Ingredient</strong>
          <div className={classes.chipContainer}>
            {chips.map((item, i) => (
              <span key={i} className={classes.chip}>{item.trim()}</span>
            ))}
          </div>
          <hr/>
          <div className={classes.smallContainer}>
          <div>
          <strong className={classes.strongDesn}>Rating</strong>
          <p>{food.rating}/5</p>
          </div>
          <div>
          <strong className={classes.strongDesn}>Spice Level</strong>
          <p>{food.spiceLevel}</p>
          </div>
          <div>
          <strong className={classes.strongDesn}>Preparation Time</strong>
          <p>{food.prepTime}min</p>
          </div>
          </div>
          <hr/>
          <strong className={classes.strongDesn}>Tags</strong>
          <div className={classes.chipContainer}>
            {food.tags.map((item, i) => (
              <span key={i} className={classes.chip}>{item}</span>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
    <Container>
      <Row>
        <h2 className={classes.heading2}>You may also like</h2>
        {suggested.map((item) => (
           <Col key={item.id} onClick={() => navigate(`/info/${item.id}`)} md={3} xs={12}>
            <Card className={classes.cardContainer}>
              <Card.Img variant="top" src={item.image} className={classes.suggestedImg} />
              <Card.Body className={classes.cardContainerBody}>
                <Card.Title style={{margin:'0'}}>{item.name}</Card.Title>
                <Card.Text style={{margin:'0'}}>₹{item.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          ))}
      </Row>
    </Container>
    </>
  );
}

export default InfoPage;
