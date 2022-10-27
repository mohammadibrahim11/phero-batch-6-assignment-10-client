import React from "react";
import './Course.css'
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { course_name,picture,description,total_student } = course;
  // console.log(course);
  return (
  
     <div>
          <div className="card text-start mt-4" style={{width:'18rem',heigth:"auto"}}>
        <img src={picture} className="card-img-top" alt="..."/>
         <div className="card-body">
      <h5 className="card-title"> Name : {course_name}</h5>
      <h5 className="card-title"> Student : {total_student}</h5>
      <p className="card-text"> {description.slice(0,44)} ...</p>
      <Link to="" className="btn btn-primary">about course</Link>
          </div>
  </div>
     </div>

  );
};

export default Course;
