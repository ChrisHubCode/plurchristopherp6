import React from "react";
import housings from "../../data/logements.json";
import { useParams, Navigate } from "react-router-dom";
import Caroussel from "../../components/Caroussel/Caroussel";
import Stars from "../../components/Stars/Stars";
import Tags from "../../components/Tags/Tags";
import Collapse from "../../components/Collapse/Collapse";
import "./House.css";

const House = () => {
  const { id } = useParams();
  const getOne = () => {
    return housings.find((housing) => housing.id === id);
  };
  const found = housings.find((housing) => housing.id === id);
  console.log(found);

  if (!found) {
    console.log("pas ok");
    return <Navigate replace to="/Error" />;
  }
  return (
    <section className="house-section">
      <Caroussel photos={found.pictures} />
      <div className="info-details">
        <div className="details">
          <p className="details-title">{found.title}</p>
          <p className="details-location">{found.location}</p>
          <Tags tags={found.tags} />
        </div>
        <div className="host-and-stars">
          <div className="host">
            <p className="host-name">{found.host.name}</p>
            <img
              className="host-photo"
              src={found.host.picture}
              alt="photo de l'hébergeur"
            />
          </div>
          <Stars rating={found.rating} />
        </div>
      </div>
      <div className="collapses-house">
        <Collapse
          collapseType="description"
          title="Description"
          content={found.description}
        />
        <Collapse title="Equipements" content={found.equipments} />
      </div>
    </section>
  );
};

export default House;
