import React from 'react';
import Logo from '../../assets/logoGreen.svg';
import fblogo from '../../assets/facebooklogo.svg';
import twitterlogo from '../../assets/twitterlogo.svg';
import instagramlogo from '../../assets/instagramlogo.svg';

import './index.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content">
            <div className="footer__about">
            <div className='footer__logo'>
                <img src={Logo} alt="agro-mall logo"></img>
            </div>
            <p className="copyright">Copy right 2019 AgroMall Discovery and Extension Limited</p>
            <p>All rights reserved</p>
            </div>

                <ul className="footer__list">
                    <li className="list__title">Links</li>
                    <li className="footer__list__items">Users</li>
                    <li className="footer__list__items">State</li>
                    <li className="footer__list__items">Media</li>
                    <li className="footer__list__items">Experience It</li>
                    <li className="footer__list__items">Join Us</li>
                </ul>
            <div className="social">
                <div>Follow Us</div>
                <ul className="social__media__container">
                    <li className="social__icon"><img src={fblogo} alt="facebook logo"></img></li>
                    <li  className="social__icon"><img src={twitterlogo} alt="twitter logo"></img></li>
                    <li  className="social__icon"><img src={instagramlogo} alt="instagram logo"></img></li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Footer;