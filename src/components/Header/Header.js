import React from "react";
import { useContext } from "react";
// import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Usercontext";
import "./Header.css";
import ReactTooltip from 'react-tooltip';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  // console.log(user);
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            RS IT{" "}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav  m-auto mb-2 mb-lg-0 text-light  ">
              <li className="nav-item me-2">
                <Link className="nav-link text-light active" aria-current="page" to="/courses">
                  Home
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link text-light" to="/courses">
                  Courses
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link text-light" to="/blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item me-2">
                <Link className="nav-link text-light" to="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
         
            <div className="">
              {user?.uid ? (
                <div
                  onClick={handleSignOut}
                  className="btn btn-outline-primary text-light me-2"
                >
                  Log out
                </div>
              ) : (
                <Link className="btn btn-outline-primary text-light me-2" to="/login">
                  Log in
                </Link>
              )}
              <Link className="btn btn-outline-primary text-light" to="/register">
                register
              </Link>
            </div>
            <div className="ms-2">
              {user?.uid && (
                 <img className="rounded-circle " src={user.photoURL} alt="" />
              
              )}
               <span> {user?.email} </span>
         
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
