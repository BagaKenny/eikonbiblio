import React from 'react'
import { motion } from 'framer-motion'


import Project from '../Components/Project/Project'



// Assets
import Apocalypse from '../img/apocalypse1.jpeg'
import Apocalypse2 from '../img/apocalypse2.jpeg'
import Apocalypse3 from '../img/apocalypse3.jpeg'
import Footer from '../Components/Footer/Footer'
import Loader from '../Components/Loader/Loader'

const FourthBook = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >

    <Loader />
      <Project
        title="Apocalypse"
        textContent="The lost photo archive est le recueil des photos du tournage éprouvant d'Apocalypse Now. Le livre décrit l'ambiance présente, les coulisses et des nouveaux points de vue de scènes iconiques. Les photos se confondraient avec un documentaire historique de la guerre dont le célèbre film tient son existence. "
        editor="Chas Gerretsen "
        edition="PRESTEL, 2021"
        format=" 9.67 x 1.05 x 12.08 inches hardcover"
        video="wH6dvPAxvtA?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Apocalypse}
        img2={Apocalypse2}
        img3={Apocalypse3}
      
       />
       <Footer path="/FifthBook"/>
    </motion.div>
  )
}

export default FourthBook
