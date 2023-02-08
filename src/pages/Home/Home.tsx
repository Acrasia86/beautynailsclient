import { observer } from 'mobx-react-lite';
import Booking from '../../components/Booking';
import Hero from '../Hero';
import ModelComponent from '../../components/ModelComponent';
import Navbar from '../../components/Navbar';
import ServiceList from '../../components/ServiceList';
import PriceList from '../PriceList';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Booking/>
      <PriceList />
      <Footer/>
    </div>
  )
}

export default observer(Home);
