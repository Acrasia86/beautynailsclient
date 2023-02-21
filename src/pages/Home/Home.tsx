import { observer } from 'mobx-react-lite';
import Hero from '../Hero';
import Navbar from '../../components/Navbar';
import PriceList from '../PriceList';
import Footer from '../../components/Footer';
import TestBooking from '../../components/TestBooking';
import NailPolis from '../../components/NailPolish';
import { Canvas } from '@react-three/fiber';
import Main from '../../components/Main';
import FromClients from '../../components/FromClients';

const Home = () => {

  return (<>
 
    <Main/>
    <TestBooking />
     <PriceList />
     <FromClients/>
     <Footer />
  </>
  )
}

export default observer(Home);
