import React from "react";
import { useState } from "react";
import previousArrow from "../../assets/vectorleft.png";
import nextArrow from "../../assets/vectorright.png";
import "./Caroussel.css";

const Caroussel = (props) => {
  const [current, setCurrent] = useState(0);
  const imageList = props.photos;
  const length = imageList.length;

  const currentImage = imageList.map((image, index) => {
    return (
      <div
        key={index}
        className={current === index ? "caroussel-on" : "caroussel-off"}
      >
        {index === current && (
          <img src={image} className="caroussel-image" alt={props.title} />
        )}
      </div>
    );
  });

  function nextSlide() {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
  function prevSlide() {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }

  if (length > 1) {
    return (
      <div className="caroussel-container">
        {currentImage}
        <img
          className="leftArrow"
          src={previousArrow}
          alt="image précédente"
          onClick={prevSlide}
        />
        <img
          className="rightArrow"
          src={nextArrow}
          alt="image suivante"
          onClick={nextSlide}
        />
        <p className="caroussel-index">
          {current + 1}/{length}
        </p>
      </div>
    );
  } else {
    return <div className="caroussel-container">{currentImage}</div>;
  }
};

export default Caroussel;
