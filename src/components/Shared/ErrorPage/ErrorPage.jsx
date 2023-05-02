import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../../assets/error.png'

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className='d-flex align-items-center h-100 p-4'>
            <div className='container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-8'>
                <div className='mb-4'>
                    <img style={{width: '200px'}} className='img-fluid' src={errorImg} alt="" />
                </div>
                <div className='text-center'>
                    <h2 className='mb-8 fw-bold'>
                        <span className='sr-only'>Error</span> {status || 404}
                    </h2>
                    <p className='fw-semibold mb-8'>
                        {error?.message}
                    </p>
                    <Link
                        to='/'
                        className=''
                    >
                        <Button variant='danger'>Back to homepage</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;