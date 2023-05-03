import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import '@smastrom/react-rating/style.css'
import { ToastContainer } from 'react-toastify';

const Main = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={5000}
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