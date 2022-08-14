import React from "react";
import { motion } from "framer-motion";
import Project from "../Components/Project/Project";

// Assets
import Reaching from "../img/reachingfordawn1.webp";
import Reaching1 from "../img/reachingfordawn2.webp";
import Reaching2 from "../img/reachingfordawn3.webp";


import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";

const SixthBook = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      <Project
        title="Reach.. for Dawn"
        textContent="Un témoignage de la capacité et le mécanisme à surmonter le choc de l'après-guerre civile au Libéria, un pays où le traumatisme latent de la population reste largement ignoré. La confection du livre transmet une atmosphère immersive de par son impression spécifique "
        editor="Elliott Verdier"
        edition="Dunes Editions, 2021"
        format=" 21.5 × 28 cm"
        video="-BD-UeyjTfM?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Reaching}
        img2={Reaching1}
        img3={Reaching2}
      />
      <Footer path="/SeventhBook"/>
    </motion.div>
  );
};

export default SixthBook;
