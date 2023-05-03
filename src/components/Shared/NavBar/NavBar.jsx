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
                <Link className='text-decoration-none' to="/">
                    <Navbar.Brand className='d-flex align-items-center gap-2'>
                        <img className='img-fluid img-size' src={logo} alt="" />
                        <span className='text-black fw-semibold'>Chef's Recipe Hub</span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto d-flex align-items-center'>
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
                            {user ? <div>
                                <OverlayTrigger
                                    placement="bottom"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={renderTooltip}
                                >
                                    <img className='img-fluid navbar-pic rounded-pill' src={user?.photoURL} alt="" />
                                </OverlayTrigger>
                                <NavLink className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black"}>
                                    <button onClick={handleLogoutBtn} className='btn btn-danger ms-3'>Logout</button>
                                </NavLink>
                            </div>
                                : <NavLink to="/login" className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : "text-decoration-none text-black"}>
                                    Login
                                </NavLink>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;