import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/home">Travel Agency</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className="navLink" to="/home">Home</Link>
                            <Link className="navLink" to="/allorders">All Orders</Link>
                            <Link className="navLink" to="/myorders">My Orders</Link>
                            <Link className="navLink" to="/addplaces">Add Places</Link>
                        </Nav>
                        <Nav>
                            <Link className="navLink" to="/login">Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;