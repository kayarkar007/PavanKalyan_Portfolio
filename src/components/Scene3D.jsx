import React, { useRef, useEffect, Suspense, useMemo } from 'react';
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

const NestedGeometry = () => {
  const groupRef = useRef();
  const innerRef = useRef();
  const outerRef = useRef();
  
  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Rotate group slowly
    groupRef.current.rotation.y = time * 0.1;
    
    // Counter-rotation for inner/outer for "complex" feel
    if (innerRef.current) {
      innerRef.current.rotation.x = time * 0.5;
      innerRef.current.rotation.z = time * 0.3;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -time * 0.4;
      outerRef.current.rotation.z = -time * 0.2;
    }
    
    // Subtle float
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.3;
  });

  return (
    <group ref={groupRef}>
      {/* Outer Wireframe Icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[4, 1]} />
        <meshStandardMaterial 
          color="#ffc300" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#ffc300"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Middle Floating Points/Nodes */}
      <points>
        <icosahedronGeometry args={[3.8, 2]} />
        <pointsMaterial color="#ffc300" size={0.05} transparent opacity={0.6} />
      </points>

      {/* Inner Solid Octahedron */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[2, 0]} />
        <MeshDistortMaterial
          color="#ffc300"
          speed={2}
          distort={0.3}
          metalness={0.9}
          roughness={0.1}
          emissive="#ffc300"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Glow Sphere Core */}
      <mesh>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshBasicMaterial color="#ffc300" transparent opacity={0.1} />
      </mesh>
    </group>
  );
};

const GeometricGrid = () => {
    const points = useMemo(() => {
        const p = [];
        for(let i = 0; i < 20; i++) {
            p.push([
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 40,
                (Math.random() - 0.5) * 20 - 10
            ]);
        }
        return p;
    }, []);

    return (
        <group>
            {points.map((pos, i) => (
                <mesh key={i} position={pos}>
                    <sphereGeometry args={[0.1, 8, 8]} />
                    <meshBasicMaterial color="#ffc300" transparent opacity={0.2} />
                </mesh>
            ))}
        </group>
    );
};

const Scene = () => {
  const groupRef = useRef();
  const geometryRef = useRef();

  useEffect(() => {
    if (!groupRef.current) return;
    gsap.to(groupRef.current.position, {
      y: -15,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    if (geometryRef.current) {
        gsap.to(geometryRef.current.scale, {
            x: 0.6,
            y: 0.6,
            z: 0.6,
            scrollTrigger: {
                trigger: "body",
                start: "top top",
                end: "center center",
                scrub: 1,
            }
        });
    }
  }, []);

  return (
    <group ref={groupRef}>
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#ffc300" />
      <spotLight position={[-10, 20, 10]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" castShadow />

      {/* Main Complex Geometry */}
      <group ref={geometryRef} position={[0, 0, -5]}>
          <NestedGeometry />
      </group>

      {/* Background Geometric Field */}
      <GeometricGrid />
      
      {/* Decorative floating minimal shapes */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={[-12, 8, -15]}>
              <tetrahedronGeometry args={[1.5, 0]} />
              <meshStandardMaterial color="#ffc300" wireframe opacity={0.2} transparent />
          </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
          <mesh position={[15, -10, -12]}>
              <octahedronGeometry args={[2, 0]} />
              <meshStandardMaterial color="#ffffff" wireframe opacity={0.1} transparent />
          </mesh>
      </Float>
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
          gl={{ 
            antialias: false, // Performance boost
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={[1, 2]} // Performance boost on high-DPI screens
        >
          <Scene />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene3D;
