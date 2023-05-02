import React, { useState } from 'react';
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link } from 'react-router-dom';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const handleRegisterBtn = () => {

    }
    return (
        <Container className='mx-auto login-box mb-4'>
            <Form onSubmit={handleRegisterBtn}>
                <h4 className='fw-semibold mb-3 text-center'>Please Register</h4>
                <FloatingLabel
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="enter your name" name='name' />
                </FloatingLabel>

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

                <FloatingLabel
                    controlId="floatingInput"
                    label="Photo URL"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Enter Photo URL" name='photoUrl' />
                </FloatingLabel>

                <Button className='mb-2 w-100' variant="warning" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="d-flex justify-content-center fw-semibold text-dark">
                    Alreday have an account? <Link className='ps-2 text-warning' to='/login'>Please Login</Link><br />
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

export default Register;