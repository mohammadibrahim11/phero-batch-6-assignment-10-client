import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Courseitem = (  ) => {
    const item = useLoaderData();
    console.log(item);
  const {
    description,
    course_name,
    picture,
    ratings,
    id,
    total_student,
    price,
    instructor,
    duration
  } = item;
  console.log(item);
  return (
    <div>
      <div className="d-flex ">
        <div
          className="card shadow text-start mt-4"
          style={{ width: "18rem", heigth: "auto" }}
        >
          <img src={picture} className="card-img-top" alt="..." />
          <div className="card-body">
            <p>{duration}</p>
            <h5 className="card-title"> Name : {course_name}</h5>
            <h5 className="card-title"> total enrolled : {total_student}</h5>
            <h6>ratings :{ratings} </h6>
            <p className="card-text"> {description.slice(0, 44)} ...</p>
            <p>price : {price}</p>

            <Link
              to={`/courses/${id}`}
              className="btn btn-primary ps-3 pe-3"
            >
              premium access
            </Link>
          </div>
        </div>

        <div
          className="card shadow text-start mt-4 pt-5"
          style={{ width: "23rem", heigth: "auto" }}
        >
          {/* <img src={picture} className="card-img-top" alt="..."/> */}
          <div className="card-body">
            
            <div>
              <img
                className="rounded-circle  w-full  m-auto"
                style={{ height: "50px", width: "50px" }}
                src={instructor.img}
                alt=""
              />
            </div>
          
            <h6 className="card-title mt-3"> Instructor : {instructor.name}</h6>
            <h5 className="card-title"> course-name : {course_name}</h5>
            <h6 className="card-title"> web : <a href='https://www.programming-hero.com/'> {instructor.web}</a> </h6>
           
          </div>
        </div>
      </div>
     </div>
  );
};

export default Courseitem;
