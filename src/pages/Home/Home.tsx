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
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';

const Home = () => {

  const {isLoggedIn, user, getUser} = userStore;

  useEffect(() => {
  }, [])

  return (<>
    <Navbar />
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
