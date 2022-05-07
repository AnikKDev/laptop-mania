import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Inventory.css';
import InventoryItem from './InventoryItem/InventoryItem';
const Inventory = () => {
    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        async function getItems() {
            try {
                const { data } = await axios.get('https://intense-ridge-60059.herokuapp.com/inventory');
                setInventoryItems(data);
            } catch (error) {
                console.error(error);
            }
        };
        getItems();
    }, []);
    return (
        <div id='inventory' className="container my-5">
            <h1 className='text-center inventory-title'>Inventory</h1>
            <hr className="w-25 mx-auto" />
            <div className='my-5'>
                {
                    inventoryItems.map(inventoryItem => <InventoryItem key={inventoryItem._id} inventoryItem={inventoryItem}></InventoryItem>)
                }
            </div>
            <Link to="/manage-inventories">
                <button className="btn btn-danger manage-inventory-btn d-block mx-auto">Manage Inventory</button>
            </Link>

        </div>
    );
};

export default Inventory;