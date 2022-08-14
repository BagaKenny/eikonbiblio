import React from "react";
import { motion } from "framer-motion";


import Project from "../Components/Project/Project";

// Assets
import Apiary from "../img/apiary2.jpeg";
import Apiary2 from "../img/apiary4.jpeg";
import Apiary3 from "../img/apiary5.jpeg";


// Component
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";

const EleventhBook = () => {
  return (
    <motion.div
       initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      <Project
        title="Apiary  "
        textContent="Apiary se sert de la ville de Lewes, au sud-est de l'Angleterre pour montrer les conséquences de multiples troubles, d'inégalités et l'instabilité qui touchent les îles britanniques. Robin Friend prend en photos l'événement festif de la Nuit de Guy Fawkes et ses ambiances apocalyptiques qui font penser à des images d'émeutes et d'insurrection politique."
        editor=" Robin Friend "
        edition="Loose Joints Publishing, 2021"
        format=" 132pp, 250 × 250 mm, 60 tritone hardcover"
        video="g0xxVLxEZSo?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Apiary}
        img2={Apiary2}
        img3={Apiary3}
      />
      <Footer path="/TwelveBook"/>
    </motion.div>
  );
};

export default EleventhBook;
