import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

function Node({ position, color, size = 0.2 }) {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.x += 0.02;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={2}>
      <mesh ref={mesh} position={position}>
        <octahedronGeometry args={[size, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
}

function MainCube() {
  const mesh = useRef();
  const innerMesh = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = Math.sin(t * 0.2);
    mesh.current.rotation.y = Math.cos(t * 0.3);

    innerMesh.current.rotation.x = -Math.sin(t * 0.2);
    innerMesh.current.rotation.y = -Math.cos(t * 0.3);
  });

  return (
    <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh}>
        <boxGeometry args={[2.8, 2.8, 2.8]} />
        <meshStandardMaterial
          color="#8C5FF5"
          metalness={0.8}
          roughness={0.2}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={innerMesh} scale={0.6}>
        <boxGeometry args={[2.8, 2.8, 2.8]} />
        <meshStandardMaterial
          color="#ffffff"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 150 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread particles more widely
      let x = (Math.random() - 0.5) * 15;
      let y = (Math.random() - 0.5) * 15;
      let z = (Math.random() - 0.5) * 10;
      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.y -= 0.0005;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#8C5FF5"
        sizeAttenuation
        transparent
        opacity={0.4}
      />
    </points>
  );
}

export default function Hero3D() {
  return (
    <div
      className="hero-3d-container"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <fog attach="fog" args={["#050505", 5, 25]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#8C5FF5" />
        <pointLight position={[-10, -5, 5]} intensity={1} color="#ffffff" />

        <MainCube />
        <Particles count={200} />

        <Node position={[3, 1.5, -2]} color="#8C5FF5" size={0.3} />
        <Node position={[-3, -1, 0.5]} color="#ffffff" size={0.2} />
        <Node position={[2, -2.5, 1]} color="#8C5FF5" size={0.15} />
        <Node position={[-2.5, 2, -1]} color="#8C5FF5" size={0.25} />
      </Canvas>
    </div>
  );
}
