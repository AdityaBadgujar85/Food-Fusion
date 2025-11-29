import React from 'react';
import { Col, Container, Row, Navbar, Nav, Button } from 'react-bootstrap';
import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
function NavBar() {
    const navLinkActive = ({isActive}) =>{
        return{
             fontWeight:isActive?'bold':'normal',  
        }
    }
    return ( 
            <Navbar className='shadow m-0' fixed='top' bg='white' expand='md'>
                <Container>
                <Navbar.Brand>
                    <h1 className={classes.Font}>Food Fusion</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='main-nav'/>
                <Navbar.Collapse id="main-nav">
                <Nav className='ms-auto'>
                    <NavLink className={classes['Navbar-Links']} style={navLinkActive} to={'/'}>Home</NavLink>
                    <NavLink className={classes['Navbar-Links']} style={navLinkActive} to={'/about'}>About</NavLink>
                    <NavLink className={classes['Navbar-Links']} style={navLinkActive} to={'/contact'}>Contact</NavLink>   
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
     );
}

export default NavBar;  