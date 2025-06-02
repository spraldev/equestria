import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function FloatingFactory() {
  const group = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
  })

  return (
    <group ref={group} position={[0, -1, 0]} scale={[0.5, 0.5, 0.5]}>
      {/* Main Building */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#4f46e5" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.5, 0]}>
        <coneGeometry args={[1.5, 1, 4]} />
        <meshStandardMaterial color="#7c3aed" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Chimney */}
      <mesh position={[0.8, 2, 0.8]}>
        <cylinderGeometry args={[0.2, 0.2, 1.5]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Windows */}
      <mesh position={[0, 1, 1.01]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0, 1, -1.01]}>
        <planeGeometry args={[1.5, 1]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.3} />
      </mesh>

      {/* Smoke */}
      <mesh position={[0.8, 3, 0.8]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshStandardMaterial color="#ffffff" transparent opacity={0.6} />
      </mesh>
    </group>
  )
} 