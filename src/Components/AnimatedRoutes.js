import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

//   Pages

import HomePage from "../Pages/HomePage";
import FirstBook from "../Pages/FirstBook";
import SecondBook from "../Pages/SecondBook";
import ThirdBook from "../Pages/ThirdBook";
import FourthBook from "../Pages/FourthBook";
import FifthBook from "../Pages/FifthBook";
import SixthBook from "../Pages/SixthBook";
import SeventhBook from "../Pages/SeventhBook";
import EigthBook from "../Pages/EigthBook";
import NinethBook from '../Pages/NinethBook'
import TenthBook from '../Pages/TenthBook'
import EleventhBook from '../Pages/EleventhBook'
import TwelveBook from '../Pages/TwelveBook'
import Loader from "./Loader/Loader";

// Router Pages

const route = [
  { path: "/", name: "Home", Component: HomePage },
  { path: "/FirstBook", name: "FirstBook", Component: FirstBook },
  { path: "/SecondBook", name: "SecondBook", Component: SecondBook },
  { path: "/ThirdBook", name: "ThirdBook", Component: ThirdBook },
  { path: "/FourthBook", name: "FourthBook", Component: FourthBook },
  { path: "/FifthBook", name: "FifthBook", Component: FifthBook },
  { path: "/SixthBook", name: "SixthBook", Component: SixthBook },
  { path: "/SeventhBook", name: "SeventhBook", Component: SeventhBook },
  { path: "/EigthBook", name: "EigthBook", Component: EigthBook },
  { path: "/NinethBook", name: "NinethBook", Component: NinethBook },
  { path: "/TenthBook", name: "TenthBook", Component: TenthBook },
  { path: "/EleventhBook", name: "EleventhBook", Component: EleventhBook },
  { path: "/TwelveBook", name: "TwelveBook", Component: TwelveBook },
];

const AnimatedRoutes = () => {
  const location = useLocation();
  // Hook pour retrouver où le router se trouve actuellement sur le site
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          {route.map(({ path, name, Component }) => (
            <Route exact key={name} path={path} element={<Component />}></Route>
          ))}
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedRoutes;
