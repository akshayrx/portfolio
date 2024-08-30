import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Hero from '../components/hero/Hero';
import Intro from '../components/sections/Intro';
import Dock from '../components/header/Dock';
import { KlaviyoFormTrigger }from '../components/features/KlaviyoFormTrigger'


function App() {
  
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <main className='bg-zinc-900'>
      <Dock />
      <Hero />
      <Intro />
      <KlaviyoFormTrigger />
    </main>
  )
}

export default App