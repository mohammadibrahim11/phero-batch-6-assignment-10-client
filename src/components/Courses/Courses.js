import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import CourseCategories from "../categories/CourseCategories";
import { AuthContext } from "../Context/Usercontext";
import Course from "../Course/Course";
import "./Courses.css";

const Courses = () => {


  const courses = useLoaderData();
  const [allcategories, setAllcategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/courseCategories")
      .then((res) => res.json())
      .then((data) => setAllcategories(data));
  }, []);


  // console.log(allcategories);

  // console.log(courses);
  return (
    <div className="container">
      <div className="row ">
        <div className="col-2 mt-5 ">
          all categories
          {allcategories.map((category) => (
            <CourseCategories
              category={category}
              key={category.id}
            ></CourseCategories>
          ))}
        </div>

        <div className="course-container col-10  mt-4 mb-5 ps-5">
          {courses.map((course) => (
            <Course key={course._id} course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
