import React from 'react';
import './ShowCase.css';
import { NavLink } from 'react-router-dom';
import showcaseImg from '../../Image/showcase/dashboard.png'

const ShowCase = () => {
    return (
        <div className='show-case'>
            <div className="text"><h1 className='main-text'>Analytics that transform your <br /> product inside-out</h1></div>
            <div className="button-container">
            <NavLink className="demo-btn" to="">Request for Demo</NavLink>
                    <NavLink className="download-btn" to="">Download</NavLink>
            </div>
            <div className="showCase-pic"><img width="100%" src={showcaseImg} alt="" /></div>
        </div>
    );
};

export default ShowCase;