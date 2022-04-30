import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageInventories.css';
const ManageInventories = () => {
    const [allItems, setAllItems] = useState([]);
    useEffect(() => {
        async function getAllItems() {
            try {
                const { data } = await axios.get('http://localhost:5000/manage-inventories');
                setAllItems(data);
            } catch (error) {
                console.error(error);
            }
        };
        getAllItems();
    }, []);
    return (
        <div>
            Manage Inventories:{allItems.length}
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>Item Name</th>
                            <th>Supplier Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allItems.map(item => {
                                return <tr>

                                    <td>{item?.itemName}</td>
                                    <td>{item?.supplierName}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.price}</td>
                                    <td>{item?.category}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageInventories;