import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <div>
                <a href="/">Order</a>
                <a href="/">Review</a>
                <a href="/">Inventory</a>
                <a href="/">login</a>
            </div>
        </div>
    );
};

export default Header;