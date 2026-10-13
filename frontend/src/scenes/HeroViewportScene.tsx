import { FC, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

interface ShrineProps {
  wireframe: boolean
  autoRotate: boolean
}

/** The 3D Mystic Heritage Shrine and Portal Artifact */
const MysticShrine: FC<ShrineProps> = ({ wireframe, autoRotate }) => {
  const coreRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const archRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    if (autoRotate && groupRef.current) {
      groupRef.current.rotation.y += delta * 0.4
    }

    // Breathing pulse for the central floating celestial relic
    if (coreRef.current) {
      coreRef.current.rotation.y -= delta * 0.7
      coreRef.current.rotation.x += delta * 0.3
      const pulse = 1 + Math.sin(t * 2.8) * 0.08
      coreRef.current.scale.set(pulse, pulse, pulse)
    }

    // Archway & ring counter-rotations
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5
    }
    if (archRef.current) {
      archRef.current.rotation.x = Math.sin(t * 0.6) * 0.15
    }
  })

  // 4 Corner Monolith Pillars around hexagonal base
  const pillarAngles = useMemo(() => [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2], [])

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
        {/* ========================================================
            1. TIERED ARCHITECTURAL BASE & RUNIC PEDESTAL
            ======================================================== */}
        {/* Tier 1: Heavy Obsidian Base Slab */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.65, 1.85, 0.22, 6]} />
          <meshStandardMaterial
            color="#121216"
            roughness={0.65}
            metalness={0.4}
            wireframe={wireframe}
          />
        </mesh>

        {/* Tier 2: Stepped Inner Altar with Gold Trim */}
        <mesh position={[0, 0.18, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.35, 1.48, 0.16, 6]} />
          <meshStandardMaterial
            color="#1c1b22"
            roughness={0.3}
            metalness={0.8}
            wireframe={wireframe}
          />
        </mesh>

        {/* Inscribed Glowing Gold Dial */}
        <mesh position={[0, 0.27, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.5, 1.15, 32]} />
          <meshStandardMaterial
            color="#c8a45c"
            emissive="#a68032"
            emissiveIntensity={0.45}
            roughness={0.2}
            metalness={0.9}
            wireframe={wireframe}
          />
        </mesh>

        {/* Inner Cyan Resonance Well */}
        <mesh position={[0, 0.28, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.42, 24]} />
          <meshStandardMaterial
            color="#1a456e"
            emissive="#2ca8ff"
            emissiveIntensity={0.85}
            wireframe={wireframe}
          />
        </mesh>

        {/* ========================================================
            2. FOUR ANCIENT CARVED MONOLITH PILLARS
            ======================================================== */}
        {pillarAngles.map((angle, idx) => {
          const x = Math.cos(angle) * 1.15
          const z = Math.sin(angle) * 1.15
          return (
            <group key={idx} position={[x, 0.65, z]}>
              {/* Stone Column Body */}
              <mesh castShadow receiveShadow>
                <boxGeometry args={[0.22, 1.0, 0.22]} />
                <meshStandardMaterial
                  color="#1a1921"
                  roughness={0.5}
                  metalness={0.6}
                  wireframe={wireframe}
                />
              </mesh>

              {/* Gold Capital Cap */}
              <mesh position={[0, 0.52, 0]}>
                <boxGeometry args={[0.26, 0.08, 0.26]} />
                <meshStandardMaterial
                  color="#d4af62"
                  roughness={0.25}
                  metalness={0.9}
                  wireframe={wireframe}
                />
              </mesh>

              {/* Glowing Rune Strip */}
              <mesh position={[0, 0, 0.115]}>
                <planeGeometry args={[0.06, 0.65]} />
                <meshBasicMaterial
                  color="#40b5ff"
                  wireframe={wireframe}
                />
              </mesh>
            </group>
          )
        })}

        {/* ========================================================
            3. CELESTIAL ARCHWAY & RESONANCE RINGS
            ======================================================== */}
        {/* Floating Vertical Sacred Arch */}
        <mesh ref={archRef} position={[0, 1.25, 0]}>
          <torusGeometry args={[1.3, 0.035, 16, 48]} />
          <meshStandardMaterial
            color="#d4af62"
            emissive="#947530"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.95}
            wireframe={wireframe}
          />
        </mesh>

        {/* Inner Gyroscopic Equatorial Ring */}
        <mesh ref={ringRef} position={[0, 1.25, 0]} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[0.95, 0.02, 16, 48]} />
          <meshStandardMaterial
            color="#40b5ff"
            emissive="#1a84cf"
            emissiveIntensity={0.8}
            wireframe={wireframe}
          />
        </mesh>

        {/* ========================================================
            4. CENTERPIECE FLOATING CELESTIAL RELIC
            ======================================================== */}
        <group position={[0, 1.25, 0]}>
          {/* Main Faceted Crystal */}
          <mesh ref={coreRef} castShadow>
            <octahedronGeometry args={[0.55, 0]} />
            <meshStandardMaterial
              color="#f5e1a4"
              emissive="#c8a45c"
              emissiveIntensity={0.9}
              roughness={0.1}
              metalness={0.85}
              wireframe={wireframe}
            />
          </mesh>

          {/* Inner Light Core Sphere */}
          <mesh>
            <sphereGeometry args={[0.25, 16, 16]} />
            <meshBasicMaterial
              color="#ffffff"
              wireframe={wireframe}
            />
          </mesh>

          {/* Floating Orbiting Satellite Shards */}
          {[0, (2 * Math.PI) / 3, (4 * Math.PI) / 3].map((angle, i) => (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * 0.85,
                Math.sin(angle * 2) * 0.2,
                Math.sin(angle) * 0.85,
              ]}
              rotation={[angle, angle, 0]}
            >
              <tetrahedronGeometry args={[0.12, 0]} />
              <meshStandardMaterial
                color="#40b5ff"
                emissive="#2090e0"
                emissiveIntensity={1.0}
                roughness={0.1}
                metalness={0.9}
                wireframe={wireframe}
              />
            </mesh>
          ))}
        </group>
      </Float>
    </group>
  )
}

/** Rising energy particle vortex */
const RisingEnergyParticles: FC<{ count?: number }> = ({ count = 75 }) => {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 0.2 + Math.random() * 0.85
      const angle = Math.random() * Math.PI * 2
      pos[i * 3 + 0] = Math.cos(angle) * radius
      pos[i * 3 + 1] = -0.4 + Math.random() * 2.2
      pos[i * 3 + 2] = Math.sin(angle) * radius
    }
    return pos
  }, [count])

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.35
      pointsRef.current.position.y += delta * 0.15
      if (pointsRef.current.position.y > 0.6) {
        pointsRef.current.position.y = -0.3
      }
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#ffe6a3"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

interface HeroViewportSceneProps {
  wireframe?: boolean
  autoRotate?: boolean
}

/** Complete Hero Viewport 3D Showcase with Orbit Inspection */
export const HeroViewportScene: FC<HeroViewportSceneProps> = ({
  wireframe = false,
  autoRotate = true,
}) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 1.2, 4.2], fov: 42 }}
        style={{ width: '100%', height: '100%' }}
      >
        {/* Cinematic Studio Lighting */}
        <ambientLight intensity={0.5} color="#ecebf2" />
        <directionalLight position={[4, 6, 4]} intensity={1.8} color="#fff6e5" castShadow />
        <directionalLight position={[-4, 3, -2]} intensity={1.0} color="#78a0c8" />
        {/* Core Emissive Warm Accent Light */}
        <pointLight position={[0, 0.7, 0]} intensity={2.2} color="#e5c178" distance={5} />
        {/* Cyan Underlight */}
        <pointLight position={[0, -0.4, 0]} intensity={1.5} color="#40b5ff" distance={4} />

        <MysticShrine wireframe={wireframe} autoRotate={autoRotate} />
        <RisingEnergyParticles count={75} />

        {/* Orbit Controls with bounded angles for intuitive turntable inspection */}
        <OrbitControls
          enableZoom={true}
          minDistance={2.4}
          maxDistance={6.0}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.05}
          enablePan={false}
          dampingFactor={0.06}
        />
      </Canvas>
    </div>
  )
}
