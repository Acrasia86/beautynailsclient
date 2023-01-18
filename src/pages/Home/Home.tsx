import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home;
