import React, { useEffect } from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout