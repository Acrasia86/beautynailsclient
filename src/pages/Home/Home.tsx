import { observer } from 'mobx-react-lite';
import React, { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import styles from './styles.module.css'
import Hero from '../Hero';
import Navbar from '../../components/Navbar';
import PriceList from '../PriceList';
import Footer from '../../components/Footer';
import TestBooking from '../../components/TestBooking';


const Home=()=> {
  const parallax = useRef<IParallax>(null!)
  return (
    // background: '#253237' 
    <div style={{ width: '100%', height: '100%'}}>
       <TestBooking/>
    {/* <Parallax ref={parallax} pages={3}>
      <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#e1ddd2' }} />
      <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#e7e2d9' }} />
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundSize: 'cover',
        }}
      ><Navbar />
      </ParallaxLayer>
      <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}> 
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8}>
     
      </ParallaxLayer>

      <ParallaxLayer offset={1.75} speed={0.5}>
      <PriceList/>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2.5}
        speed={-0.4}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}>
        <img  style={{ width: '60%' }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0.3}
        style={{
          backgroundSize: '80%',
          backgroundPosition: 'center',
        }}
      />

      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(1)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.1}
        onClick={() => parallax.current.scrollTo(2)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={-0}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => parallax.current.scrollTo(0)}>
      </ParallaxLayer>
    </Parallax> */}
  </div>
  )
}

export default observer(Home);
