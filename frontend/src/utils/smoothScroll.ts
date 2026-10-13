import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../animations/gsap'

let lenisInstance: Lenis | null = null

export function initSmoothScroll(): Lenis {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.8,
    infinite: false,
  })

  // Synchronize Lenis scroll position with GSAP ScrollTrigger
  lenisInstance.on('scroll', () => {
    ScrollTrigger.update()
  })

  // Tie Lenis animation frame directly into GSAP's high-performance ticker
  gsap.ticker.add((time: number) => {
    lenisInstance?.raf(time * 1000)
  })

  // Prevent GSAP lag smoothing from halting or throttling animations while scrolling
  gsap.ticker.lagSmoothing(0)

  return lenisInstance
}

export function getSmoothScroll(): Lenis | null {
  return lenisInstance
}

export function scrollToTarget(target: string | HTMLElement, offset: number = -60) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset, duration: 1.2 })
  } else {
    const el = typeof target === 'string' ? document.getElementById(target.replace('#', '')) : target
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
