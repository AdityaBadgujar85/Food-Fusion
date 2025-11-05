import React from 'react';
import { Col, Container, Row, Navbar, Nav, Button } from 'react-bootstrap';
import classes from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
function NavBar() {
    const navLinkActive = ({isActive}) =>{
        return{
             fontWeight:isActive?'bold':'normal',
             color:isActive?'black':'normal'    
        }
    }
    return ( 
            <Navbar className='shadow m-0' fixed='top' bg='white'>
                <Container>
                <Navbar.Brand>
                    <h1 className={classes.Font}>Food Fusion</h1>
                </Navbar.Brand>
                <Nav className='ms-auto'>
                    <NavLink className={classes['Navbar-Links']} style={navLinkActive} to={'/'}>Home</NavLink>
                    <NavLink className={classes['Navbar-Links']} style={navLinkActive} to={'/about'}>About</NavLink>
                    <NavLink className={classes['Navbar-Links']} style={navLinkActive} to={'/contact'}>Contact</NavLink>   
                </Nav>
                </Container>
            </Navbar>
     );
}

export default NavBar;  