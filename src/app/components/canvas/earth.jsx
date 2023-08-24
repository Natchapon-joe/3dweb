"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

export default function EarthCanvas() {
  const earth = useGLTF("./planet/scene.gltf");
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 20,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={"loding..."}>
        <OrbitControls
          autoRotate
          enableZoom={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <primitive
          object={earth.scene}
          scale={1.5}
          position-y={0}
          rotation-y={0}
        />

        <Preload all />
      </Suspense>
    </Canvas>
  );
}
