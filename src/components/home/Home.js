import React from 'react';
import AboutUs from '../aboutUs/AboutUs';
import BlackPage from '../blackPage/BlackPage';
import Client from '../client/Client';
import Features from '../features/Features';
import Question from '../question/Question';
import ShowCase from '../showCase/ShowCase';

const Home = () => {
    return (
        <div>
            <ShowCase></ShowCase>
            <BlackPage></BlackPage>
            <Features></Features>
            <AboutUs></AboutUs>
            <Question></Question>
            <Client></Client>
        </div>
    );
};

export default Home;