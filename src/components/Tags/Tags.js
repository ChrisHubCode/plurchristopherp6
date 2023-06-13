import React from "react";
import "./Tags.css";

const Tags = (props) => {
  const tagItems = props.tags.map((tagItem, index) => {
    return (
      <p className="tag" key={index}>
        {tagItem}
      </p>
    );
  });
  return <div className="tagBar">{tagItems}</div>;
};

export default Tags;
