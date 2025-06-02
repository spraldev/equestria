import { useRef, useState, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function AnimatedBackground() {
  const mesh = useRef<THREE.Mesh>(null)
  const { viewport, mouse } = useThree()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (!mesh.current) return
    
    // Smooth rotation based on time
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1

    // Mouse interaction
    mesh.current.rotation.x += mousePosition.y * 0.05
    mesh.current.rotation.y += mousePosition.x * 0.05

    // Update material uniforms
    const material = mesh.current.material as THREE.ShaderMaterial
    if (material.uniforms) {
      material.uniforms.time.value = state.clock.elapsedTime
      material.uniforms.mousePosition.value.set(mousePosition.x, mousePosition.y)
    }
  })

  return (
    <mesh ref={mesh} position={[0, 0, -5]}>
      <planeGeometry args={[20, 20, 32, 32]} />
      <shaderMaterial
        uniforms={{
          time: { value: 0 },
          mousePosition: { value: new THREE.Vector2(0, 0) },
          resolution: { value: new THREE.Vector2(viewport.width, viewport.height) }
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          uniform vec2 mousePosition;
          uniform vec2 resolution;
          varying vec2 vUv;

          vec3 color1 = vec3(0.31, 0.27, 0.9); // #4f46e5
          vec3 color2 = vec3(0.49, 0.23, 0.93); // #7c3aed
          vec3 color3 = vec3(0.15, 0.39, 0.92); // #2563eb

          void main() {
            vec2 uv = vUv;
            
            // Add some movement
            uv.x += sin(uv.y * 10.0 + time) * 0.01;
            uv.y += cos(uv.x * 10.0 + time) * 0.01;
            
            // Mouse interaction
            float dist = length(uv - (mousePosition * 0.5 + 0.5));
            float mouseEffect = smoothstep(0.5, 0.0, dist);
            
            // Create gradient
            vec3 color = mix(
              mix(color1, color2, uv.x),
              color3,
              uv.y
            );
            
            // Add mouse interaction effect
            color = mix(color, vec3(1.0), mouseEffect * 0.2);
            
            gl_FragColor = vec4(color, 1.0);
          }
        `}
      />
    </mesh>
  )
} 