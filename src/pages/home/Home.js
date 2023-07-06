import React from "react";
import Land from "../../components/Land/Land";
import cliffs from "../../assets/landcliffs.png";
import { getAll } from "../../data/dataHousings";
import Card from "../../components/Card/Card";
import housings from "../../data/logements.json";
import "./Home.css";

console.log(housings);
const Home = () => {
  return (
    <section className="house-main">
      <section>
        <Land
          image={cliffs}
          description="Photo d'un paysage représentant des falaises"
          title="Chez vous, partout et ailleurs"
        />
      </section>

      <section className="housingsContainer">
        {housings.map((housing) => (
          <Card
            key={housing.id}
            image={housing.cover}
            title={housing.title}
            id={housing.id}
          />
        ))}
      </section>
    </section>
  );
};

export default Home;
