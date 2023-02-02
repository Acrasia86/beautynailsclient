import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Booking from '../../components/Booking';
import Hero from '../../components/Hero';
import ModelComponent from '../../components/ModelComponent';
import Navbar from '../../components/Navbar';
import ServiceList from '../../components/ServiceList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <ModelComponent /> */}
    </div>
  )
}

export default observer(Home);
