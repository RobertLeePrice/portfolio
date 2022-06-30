import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { degreesToRadians } from "../utils/angle.js";
import ThreeScene from "./ThreeScene";

const SceneRender = () => {
  return (
    <Canvas id="scene-canvas-container">
      <Suspense fallback={null}>
        <ThreeScene />
      </Suspense>
    </Canvas>
  );
};

export default SceneRender;
