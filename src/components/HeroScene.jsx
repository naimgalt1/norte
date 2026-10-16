import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/** Malla wireframe que gira y se inclina suavemente siguiendo el puntero. */
function Shape() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.x += delta * 0.12;
    mesh.rotation.y += delta * 0.18;
    mesh.position.x += (state.pointer.x * 0.6 - mesh.position.x) * 0.05;
    mesh.position.y += (state.pointer.y * 0.4 - mesh.position.y) * 0.05;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.6, 1]} />
      <meshBasicMaterial color="#7b2fff" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function Particles({ count = 220 }) {
  const pointsRef = useRef(null);
  const positions = useRef(null);

  if (!positions.current) {
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      array[i * 3] = (Math.random() - 0.5) * 12;
      array[i * 3 + 1] = (Math.random() - 0.5) * 8;
      array[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    positions.current = array;
  }

  useFrame((_state, delta) => {
    if (pointsRef.current) pointsRef.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions.current, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#0a0a0a" size={0.03} transparent opacity={0.5} />
    </points>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} aria-hidden="true">
      <Shape />
      <Particles />
    </Canvas>
  );
}
