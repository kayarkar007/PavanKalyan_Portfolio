import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Center } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Shape = ({ position, color, speed, distort, radius }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.cos(time / 4);
    meshRef.current.rotation.y = Math.sin(time / 4);
  });

  return (
    <Float speed={speed} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position} ref={meshRef}>
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.4}
          transparent
          opacity={0.4}
        />
      </mesh>
    </Float>
  );
};

const GeometricObject = ({ position, geometry, color, speed }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += 0.01 * speed;
    meshRef.current.rotation.y += 0.01 * speed;
  });

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <mesh position={position} ref={meshRef}>
        {geometry}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.1}
          metalness={0.9}
          roughness={0.2}
          transparent
          opacity={0.3}
        />
      </mesh>
    </Float>
  );
};

const Scene = () => {
  const groupRef = useRef();

  useEffect(() => {
    if (!groupRef.current) return;
    gsap.to(groupRef.current.position, {
      y: -8,
      ease: "none",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      }
    });
  }, []);

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1.5} />
      <pointLight position={[10, 10, 10]} intensity={3} color="#ffc300" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />

      {/* Ambient floating shapes – subtle background decoration */}
      <Shape position={[-12, 6, -15]} color="#ffc300" speed={1.5} distort={0.5} radius={2} />
      <Shape position={[12, -8, -12]} color="#ffffff" speed={1} distort={0.3} radius={3} />
      
      <GeometricObject 
        position={[10, 10, -10]} 
        geometry={<octahedronGeometry args={[2.5, 0]} />} 
        color="#ffc300" 
        speed={0.8} 
      />
      
      <GeometricObject 
        position={[-15, -4, -15]} 
        geometry={<torusKnotGeometry args={[1.5, 0.5, 64, 8]} />} 
        color="#ffffff" 
        speed={0.6} 
      />
    </group>
  );
};

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden h-screen w-screen">
      <Suspense fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 25], fov: 45 }}
          style={{ height: '100vh', width: '100vw', background: 'transparent' }}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene3D;
