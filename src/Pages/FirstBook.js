import React from 'react'


import { motion } from 'framer-motion'



import Footer from '../Components/Footer/Footer'
import Loader from '../Components/Loader/Loader'
import Project from '../Components/Project/Project'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'


// Assets
import Marvel from '../img/Marvel1.jpeg'
import Marvel2 from '../img/Marvel2.jpeg'
import Marvel3 from '../img/Marvel3.jpeg'




const FirstBook = () => {

  return (
    <motion.div
    initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
    <ScrollToTop />
      <Project 
        title="Marvel Harris"
        textContent="Marvel Harris a documenté son cheminement dans sa transformation de genre. Les photos et les auto-portraits immergent dans les difficultés qu'il a dû traverser, entre combat mental et opération chirurgicale. Le livre inspire à l'amour de soi et sensibilise aux problèmes dû à l'identité de genre et à la santé mentale."
        editor="Marvel Harris"
        edition="Mack, 2021"
        format="24.6 x 37 cm - 140 pages - Couverture rigide"
        video="8NmleqdgWL8?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Marvel}
        img2={Marvel2}
        img3={Marvel3}
      />
      <Footer path="/SecondBook" />
    </motion.div>
  )
}

export default FirstBook
