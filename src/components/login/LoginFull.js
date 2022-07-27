import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Login from './Login';

const LoginFull = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Login></Login>
            <Footer></Footer>
        </div>
    );
};

export default LoginFull;