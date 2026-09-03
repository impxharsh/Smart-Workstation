
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Grid } from '@react-three/drei'
import FactoryFloor from './components/FactoryFloor'
import Lathe from './components/Lathe'  
import Drill from './components/Drill'  
import Workbench from './components/Workbench'
import StorageRack from './components/storageRack'
import Human from './components/human'
import StorageBin from './components/storageBin'
import Conveyer from './components/conveyer'


const initialLayout = [
  { id: 'lathe_1', type: 'lathe', position: [1, 0.8, 1], rotation: [0, 0, 0] },
  { id: 'drill_1', type: 'drill', position: [2, 0, -1], rotation: [0, 0, 0] },
  { id: 'bench_1', type: 'workbench', position: [-3, 0, 1], rotation: [0, 0, 0] },
  { id: 'rack_1', type: 'rack', position: [-14, 0, -2], rotation: [0, 0, 0] },
  { id: 'human_1', type: 'human', position: [0, 0, 0], rotation: [0, 0, 0] },
  { id: 'bin_1', type: 'bin', position: [0, 0, -1], rotation: [0, 0, 0] },
  { id: 'conveyer_1', type: 'conveyer', position: [3, 0.8, 3], rotation: [0, 0, 0] }
]

const ComponentMap = {
  lathe: Lathe,
  drill: Drill,
  workbench: Workbench,
  rack: StorageRack,
  human: Human,
  bin: StorageBin,
  conveyer: Conveyer
}

function App() {
  return (
    <Canvas style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', backgroundColor: '#0f172a' }}>
      
 
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 10, 7]} intensity={1} />
      
  
      <FactoryFloor width={25} length={20} />


      {/* <Lathe position={[1, 0.8, 1]} />
      <Drill position={[2, 0, -1]} />
      <Workbench position={[-3, 0, 1]} />
      <StorageRack position={[-14, 0, -2]} />
      <Human position={[0, 0, 0]} />
      <StorageBin position={[0, 0, -1]} />
      <Conveyer position={[3, 0.8, 3]} /> */}
      
      {/* dynamic rendering, using loop to render using the json array */}
      {initialLayout.map((item) => {
        const ModelComponent = ComponentMap[item.type];

        return(
          <ModelComponent
             key = {item.id}
             position = {item.position}
             rotation = {item.rotation}
          />
        )

      })}

      <OrbitControls 
        makeDefault 
        minPolarAngle={0} 
        maxPolarAngle={Math.PI / 2.1} 
      />
      
  
      <Grid
        args={[25, 20]}
        infiniteGrid={false}
        position={[0, 0.01, 0]}
        sectionColor="#64748b"
        cellColor="#334155"
        fadeDistance={100}
        fadeStrength={2}
      />
    </Canvas>
  )
}

export default App