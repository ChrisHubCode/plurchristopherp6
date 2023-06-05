import React from "react";
import housings from "../../data/logements.json";
import { useParams } from "react-router-dom";
import Caroussel from "../../components/Caroussel/Caroussel";
import Stars from "../../components/Stars/Stars";
import Tags from "../../components/Tags/Tags";

const House = () => {
  const { id } = useParams();
  const getOne = () => {
    return housings.find((housing) => housing.id === id);
  };
  const found = housings.find((housing) => housing.id === id);
  console.log(found);
  return (
    <section>
      <h1>{id}</h1>
      <Caroussel photos={found.pictures} />
      <Stars rating={found.rating} />
      <Tags tags={found.tags} />
    </section>
  );
};

export default House;
