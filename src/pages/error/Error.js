import React from "react";
import { NavLink } from "react-router-dom";
import "./Error.css";

const Error = () => {
  return (
    <section className="container-error">
      <p className="error-number">404</p>
      <p className="error-message">
        Oups! La page que vous demandez n'existe pas
      </p>
      <NavLink to="/">
        <p className="error-link">Retourner sur la page d'accueil</p>
      </NavLink>
    </section>
  );
};

export default Error;
