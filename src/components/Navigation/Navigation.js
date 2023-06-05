import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logopink.png";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <nav className="navBar">
      <div>
        <img src={logo} alt="logo kasa" />
      </div>
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/About">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
