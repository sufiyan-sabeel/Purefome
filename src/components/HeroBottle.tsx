import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

type Props = {
  scrollProgress?: number
  mouse: { x: number; y: number }
  exploded?: boolean
  activeNote?: string | null
}

export default function HeroBottle({ mouse, scrollProgress = 0, exploded = false, activeNote = null }: Props) {
  const group = useRef<THREE.Group>(null!)
  const capRef = useRef<THREE.Mesh>(null!)
  const liquidRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (!group.current) return

    // Gentle rotation + mouse parallax
    const baseRotY = t * 0.12
    const mouseX = mouse.x * 0.25
    const mouseY = mouse.y * 0.12

    // Scroll transform: scale down, shift right, subtle rotate
    const s = THREE.MathUtils.clamp(scrollProgress, 0, 1)
    const scale = THREE.MathUtils.lerp(1, 0.72, s)
    group.current.scale.setScalar(scale)
    group.current.position.x = THREE.MathUtils.lerp(0, 1.6, s)
    group.current.position.y = THREE.MathUtils.lerp(0, -0.3, s) + Math.sin(t * 0.6) * 0.08
    group.current.rotation.y = baseRotY + mouseX
    group.current.rotation.x = THREE.MathUtils.lerp(0.05, -0.08, s) + mouseY
    group.current.rotation.z = THREE.MathUtils.lerp(0, 0.08, s)

    // Exploded offset
    if (exploded && capRef.current && liquidRef.current) {
      const exp = activeNote ? 0.9 : 0.55
      capRef.current.position.y = THREE.MathUtils.lerp(1.05, 1.05 + exp, 1)
      // highlight active
      const isTop = activeNote === 'top'
      const isBase = activeNote === 'base'
      if (liquidRef.current.material) {
        const mat = liquidRef.current.material as THREE.MeshPhysicalMaterial
        mat.emissiveIntensity = isBase ? 0.35 : isTop ? 0.15 : 0.05
      }
      if (capRef.current.material) {
        const mat = capRef.current.material as THREE.MeshStandardMaterial
        mat.emissiveIntensity = activeNote === 'middle' ? 0.3 : 0.02
      }
    } else if (capRef.current) {
      capRef.current.position.y = THREE.MathUtils.lerp(capRef.current.position.y, 1.05, 0.08)
    }
  })

  const glassMat = useMemo(() => ({
    transmission: 1,
    thickness: 0.35,
    roughness: 0.06,
    chromaticAberration: 0.04,
    ior: 1.45,
    distortion: 0.04,
    temporalDistortion: 0.08,
  }), [])

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.12} floatIntensity={0.6}>
        <group ref={group} position={[0, 0, 0]}>
          {/* Bottle body - luxury silhouette */}
          <mesh position={[0, -0.05, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.55, 0.62, 1.7, 64]} />
            {/* @ts-ignore */}
            <MeshTransmissionMaterial
              {...glassMat}
              color="#f6f0e6"
              backside={false}
            />
          </mesh>

          {/* Liquid inside */}
          <mesh ref={liquidRef} position={[0, -0.12, 0]}>
            <cylinderGeometry args={[0.50, 0.56, 1.45, 64]} />
            <meshPhysicalMaterial
              color="#d4af37"
              transparent
              opacity={0.82}
              roughness={0.18}
              metalness={0.0}
              clearcoat={1}
              clearcoatRoughness={0.08}
              emissive="#d4af37"
              emissiveIntensity={0.05}
            />
          </mesh>

          {/* Shoulder / neck */}
          <mesh position={[0, 0.88, 0]}>
            <cylinderGeometry args={[0.22, 0.34, 0.28, 64]} />
            {/* @ts-ignore */}
            <MeshTransmissionMaterial {...glassMat} color="#f6f0e6" />
          </mesh>

          {/* Gold collar */}
          <mesh position={[0, 0.78, 0]}>
            <torusGeometry args={[0.24, 0.035, 24, 64]} />
            <meshStandardMaterial color="#d4af37" metalness={0.95} roughness={0.18} />
          </mesh>
          <mesh position={[0, 0.92, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.06, 64]} />
            <meshStandardMaterial color="#d4af37" metalness={0.92} roughness={0.2} />
          </mesh>

          {/* Cap - brushed black with gold inlay */}
          <mesh ref={capRef} position={[0, 1.05, 0]} castShadow>
            <cylinderGeometry args={[0.26, 0.27, 0.42, 64]} />
            <meshStandardMaterial color="#0a0a0a" roughness={0.35} metalness={0.18} emissive="#d4af37" emissiveIntensity={0.02} />
          </mesh>
          <mesh position={[0, 1.28, 0]}>
            <cylinderGeometry args={[0.27, 0.27, 0.02, 64]} />
            <meshStandardMaterial color="#d4af37" metalness={1} roughness={0.12} />
          </mesh>

          {/* Label - frosted glass plate */}
          <mesh position={[0, -0.18, 0.53]}>
            <planeGeometry args={[0.62, 0.38]} />
            <meshPhysicalMaterial
              color="#ffffff"
              transparent
              opacity={0.92}
              roughness={0.9}
              transmission={0.15}
            />
          </mesh>

          {/* Subtle inner reflection plane */}
          <mesh position={[0, 0.15, 0]} rotation={[0, 0, 0]}>
            <cylinderGeometry args={[0.56, 0.56, 1.68, 3, 1, true]} />
            <meshStandardMaterial color="#ffffff" transparent opacity={0.04} side={THREE.DoubleSide} />
          </mesh>
        </group>
      </Float>

      <Environment preset="studio" background={false} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 5]} intensity={2.2} castShadow shadow-mapSize={[2048, 2048]} />
      <directionalLight position={[-4, 3, -3]} intensity={0.9} color="#d4af37" />
      <spotLight position={[0, 6, 0]} angle={0.45} penumbra={0.6} intensity={2.5} color="#fff7d6" />
      <pointLight position={[0, 1, 3]} intensity={1.2} color="#fff2cc" distance={6} decay={2} />
    </>
  )
}
