import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
                <div className="spinner-grow" role="status">
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;