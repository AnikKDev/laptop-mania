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
                const { data } = await axios.get('http://localhost:5000/inventory');
                setInventoryItems(data);
            } catch (error) {
                console.error(error);
            }
        };
        getItems();
    }, []);
    return (
        <div id='inventory' className="container">
            <h1>Inventory: (total items: {inventoryItems.length})</h1>
            <div className=''>
                {
                    inventoryItems.map(inventoryItem => <InventoryItem key={inventoryItem._id} inventoryItem={inventoryItem}></InventoryItem>)
                }
            </div>
            <Link to="/manage-inventories">
                <button className="btn btn-warning">Manage Inventory</button>
            </Link>

        </div>
    );
};

export default Inventory;