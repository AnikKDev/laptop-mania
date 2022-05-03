import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
const MyItems = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {

        const getMyItems = async () => {
            const email = user?.email;
            // console.log(email);
            try {
                const { data } = await axios.get(`http://localhost:5000/my-items?email=${email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });

                setMyItems(data)
            } catch (error) {
                console.log(error);
                if (error.response.status === 403 || error.response.status === 401) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getMyItems();
    }, [user, navigate]);
    return (
        <div>
            <h1>My Total Items:{myItems.length} </h1>
        </div>
    );
};

export default MyItems;