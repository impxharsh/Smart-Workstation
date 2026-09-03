import { useGLTF } from '@react-three/drei'

export default function Lathe({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF('/models/machines/lathe_machine.glb')
  
  return (
    <group position={position} rotation={rotation}>
      <primitive
        object={scene.clone()}
        scale={1} 
      />
    </group>
  )
}

useGLTF.preload('/models/machines/lathe_machine.glb')