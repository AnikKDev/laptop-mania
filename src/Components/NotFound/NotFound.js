import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='set-min-height'>
            <h1>404 Not Found</h1>
            <button className="btn btn-danger" onClick={() => navigate('/home')}>Take me home</button>
        </div>
    );
};

export default NotFound;