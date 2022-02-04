import React from 'react';
import Banner from './Banner/Banner';
import Extra1 from './Extra1/Extra1';
import Review from './Review/Review';
import DisplayPackages from './DisplayPackages/DisplayPackages'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Review></Review>
            <DisplayPackages></DisplayPackages>
            <Extra1></Extra1>
        </div>
    );
};

export default Home;