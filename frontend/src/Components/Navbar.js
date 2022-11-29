import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <img src={logo} width="30%" alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="navbar-brand" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>

            <NavLink className="navbar-brand" to="/register-task">
              Register Task
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
