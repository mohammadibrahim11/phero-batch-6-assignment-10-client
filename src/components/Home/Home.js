import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            this is home page
        </div>
    );
};

export default Home;