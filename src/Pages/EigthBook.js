import React from "react";
import Project from "../Components/Project/Project";

// Assets
import Indigne from "../img/indignetoit.jpeg";
import Indigne1 from "../img/indignetoit1.jpeg";
import Indigne2 from "../img/indignetoit2.jpeg";
// Component
import Footer from "../Components/Footer/Footer";

const EigthBook = () => {
  return (
    <div>
      <Project
        title="Indigne toit "
        textContent="Enquête sur les conditions de vie des quartiers pauvres de Marseille suite à deux effondrements mortels de la rue d'Aubagne. Anthony Micallef donne une voix aux délogés suite aux événements. Près de 5000 personnes ont dû quitter leur foyer pour rejoindre des hôtels. L'ouvrage est un témoignage édifiant et poignant sur le problème du mal logement.  "
        editor="Anthony Micallef "
        edition="Editions André frere, 2021"
        format=" 16,5 x 22 cm, broché"
        img1={Indigne}
        img2={Indigne1}
        img3={Indigne2}
      />
      <Footer path="/NinethBook" />
    </div>
  );
};

export default EigthBook;
