import React from "react";



function Nav() {
return (
<div>
<nav className="navbar  navbar-expand-lg navbar-dark bg-dark  mb-5 fixed-top">
  <a className="navbar-brand ms-5" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      <li className="nav-item me-5">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>
  </div>
</nav>
</div>);
};


export default Nav;