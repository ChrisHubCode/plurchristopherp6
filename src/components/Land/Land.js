import React from "react";
import "./Land.css";

const Land = (props) => {
  return (
    <section className="land-container">
      <img src={props.image} alt={props.description} />
      <p>{props.title}</p>
    </section>
  );
};

export default Land;
