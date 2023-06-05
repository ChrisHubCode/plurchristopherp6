import React from "react";
import "./Card.css";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  console.log(props.id);
  return (
    <NavLink className="card-container" to={`/fiche-logement/${props.id}`}>
      <article className="card">
        <img src={props.image} alt={props.title} />
        <p className="card-title">{props.title}</p>
      </article>{" "}
    </NavLink>
  );
};

export default Card;
