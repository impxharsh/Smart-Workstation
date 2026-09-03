import { useGLTF } from '@react-three/drei'

export default function Conveyer({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
    const { scene } = useGLTF('/models/machines/factory_conveyer.glb')
    
    return (
        <group position={position} rotation={rotation}>
            <primitive
                object={scene.clone()}
                scale={0.01}
            />
        </group>
    )
}

useGLTF.preload('/models/machines/factory_conveyer.glb')