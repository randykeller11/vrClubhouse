import "./styles.css";
import { Suspense } from "react";
import { VRCanvas, DefaultXRControllers } from "@react-three/xr";
import { useProgress, Html, useGLTF } from "@react-three/drei";
import Pyramidion from "./Pyramidion";
import TeleportTravel from "./TeleportTravel";
import AboutMe from "./AboutMe";

function Cube(props) {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[1, 1, 1]} attach="geometry" />
      <meshStandardMaterial attach="material" color={"orange"} />
    </mesh>
  );
}

function Floor(props) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} {...props}>
      <planeBufferGeometry args={[100, 100]} attach="geometry" />
      <meshStandardMaterial attach="material" color={"white"} />
    </mesh>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center style={{ color: "white" }}>
      {progress} % loaded
    </Html>
  );
}

function Model(props) {
  const { scene } = useGLTF("/Pyramidion.glb");
  return <primitive object={scene} {...props} />;
}

export default function App() {
  return (
    <VRCanvas>
      <Suspense fallback={<Loader />}>
        <TeleportTravel useNormal={true} Indicator={Cube}>
          <Floor rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} />
        </TeleportTravel>
        <DefaultXRControllers />
        <AboutMe />
      </Suspense>
    </VRCanvas>
  );
}
