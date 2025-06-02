import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function MagicalParticles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null)
  
  const particles = useMemo(() => {
    const temp = []
    const colors = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      temp.push(x, y, z)

      // Add color variation
      const color = new THREE.Color()
      color.setHSL(Math.random() * 0.1 + 0.6, 0.8, 0.5)
      colors.push(color.r, color.g, color.b)
    }
    return {
      positions: new Float32Array(temp),
      colors: new Float32Array(colors)
    }
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    
    // Animate particles
    const positions = mesh.current.geometry.attributes.position.array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(state.clock.elapsedTime + i) * 0.001
    }
    mesh.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particles.colors.length / 3}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
} 