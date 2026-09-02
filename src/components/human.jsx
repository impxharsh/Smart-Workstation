import { useGLTF } from '@react-three/drei'

export default function Human({ position, rotation, scale }) {
    const {scene} = useGLTF('/models/human/human.glb');
    return (
        <primitive
            object={scene.clone()}
            position={position}
            rotation={rotation}
            scale={scale}
        />
    )
}

useGLTF.preload('/models/human/human.glb')