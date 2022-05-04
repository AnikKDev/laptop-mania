import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container d-flex justify-content-center align-items-center">
            <div className="banner-info text-center">
                <h4 className="text-white welcome-txt mb-3">Welcome To</h4>
                <h1 className="welcome-name mt-3">Laptop <span className="text-danger">Mania</span></h1>
                <p className="text-white">Your very own laptop inventory management site</p>
                <a href="#inventory"><button className="btn-danger btn show-inventory-btn">Show Inventory</button></a>
            </div>
        </div>
    );
};

export default Banner;