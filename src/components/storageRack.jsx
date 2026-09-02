import { useGLTF } from '@react-three/drei'

export default function StorageRack({ position, rotation, scale }) {
    const {scene} = useGLTF('/models/furniture/industrial_storage_rack.glb')
    return (
        <primitive
            object={scene.clone()}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    )
}

useGLTF.preload('/models/furniture/industrial_storage_rack.glb')