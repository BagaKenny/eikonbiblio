import React from "react";
import { motion } from "framer-motion";
import Project from "../Components/Project/Project";

// Assets
import HTLNIP from "../img/htlnip.webp";
import HTLNIP2 from "../img/htlnip2.webp";
import HTLNIP3 from "../img/howtolooknaturalinphotos-3_1024x1024.webp";


import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";

const FifthBook = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      <Project
        title="HTLNIP  "
        textContent="How to look natural in photos — Beata Bartecka & Łukasz Rusznica se sont servis des photos d'archives de l’Institut de la mémoire nationale – Commission pour la poursuite des crimes contre la nation polonaise, qui enquête sur l’histoire de la Pologne entre le début du XXe siècle et la chute du système totalitaire. Le livre met en avant des images d'espions, d’agents, de gardiens, de programmeurs d’algorithmes d’IA, de sujets de surveillance, de suspects, d’archivistes, de condamnés et de passants photographiés au hasard. Tous font partie d'un système totalitaire qui utilise la photographie à ses fins. "
        editor="  Beata Bartecka & Łukasz Rusznica  "
        edition="Palm* Studios, 2021"
        format=" 20 x 26.4 cm Hardcover 304 pages"
        video="qJQEKOSZz8E?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={HTLNIP}
        img2={HTLNIP2}
        img3={HTLNIP3}
      />
      <Footer path="/SixthBook" />
    </motion.div>
  );
};

export default FifthBook;
