import React from 'react';
import './Footer.css';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
// FaFacebookSquare,FaInstagram,FaLinkedin
const Footer = () => {
    return (
        <div className='footer-container row px-4 gx-0 justify-content-center align-items-center'>
            <p className="mb-0 col-md-4 text-center">&copy; All rights reserved to Laptop Mania</p>
            <p className="mb-0 col-md-4 text-center"><span className="highlighted-text">Privacy Policy</span> | <span className="highlighted-text">Terms And Conditions</span> | <span className="highlighted-text">Contact Us</span>
            </p>
            <div className="col-md-3">
                <h4 className="text-center">Connect with us</h4>
                <div className="d-flex align-items-center justify-content-around px-5 mx-3 mt-md-3">
                    <FaFacebookSquare className="contact-icons highlighted-text"></FaFacebookSquare>
                    <FaInstagram className="contact-icons highlighted-text"></FaInstagram>
                    <FaLinkedin className="contact-icons highlighted-text"> </FaLinkedin>
                </div>
            </div>
        </div>
    );
};

export default Footer;