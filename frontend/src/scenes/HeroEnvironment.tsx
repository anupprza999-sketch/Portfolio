import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export function HeroEnvironment() {
  const outerRingRef = useRef<THREE.Group>(null)
  const innerCoreRef = useRef<THREE.Mesh>(null)
  const columnsGroupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y += delta * 0.15
      outerRingRef.current.rotation.x += delta * 0.05
    }
    if (innerCoreRef.current) {
      innerCoreRef.current.rotation.y -= delta * 0.25
      innerCoreRef.current.rotation.z += delta * 0.1
    }
    if (columnsGroupRef.current) {
      columnsGroupRef.current.rotation.y += delta * 0.08
    }
  })

  return (
    <group position={[0, -0.2, 0]}>
      {/* Floating Hero Object */}
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.8}>
        {/* Core Monolith / Gem */}
        <mesh ref={innerCoreRef} castShadow receiveShadow>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial
            color="#2a2824"
            roughness={0.2}
            metalness={0.85}
            emissive="#1a1409"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Orbiting Gyro Ring */}
        <group ref={outerRingRef}>
          <mesh>
            <torusGeometry args={[2.0, 0.04, 24, 64]} />
            <meshStandardMaterial
              color="#c8a45c"
              roughness={0.25}
              metalness={0.9}
            />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.4, 0.02, 16, 64]} />
            <meshStandardMaterial
              color="#4a4235"
              roughness={0.4}
              metalness={0.7}
            />
          </mesh>
        </group>

        {/* Floating Architectural Pillars representing Environment Design */}
        <group ref={columnsGroupRef}>
          {[-2.2, 2.2].map((x, i) => (
            <mesh key={i} position={[x, (i === 0 ? 0.3 : -0.3), 0]} castShadow>
              <boxGeometry args={[0.25, 1.8, 0.25]} />
              <meshStandardMaterial
                color="#1e1e24"
                roughness={0.6}
                metalness={0.3}
              />
            </mesh>
          ))}
        </group>
      </Float>

      {/* Ground Pedestal / Shadow Receiver */}
      <mesh position={[0, -2.4, 0]} receiveShadow>
        <cylinderGeometry args={[3.2, 3.8, 0.2, 48]} />
        <meshStandardMaterial
          color="#101014"
          roughness={0.8}
          metalness={0.2}
        />
      </mesh>
    </group>
  )
}
