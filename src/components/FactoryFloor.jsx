export default function FactoryFloor({ width, length }) {
    return (
      <group>
       
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
          <planeGeometry args={[width, length]} />
          <meshStandardMaterial color="#334155" roughness={0.8} />
        </mesh>

        <mesh position={[0, 0, length/2]} >
          <boxGeometry args={[width, 0.05, 0.1]} />
          <meshStandardMaterial color="#eab308" />
        </mesh>
        <mesh position={[0, 0, -length / 2]} >
          <boxGeometry args={[width, 0.05, 0.1]} />
          <meshStandardMaterial color="#eab308" />
        </mesh>
        <mesh position={[width / 2, 0, 0]} >
          <boxGeometry args={[0.1, 0.05, length]} />
          <meshStandardMaterial color="#eab308" />
        </mesh>
        <mesh position={[-width / 2, 0, 0]} >
          <boxGeometry args={[0.1, 0.05, length]} />
          <meshStandardMaterial color="#eab308" />
        </mesh>
      </group>
    )
  }