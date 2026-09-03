import { useGLTF } from '@react-three/drei'

export default function Drill({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF('/models/machines/tools__drilling_machine.glb')
  
  return (
    <group position={position} rotation={rotation}>
      <primitive
        object={scene.clone()}
        scale={3}
      />
    </group>
  )
}

useGLTF.preload('/models/machines/tools__drilling_machine.glb')