import React from 'react';
import { Link } from 'react-router-dom';
// import Category from '../Category/Category';
// import { useLoaderData } from 'react-router-dom';

const CourseCategories = ({category}) => {

 const {category_name,id}=category
//   console.log(category);
    return (
        <div>
         <Link to={`/singlecategory/${id}`}>{category_name}</Link>
         {/* <Category></Category> */}
        </div>
    );
};

export default CourseCategories;