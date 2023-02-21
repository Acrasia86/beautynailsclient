import { observer } from 'mobx-react-lite';
import Hero from '../Hero';
import PriceList from '../PriceList';
import Footer from '../../components/Footer';
import TestBooking from '../../components/TestBooking';
import NailPolis from '../../components/NailPolish';
import { Canvas } from '@react-three/fiber';
import Main from '../../components/Main';
import FromClients from '../../components/FromClients';
import userStore from '../../stores/userStore';
import LoginToBook from '../../components/LoginToBook';

const Home = () => {

  const {isLoggedIn} = userStore;

  return (<>
 
    <Main/>
    { isLoggedIn ? 
    <TestBooking />
    : <LoginToBook />}
     <PriceList />
     <FromClients/>
     <Footer />
  </>
  )
}

export default observer(Home);
