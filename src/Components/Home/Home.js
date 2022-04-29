import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import Inventory from './Inventory/Inventory';
import ManiaPortal from './ManiaPortal/ManiaPortal';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ManiaPortal></ManiaPortal>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;