import React from 'react'
import ButtonOutline from '../elements/ButtonOutline'
import SectionTitle from '../structures/SectionTitle'

function VisitingCards() {
    
  return (
    <section className='container w-full py-20 bg-zinc-900'>
        <SectionTitle title="Tech Stack" />
        <div className='w-full flex flex-col lg:flex-row lg:justify-between justify-start items-center gap-4'>
            <div className='w-full md:w-full lg:w-6/12 py-6 lg:py-12 px-6 lg:px-12 h-auto lg:h-96 rounded-lg justify-center items-center bg-zinc-600 relative'>
                <div className='w-full tech-stack flex flex-col md:flex-row lg:flex-row justify-between items-start gap-10 lg:gap-4'>
                    <div className="no-code">
                        <div className='text-sm curly-braces text-zinc-300 pb-4'>no code development</div>
                        {[
                            "Framer",
                            "WordPress",
                            "Shopify" 
                            ].map((item, index) => 
                                (
                            <p key={index} className="font-light mb-1">{item}</p>
                        ))}
                    </div>
                    <div className="code">
                        <div className='text-sm curly-braces text-zinc-300 pb-4'>development</div>
                        {["Next.js"].map((item, index) => (
                                <p key={index} className='font-light mb-1'>{item}</p>
                            ))}
                    </div>
                </div>
                <div className='absolute right-4 bottom-4 lg:left-8 lg:bottom-8'>
                    <span className='text-sm font-extralight leading-none flex items-center gap-2 px-4 py-2'>
                    <span className='w-2 h-2 rounded-full bg-green-500'></span>
                        Open for hiring
                    </span>
                </div>
            </div>
            <div className='w-full lg:w-6/12 flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4'>
                <div className='w-full md:w-6/12 lg:w-6/12 h-64 lg:h-96 rounded-lg bg-zinc-300 flex items-center justify-center relative'>
                    <img 
                        src="../../fiverr-logo.png" 
                        alt="Visit Akshay Ravikant on Fiverr for Web Design & Development" 
                        className='w-3/12 lg:w-5/12' />
                    <div className='absolute left-8 bottom-8' title="Akshay Ravikant on fiverr for web design & development">
                        <ButtonOutline url="https://fiverr.com" target="_blank" cta="5.0 ratings on fiverr" />
                    </div>
                </div>
                <div className='w-full md:w-6/12 lg:w-6/12 h-64 lg:h-96 rounded-lg bg-zinc-300 flex items-center justify-center relative'>
                    <img 
                    src="https://info.credly.com/hubfs/Credly_images_2022/Logo.svg" 
                    alt="Visit Akshay Ravikant on Credly to View Recently Earned Credentials" 
                    className='w-3/12 lg:w-4/12' />
                    <div className='absolute left-8 bottom-8' title="Akshay Ravikant on credly to view recently earned credentials">
                        <ButtonOutline url="https://www.credly.com/users/akshayravikant" target="_blank" cta="recent credentials" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VisitingCards