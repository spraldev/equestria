import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, Stars, Html, Text } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { AnimatedBackground } from './AnimatedBackground'
import { FloatingFactory } from './FloatingFactory'
import { MagicalParticles } from './MagicalParticles'
import { FeatureCard3D } from './FeatureCard3D'

function LoadingScreen() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-spin border-t-transparent"></div>
        </div>
        <p className="mt-4 text-white/80 text-lg">Loading magical experience...</p>
      </div>
    </Html>
  )
}

export function Scene() {
  const controlsRef = useRef<any>(null)

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <Suspense fallback={<LoadingScreen />}>
          <PerspectiveCamera makeDefault position={[0, 0, 7]} />
          <OrbitControls
            ref={controlsRef}
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 4}
            maxAzimuthAngle={Math.PI / 4}
            enableDamping
            dampingFactor={0.05}
          />
          <Environment preset="sunset" />
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Stars radius={100} depth={50} count={2000} factor={3} saturation={0} fade speed={1} />
          <AnimatedBackground />
          <FloatingFactory />
          <MagicalParticles count={800} />

          {/* 3D Title and Subtitle with background panel */}
          <group position={[0, 1.8, 0]}>
            <mesh position={[0, 0, -0.1]}>
              <planeGeometry args={[5.5, 1.5]} />
              <meshStandardMaterial color="#3b0764" transparent opacity={0.7} />
            </mesh>
            <Text
              position={[0, 0.35, 0]}
              fontSize={0.5}
              color="#fff"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Bold.woff"
              outlineColor="#fff"
              outlineWidth={0.01}
            >
              The Communist Utopia of Equestria
            </Text>
            <Text
              position={[0, -0.25, 0]}
              fontSize={0.22}
              color="#e0e7ff"
              anchorX="center"
              anchorY="middle"
              font="/fonts/Inter-Regular.woff"
            >
              Where manufacturing powers progress and equality is our strength
            </Text>
          </group>

          {/* Feature Cards in 3D space */}
          <FeatureCard3D
            title="Our Country"
            description="Discover the industrial districts and manufacturing centers of Equestria"
            position={[-2.2, -1.2, 0]}
            rotation={[0, -0.18, 0]}
            scale={0.95}
          />
          <FeatureCard3D
            title="Economy"
            description="Learn about our magical manufacturing system"
            position={[2.2, -1.2, 0]}
            rotation={[0, 0.18, 0]}
            scale={0.95}
          />

          <EffectComposer>
            <Bloom
              intensity={0.7}
              luminanceThreshold={0.3}
              luminanceSmoothing={0.8}
              height={200}
            />
            <Vignette
              offset={0.5}
              darkness={0.4}
              blendFunction={BlendFunction.NORMAL}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
} 