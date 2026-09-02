
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'
import Lathe from './components/Lathe'  
import Drill from './components/Drill'  


function App() {
  return (
    <Canvas style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', backgroundColor: '#1a1a1a' }}>
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Lathe position={[1, 1, 1]} />
      <Drill position={[2, 0, -1]} scale={3} />
 
  
      <OrbitControls makeDefault />
      

      <Grid
        infiniteGrid
        sectionColor={[0.3, 0.3, 0.3, 1]}
        sectionThickness={1}
        cellThickness={1}
        cellColor={[0.15, 0.15, 0.15, 1]}
        fadeDistance={100}
        fadeStrength={2}
      />
    </Canvas>
  )
}

export default App