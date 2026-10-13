import { FC, useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface ScrollDrivenSceneProps {
  scrollRef: React.MutableRefObject<number>
  pointerRef: React.MutableRefObject<{ x: number; y: number }>
}

export const ScrollDrivenScene: FC<ScrollDrivenSceneProps> = ({ scrollRef, pointerRef }) => {
  const { camera } = useThree()

  // References for animating sub-groups along the vertical corridor
  const heroHoloGridRef = useRef<THREE.Group>(null)

  const worksGroupRef = useRef<THREE.Group>(null)
  const aboutGroupRef = useRef<THREE.Group>(null)
  const skillsGroupRef = useRef<THREE.Group>(null)
  const contactGroupRef = useRef<THREE.Group>(null)

  // Floating Hero Golden Motes (60 micro-particles orbiting the hero monolith)
  const heroMotesCount = 60
  const heroMotesPos = useMemo(() => {
    const pos = new Float32Array(heroMotesCount * 3)
    for (let i = 0; i < heroMotesCount; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      const r = 1.6 + Math.random() * 1.8
      pos[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)
    }
    return pos
  }, [])
  const heroMotesRef = useRef<THREE.Points>(null)

  // Global particle cloud spanning the full height of the 3D scroll corridor
  const particlesCount = 450
  const particlesPos = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3)
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 16
      positions[i * 3 + 1] = 4 - Math.random() * 18
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  const pointsRef = useRef<THREE.Points>(null)

  // Interpolated smooth tracking values
  const smoothScroll = useRef(0)
  const currentCamPos = useRef(new THREE.Vector3(1.2, 0.5, 6.0))
  const currentLookAt = useRef(new THREE.Vector3(0.5, 0, 0))

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime()

    // 1. Smoothly interpolate scroll progress with responsive tracking
    smoothScroll.current = THREE.MathUtils.lerp(smoothScroll.current, scrollRef.current, 0.12)
    const p = smoothScroll.current
    const pointer = pointerRef.current

    // 2. Compute dynamic camera target along 3D corridor
    let targetX = 0
    let targetY = 0
    let targetZ = 6.0
    let lookX = 0
    let lookY = 0

    if (p <= 0.25) {
      const t = p / 0.25
      targetX = THREE.MathUtils.lerp(1.0, -1.8, t)
      targetY = THREE.MathUtils.lerp(0.4, -2.6, t)
      targetZ = THREE.MathUtils.lerp(6.0, 5.4, t)
      lookX = THREE.MathUtils.lerp(0.4, -0.4, t)
      lookY = THREE.MathUtils.lerp(0.0, -2.6, t)
    } else if (p <= 0.5) {
      const t = (p - 0.25) / 0.25
      targetX = THREE.MathUtils.lerp(-1.8, 2.0, t)
      targetY = THREE.MathUtils.lerp(-2.6, -5.2, t)
      targetZ = THREE.MathUtils.lerp(5.4, 5.8, t)
      lookX = THREE.MathUtils.lerp(-0.4, 0.2, t)
      lookY = THREE.MathUtils.lerp(-2.6, -5.2, t)
    } else if (p <= 0.75) {
      const t = (p - 0.5) / 0.25
      targetX = THREE.MathUtils.lerp(2.0, -1.5, t)
      targetY = THREE.MathUtils.lerp(-5.2, -7.8, t)
      targetZ = THREE.MathUtils.lerp(5.8, 5.5, t)
      lookX = THREE.MathUtils.lerp(0.2, -0.2, t)
      lookY = THREE.MathUtils.lerp(-5.2, -7.8, t)
    } else {
      const t = (p - 0.75) / 0.25
      targetX = THREE.MathUtils.lerp(-1.5, 0.0, t)
      targetY = THREE.MathUtils.lerp(-7.8, -10.5, t)
      targetZ = THREE.MathUtils.lerp(5.5, 6.2, t)
      lookX = THREE.MathUtils.lerp(-0.2, 0.0, t)
      lookY = THREE.MathUtils.lerp(-7.8, -10.5, t)
    }

    // Pointer parallax
    targetX += pointer.x * 0.7
    targetY += pointer.y * 0.4

    currentCamPos.current.x = THREE.MathUtils.lerp(currentCamPos.current.x, targetX, 0.12)
    currentCamPos.current.y = THREE.MathUtils.lerp(currentCamPos.current.y, targetY, 0.12)
    currentCamPos.current.z = THREE.MathUtils.lerp(currentCamPos.current.z, targetZ, 0.12)

    currentLookAt.current.x = THREE.MathUtils.lerp(currentLookAt.current.x, lookX, 0.12)
    currentLookAt.current.y = THREE.MathUtils.lerp(currentLookAt.current.y, lookY, 0.12)

    camera.position.copy(currentCamPos.current)
    camera.lookAt(currentLookAt.current)

    // 3. Continuous Ambient Animations - NEVER stop regardless of scroll activity
    if (heroHoloGridRef.current) {
      heroHoloGridRef.current.rotation.z += delta * 0.06
    }
    if (heroMotesRef.current) {
      heroMotesRef.current.rotation.y += delta * 0.12
    }

    // Stage 1-4 continuous ambient animations
    if (worksGroupRef.current) {
      worksGroupRef.current.rotation.y += delta * 0.28
      worksGroupRef.current.rotation.z += delta * 0.1
    }
    if (aboutGroupRef.current) {
      aboutGroupRef.current.rotation.y -= delta * 0.22
      aboutGroupRef.current.rotation.x = Math.sin(time * 0.8) * 0.2
    }
    if (skillsGroupRef.current) {
      skillsGroupRef.current.rotation.y += delta * 0.35
      skillsGroupRef.current.rotation.x += delta * 0.14
    }
    if (contactGroupRef.current) {
      contactGroupRef.current.rotation.y += delta * 0.24
    }

    // 4. Continuous GPU particle rotation & drift (zero buffer re-upload, zero stutter)
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04
      pointsRef.current.position.y += delta * 0.08
      if (pointsRef.current.position.y > 4) {
        pointsRef.current.position.y = -4
      }
    }
  })

  return (
    <>
      {/* Lighting Setup */}
      <ambientLight intensity={0.5} color="#ece9e2" />
      <directionalLight position={[6, 8, 6]} intensity={1.8} color="#fff6e5" castShadow />
      <directionalLight position={[-6, 4, -4]} intensity={1.2} color="#78a0c8" />
      <pointLight position={[1.4, 0.5, 2.5]} intensity={2.0} color="#e5c178" distance={8} />
      <pointLight position={[0, -5, 3]} intensity={1.5} color="#c8a45c" distance={14} />
      <pointLight position={[-3, -8, 2]} intensity={1.2} color="#4588ba" distance={12} />

      {/* Global Particle Cloud */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlesPos, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#d8c28e"
          transparent
          opacity={0.65}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* ========================================================
          STAGE 0: ATMOSPHERIC ENVIRONMENT BACKDROP (Y ~ 0)
          ======================================================== */}
      <group position={[0, -0.6, -2]}>
        {/* Soft volumetric atmospheric glow washes */}
        <mesh position={[2, 0.8, -3]}>
          <sphereGeometry args={[3.6, 16, 16]} />
          <meshBasicMaterial color="#c8a45c" transparent opacity={0.035} />
        </mesh>
        <mesh position={[-3, -0.2, -4]}>
          <sphereGeometry args={[4.2, 16, 16]} />
          <meshBasicMaterial color="#2d5e88" transparent opacity={0.04} />
        </mesh>

        {/* Distant Environment Architectural Silhouette Monoliths */}
        {[-6, -3.2, 2.8, 5.8].map((x, i) => (
          <mesh key={i} position={[x, (i % 2 === 0 ? 0.6 : -0.4), -4.5 - Math.abs(x) * 0.3]}>
            <boxGeometry args={[0.32, 5.0 + (i % 2) * 1.8, 0.32]} />
            <meshStandardMaterial color="#101016" roughness={0.8} metalness={0.3} />
          </mesh>
        ))}

        {/* Horizontal Spatial Perspective Matrix Grid */}
        <group ref={heroHoloGridRef} position={[0, -2.2, 0]} rotation={[-Math.PI / 2.3, 0, 0]}>
          <mesh>
            <ringGeometry args={[1.5, 7.5, 48]} />
            <meshBasicMaterial color="#c8a45c" wireframe transparent opacity={0.07} />
          </mesh>
          <mesh>
            <ringGeometry args={[0.6, 2.2, 32]} />
            <meshBasicMaterial color="#40b5ff" wireframe transparent opacity={0.10} />
          </mesh>
        </group>

        {/* Drifting Golden Micro-Embers */}
        <points ref={heroMotesRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[heroMotesPos, 3]} />
          </bufferGeometry>
          <pointsMaterial
            size={0.045}
            color="#ffe49e"
            transparent
            opacity={0.65}
            blending={THREE.AdditiveBlending}
          />
        </points>
      </group>

      {/* ========================================================
          STAGE 1: WORKS EXHIBITION FLOATING CRYSTALS (Y ~ -2.6)
          ======================================================== */}
      <group position={[-2.2, -2.6, 0]}>
        <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.0}>
          <group ref={worksGroupRef}>
            <mesh>
              <icosahedronGeometry args={[1.2, 0]} />
              <meshStandardMaterial
                color="#181824"
                wireframe
                roughness={0.3}
                metalness={0.9}
                emissive="#c8a45c"
                emissiveIntensity={0.3}
              />
            </mesh>
            <mesh scale={0.75}>
              <octahedronGeometry args={[1.0, 0]} />
              <meshStandardMaterial
                color="#c8a45c"
                roughness={0.2}
                metalness={0.8}
                emissive="#8a6828"
                emissiveIntensity={0.4}
              />
            </mesh>
            <mesh rotation={[Math.PI / 3, 0, 0]}>
              <torusGeometry args={[2.2, 0.02, 16, 48]} />
              <meshStandardMaterial color="#5577aa" roughness={0.3} metalness={0.8} />
            </mesh>
          </group>
        </Float>
      </group>

      {/* ========================================================
          STAGE 2: ABOUT & HERITAGE PAGODA FRAMES (Y ~ -5.2)
          ======================================================== */}
      <group position={[2.4, -5.2, 0]}>
        <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.6}>
          <group ref={aboutGroupRef}>
            {[1.2, 1.8, 2.4].map((size, idx) => (
              <mesh key={idx} position={[0, (idx - 1) * 0.45, 0]} rotation={[0, (idx * Math.PI) / 6, 0]}>
                <torusGeometry args={[size, 0.03, 16, 4]} />
                <meshStandardMaterial
                  color={idx === 1 ? '#c8a45c' : '#2b2a30'}
                  roughness={0.4}
                  metalness={0.75}
                />
              </mesh>
            ))}
            <mesh position={[0, 0, 0]}>
              <cylinderGeometry args={[0.3, 0.6, 1.2, 12]} />
              <meshStandardMaterial
                color="#b89348"
                roughness={0.35}
                metalness={0.85}
                emissive="#3a2e10"
                emissiveIntensity={0.2}
              />
            </mesh>
          </group>
        </Float>
      </group>

      {/* ========================================================
          STAGE 3: TECHNICAL TOOLSET POLYHEDRA (Y ~ -7.8)
          ======================================================== */}
      <group position={[-2.4, -7.8, 0]}>
        <Float speed={2.0} rotationIntensity={0.7} floatIntensity={0.9}>
          <group ref={skillsGroupRef}>
            <mesh position={[0, 0, 0]}>
              <dodecahedronGeometry args={[1.1, 0]} />
              <meshStandardMaterial
                color="#1b1d28"
                roughness={0.3}
                metalness={0.8}
                wireframe
              />
            </mesh>
            <mesh position={[0, 0, 0]} scale={0.7}>
              <tetrahedronGeometry args={[1.0, 0]} />
              <meshStandardMaterial
                color="#3d5a80"
                roughness={0.25}
                metalness={0.9}
                emissive="#1a324b"
                emissiveIntensity={0.35}
              />
            </mesh>
            <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
              <torusGeometry args={[2.0, 0.025, 16, 64]} />
              <meshStandardMaterial color="#c8a45c" roughness={0.3} metalness={0.85} />
            </mesh>
          </group>
        </Float>
      </group>

      {/* ========================================================
          STAGE 4: CONTACT TERMINAL CONVERGENCE PORTAL (Y ~ -10.5)
          ======================================================== */}
      <group position={[0, -10.5, 0]}>
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
          <group ref={contactGroupRef}>
            <mesh castShadow>
              <octahedronGeometry args={[1.0, 0]} />
              <meshStandardMaterial
                color="#d4af62"
                roughness={0.2}
                metalness={0.95}
                emissive="#c8a45c"
                emissiveIntensity={0.6}
              />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[2.2, 0.035, 16, 64]} />
              <meshStandardMaterial color="#e5c178" roughness={0.25} metalness={0.9} />
            </mesh>
            <mesh rotation={[Math.PI / 3, Math.PI / 6, 0]}>
              <torusGeometry args={[2.6, 0.02, 16, 64]} />
              <meshStandardMaterial color="#556677" roughness={0.4} metalness={0.7} />
            </mesh>
            <mesh position={[0, -2.0, 0]} receiveShadow>
              <cylinderGeometry args={[3.2, 3.6, 0.15, 48]} />
              <meshStandardMaterial color="#121216" roughness={0.7} metalness={0.3} />
            </mesh>
          </group>
        </Float>
      </group>
    </>
  )
}
