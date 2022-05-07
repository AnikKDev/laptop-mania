import React from 'react';
import { Form } from 'react-bootstrap';
import "./AddItem.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
const AddItem = () => {
    // get the user if logged in
    const [user, loading, error] = useAuthState(auth);
    // handle add item button
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://intense-ridge-60059.herokuapp.com/manage-inventories', data)
            .then(function (response) {
                const { data } = response;
                if (data.insertedId) {
                    console.log(data);
                    toast.success('Successfully added')
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    return (
        <div>
            <h2 className="text-center my-3 item-title">
                Add items
            </h2>
            <div className="container ">
                <form className="w-50 mx-auto d-flex flex-column login-form p-5" onSubmit={handleSubmit(onSubmit)}>
                    <input className="my-3 input-field" value={user?.email} readOnly placeholder='Email' {...register("email")} />
                    <input className="my-3 input-field" placeholder='Item Name' {...register("itemName", { required: true, maxLength: 20 })} />
                    <input className="my-3 input-field" placeholder='Supplier Name' {...register("supplierName", { required: true })} />
                    <input className="my-3 input-field" placeholder='Price Per Item' type="number" {...register("price", { required: true })} />
                    <input className="my-3 input-field" placeholder='Category' type="text" {...register("category", { required: true })} />
                    <textarea className="my-3 input-field" placeholder='Item Description' type="text" {...register("description", { required: true })} />
                    <input className="my-3 input-field" placeholder='Image URL' {...register("img", { required: true })} />
                    <input className="my-3 input-field" placeholder='Quantity (min: 5)' type="number" {...register("quantity", { min: 5, required: true })} />
                    <input className="my-3 btn btn-danger" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItem;