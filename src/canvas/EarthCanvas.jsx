import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useTexture, Stars } from "@react-three/drei";

const Earth = () => {
  const hour = new Date().getHours();
  const isDaytime = hour >= 6 && hour < 18;

  const dayMap = useTexture("/earth/8k_earth_daymap.jpg");
  const nightMap = useTexture("/earth/8k_earth_nightmap.jpg");
  const activeMap = isDaytime ? dayMap : nightMap;

  return (
    <mesh scale={2}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial map={activeMap} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ height: "400px" }}
    >
      <Suspense fallback={null}>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        <Stars
          radius={80}
          depth={10} // further reduced depth
          count={1000}
          factor={2}
          saturation={0}
          fade
        />

        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
