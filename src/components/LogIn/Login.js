import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-50 m-auto mt-5 pt-5 container">
      <form className="w-50 m-auto border rounded p-4">
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
        <div className="mb-3 text-start">
          <div >Don't have an account? Go to  <span> <Link to="/register" className="text-decoration-none fw-bold">Register</Link></span></div>
        </div>
        <div>
          <button href="" className="btn btn-primary w-full">
            Log in
          </button>
        </div>

        <div>
            <button type="submit">github</button>
            <button type="submit">google</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
