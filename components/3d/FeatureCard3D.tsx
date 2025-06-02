import { useRef, useState, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'

interface FeatureCard3DProps {
  title: string
  description: string
  position: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
}

export function FeatureCard3D({ title, description, position, rotation = [0, 0, 0], scale = 1 }: FeatureCard3DProps) {
  const mesh = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Create a procedural texture
  const texture = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    const context = canvas.getContext('2d')
    if (!context) return null

    // Create gradient background
    const gradient = context.createLinearGradient(0, 0, 512, 512)
    gradient.addColorStop(0, '#4f46e5')
    gradient.addColorStop(0.5, '#7c3aed')
    gradient.addColorStop(1, '#2563eb')
    context.fillStyle = gradient
    context.fillRect(0, 0, 512, 512)

    // Add some noise
    for (let i = 0; i < 1000; i++) {
      const x = Math.random() * 512
      const y = Math.random() * 512
      const radius = Math.random() * 2
      context.beginPath()
      context.arc(x, y, radius, 0, Math.PI * 2)
      context.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`
      context.fill()
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.wrapS = THREE.RepeatWrapping
    texture.wrapT = THREE.RepeatWrapping
    return texture
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    
    // Smooth hover animation
    const targetRotation = hovered ? 0.2 : 0
    mesh.current.rotation.y = THREE.MathUtils.lerp(
      mesh.current.rotation.y,
      targetRotation,
      0.1
    )

    // Click animation
    if (clicked) {
      mesh.current.scale.x = THREE.MathUtils.lerp(mesh.current.scale.x, 0.95, 0.1)
      mesh.current.scale.y = THREE.MathUtils.lerp(mesh.current.scale.y, 0.95, 0.1)
    } else {
      mesh.current.scale.x = THREE.MathUtils.lerp(mesh.current.scale.x, 1, 0.1)
      mesh.current.scale.y = THREE.MathUtils.lerp(mesh.current.scale.y, 1, 0.1)
    }

    // Floating animation
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05
  })

  return (
    <group position={position} rotation={rotation} scale={scale}>
      <mesh
        ref={mesh}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onPointerDown={() => setClicked(true)}
        onPointerUp={() => setClicked(false)}
      >
        <boxGeometry args={[2, 3, 0.1]} />
        <meshStandardMaterial
          map={texture}
          color={hovered ? '#ffffff' : '#ffffff'}
          opacity={0.8}
          transparent
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      {/* Glow effect */}
      <mesh position={[0, 0, -0.06]}>
        <boxGeometry args={[2.2, 3.2, 0.02]} />
        <meshBasicMaterial
          color={hovered ? '#7c3aed' : '#4f46e5'}
          transparent
          opacity={hovered ? 0.3 : 0.1}
        />
      </mesh>

      <Text
        position={[0, 0.8, 0.06]}
        fontSize={0.2}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
      <Text
        position={[0, 0, 0.06]}
        fontSize={0.1}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        maxWidth={1.8}
      >
        {description}
      </Text>

      {/* Interactive highlight */}
      {hovered && (
        <mesh position={[0, 0, 0.06]}>
          <planeGeometry args={[2, 3]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
      )}
    </group>
  )
} 