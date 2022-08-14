import React from 'react'
import { motion } from 'framer-motion'
import Loader from '../Components/Loader/Loader'

const About = () => {
  return (
    <motion.div
       initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Loader />
      
    </motion.div>
  )
}

export default About
