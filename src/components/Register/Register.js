import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";

const Register = () => {
  const [error,setError]=useState('');

  const { updateUserProfile, createUser, signInWithGoogle,signInWithGitHub } = useContext(AuthContext);
  const navigate=useNavigate();
  // const [passwordError,setPasswordError]=useState('');
  console.log(createUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL =form.photoURL.value;
    console.log(name, email, password,photoURL);
  
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate('/login')
        console.log(user);
        setError('')
        form.reset()
        handleUserProfile(name,photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        navigate('/courses')
        console.log(user);
        setError('')
      })
      .catch((error) => console.error(error));
      setError(error.message)
  };

  const handleUserProfile = (name,photoURL)=>{
    const profile = {displayName:name,
    photoURL:photoURL}
    updateUserProfile(profile)
    .then(()=>{})
    .cathc((error)=>console.error(error))
  }
  const handleGithubSignIN = () => {
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        navigate('/courses')
        console.log(user);
        setError('')
      })
      .catch((error) => console.error(error));
      setError(error.message)
  };
  return (
    <div className=" m-auto mt-5 pt-5 ">
      <form onSubmit={handleSubmit} className="w-50 m-auto border rounded p-2">
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
          <label className="form-label " for="photoURL">
            photoURL
          </label>
          <input
            type="photoURL"
            className="form-control"
            id="name"
            name="photoURL"
            placeholder=""
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
        {/* <p className="text-danger">{passwordError}</p> */}
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
        <div className="text-danger">
          {error}
        </div>
        <div>
          <button className="btn btn-primary w-full mb-2">Register</button>
          <div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary w-full  ps-2 me-2 "
            >
              sign in with google
            </button>
            {/* <br/> */}
            <button onClick={handleGithubSignIN} className="btn btn-primary w-full ps-2 ms-2">
              sign in with github
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
