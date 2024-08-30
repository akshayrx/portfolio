import React from 'react'
//import Navbar from './components/header/Navbar'
import Hero from './components/hero/Hero'
import Intro from './components/sections/Intro'
import LocomotiveScroll from 'locomotive-scroll';
//import Footer from './components/footer/Footer';


function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-zinc-300'>
      {/* <Navbar /> */}
      <main>
        <Hero />
        <Intro />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default App