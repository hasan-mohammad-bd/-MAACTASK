import React from 'react';
import AboutUs from '../aboutUs/AboutUs';
import BlackPage from '../blackPage/BlackPage';
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
        </div>
    );
};

export default Home;