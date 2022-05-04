import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import HotDeals from './HotDeals/HotDeals';
import Inventory from './Inventory/Inventory';
import ManiaPortal from './ManiaPortal/ManiaPortal';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ManiaPortal></ManiaPortal>
            <HotDeals></HotDeals>
            <Inventory></Inventory>
        </div>
    );
};

export default Home;