import React from "react";
import pinkstar from "../../assets/vectorpink.png";
import greystar from "../../assets/vectorgrey.png";

const Stars = (props) => {
  const ratingNumbers = [1, 2, 3, 4, 5];
  const starRating = ratingNumbers.map((ratingNumber, index) => {
    return (
      <img
        src={props.rating >= ratingNumber ? pinkstar : greystar}
        alt="icône étoile"
        key={index}
      />
    );
  });
  return <div>{starRating}</div>;
};

export default Stars;
