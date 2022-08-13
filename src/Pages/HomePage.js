import React from 'react'
import { motion } from 'framer-motion'

// Components
import Loader from '../Components/Loader/Loader'
import Grid from '../Components/GridProjects/Grid'
import MarqueeScroll from '../Components/Marquee/Marquee'
import Header from '../Components/Nav/Header'
import Selection from '../Components/Selection/Selection'
import ScrollToTop from '../Components/ScrollToTop/ScrollToTop'

const HomePage = () => {
  return (
    <motion.div
     initial={{opacity: 0}}
        animate={{opacity: 1, transition: {  duration: 2,
        ease: [0.87, 0, 0.13, 1],}}}
        exit={{opacity: 0}}
    >
    <Header />
    <Loader />
    <ScrollToTop />
    <MarqueeScroll />
    <Selection />
    <Grid />
    </motion.div>
  )
}

export default HomePage
