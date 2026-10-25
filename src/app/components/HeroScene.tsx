
"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Bounds,
  Center,
  Float,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

function GraduationModel() {
  const { scene } = useGLTF("/models/hero-model.glb");
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!modelRef.current) return;

    modelRef.current.rotation.y += delta * 0.12;

    modelRef.current.rotation.x = THREE.MathUtils.lerp(
      modelRef.current.rotation.x,
      state.pointer.y * 0.08,
      0.03
    );
  });

  return (
    <group ref={modelRef}>
      <Float
        speed={1.3}
        rotationIntensity={0.08}
        floatIntensity={0.25}
      >
        <Center>
          <primitive object={scene} />
        </Center>
      </Float>
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <Bounds fit clip observe margin={1.4}>
        <GraduationModel />
      </Bounds>

      <OrbitControls
        makeDefault
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
      />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 40,
        }}
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={2.2} />

        <hemisphereLight
          args={["#d8f6ff", "#64748b", 2]}
        />

        <directionalLight
          position={[4, 6, 5]}
          intensity={3.5}
          color="#ffffff"
        />

        <pointLight
          position={[-4, 2, 4]}
          intensity={45}
          color="#67e8f9"
        />

        <pointLight
          position={[3, -2, -3]}
          intensity={35}
          color="#a78bfa"
        />

        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/hero-model.glb");
