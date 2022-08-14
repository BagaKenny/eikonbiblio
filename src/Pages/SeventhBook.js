import React from 'react'
import { motion } from 'framer-motion'
import Project from '../Components/Project/Project'


// Assets
import Nsene from '../img/nsenene1.jpg'
import Nsene2 from '../img/nsenene2.webp'
import Nsene3 from '../img/nsenene3.jpg'
import Footer from '../Components/Footer/Footer'
import Loader from '../Components/Loader/Loader'

const SeventhBook = () => {
  return (
    <motion.div
       initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      <Project
        title="Nsene "
        textContent="Le livre raconte la récolte des grillons de brousse en Ouganda dans une ambiance verte et mystique. Nuit après nuit, la tradition implique de nombreux Ougandais qui restent debout jusqu'à l'aube pour attraper les créatures et les revendre par sacs. L'omniprésence des insectes dans la brume nocturne et les feux de joie plonge le pays dans une atmosphère d'un autre monde. "
        editor=" Michele Sibiloni "
        edition="Edition Patrick Frey, 2021"
        format=" Hardcover, 144 pages, 66 color images
31 × 23 cm"
        video="6thzzro04UI?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Nsene}
        img2={Nsene2}
        img3={Nsene3}
      />
      <Footer path="/EigthBook"/>
    </motion.div>
  )
}

export default SeventhBook
