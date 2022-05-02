import React, { useEffect, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './SignUp.css';
const SignUp = () => {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    // create user with email and password
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    // user data
    useEffect(() => {
        if (user) {
            navigate('/')
        };
    }, [user, navigate]);
    if (error) {
        console.log(error.message)
    }

    // handle signup

    // get user infos
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });
    // set errors
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        others: ""
    });
    // get email
    const handleEmailChange = e => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(e.target.value)) {
            setUserInfo({ ...userInfo, email: e.target.value });
            setErrors({ ...errors, email: '' });
        } else {
            setErrors({ ...errors, email: 'Please Provide a valid email' });
            setUserInfo({ ...userInfo, email: '' });
        }
    };
    // get password
    const handlePasswordChange = e => {
        setUserInfo({ ...userInfo, password: e.target.value })
    };
    // get confirm password
    const handleConfirmPasswordChange = e => {
        if (e.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: e.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Password didn't match" });
            setUserInfo({ ...userInfo, confirmPassword: "" });
            return
        }
    };
    // handle form signup
    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);

        createUserWithEmailAndPassword(userInfo.email, userInfo.password)


    };
    return (
        <div>
            <div className="w-50 mx-auto">
                <Form noValidate validated={validated} onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                        {errors?.email && <p className="text-danger">{errors.email}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onChange={handleConfirmPasswordChange} type="password" placeholder="Confirm Password" />
                        {errors?.password && <p className="text-danger">{errors.password}</p>}
                    </Form.Group>

                    <Button variant="primary" type="submit" className={errors?.password ? "w-100 disabled" : "w-100"}>
                        Sign Up
                    </Button>

                </Form>
                <p>Already have an account? <button onClick={() => navigate('/login')} className="btn btn-link">Login</button></p>
            </div>
        </div>
    );
};

export default SignUp;