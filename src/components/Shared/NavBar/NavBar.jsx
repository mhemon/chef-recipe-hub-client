import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Link className='text-decoration-none' to="/">
                    <Navbar.Brand className='d-flex align-items-center gap-2'>
                        <img className='img-fluid img-size' src="logo.png" alt="" />
                        <span className='text-black fw-semibold'>Chef's Recipe Hub</span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                            <Nav.Link className='me-4'>
                                <NavLink to="/" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black"}>
                                    Home
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link className='me-4'>
                                <NavLink to="/blog" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black"}>
                                    Blog
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/login" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black"}>
                                    Login
                                </NavLink>
                            </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;