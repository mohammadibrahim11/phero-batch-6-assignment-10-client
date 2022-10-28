import React from "react";

import { useLoaderData } from "react-router-dom";

import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {


  const courses = useLoaderData();

  return (
    <div className="container">
      <div className="row ">
        <div className="course-container col mt-4 mb-5 ps-5">
          {courses.map((course) => (
            <Course key={course.id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
