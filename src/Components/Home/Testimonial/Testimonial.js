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
        <div className="testimonial-container my-5 py-4">
            <h2 className="text-center text-white mt-5 testimonial-title">Our Testimonial</h2>
            <hr style={{ backgroundColor: "#DB2D2E" }} className="w-25 mx-auto" />
            <div className="row gx-0 px-5 mt-5">
                <div className="col-md-4 d-flex justify-content-center my-5">
                    <Card style={{ width: '22rem' }} className="bg-transparent each-card position-relative">
                        <img src={people1} alt="" className="people-dp w-25 p-2 position-absolute top-0 start-50 translate-middle" />
                        <Card.Body className="text-white each-card-body mt-5">
                            <Card.Title className="people-name">Mickael Bean</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Consumer</Card.Subtitle>
                            <Card.Text className="testimony-info">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-container d-flex justify-content-center">
                            <IoMdQuote className="quote-icon"></IoMdQuote>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4 d-flex justify-content-center my-5">
                    <Card style={{ width: '22rem' }} className="bg-transparent each-card position-relative">
                        <img src={people2} alt="" className="people-dp w-25 p-2 position-absolute top-0 start-50 translate-middle" />
                        <Card.Body className="text-white each-card-body mt-5">
                            <Card.Title className="people-name">Mel Gibson</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Item Dealer</Card.Subtitle>
                            <Card.Text className="testimony-info">
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>

                        </Card.Body>
                        <div className="icon-container d-flex justify-content-center">
                            <IoMdQuote className="quote-icon"></IoMdQuote>
                        </div>
                    </Card>
                </div>
                <div className="col-md-4 d-flex justify-content-center my-5">
                    <Card style={{ width: '22rem' }} className="bg-transparent each-card position-relative">
                        <img src={people3} alt="" className="people-dp w-25 p-2 position-absolute top-0 start-50 translate-middle" />
                        <Card.Body className="text-white each-card-body mt-5">
                            <Card.Title className="people-name">Johnny D'Caprio</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Item Dealer</Card.Subtitle>
                            <Card.Text className="testimony-info">
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