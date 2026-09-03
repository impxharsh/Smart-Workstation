import { useGLTF } from '@react-three/drei'

export default function Human({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
    const { scene } = useGLTF('/models/human/robot.glb')

    return (
        <group position={position} rotation={rotation}>
                <primitive 
                object={scene.clone()}
                scale = {1}
                 />
            
        </group>
    )
}

useGLTF.preload('/models/human/robot.glb')