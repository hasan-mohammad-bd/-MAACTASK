import React from 'react';
import AboutUs from '../aboutUs/AboutUs';
import BlackPage from '../blackPage/BlackPage';
import Features from '../features/Features';
import ShowCase from '../showCase/ShowCase';

const Home = () => {
    return (
        <div>
            <ShowCase></ShowCase>
            <BlackPage></BlackPage>
            <Features></Features>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;