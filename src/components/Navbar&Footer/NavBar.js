import React from 'react'
import { Col, Container, Row, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
  const changeCss = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
  });

  return (
    <Container fluid>
      <Row>
        <Col>
          <Navbar className={classes.navbar} expand="lg" fixed="top">
            <Container>
              <Navbar.Brand>
                <h1 className={classes.brand}>Food-Fusion</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <NavLink to="/" className={classes.navLink} style={changeCss}>
                    Home
                  </NavLink>
                  <NavLink to="/About" className={classes.navLink} style={changeCss}>
                    About
                  </NavLink>
                  <NavLink to="/Contact" className={classes.navLink} style={changeCss}>
                    Contact
                  </NavLink>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
