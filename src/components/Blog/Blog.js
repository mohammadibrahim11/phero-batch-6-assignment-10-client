import React from "react";

const Blog = () => {
  return (
    <div className="shadow row row-cols-1 row-cols-md-2 row-cols-lg-1 gap-2 border border-rounded p-3 mt-5">
      <div>
        <p className="text-dark-50 fw-bold fs-1">Learn about programming</p>
      </div>
      <div className=" border border-rounded p-5  mb-3 mt-5  ">
        <div className="row g-0">
          <div className="col">
            <div className="card-body shadow p-2 border border-rounded">
              <h5 className="card-title text-start">what is cors?</h5>
              <p className="card-text text-start pt-3">
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources.
              </p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
      <div className="border border-rounded p-5 mb-3 mt-5 container " >
        <div className="row g-0">
          <div className="col">
            <div className="card-body shadow p-2 border border-rounded">
              <h5 className="card-title text-start">Why are you using firebase? What other options do you have to implement authentication?</h5>
              <p className="card-text text-start pt-3">
              Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
              </p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" border border-rounded p-5  mb-3 mt-5 container " >
        <div className="row g-0">
          <div className="col">
            <div className="card-body shadow p-2 border border-rounded">
              <h5 className="card-title text-start">How does the private route work?</h5>
              <p className="card-text text-start pt-3">
              The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
              </p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
      <div className=" border border-rounded p-5  mb-3 mt-5 container ">
        <div className="row g-0">
          <div className="col">
            <div className="card-body shadow p-2 border border-rounded">
              <h5 className="card-title text-start">What is Node? How does Node work?</h5>
              <p className="card-text text-start pt-3">
              It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
              </p>
              {/* <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
