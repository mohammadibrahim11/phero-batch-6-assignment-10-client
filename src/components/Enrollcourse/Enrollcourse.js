import React from "react";
import { useLoaderData } from "react-router-dom";
// import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Enrollcourse = () => {
    const data = useLoaderData();
    const {picture,course_name,duration,phone}=data
    console.log(data);
  return (
    <div className="card mt-5" style={{width:'23rem'}}>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <img style={{width:"23rem"}} src={picture} alt="" />
        <h3>Title : {course_name}</h3>
        <h6>duration : {duration}</h6>
        <h6>contact : {phone}</h6>
      </div>
    </div>
  );
};

export default Enrollcourse;
