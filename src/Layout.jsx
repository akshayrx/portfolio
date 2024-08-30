import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';

// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react'

function Layout() {

  const locomotiveScroll = new LocomotiveScroll();
  
  
  //const heroStatement = useRef()

  // useGSAP(() => {
  //   gsap.to(".teaser", {
  //     x:200,
  //     duration:2,
  //     delay:1
  //   })
  // })
  // useGSAP(() => {
  //   gsap.to(heroStatement.current, {
  //     x:300,
  //     duration:2,
  //     delay:1
  //   })
  // })


  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout