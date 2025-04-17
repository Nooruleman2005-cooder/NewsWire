import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styling/style.css';
import Searchbar from './Searchbar'
const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-info head">
                <Container>
                    <Navbar.Brand href="#home"> <img
                        src="/logo.png"
                        alt="LSMA Logo"
                        height="70"
                        className="d-inline-block align-top"
                    /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/home" className="custom-nav-link">Home</Nav.Link>
                            <Nav.Link as={Link} to="/aboutUs" className="custom-nav-link">About Us</Nav.Link>
                            <Nav.Link as={Link} to="/news" className="custom-nav-link">News</Nav.Link>
                            <Searchbar />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header