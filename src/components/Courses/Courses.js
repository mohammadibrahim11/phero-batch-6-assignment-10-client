import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div>
         <div class="container text-center">

    <div class="row">

        <div class="col-4">course category
        </div>
                 <div class="col-8">{
                                courses.map((course) =>  (<Course key={course.id} course={course}></Course>))
                                       }
                        </div>
    
 </div>
 </div>
 </div>
    );
};

export default Courses;