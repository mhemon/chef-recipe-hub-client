import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'
import logoWhite from '../../../../public/logo_white.png'

const Footer = () => {
    return (
        <footer className="bg-dark text-light">
            <Container>
                <Row className='py-3 mb-2'>
                    <Col md={6}>
                        <img className='img-fluid footer-img-size' src={logoWhite} alt="" />
                        <h4>Chef's Recipe Hub</h4>
                        <p>Cook up something new with our expert recipes.</p>
                    </Col>
                    <Col md={3}>
                        <h4>Social Links</h4>
                        <ul className="list-unstyled">
                            <li><Link className='text-white'>Facebook</Link></li>
                            <li><Link className='text-white'>Instagram</Link></li>
                            <li><Link className='text-white'>Twitter</Link></li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h4>Subscribe</h4>
                        <p>Register and get notified about all the news & updates before it gets too late.</p>
                        <div className='d-flex align-items-center gap-2'>
                            <input type="email" name="email" id="email" placeholder='your email address'/>
                            <button id='signup' className='btn btn-warning'>Signup</button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <hr />
                        <p className="text-center">&copy; {new Date().getFullYear()} Chef's Recipe Hub</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;