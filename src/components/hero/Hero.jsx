import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Teaser from './Teaser'
import Notes from './Notes'

function Hero() {

  const hero = useLocation();

  useEffect(() => {
    if (hero.hash) {
      const element = document.getElementById(hero.hash.substring(1));
      if (element) {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
        element.scrollIntoView({ behavior: 'smooth' });
        // Trigger the animation after a short delay
        setTimeout(() => {
          element.style.transition = "opacity 0.2s ease-out, transform 0.5s ease-out";
          element.style.opacity = 1;
          element.style.transform = "translateY(0)";
        }, 100);
      }
    }
  }, [hero]);

  return (
    <section id="hero" data-scroll data-scroll-section data-scroll-speed='-0.50' className="hero bg-zinc-300 w-full h-dvh relative">
        <div className='container flex flex-col justify-start items-start w-full'>
            <div className="pt-[45%] pb-10 w-full md:w-11/12 md:pt-[40%] lg:w-9/12 lg:pt-40 2xl:10/12 2xl:pt-36">
                <Teaser />
            </div>
        </div>
        <div className="pb-8 w-full border-t border-zinc-800/25 absolute inset-x-0 bottom-16 sm:px-[1.75rem] md:pb-20 lg:px-[2.5rem] 2xl:px[3rem]">
                <Notes />
        </div>
    </section>
  )
}

export default Hero