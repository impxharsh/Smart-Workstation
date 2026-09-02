import { useGLTF } from '@react-three/drei'

export default function Drill({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/machines/tools__drilling_machine.glb')
  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

useGLTF.preload('/models/machines/tools__drilling_machine.glb')
