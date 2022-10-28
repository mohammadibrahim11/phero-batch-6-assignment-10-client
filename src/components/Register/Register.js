import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const Register = () => {
  const { createUser, signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
  const navigate=useNavigate();
  const [passwordError,setPasswordError]=useState('');
  console.log(createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
      setPasswordError('provide at least two uppercase')
       return;
    }
    if(password.length < 6){
      setPasswordError('must be at least 6 charecters')
      return;
    }
    setPasswordError('')
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate('/login')
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate('/courses')
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  const handleGithubSignIN = () => {
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        navigate('/courses')
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="w-50 m-auto mt-5 pt-5 container">
      <form onSubmit={handleSubmit} className="w-50 m-auto border rounded p-4">
        <div className="mb-3 text-start ">
          <label className="form-label " for="email">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="enter your name"
            required
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
            name="email"
            placeholder="Your email address"
            required
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

            name="password"
            placeholder="Password"
            autocomplete="current-password"
            required
          />
        </div>
        <p className="text-danger">{passwordError}</p>
        <div className="mb-3 text-center">
          <div>
            {" "}
            Already have an account? please,click here to{" "}
            <span>
              {" "}
              <Link to="/login" className="text-decoration-none fw-bold ">
                Log in
              </Link>
            </span>
          </div>
        </div>
        <div>
          <button className="btn btn-primary w-full mb-2">Register</button>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full mb-2"
            >
              sign in with google
            </button>
            <button onClick={handleGithubSignIN} className="btn btn-primary w-full mb-2">
              sign in with github
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
