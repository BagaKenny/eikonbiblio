import React from "react";
import { motion } from "framer-motion";


import Project from "../Components/Project/Project";

// Assets
import Time from "../img/temps.jpeg";
import Time2 from "../img/temps1.jpeg";
import Time3 from "../img/voyagtemps.webp";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader";

const NinethBook = () => {
  return (
    <motion.div
       initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      <Project
        title="Gardiens du temps "
        textContent="Les Gardiens du temps — Florence Joubert documente la dernière station météorologique de montagne habitée en France, l'Observatoire du mont Aigoual est situé sur le toit des Cévennes. La bâtisse résiste aux conditions extrêmes de la région et à la disparition du métier. Le livre pose la question de la place de l'homme dans la nature et le remplacement de son rôle par la technologie. Les images racontent la vie des météorologistes et dévoilent les paysages saisissants qui les entourent, donnant presque un aspect magique à cette histoire. "
        editor="Florence Joubert "
        edition="Les Editions de juillet, 2021"
        format=" Format 210 x 270 mm Couverture cartonnée"
        video="qCslexkvDQA?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Time}
        img2={Time2}
        img3={Time3}
      />
      <Footer path="/TenthBook"/>
    </motion.div>
  );
};

export default NinethBook;
