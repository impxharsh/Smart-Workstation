import { useGLTF } from '@react-three/drei'

export default function Conveyer({ position, rotation, scale }) {
    const {scene} = useGLTF('/models/machines/factory_conveyer.glb');
    return (
        <primitive
            object={scene.clone()}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    )
}

useGLTF.preload('/models/machines/factory_conveyer.glb')