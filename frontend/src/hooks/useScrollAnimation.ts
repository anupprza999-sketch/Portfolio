import { useEffect, useRef } from 'react'
import { gsap } from '../animations/gsap'
import { initSmoothScroll } from '../utils/smoothScroll'

export function useScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 1. Initialize Lenis silky smooth momentum scrolling
    initSmoothScroll()

    // 2. Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Reveal sections on scroll with smooth staggered translation that STAYS visible
      const sections = gsap.utils.toArray<HTMLElement>('section:not(#hero)')

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              // Keep elements visible once entered; do NOT reverse or stop animations on scroll
              once: true,
            }
          }
        )
      })

      // Hero text entrance animation
      gsap.fromTo(
        '#hero-content',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          delay: 0.1
        }
      )
    }, containerRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return { containerRef }
}
