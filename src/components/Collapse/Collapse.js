import React from "react";
import arrowDown from "../../assets/vectordown.png";
import arrowUp from "../../assets/vectorup.png";
import "./Collapse.css";
import { useState } from "react";

const Collapse = (props) => {
  const [open, close] = useState(false);
  function switchCollapse() {
    close((current) => !current);
  }

  return (
    <article className="collapse">
      <div onClick={switchCollapse} className="tape">
        <p>{props.title}</p>
        <img src={open ? arrowUp : arrowDown} alt="îcone d'ouverture" />
      </div>
      <p className={open ? "collapse-open" : "collapse-close"}>
        {props.description}
      </p>
    </article>
  );
};

export default Collapse;
