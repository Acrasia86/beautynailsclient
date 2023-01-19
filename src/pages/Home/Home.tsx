import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import ServiceList from '../../components/ServiceList';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ServiceList />
    </div>
  )
}

export default observer(Home);
