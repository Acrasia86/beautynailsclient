import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero'

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

export default Home;
