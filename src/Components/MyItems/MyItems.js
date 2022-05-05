import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './MyItems.css';
import { Table } from 'react-bootstrap';
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

    // handle remove item by clicking on delte button
    const handleRemoveItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            console.log(id);
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, 'successfully deleted');
                    const remaining = myItems.filter(item => item._id !== id);
                    setMyItems(remaining);
                })
        }
    };
    return (
        <div>
            <h1 className="items-heading text-center my-5">My Items</h1>
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Item Name</th>
                            <th>Supplier Name</th>
                            <th>Quantity</th>
                            <th>Price (Per Item)</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myItems.map(item => {

                                return <tr key={item._id}>

                                    <td>{item?.itemName}</td>
                                    <td>{item?.supplierName}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.category}</td>
                                    <td><button onClick={() => handleRemoveItem(item._id)} className="btn btn-danger">Remove</button></td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyItems;