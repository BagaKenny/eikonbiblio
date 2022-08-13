import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 2,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <div className="loading-screen">
      <motion.div
        className="bg-black"
        initial="initial"
        animate="animate"
        variants={blackBox}
        onAnimationStart={() => document.body.classList.add("overflow-hidden")}
        onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
        }
      />
    </div>
  );
};

export default Loader;
