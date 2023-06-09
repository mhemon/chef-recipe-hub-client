import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SocialLogin = () => {

    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const navigate = useNavigate()
    const { googleLogin, githubLogin } = useContext(AuthContext)

    const handleGoogleBtn = () => {
        googleLogin()
        .then(() => navigate(from))
        .catch(error => toast.error(error.code))
    }

    const handleGithubBtn = () => {
        githubLogin()
        .then(() => navigate(from))
        .catch(error => toast.error(error.code))
    }
    return (
        <div className='card p-2 mt-2'>
            <div className='d-flex justify-content-around'>
                <Button onClick={handleGoogleBtn} variant='warning'>
                    <FaGoogle />
                </Button>
                <Button onClick={handleGithubBtn} variant='warning'>
                    <FaGithub />
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;