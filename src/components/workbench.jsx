import { useGLTF } from '@react-three/drei'

export default function Workbench({ position = [0, 0, 0], rotation }) {
  const { scene } = useGLTF('/models/furniture/workbench.glb')
  return (

    <group position={position} rotation={rotation}>
      
      <group scale={0.01} rotation={[0,Math.PI/2, 0]}>
        <primitive
          object={scene.clone()}
        />
      </group>
      
    </group>
  )
}

useGLTF.preload('/models/furniture/workbench.glb')