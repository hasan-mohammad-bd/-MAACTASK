import React from 'react';
import Accordions from './Accordions';
import Accordions2 from './Accordions2'
import './Question.css';

const Question = () => {
    return (
        <div className='questions'>
            <div className="background-pic">
                <div className="container">
                    <div className="text">
                        <h4 className='common-text'>Common Question</h4>
                        <h4 className='fr-text'>Frequently asked questions</h4>
                    </div>
                    <div className="question">
                        <Accordions></Accordions> <Accordions2></Accordions2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;