import React from 'react';
import { useParams } from 'react-router-dom';
import './UpdateItem.css';
const UpdateItem = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            Update:{id}
        </div>
    );
};

export default UpdateItem;