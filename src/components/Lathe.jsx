import { useGLTF } from '@react-three/drei'

export default function Lathe({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/machines/lathe_machine.glb')
  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

useGLTF.preload('/models/machines/lathe_machine.glb')