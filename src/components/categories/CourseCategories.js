import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseCategories = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            all  categories:{categories.id}
        </div>
    );
};

export default CourseCategories;