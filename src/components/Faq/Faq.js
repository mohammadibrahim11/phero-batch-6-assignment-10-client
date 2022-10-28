import React from "react";

const Faq = () => {
  return (
    <div className="">
      <div className="mt-5 fs-1 fw-bold ">why you enroll our course?</div>
      <div
        className="accordion accordion-flush mt-5 border border-rounded bg-light shadow"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              This is the complete web development course
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-start">
              This course covers everything from scratch to getting a job as a
              junior web developer. So, if you finish this course well, you can
              start trying to intern or get a job without taking any other
              course about web development.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Unlimited support
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-start">
              Any questions you may have will be answered within 24 hours during
              the course (except holidays). If there is any problem with Penchgi
              Marka, it will come to Google Meet 3 times a day and share your
              skin, and the problem will be solved. And once the course is over
              (even after 3 months) you will be given loose support
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed text-start"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Job Placement Coach:
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body text-start">
            Who will get chance in SCIC. And it will take another 4 to 6 weeks to finish properly. Our job placement team will send their CV/resume to various companies with more personalized training. Companies to hire, not to hire: that's their decision. Your job is to stick and our job is to deliver the CV with support. So, as long as you stick around. We are with you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
