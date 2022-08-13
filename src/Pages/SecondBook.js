import React from 'react'
import Project from '../Components/Project/Project'
import Footer from '../Components/Footer/Footer'

// Assets
import Limbo from '../img/Limbo.jpeg'
import Limbo2 from '../img/Limbo5.webp'
import Limbo3 from '../img/Limbo2.jpeg'
const SecondBook = () => {
  return (
    <div>
      <Project
           title="In Limbo"
        textContent="Florain Bachmeier a traversé l'Ukraine, ses villes, ses villages et son front pendant 8 ans. Les photos décrivent un état d'incertitude permanent, les portraits parlent de biographies dans lesquelles le conflit s'est inscrit de manière visible et invisible. Le front traverse le paysage et transcende les images."
        editor="Florain Bachmeier  "
        edition="Buchkunst Berlin, 2021"
        format=" 21.5 × 28 cm"
        video="smcqYnywqyE?controls=0&showinfo=0&modestbranding=1&autohide=1"
        img1={Limbo}
        img2={Limbo2}
        img3={Limbo3}
       />
      <Footer path="/ThirdBook" />
    </div>
  )
}

export default SecondBook
