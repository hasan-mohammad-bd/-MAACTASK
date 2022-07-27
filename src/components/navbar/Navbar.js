import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../Image/logo/FieldX.png"
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <div className="logo-holder">
                    <NavLink to="/home"><img src={logo} alt="" /></NavLink>
                </div>
                <div className="button-holder">
                    <NavLink className="login-btn" to="/login">Login</NavLink>
                    <NavLink className="registration-btn" to="/registration">Registration</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;