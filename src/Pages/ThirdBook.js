import React from 'react'
import { motion } from 'framer-motion'


import Project from '../Components/Project/Project'

// Assets
import Arn from '../img/arn.jpeg'
import Arn2 from '../img/arn2.png'
import Arn3 from '../img/arn3.jpeg'
import Footer from '../Components/Footer/Footer'
import Loader from '../Components/Loader/Loader'

const ThirdBook = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      <Project
      title="ARN vol.1  "
        textContent="Ce livre est, comme son nom le suggère, le premier tome d’une aventure photographique singulière, autant par ses dimensions que par sa durée. Commencée il y a cinq ans, son ambition est de documenter de manière égale les 450 régions naturelles ou “pays“ composant le territoire français. "
        editor=" Eric Tabuchi & Nelly Monnier"
        edition="Buchkunst Berlin, 2021"
        format=" 21.5 × 28 cm"
        video="CaKyess2q5A?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Arn}
        img2={Arn2}
        img3={Arn3}
       />
       <Footer path="/FourthBook"/>
    </motion.div>
  )
}

export default ThirdBook
