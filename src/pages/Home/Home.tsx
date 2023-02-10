import { observer } from 'mobx-react-lite';
import Hero from '../Hero';
import Navbar from '../../components/Navbar';
import PriceList from '../PriceList';
import Footer from '../../components/Footer';
import TestBooking from '../../components/TestBooking';

const Home = () => {

  return (<>
    <Navbar />
    <Hero />
    <TestBooking />
    <PriceList />
    <Footer />
  </>
  )
}

export default observer(Home);
