import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleLoginBtn = (e) => {
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        
    }

    return (
        <Container className='mx-auto login-box mb-4'>
            <Form onSubmit={handleLoginBtn}>
                <h4 className='fw-semibold mb-3 text-center'>Please Login</h4>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" name='email' />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" name='password' />
                </FloatingLabel>

                <Button className='mb-2 w-100' variant="warning" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="d-flex justify-content-center fw-semibold text-dark">
                    Don't have an account? <Link className='ps-2 text-warning' to='/register'>Create an account</Link><br />
                </Form.Text>
                <Form.Text className="text-muted text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-muted text-danger">
                    {error}
                </Form.Text>
            </Form>
            {/* social login added here */}
            <hr />
            <h5 className='text-muted mb-3 text-center'>----------OR----------</h5>
            <SocialLogin/>
        </Container>
    );
};

export default Login;