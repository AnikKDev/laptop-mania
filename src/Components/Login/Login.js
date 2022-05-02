import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Login.css';
const Login = () => {
    const navigate = useNavigate();

    // handle google sign in
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    useEffect(() => {
        if (user) {
            console.log(user.user);
            navigate('/home')
        };
    }, [navigate, user])

    const handleGoogleSignin = () => {


        signInWithGoogle();
    };


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
                        Login
                    </Button>
                </Form>
                <Button onClick={handleGoogleSignin} variant="primary" type="submit" className="w-100 my-2">
                    Sign in with Google
                </Button>
                <p>Don't have an account? <button onClick={() => navigate('/signup')} className="btn btn-link">Create an account</button></p>
            </div>
        </div>
    );
};

export default Login;