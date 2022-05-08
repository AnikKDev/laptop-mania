import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineLaptop } from 'react-icons/ai';
import { RiMessage3Line } from 'react-icons/ri';
import { MdCable } from 'react-icons/md';
import { BsSave } from 'react-icons/bs';
import './ManiaPortal.css';
const ManiaPortal = () => {
    return (
        <div className="mt-5">
            <div className="maniaportal-intro text-center">
                <p className="text-muted">Welcome to our website</p>
                <h2 className="maniaportal-heading">Mania Portal</h2>
                <p className="text-muted container"><span className="info-starter">Laptop mania</span> is one of the best leading laptop management service provider around the globe. Here, you can store items, check the delivered and quantity of each items and even manage items. Get the best out of it </p>
                <hr className="w-25 mx-auto mania-line" />
            </div>

            <div className="maniaportal-services row gx-0 text-center container mx-auto mt-5">
                <div className="col-md-3 d-flex justify-content-center my-3">
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <div className="maniaportal-icons-container d-flex justify-content-center align-items-center p-3 mx-auto my-3"><AiOutlineLaptop className="maniaportal-icons"></AiOutlineLaptop></div>
                            <Card.Title>Famous Brands</Card.Title>

                            <Card.Text>
                                Here you can take the advantage of dealing with famous brands. And we are here to ensure it to you.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 d-flex justify-content-center my-3">
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <div className="maniaportal-icons-container d-flex justify-content-center align-items-center p-3 mx-auto my-3"><RiMessage3Line className="maniaportal-icons"></RiMessage3Line></div>
                            <Card.Title>Free Support</Card.Title>
                            <Card.Text>
                                Free support all time 24/7. Our agents are active all the time to help you out with anything.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 d-flex justify-content-center my-3">
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <div className="maniaportal-icons-container d-flex justify-content-center align-items-center p-3 mx-auto my-3"><MdCable className="maniaportal-icons"></MdCable></div>
                            <Card.Title>Dealership</Card.Title>
                            <Card.Text>
                                By dealership you can get the chance to deal with the very renounce outcome possible.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3 d-flex justify-content-center my-3">
                    <Card style={{ width: '15rem' }}>
                        <Card.Body>
                            <div className="maniaportal-icons-container d-flex justify-content-center align-items-center p-3 mx-auto my-3"><BsSave className="maniaportal-icons"></BsSave></div>
                            <Card.Title>Convenience</Card.Title>
                            <Card.Text>
                                It's easy and handy to use our support and take the advantage of it. And we look forward to it.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ManiaPortal;