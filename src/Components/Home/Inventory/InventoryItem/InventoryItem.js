import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const InventoryItem = ({ inventoryItem }) => {
    const { img, itemName, category, description, quantity, supplierName, _id, price } = inventoryItem;
    // console.log(inventoryItem);
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/inventory/${id}`)
    };
    return (
        <div className="row my-5 align-items-center">
            <div className="col-md-4">
                <img src={img} className="img-fluid rounded-start" alt="" />
            </div>
            <div className='col-md-8'>
                <div className="card-body">
                    <h5 className="card-title">{itemName}</h5>
                    <h6>Supplier Name: {supplierName}</h6>
                    <h6>Quantity: {quantity}</h6>
                    <h6>Single Price: {price}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Category: {category}</small></p>
                    <Link to={`/inventory/${_id}`}>
                        <button className="btn btn-warning">Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;