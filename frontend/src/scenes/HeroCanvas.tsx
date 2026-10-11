import { Suspense, FC } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { HeroEnvironment } from './HeroEnvironment'

interface HeroCanvasProps {
  className?: string
}

export const HeroCanvas: FC<HeroCanvasProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full min-h-[480px] ${className}`}>
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0.5, 6.2]} fov={45} />

        {/* Cinematic 3D Lighting Setup */}
        {/* Soft Ambient Fill */}
        <ambientLight intensity={0.4} color="#f0ede6" />

        {/* Primary Key Light with Warm Golden Cast */}
        <directionalLight
          position={[5, 8, 5]}
          intensity={1.8}
          color="#fff5e0"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />

        {/* Cool Rim/Back Light for Edge Separation */}
        <directionalLight
          position={[-6, 4, -4]}
          intensity={1.2}
          color="#9ab3cf"
        />

        {/* Accent Point Light on the Monolith */}
        <pointLight position={[0, -0.5, 2]} intensity={0.8} color="#c8a45c" />

        <Suspense fallback={null}>
          <HeroEnvironment />
        </Suspense>
      </Canvas>
    </div>
  )
}
