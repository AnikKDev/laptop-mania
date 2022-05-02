import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddItem = () => {
    // get the user if logged in
    const [user, loading, error] = useAuthState(auth);
    // handle add item button
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/manage-inventories', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <h2>
                add items
            </h2>
            <div className="container">
                <form className="w-50 mx-auto d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-3" value={user?.email} readOnly placeholder='Email' {...register("email")} />
                    <input className="my-3" placeholder='Item Name' {...register("itemName", { required: true, maxLength: 20 })} />
                    <input className="my-3" placeholder='Supplier Name' {...register("supplierName", { required: true })} />
                    <input className="my-3" placeholder='Price Per Item' type="number" {...register("price", { required: true })} />
                    <input className="my-3" placeholder='Category' type="text" {...register("category", { required: true })} />
                    <textarea className="my-3" placeholder='Item Description' type="text" {...register("description", { required: true })} />
                    <input className="my-3" placeholder='Image URL' {...register("img", { required: true })} />
                    <input className="my-3" placeholder='Quantity (min: 5)' type="number" {...register("quantity", { min: 5, required: true })} />
                    <input className="my-3" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;