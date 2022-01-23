import React, { Suspense, useEffect, useState } from "react";
import { Sky } from "@react-three/drei";
import Coolroom3 from "./components/Coolroom3";
import Stereo from "./components/Stereo";
import Hoop from "./components/Hoop";
import Basketball from "./components/Basketball";
import VendingMachine from "./components/VendingMachine";
import Galaxy from "./components/Galaxy";
import Djbooth from "./components/Djbooth";
import GolfClock from "./components/GolfClock";
import Guitar from "./components/Guitar";

import { DillaPoster, CavsPoster, AboutMeInfo } from "./components/Posters";

function AboutMe() {
  return (
    <>
      <ambientLight intensity={0.9} />

      <Sky />

      <Galaxy position={[3, 9, 10]} scale={[2, 1.2, 2]} />
      <Coolroom3
        position={[-1.5, -0.25, -3]}
        scale={[1.8, 1.2, 1.8]}
        rotation={[0, -1.5, 0]}
      />

      <DillaPoster />
      <CavsPoster />
      <AboutMeInfo />
      <Stereo
        position={[10, 0, -4.85]}
        scale={[0.4, 0.4, 0.4]}
        rotation={[0, -1.4, 0]}
      />

      <GolfClock
        position={[12.3, 3.2, 13.5]}
        scale={[5, 5, 5]}
        rotation={[0, -1.5, 0]}
      />

      <Guitar
        position={[17.2, 1.5, 16.1]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[0, 0, 1.55]}
      />
      <Hoop
        position={[-5.8, 3, 36.5]}
        scale={[3, 3, 2]}
        rotation={[0, 1.6, 0]}
      />
      <Basketball
        position={[9.5, 0.2, 28.5]}
        scale={[0.45, 0.45, 0.45]}
        rotation={[0, 0, 0.7]}
      />
      <VendingMachine
        position={[-3.2, 0, 23]}
        scale={[0.9, 0.9, 0.9]}
        rotation={[0, 1, 0]}
      />

      <Djbooth
        position={[21.48, -1, 16.05]}
        scale={[1.35, 1.35, 1.35]}
        rotation={[0, -0.8, 0]}
      />
    </>
  );
}

export default AboutMe;
