import React from 'react';
// import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom'
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
      <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">RS IT </Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">Courses</Link >
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blog">Blog</Link >
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/faq">FAQ</Link >
        </li>
      </ul>
      <div className="d-flex">
         <Link className="btn btn-outline-primary me-2" to="/login">Log in</Link>

        <Link className="btn btn-outline-primary" to="/register">register</Link>
     
      </div>
    </div>
  </div>
</nav>
 </div>
        
    );
};

export default Header;