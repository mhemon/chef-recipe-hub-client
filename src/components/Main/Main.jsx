import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import '@smastrom/react-rating/style.css'
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';

const Main = () => {
    const { loading } = useContext(AuthContext)
    // show spinner when loading 
    if(loading){
        return <div className='d-flex align-items-center justify-content-center mt-5'>
            <Spinner animation="border" variant="warning" />
        </div>
    }
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            {/* toast container */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
        </div>
    );
};

export default Main;