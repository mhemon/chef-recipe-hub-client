import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { AuthContext } from '../../../provider/AuthProvider';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { toast } from 'react-toastify';
import logo from '../../../../public/logo.png'
import LazyLoad from 'react-lazy-load';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogoutBtn = () => {
        logout()
            .then(() => toast.success('Logout Success'))
            .catch(error => toast.error(error.code))
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user?.displayName}
        </Tooltip>
    );

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='d-flex align-items-center gap-2 text-decoration-none' as={Link} to="/">
                    <img className='img-fluid img-size' src={logo} alt="" />
                    <span className='text-black fw-semibold'>Chef's Recipe Hub</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto d-flex align-items-center gap-4'>
                        <Nav.Link as={NavLink} to="/" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black me-4"}>
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/blog" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black me-4"}>
                            Blog
                        </Nav.Link>
                        
                            {user ? <Nav.Link>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <img className='img-fluid navbar-pic rounded-pill' src={user.photoURL} alt="" />

                                </OverlayTrigger>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black"}>
                                    <button onClick={handleLogoutBtn} className='btn btn-danger ms-3'>Logout</button>
                                </NavLink>
                            </Nav.Link>
                                : <NavLink to="/login" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black"}>
                                    Login
                                </NavLink>}
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;