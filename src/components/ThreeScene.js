import { useEffect, useRef } from "react";
import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei/core";
import { useFrame } from "@react-three/fiber";
import { degreesToRadians } from "../utils/angle";
import gsap from "gsap";

const Model = () => {
  const gltf = useGLTF("low_poly_island_full.gltf");
  return <primitive object={gltf.scene} />;
};

const ThreeScene = () => {
  const orbitControlsRef = useRef(null);
  const ballRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      //   const { x, y } = state.mouse;
      //   orbitControlsRef.current.setAzimuthalAngle(-degreesToRadians(45));
      //   orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

  useEffect(() => {
    if (!!ballRef.current) {
      console.log(ballRef.current);
      gsap.to(ballRef.current.position, {
        x: 1,
        duration: 2,
      });
    }
  }, [ballRef.current]);

  return (
    <>
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[8, 20, 50]} />
      <OrbitControls
        ref={orbitControlsRef}
        minPolarAngle={degreesToRadians(10)}
        maxPolarAngle={degreesToRadians(80)}
      />

      {/* Ball */}
      {/* <mesh position={[0, 0.5, 0]} ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#FFCC00" />
      </mesh> */}

      {/* Floor */}
      {/* <mesh rotation={[-degreesToRadians(90), 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <meshStandardMaterial color="#1ea3d8" />
      </mesh> */}

      {/* Model */}
      <Model />

      {/* Lighting */}
      <ambientLight args={["#f3e5bc", 0.25]} />
      <directionalLight args={["#f3e5bc", 0.25]} position={[-20, 1, 0]} />
    </>
  );
};

export default ThreeScene;
