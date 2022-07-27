import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import Registration from './Registration';

const RegistrationFull = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Registration></Registration>
            <Footer></Footer>
        </div>
    );
};

export default RegistrationFull;