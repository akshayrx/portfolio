import React, { useRef } from 'react'
import ButtonSolid from '../elements/ButtonSolid'
import Name from '../hero/Name'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

function Dock() {

    const dockButton = useRef()

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".promo-about",
              start: "100% 80%",
              end: "100% 70%",
              // markers: true,
              scrub: 1,
            }
          })
        const tl2 = gsap.timeline({
            scrollTrigger: {
              trigger: ".cta",
              start: "10% 90%",
              end: "15% 70%",
              // markers: true,
              scrub: 1,
            }
          })
            tl.to(dockButton.current, {
            opacity:1,
            display:"block"
                })
            tl2.to(dockButton.current, {
            opacity:0,
            display:"none"
          })
    })

  return (
    <nav ref={dockButton} className='fixed bottom-20 w-full z-50 dynamic-island opacity-0 hidden'>
        <div className='flex justify-center items-center relative'>
            <div className='absolute w-fit bg-[#0066cc]/70 hover:bg-zinc-400/70 backdrop-blur-md backdrop-saturate-150 rounded-full overflow-hidden'>
                <div className='dock-menu-station flex w-auto justify-around items-center text-sm font-light py-1 px-1'>
                    <div className='dock-menu-left flex justify-around items-center'>
                        <span className='hidden'><a href="">Portfolio</a></span>
                    </div>
                    <div className=''>
                        <span className='hidden name-or-action w-12'><Name /></span>
                        <span className='name-or-action'><ButtonSolid cta="order a website" /></span>
                    </div>
                    <div className='dock-menu-right flex justify-around items-center'>
                        <span className='hidden'><a href="">Services</a></span>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Dock