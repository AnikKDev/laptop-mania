import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ManageInventories.css';
import LoadingSpinner from '../Loadingspinner/LoadingSpinner';
const ManageInventories = () => {
    const [allItems, setAllItems] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        async function getAllItems() {
            try {
                setIsLoading(true);
                const { data } = await axios.get('https://intense-ridge-60059.herokuapp.com/manage-inventories');
                setAllItems(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        getAllItems();
    }, []);


    // handle remove item by clicking on delte button
    const handleRemoveItem = (id) => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            console.log(id);
            const url = `https://intense-ridge-60059.herokuapp.com/inventory/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data, 'successfully deleted');
                    const remaining = allItems.filter(item => item._id !== id);
                    setAllItems(remaining);
                })
        }
    };
    return (
        <div>
            <h1 className='text-center my-5 inventory-title'>Manage Inventory</h1>
            <div className="container">
                {
                    isLoading ? <LoadingSpinner></LoadingSpinner> : undefined
                }
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
                            allItems.map(item => {

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
            <Link to="/add-item"><button className="btn btn-danger manage-inventory-btn d-block mx-auto my-5">Add New Item</button></Link>
        </div>
    );
};

export default ManageInventories;