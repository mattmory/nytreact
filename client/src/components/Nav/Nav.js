import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light fixed-top">
    <a className="navbar-brand" href="/">
      NY Times
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarNav">
			<ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <a className="nav-link" href="/">Search</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="/favorites">Favorites</a>
      </li>
    </ul>
    </div>
  </nav>
);

export default Nav;
