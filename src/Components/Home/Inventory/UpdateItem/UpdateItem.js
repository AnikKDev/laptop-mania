import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './UpdateItem.css';
const UpdateItem = () => {
    const { id } = useParams();
    // console.log(id);
    const [singleItem, setSingleItem] = useState({});
    const { img, description, supplierName, itemName, quantity, price } = singleItem;
    // const [itemQuantity, setItemQuantity] = useState(0);
    // useEffect(() => {
    //     setItemQuantity(quantity - 1)
    // }, [quantity]);


    useEffect(() => {
        async function getSingleItem() {
            try {
                const { data } = await axios.get(`http://localhost:5000/inventory/${id}`);
                setSingleItem(data);
            } catch (error) {
                console.error(error);
            }
        };
        getSingleItem();
    }, [id]);

    // handle update button
    const handleQuantityUpdate = (id) => {
        const newQuantity = parseInt(quantity - 1);

        fetch(`http://localhost:5000/inventory/${id}`, {
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

    };



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
                            <button onClick={() => handleQuantityUpdate(id)} className="btn btn-warning px-3">Delivered</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;