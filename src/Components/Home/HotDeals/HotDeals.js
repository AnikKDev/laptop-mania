import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Hotdeals.css';
const HotDeals = () => {
    return (
        <div>
            <h3 className="text-center hotdeal-title mt-5">Hot Deals</h3>
            <hr className="w-25 mx-auto mb-5" />
            <div className="slider-container container-fluid">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>ENVY x360</h1>
                            <p>Shape your speed</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h1>IdeaPad S145</h1>
                            <p>More easy, Much convenient, Fabulous experience.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://images.unsplash.com/photo-1548611716-ad782502c9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h1>Lenovo Casillas</h1>
                            <p>Touch the future, Touch Lenovo.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default HotDeals;