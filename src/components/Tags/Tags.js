import React from "react";

const Tags = (props) => {
  const tagItems = props.tags.map((tagItem, index) => {
    return <p key={index}>{tagItem}</p>;
  });
  return <div>{tagItems}</div>;
};

export default Tags;
