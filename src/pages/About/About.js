import React from "react";
import Land from "../../components/Land/Land";
import mountains from "../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash2.png";
import Collapse from "../../components/Collapse/Collapse";

const About = () => {
  return (
    <section>
      <Land
        image={mountains}
        description="Photo d'un paysage représentant des montagnes"
        title=""
      />
      <div>
        <Collapse
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
      </div>
    </section>
  );
};

export default About;
