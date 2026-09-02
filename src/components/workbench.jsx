import { useGLTF } from '@react-three/drei'

export default function Workbench({ position, rotation, scale }) {
  const { scene } = useGLTF('/models/furniture/workbench.glb')
  return (
    <primitive
      object={scene.clone()}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  )
}

useGLTF.preload('/models/furniture/workbench.glb')