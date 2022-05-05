import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
// FaFacebookSquare,FaInstagram,FaLinkedin
const Footer = () => {
    return (
        <div className='footer-container d-flex justify-content-between align-items-center mt-5 px-5'>
            <p className="mb-0">&copy; All rights reserved to Laptop Mania</p>
            <p className="mb-0"><span className="highlighted-text">Privacy Policy</span> | <span className="highlighted-text">Terms And Conditions</span> | <span className="highlighted-text">Contact Us</span>
            </p>
            <div>
                <h4>Connect with us</h4>
                <div className="d-flex align-items-center justify-content-between px-4">
                    <FaFacebookSquare className="contact-icons highlighted-text"></FaFacebookSquare>
                    <FaInstagram className="contact-icons highlighted-text"></FaInstagram>
                    <FaLinkedin className="contact-icons highlighted-text"> </FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;