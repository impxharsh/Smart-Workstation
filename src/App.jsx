
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'
import Lathe from './components/Lathe'  
import Drill from './components/Drill'  
import Workbench from './components/Workbench'
import StorageRack from './components/storageRack'
import Human from './components/human'
import StorageBin from './components/storageBin'
import Conveyer from './components/conveyer'
function App() {
  return (
    <Canvas style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', backgroundColor: '#1a1a1a' }}>
      
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      <Lathe position={[1, 1, 1]} />
      <Drill position={[2, 0, -1]} scale={3} />
      <Workbench position={[-4, 0, 1]} scale={0.01} rotation={[0, Math.PI/2, 0]}/>
      <StorageRack position={[-17, 0, 2]} scale={0.5} rotation={[0, Math.PI/2, 0]}/>
      <Human position={[0, 0, 0]} scale={0.01} rotation={[0, Math.PI/2, 0]}/>
      <StorageBin position={[0, 0, -1]} scale={1} />
      <Conveyer position={[3, 0, 8]} scale={0.01}/>
      <OrbitControls makeDefault />
      

      <Grid
        infiniteGrid
        // sectionColor={[0.3, 0.3, 0.3, 1]}
        // sectionThickness={1}
        // cellThickness={1}
        cellColor={[0.15, 0.15, 0.15, 1]}
        fadeDistance={100}
        fadeStrength={2}
      />
    </Canvas>
  )
}

export default App