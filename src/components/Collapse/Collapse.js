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

  let collapseContent;
  if (props.collapseType === "description") {
    collapseContent = <p className="collapse-description">{props.content}</p>;
  } else {
    const materials = props.content.map((equipment, index) => (
      <li className="equipment" key={index}>
        {equipment}
      </li>
    ));
    collapseContent = <ul className="equipments-list">{materials}</ul>;
  }

  return (
    <article className="collapse">
      <div onClick={switchCollapse} className="tape">
        <p>{props.title}</p>
        <img
          className={open ? "arrow arrow-up" : "arrow arrow-down"}
          src={arrowDown}
          alt="îcone d'ouverture"
        />
      </div>
      <div className={open ? "collapse-open" : "collapse-close"}>
        {collapseContent}
      </div>
    </article>
  );
};

export default Collapse;
