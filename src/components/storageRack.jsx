import { useGLTF } from '@react-three/drei'

export default function StorageRack({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
    const { scene } = useGLTF('/models/furniture/industrial_storage_rack.glb')
    
    return (
        <group position={position} rotation={rotation}>
            
            <primitive
                object={scene.clone()}
                scale={0.5}               
                rotation={[0, Math.PI/2, 0]}
                position={[0, 0, 0]}      
            />
            
        </group>
    )
}

useGLTF.preload('/models/furniture/industrial_storage_rack.glb')