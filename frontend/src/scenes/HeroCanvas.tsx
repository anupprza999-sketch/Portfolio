import { Suspense, FC, useState, useCallback, MouseEvent } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { HeroEnvironment } from './HeroEnvironment'

interface HeroCanvasProps {
  className?: string
}

export const HeroCanvas: FC<HeroCanvasProps> = ({ className = '' }) => {
  const [pointer, setPointer] = useState<{ x: number; y: number }>({ x: 0, y: 0 })

  // Normalized clamped pointer coordinates (-1 to 1) without creating GC pressure
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1)
    setPointer({
      x: Math.max(-1, Math.min(1, x)),
      y: Math.max(-1, Math.min(1, y))
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    setPointer({ x: 0, y: 0 })
  }, [])

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full h-full min-h-[480px] ${className}`}
    >
      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <PerspectiveCamera makeDefault position={[0, 0.5, 6.2]} fov={45} />

        {/* Ambient & Directional Lighting Setup */}
        <ambientLight intensity={0.4} color="#f0ede6" />

        <directionalLight
          position={[5, 8, 5]}
          intensity={1.8}
          color="#fff5e0"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />

        <directionalLight
          position={[-6, 4, -4]}
          intensity={1.2}
          color="#9ab3cf"
        />

        <pointLight position={[0, -0.5, 2]} intensity={0.8} color="#c8a45c" />

        <Suspense fallback={null}>
          <HeroEnvironment pointer={pointer} />
        </Suspense>
      </Canvas>
    </div>
  )
}
