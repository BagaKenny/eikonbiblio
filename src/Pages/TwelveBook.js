import React from 'react'



// Component
import Footer from '../Components/Footer/Footer'
import Project from '../Components/Project/Project'

// Assets
import BordsReels from "../img/bordsreels2.jpeg";
import BordsReels2 from "../img/bordsreels3.jpg";
import BordsReels3 from "../img/bordsreels.jpeg";

const TwelveBook = () => {
  return (
    <div>
      <Project 
              title="Bords Reels  "
        textContent="Ce livre fait partie de la sélection des 10 livres remarqués par le Prix Nadar 2021. Un documentaire prenant sur la Bosnie qui semble rester en léthargie malgré les 25 ans qui la sépare de la guerre. Les Bords réels traduit en photographie les violences sourdes par des portraits forts emprunts de sentiments étranges. C'est un état du temps d'un pays fantôme encore meurtri.  "
        editor=" Adrien Selbert"
        edition="le bec en l'air, 2021"
        format=" Tirages argentiques Lambda, 24 x 18 cm, réalisés sur papier RC Mat 250g."
        img1={BordsReels}
        img2={BordsReels2}
        img3={BordsReels3}

      />
      <Footer />
    </div>
  )
}

export default TwelveBook
