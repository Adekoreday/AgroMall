import React from 'react';
import Logo from '../../assets/logo.svg';
import './index.css';

const Header = () => {
    return (
        <div className="header__container">
            <div className='logo'>
                <img src={Logo} alt="agro-mall logo"></img>
            </div>
            <ul className='items__containers'>
                <li className='header__items'>Vision</li>
                <li className='header__items'>Technology</li>
                <li className='header__items larger__item'>Experience It</li>
                <li className='header__items large__item'>Sign In</li>
            </ul>
            </div>
    );
};

export default Header;