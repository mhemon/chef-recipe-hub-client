import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";

const SocialLogin = () => {

    const handleGoogleBtn = () => {

    }

    const handleGithubBtn = () => {

    }
    return (
        <div className='card p-2 mt-2'>
            <div className='d-flex justify-content-around'>
                <Button onClick={handleGoogleBtn} variant='warning'>
                <FaGoogle/>
                </Button>
                <Button onClick={handleGithubBtn} variant='warning'>
                <FaGithub/>
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;