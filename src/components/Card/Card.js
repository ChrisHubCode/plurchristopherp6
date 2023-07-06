import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <NavLink className="card-container" to={`/fiche-logement/${props.id}`}>
      <article className="card">
        <img src={props.image} alt={props.title} />
        <h2 className="card-title">{props.title}</h2>
      </article>{" "}
    </NavLink>
  );
};

export default Card;
