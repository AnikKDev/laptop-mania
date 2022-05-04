import React from 'react';
import { Card } from 'react-bootstrap';
import './Testimonial.css';
import people1 from '../../../img/people/player-1.png';
import people2 from '../../../img/people/player-2.png';
import people3 from '../../../img/people/player-3.png';
import { IoMdQuote } from 'react-icons/io';
// IoMdQuote
const Testimonial = () => {
    return (
        <div>
            <h2>Our Testimonial</h2>
            <div className="testimonial-container">
                <div className="card-container d-flex justify-content-around align-items-center container">
                    <Card style={{ width: '22rem' }} className="bg-transparent each-card position-relative">
                        <img src={people1} alt="" className="people-dp w-25 p-2 position-absolute top-0 start-50 translate-middle" />
                        <Card.Body className="text-white each-card-body mt-5">
                            <Card.Title>Mickael Bean</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Consumer</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-container d-flex justify-content-center">
                            <IoMdQuote className="quote-icon"></IoMdQuote>
                        </div>
                    </Card>
                    <Card style={{ width: '22rem' }} className="bg-transparent each-card position-relative">
                        <img src={people2} alt="" className="people-dp w-25 p-2 position-absolute top-0 start-50 translate-middle" />
                        <Card.Body className="text-white each-card-body mt-5">
                            <Card.Title>Mel Gibson</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Item Dealer</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-container d-flex justify-content-center">
                            <IoMdQuote className="quote-icon"></IoMdQuote>
                        </div>
                    </Card>
                    <Card style={{ width: '22rem' }} className="bg-transparent each-card position-relative">
                        <img src={people3} alt="" className="people-dp w-25 p-2 position-absolute top-0 start-50 translate-middle" />
                        <Card.Body className="text-white each-card-body mt-5">
                            <Card.Title>Johnny D'Caprio</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Item Dealer</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-container d-flex justify-content-center">
                            <IoMdQuote className="quote-icon"></IoMdQuote>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;