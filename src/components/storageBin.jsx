import { useGLTF } from '@react-three/drei'

export default function StorageBin({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
    const { scene } = useGLTF('/models/environment/storage_bin.glb')
    
    return (
        <group position={position} rotation={rotation}>
            <primitive
                object={scene.clone()}
                scale={1}
            />
        </group>
    )
}

useGLTF.preload('/models/environment/storage_bin.glb')