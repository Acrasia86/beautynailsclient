import { observer } from 'mobx-react-lite';
import Hero from '../Hero';
import Navbar from '../../components/Navbar';
import PriceList from '../PriceList';
import Footer from '../../components/Footer';
import TestBooking from '../../components/TestBooking';
import NailPolis from '../../components/NailPolish';
import { Canvas } from '@react-three/fiber';

const Home = () => {

  return (<>
    <Navbar />
    {/* <Canvas shadows>
    <NailPolis />
      </Canvas> */}
    <Hero />
    <TestBooking />
    <PriceList />
    <Footer />
  </>
  )
}

export default observer(Home);
