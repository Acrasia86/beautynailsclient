import { useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Html } from '@react-three/drei';

import Booking from '../components/Booking';
import NailPolish from '../components/NailPolish'


export default function Hero() {

  const booking = useRef(null);
  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Canvas
        shadows
        // camera={{
        //   fov: 45,
        //   near: 0.1,
        //   far: 200,
        //   position: [- 4, 3, 6]
        // }}
      >
        <NailPolish />
      </Canvas>
      <div ref={booking}>
        <Booking />
      </div>
    </>
  );
}