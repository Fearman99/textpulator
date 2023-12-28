import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Link,
} from "react-router-dom";

export default function Navbar(props) {
  const [sun, setSun] = useState("☀️");
  const logo = () => {
    if (sun === "🌑") {
      setSun("☀️");
    } else {
      setSun("🌑");
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            
          </ul>
          <form className="form-inline" role="search">
            <div
              className={`form-check form-switch text-${
                props.modes === "light" ? "black" : "white"
              }`}
            >
              <input
                className="form-check-input mr-sm-2"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={()=>{props.toggleMode();logo();}}
              />
              <label
                className="form-check-label mx-2"
                htmlFor="flexSwitchCheckDefault"
              >
              {sun}
              </label>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  //aboutText : PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "set title here",
};
