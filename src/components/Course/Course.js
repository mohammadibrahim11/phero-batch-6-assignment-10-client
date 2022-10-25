import React from 'react';

const Course = ({course}) => {
    const {picture,course_name} = course;
    console.log(course);
    return (
        <div>
            {/* this is course:{course._id} */}
            {/* row-cols-1 row-cols-md-3 g-4 */}
            <div class="row ">
  <div class="col">
    <div class="card h-100">
      <img src={picture} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{course_name}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

</div>
        </div>
    );
};

export default Course;