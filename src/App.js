import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import { Environment, OrbitControls, Stage } from "@react-three/drei";
import Model from "./models";

function App() {

  return (
    <div id='canvas-container'>
      <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }}>
        <Suspense fallback={null}>
          <Stage environment={null} intensity={1} contactShadowOpacity={1} shadowBias={-0.0015}>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls 
          autoRotate 
          autoRotateSpeed={10.0}
          enableZoom={false} 
          enablePan={false} 
          minPolarAngle={Math.PI / 2} 
          maxPolarAngle={Math.PI / 2} 
        />
      </Canvas>
    </div>
  );
};

export default App;
