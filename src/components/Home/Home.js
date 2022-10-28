import React from 'react';
import { Link } from 'react-router-dom';
// import { useContext } from 'react';
// import { AuthContext } from '../Context/Usercontext';
// import { useLoaderData } from 'react-router-dom';

const Home = () => {
    // const {user} = useContext(AuthContext)

    return (
        <div className='mt-5 pt-5'>
          <h1 className='text-'>welcome to rs it institue</h1>
          <h5 className='text-success'>choose your dream courses</h5>

           <Link to='/courses'><button className='btn btn-primary'> see courses</button>
            </Link>
         
        </div>
    );
};

export default Home;