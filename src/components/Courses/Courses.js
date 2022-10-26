import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCategories from "../categories/CourseCategories";
import Course from "../Course/Course";
import "./Courses";

const Courses = () => {
  const courses = useLoaderData();

  // console.log(courses);
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-4 ">
            <CourseCategories></CourseCategories>
          </div>
          <div className="col-8">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
