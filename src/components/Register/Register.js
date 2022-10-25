import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="w-50 m-auto mt-5 pt-5 container">
        <form className="w-50 m-auto border rounded p-4">
          <div className="mb-3 text-start ">
            <label className="form-label " for="email">
           Your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="enter your name"
            />
          </div>
          <div className="mb-3 text-start ">
            <label className="form-label " for="email">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Your email address"
            />
          </div>
          <div className="mb-3 text-start">
            <label className="form-label" for="password">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              autocomplete="current-password"
            />
          </div>
          <div className="mb-3 text-center">
            <div> Already have an account? please,click here to   <span> <Link to="/login" className="text-decoration-none fw-bold ">Log in</Link></span></div>
          </div>
          <div>
            <button  className="btn btn-primary w-full">
             Register
            </button>
          </div>
        </form>
      </div>
    );
};

export default Register;