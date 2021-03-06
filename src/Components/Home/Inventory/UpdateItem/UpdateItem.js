import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './UpdateItem.css';
const UpdateItem = () => {
    const { id } = useParams();
    // console.log(id);
    const [singleItem, setSingleItem] = useState({});
    const [restock, setRestock] = useState('');


    const { img, description, supplierName, itemName, quantity, price } = singleItem;

    // handle update button
    const handleQuantityUpdate = (id, isTrue) => {
        let newQuantity;
        if (isTrue) {
            console.log('updated quantity (Decreased)');
            newQuantity = parseInt(quantity - 1);
            if (newQuantity < 0) {
                return
            }
            fetch(`https://intense-ridge-60059.herokuapp.com/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity: newQuantity })
            })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            console.log(id);
        } else {
            console.log('updated quantity (increased)');
            if (!restock) {
                return
            }
            newQuantity = parseInt(parseInt(quantity) + parseInt(restock));
            fetch(`https://intense-ridge-60059.herokuapp.com/inventory/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ newQuantity: newQuantity })
            })
                .then(response => response.json())
                .then(result => {
                    console.log('Success:', result);
                })
                .catch(error => {
                    console.error('Error:', error);
                });
            console.log(id);
        }

    };


    useEffect(() => {
        async function getSingleItem() {
            try {
                const { data } = await axios.get(`https://intense-ridge-60059.herokuapp.com/inventory/${id}`);
                setSingleItem(data);
            } catch (error) {
                console.error(error);
            }
        };
        getSingleItem();
    });






    return (
        <div>
            <div className="container">
                <div className='row gx-5 align-items-center'>
                    <div className="col-md-4">
                        <img src={img} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <h3>{itemName}</h3>
                            <h5>Supplier Name: {supplierName}</h5>
                            <h5>Single Price: {price}</h5>
                            <h5>Quantity: {quantity}</h5>
                            <p className="text-muted">{description}</p>
                            {quantity === 0 ? <button disabled className="btn btn-danger my-2">Sold</button> : <button onClick={() => handleQuantityUpdate(id, true)} className="btn btn-danger manage-inventory-btn px-3">Delivered</button>}

                        </div>
                        <div className="w-25 mt-4" >
                            <Form.Control required onChange={event => setRestock(event?.target?.value)} type="number" placeholder="Restock" />
                            <button onClick={() => handleQuantityUpdate(id, false)} className="btn btn-danger my-2 manage-inventory-btn">Restock Item</button>
                        </div>
                        <Link to="/manage-inventories">
                            <button className="btn btn-danger manage-inventory-btn">Manage Inventory</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdateItem;