import React, { useContext, useState } from 'react';
import { Button, Container, FloatingLabel, Form, Spinner } from 'react-bootstrap';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [show, setShow] = useState(false)

    const {createUser} = useContext(AuthContext)
    // handle register btn clicked
    const handleRegisterBtn = (e) => {
        setShow(true)
        e.preventDefault()
        setError('')
        setSuccess('')
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const photoUrl = form.photoUrl.value
        
        // check password length
        if(password.length < 6){
            setShow(false)
            setError("Error : password must be greater than 6")
            return
        }
        // firebase create user
        createUser(email, password)
        .then(result => {
            const currentUser = result.user
            // update profile of this user
            updateProfile(currentUser, {displayName: name, photoURL: photoUrl})
            .then(() => {
                setShow(false)
                navigate('/')
            })
            .catch(error => {
                setShow(false)
                setError(error.code)
            })
        })
        .catch(error => {
            setShow(false)
            setError("Error :-"+error.code)
        })
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
                    controlId="floatingInput2"
                    label="Email"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="name@example.com" name='email' required/>
                </FloatingLabel>

                <FloatingLabel controlId="floatingPassword" label="Password" className='mb-3'>
                    <Form.Control type="password" placeholder="Password" name='password' required/>
                </FloatingLabel>

                <FloatingLabel
                    controlId="floatingInput3"
                    label="Photo URL"
                    className="mb-3"
                >
                    <Form.Control type="text" placeholder="Enter Photo URL" name='photoUrl' />
                </FloatingLabel>

                <Button className='mb-2 w-100' variant="warning" type="submit" disabled={show}>
                    {!show ? 'Register' : <>
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
                    Alreday have an account? <Link className='ps-2 text-warning' to='/login'>Please Login</Link><br />
                </Form.Text>
                <Form.Text className="text-muted text-success">
                    {success}
                </Form.Text>
                <Form.Text className="text-danger">
                    <h4>{error}</h4>
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