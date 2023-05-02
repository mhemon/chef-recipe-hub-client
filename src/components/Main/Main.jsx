import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../Shared/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import '@smastrom/react-rating/style.css'

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;