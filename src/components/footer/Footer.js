import React from 'react';
import logo from '../../Image/logo/FieldX (1).png';
import './Footer.css';
import soc1 from '../../Image/social/013-twitter.png';
import soc2 from '../../Image/social/010-linkedin.png';
import soc3 from '../../Image/social/001-facebook.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-text-img'>
            <img src={logo} alt="" />
            <p className='footer-doc'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br /> accusantium doloremque laudantium, totam rem aperiam eaque.</p>
            <div className="social">
                <img className='soc' src={soc1} alt="" />
                <img className='soc' src={soc2} alt="" />
                <img className='soc' src={soc3} alt="" />
            </div>
            </div>
            <div className='lower'>
            <div className='hr'></div>
            <p className="copyright">&copy; All rights reserve by <span>MAAC</span></p>
            </div>
        </div>
    );
};

export default Footer;