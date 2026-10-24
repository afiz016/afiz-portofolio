
"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  useGLTF,
  Center,
  Bounds,
} from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/hero-model.glb");
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.12;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouseY * 0.12,
      0.025
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -mouseX * 0.08,
      0.025
    );
  });

  return (
    <group ref={group}>
      <Float
        speed={1.5}
        rotationIntensity={0.12}
        floatIntensity={0.45}
      >
        <Center>
          <primitive object={scene} />
        </Center>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="h-full w-full">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 40,
        }}
        dpr={[1, 1.75]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        fallback={
          <div className="flex h-full items-center justify-center text-slate-400">
            3D preview unavailable
          </div>
        }
      >
        <ambientLight intensity={1.8} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
          color="#ffffff"
        />

        <pointLight
          position={[-4, 2, 3]}
          intensity={40}
          color="#22d3ee"
        />

        <pointLight
          position={[3, -2, -2]}
          intensity={30}
          color="#8b5cf6"
        />

        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.35}>
            <Model />
          </Bounds>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/hero-model.glb");
