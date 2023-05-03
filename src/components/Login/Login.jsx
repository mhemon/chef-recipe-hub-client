import React, { useContext, useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { AuthContext } from '../../provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const location = useLocation()
    const { loginUser } = useContext(AuthContext)

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)

    const from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()

    const handleLoginBtn = (e) => {
        setShow(true)
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        loginUser(email, password)
            .then(() => {
                setShow(false)
                navigate(from)
            })
            .catch(error => {
                setShow(false)
                setError("Error: " + error.code)
            })
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
                    <Form.Control type="email" placeholder="name@example.com" name='email' required />
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" name='password' required />
                </FloatingLabel>

                <Button className='mb-2 w-100' variant="warning" type="submit" disabled={show}>
                    {!show ? 'Login' : <>
                        <Spinner
                            as="span"
                            animation="grow"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                        />
                        Loading...
                    </>
                    }
                </Button>
                <br />
                <Form.Text className="d-flex justify-content-center fw-semibold text-dark">
                    Don't have an account? <Link className='ps-2 text-warning' to='/register'>Create an account</Link><br />
                </Form.Text>
                <Form.Text className="text-muted text-success">
                    {success}
                </Form.Text>
                {error && <Form.Text className="text-danger">
                    <h4>{error}</h4>
                </Form.Text>}
            </Form>
            {/* social login added here */}
            <hr />
            <h5 className='text-muted mb-3 text-center'>----------OR----------</h5>
            <SocialLogin />
        </Container>
    );
};

export default Login;