import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const MyItems = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user?.email;
        const getMyItems = async () => {
            const { data } = await axios.get(`http://localhost:5000/my-items?email=${email}`);
            setMyItems(data)
        }
        getMyItems();
    }, [user]);
    return (
        <div>
            <h1>My Total Items:{myItems.length} </h1>
        </div>
    );
};

export default MyItems;