import React from 'react';
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='set-min-height d-flex align-items-center justify-content-center'>
            <div className="">
                <h1>404 Not Found</h1>
                <button className="btn btn-danger d-block mx-auto mt-3" onClick={() => navigate('/home')}>Take me home</button>
            </div>
        </div>
    );
};

export default NotFound;