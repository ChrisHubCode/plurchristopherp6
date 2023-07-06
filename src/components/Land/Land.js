import React from "react";
import "./Land.css";

const Land = (props) => {
  return (
    <section className="land-container">
      <img src={props.image} alt={props.description} />
      <h1>{props.title}</h1>
    </section>
  );
};

export default Land;
