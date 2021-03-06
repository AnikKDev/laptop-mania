import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithGoogle, useSignInWithEmailAndPassword, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import auth from '../../firebase.init';
import './Login.css';
import LoadingSpinner from '../Loadingspinner/LoadingSpinner';
import toast from 'react-hot-toast';
import axios from 'axios';
const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // let the user go where he came from if he logged in
    const from = location.state?.from?.pathname || "/";
    // handle google sign in
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    useEffect(() => {
        if (googleUser) {
            // console.log(googleUser.user);
            navigate(from, { replace: true });
        };
    }, [navigate, googleUser, from]);


    // handle email sign in
    const [
        signInWithEmailAndPassword,
        emailUser,
        emailLoading,
        emailError,
    ] = useSignInWithEmailAndPassword(auth);

    useEffect(() => {
        if (emailUser) {
            // navigate(from, { replace: true });
        }
    }, [emailUser, navigate, from]);
    useEffect(() => {
        if (emailError) {
            // toast.error(emailError.message);
            switch (emailError?.code) {
                case 'auth/too-many-requests':
                    toast.error('Too many requests. Try again later.');
                    break;
                case 'auth/wrong-password':
                    toast.error('Wrong password');
                    break;
                default:
                    toast.error('Something went wrong. Try again.')
            }

        };
    }, [emailError])
    /*     if (emailLoading) {
            <LoadingSpinner></LoadingSpinner>
        }; */
    // get user infos
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    });
    // set errors
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        others: ""
    });

    // send password reset email
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );
    // handle password reset mail
    const handleResetPass = async () => {
        if (userInfo.email) {
            await sendPasswordResetEmail(userInfo.email);
            toast.success('Reset email has been sent.')
        }
        else {
            toast.error('Please try again')
        }
    }


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

    // handle login
    const handleLogin = async e => {
        e.preventDefault();
        await signInWithEmailAndPassword(userInfo.email, userInfo.password);
        const email = userInfo.email;
        const { data } = await axios.post('https://intense-ridge-60059.herokuapp.com/token', { email });
        localStorage.setItem('accessToken', data.token);
        navigate(from, { replace: true });

    };
    // handle google sign in
    const handleGoogleSignin = () => {
        signInWithGoogle();
    };


    if (googleLoading || emailLoading) {
        return <LoadingSpinner></LoadingSpinner>
    };

    return (
        <div className="mt-5">
            <div className="w-50 mx-auto mt-5 login-form p-5">
                <h3 className="text-center mb-3 login-title">Log in</h3>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" placeholder="Enter email" />
                        {errors?.email && <p className='text-danger'>{errors.email}</p>}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="danger" type="submit" className="w-100">
                        Login
                    </Button>
                </Form>
                <Button onClick={handleGoogleSignin} variant="" type="submit" className="w-100 my-2 google-btn mt-4">
                    <FcGoogle className='g-icon'></FcGoogle> Sign in with Google
                </Button>
                <button onClick={handleResetPass} className="btn btn-link">Forgot password?</button>
                <p>Don't have an account? <button onClick={() => navigate('/signup')} className="btn btn-link">Create an account</button></p>
            </div>
        </div>
    );
};

export default Login;