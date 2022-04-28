import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container d-flex justify-content-center align-items-center">
            <div className="banner-info ">
                <h4 className="text-white">Welcome To</h4>
                <h1 className="text-white text-muted">Laptop Mania</h1>
            </div>
        </div>
    );
};

export default Banner;