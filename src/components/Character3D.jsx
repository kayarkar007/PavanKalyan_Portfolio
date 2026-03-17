import React, { useMemo, useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three-stdlib";

const Character3D = ({ ...props }) => {
  // Use SVGLoader from three-stdlib to avoid version mismatch issues
  const svgData = useLoader(SVGLoader, "/assets/character.svg");
  const groupRef = useRef();

  // Optimized grouping and shape creation
  const colorGroups = useMemo(() => {
    const groups = {};
    if (!svgData || !svgData.paths) return [];

    svgData.paths.forEach((path) => {
      try {
        const color = path.color.getStyle();
        if (!groups[color]) {
          groups[color] = {
            color: path.color,
            shapes: [],
            opacity: path.userData.style.fillOpacity || 1
          };
        }
        // Convert path to shapes - triangulate only once
        const pathShapes = path.toShapes(true);
        groups[color].shapes.push(...pathShapes);
      } catch (err) {
        console.warn("Skipping complex SVG path to prevent crash", err);
      }
    });
    return Object.values(groups);
  }, [svgData]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.elapsedTime;
    const { x, y } = state.mouse;
    
    // Smooth tilt and floating
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.2, 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -y * 0.15, 0.05);
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.25;
  });

  if (colorGroups.length === 0) return null;

  return (
    <group ref={groupRef} {...props} rotation={[Math.PI, 0, 0]} scale={0.007}>
      {colorGroups.map((group, groupIdx) => (
        <mesh key={groupIdx} position={[-1175, -783, 0]}>
          <shapeGeometry args={[group.shapes]} />
          <meshStandardMaterial 
            color={group.color} 
            transparent={group.opacity < 1}
            opacity={group.opacity}
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

export default Character3D;
