import { Canvas } from '@react-three/fiber'
import NailPolish from '../components/NailPolish'

export default function Hero() {

  return (
    <>
      <Canvas shadows>
        <NailPolish />
      </Canvas>
    </>
  );
}