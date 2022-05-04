import React from 'react';
import Banner from './Banner/Banner';
import './Home.css';
import HotDeals from './HotDeals/HotDeals';
import Inventory from './Inventory/Inventory';
import ManiaPortal from './ManiaPortal/ManiaPortal';
import Testimonial from './Testimonial/Testimonial';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ManiaPortal></ManiaPortal>
            <HotDeals></HotDeals>
            <Inventory></Inventory>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;