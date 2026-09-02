import { useGLTF } from '@react-three/drei'

export default function StorageBin({ position, rotation, scale }) {
    const {scene} = useGLTF('/models/environment/storage_bin.glb')
    return (
        <primitive
            object={scene.clone()}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    )
}

useGLTF.preload('/models/environment/storage_bin.glb')