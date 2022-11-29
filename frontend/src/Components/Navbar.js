import React from "react";
import logo from "../logo.png";
import { NavLink } from "react-router-dom";
import { Text } from "@chakra-ui/react";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
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
              <Text size="sm" color="blue.700">
                Home <span className="sr-only">(current)</span>
              </Text>
            </NavLink>

            <NavLink className="navbar-brand" to="/register-task">
              <Text size="sm" color="blue.700">Register Task</Text>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
