import { FC, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { ScrollDrivenScene } from './ScrollDrivenScene'
import { getSmoothScroll } from '../utils/smoothScroll'

export const Background3DCanvas: FC = () => {
  const scrollRef = useRef<number>(0)
  const pointerRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  useEffect(() => {
    // 1. Calculate normalized page scroll (0 to 1)
    const updateScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      if (docHeight > 0) {
        scrollRef.current = Math.min(1, Math.max(0, window.scrollY / docHeight))
      }
    }

    // Connect to Lenis smooth scroll updates for continuous sub-pixel RAF progress
    const lenis = getSmoothScroll()
    let unsubscribeLenis: (() => void) | null = null

    if (lenis) {
      const onLenisScroll = (e: { progress: number }) => {
        scrollRef.current = e.progress
      }
      lenis.on('scroll', onLenisScroll)
      unsubscribeLenis = () => {
        lenis.off('scroll', onLenisScroll)
      }
    }

    // Window event fallback
    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    // 2. Window mouse move listener for pointer parallax
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -((e.clientY / window.innerHeight) * 2 - 1)
      pointerRef.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y))
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      unsubscribeLenis?.()
      window.removeEventListener('scroll', updateScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <PerspectiveCamera makeDefault position={[1.2, 0.5, 6.0]} fov={45} />
        <ScrollDrivenScene scrollRef={scrollRef} pointerRef={pointerRef} />
      </Canvas>
    </div>
  )
}
