import React from "react";
import { motion } from "framer-motion";


import Project from "../Components/Project/Project";

// Assets
import Citizens from "../img/citizenscl2.jpeg";
import Citizens1 from "../img/citizenscl3.jpeg";
import Citizens2 from "../img/citizenscl4.jpeg";

// Component
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";

const TenthBook = () => {
  return (
    <motion.div
       initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      <Project
        title="Citizens  "
        textContent="Christian Lutz a réalisé des photos représentant les partis de droite à travers toute l'Europe. Poussé par l'époque du Brexit, de la pandémie du coronavirus, de la crise financière et des réfugiés, il met en avant le style de vie de ces personnes qui ont leur idéal politique propre et la montée de l'Extrême droite dans la population.  "
        editor=" Chrisitan Lutz. "
        edition="Edition Patrick Frey, 2021"
        format=" 29 × 20 cm Hardcover, 220 pages, 100 color images"
        video="ch0UIuMv4XQ?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Citizens}
        img2={Citizens1}
        img3={Citizens2}
      />
      <Footer path="/EleventhBook" />
    </motion.div>
  );
};

export default TenthBook;
