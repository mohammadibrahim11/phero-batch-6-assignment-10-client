import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './LeftSideNav.css'
// import CourseCategories from '../categories/CourseCategories';

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/course-categories")
      .then((res) => res.json())
      .then((data) => setCategories( data))
  }, []);
  return (
    <div className="mt-5">
      all categories:{categories.length}
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link className="btn btn-primary " to={`/singleCategory/${category.id}`}>{category.category_name}</Link>
          </p>

        ))}

        <p> <Link className="btn btn-primary" to='/courses'>all courses</Link> </p>
      </div>
    </div>
  );
};

export default LeftSideNav;
