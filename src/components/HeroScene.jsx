import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

/**
 * Aguja de brújula: el polo norte (acento) apunta al cursor y, sin cursor,
 * gira despacio. El polo sur queda en negro, como en una brújula real.
 */
function Compass() {
  const groupRef = useRef(null);
  const angle = useRef(0);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;
    const { x, y } = state.pointer;
    const moved = Math.abs(x) + Math.abs(y) > 0.02;
    // Ángulo hacia el cursor (0 = arriba). Sin movimiento, la aguja sigue girando lento.
    const target = moved ? Math.atan2(-x, y) : angle.current + delta * 0.25;
    angle.current += (target - angle.current) * Math.min(1, delta * 4);
    group.rotation.z = angle.current;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0.9, 0]}>
        <coneGeometry args={[0.28, 1.8, 4]} />
        <meshBasicMaterial color="#7b2fff" />
      </mesh>
      <mesh position={[0, -0.9, 0]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.28, 1.8, 4]} />
        <meshBasicMaterial color="#0a0a0a" />
      </mesh>
      <mesh>
        <torusGeometry args={[2.1, 0.008, 8, 160]} />
        <meshBasicMaterial color="#7b2fff" transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 40 }} dpr={[1, 2]} aria-hidden="true">
      <Compass />
    </Canvas>
  );
}
