import React from "react";
import Marquee from "react-fast-marquee";
import "./marque.css";

const MarqueeScroll = () => {

  return (
    <div>
     <Marquee 
     className="marquee-scroller"
     gradientColor={[0,0,0]}
     direction={'right'}
     speed={200}
     delay={1}
     >
        <div className="marquee-text">
          Bienvenue sur <span style={{fontSize: '8rem'}}> eikonBiblio</span> la bibliothèque de eikonWork
        </div>
     </Marquee>
     <Marquee 
     className="marquee-scroller"
     gradientColor={[0,0,0]}
     speed={200}
     >
        <div className="marquee-text">
        Bienvenue sur <span style={{fontSize: '8rem'}}> eikonBiblio</span> la bibliothèque de eikonWork
        </div>
     </Marquee>
    </div>
  );
};

export default MarqueeScroll;
