import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Teaser() {

  const heroStatement = useRef()
  
  useGSAP(() => {

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "50% 50%",
        end: "50% 35%",
        duration:1,
        //markers: true,
        scrub: 1
      }
    })

    tl.to(heroStatement.current, {
      color: "#0066cc",
      opacity: 1
    })
    
  })


  return (
    <>
      <h1 className="teaser site-headline font-light">Brands today are more than simply products or services. Brands inspire people. Brands impact the world.
        <span ref={heroStatement} className='text-contrast opacity-0 text-zinc-300'>I am the bridge that connects your brand to your consumer.</span>
      </h1>
      
    </>
  )
}

export default Teaser