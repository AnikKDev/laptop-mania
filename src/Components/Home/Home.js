import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import ManiaPortal from './ManiaPortal/ManiaPortal';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ManiaPortal></ManiaPortal>
        </div>
    );
};

export default Home;