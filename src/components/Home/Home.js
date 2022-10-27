import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/Usercontext';
// import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const {user} = useContext(AuthContext)

    return (
        <div>
            welcome to my home page {user?.email}
        </div>
    );
};

export default Home;