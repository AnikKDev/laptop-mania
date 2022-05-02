import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';
const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="w-50 mx-auto">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="w-100">
                        Sign Up
                    </Button>

                </Form>
                <p>Already have an account? <button onClick={() => navigate('/login')} className="btn btn-link">Login</button></p>
            </div>
        </div>
    );
};

export default SignUp;