import React from "react";
import { NavLink, useParams } from "react-router-dom";
import logo from "../../assets/logopink.png";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <nav className="navBar">
      <div className="logo-div">
        <img className="logo-kasa" src={logo} alt="logo kasa" />
      </div>
      <ul>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          <li>ACCUEIL</li>
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          <li>A PROPOS</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
