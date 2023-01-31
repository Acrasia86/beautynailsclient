import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useRef, Suspense} from 'react'
import { OrbitControls } from 'three-orbitcontrols-ts';
import { Canvas, extend, useThree, ReactThreeFiber } from '@react-three/fiber'
import Model from '../components/Model';
extend({OrbitControls});

const ModelComponent = () => {

  const Orbit = () => {
    const { camera, gl } = useThree();
    return (
      <orbitControls args={[camera, gl.domElement]}/>
    )
  }
  
  const Bulb = (props: any) => {
    return (
      <mesh {...props}>
        <pointLight intensity={1}/>
      </mesh>
    )
  }
  
  return (
    <div style={{height: '100vh', width: '100vw'}}>
                <Canvas camera={{position: [0, 0 , 2]}}>
      <ambientLight intensity={1}/>
      <Bulb position={[0, 5, 4]}/>
      <Bulb position={[0, 4, -7]}/>
      <Bulb position={[5, 5, 5]}/>
      <Suspense fallback={null}>
      <Model />
      </Suspense>

      <Orbit />
      </Canvas>
    </div>
  )
}

export default ModelComponent;
  