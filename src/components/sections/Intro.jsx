import React from 'react'
import VisitingCards from './VisitingCards';
import Works from './Works';
import Cta from '../footer/Cta';
import SocialLinks from '../structures/SocialLinks';
import { callToActions } from '../elements/Copywriting';

function Intro() {
    
    const ctaSectionHome = callToActions.find((c) => c.block === "home/ctasection" );

  return (
    <>
    <div data-scroll data-scroll-section data-scroll-speed='0.10' className='introduction w-full rounded-tl-3xl rounded-tr-3xl bg-zinc-900 text-zinc-200 shadow-[0px_-30px_60px_0px_rgba(23,22,18,0.7)] z-50'>
        <section className='container w-full py-20'>
            <h2 className='pb-14 mb-20 w-full lg:w-10/12 font-thin'>Akshay Ravikant is a web developer for emerging brands that need a website to sell products, acquire new customers, explore new markets, explain brilliant ideas, and hire great people.</h2>
            <div className='promo-about w-full mt-6 pt-6 flex flex-col md:flex-col lg:flex-row justify-start lg:justify-between items-start gap-6 lg:gap-6'>
                <p className='w-full md:w-full lg:w-4/12 font-extralight curly-braces text-sm'>
                    What you can expect
                </p>
                <div className="w-full md:w-full lg:w-4/12 flex flex-col justify-start items-start gap-6 mb-12 lg:mb-6">
                    <p className='font-extralight leading-normal tracking-normal'>
                    My team & I create a modern website for you that resonates with your brand story. I believe a good website is a mix of strategy, design thinking, and technology that connects with your ideal audience.
                    </p>
                    <p className='font-extralight leading-normal tracking-normal'>
                    You can expect me to work on your website as a strategic partner. My only job is to make sure your message reaches your customers in a clear, easy, and effective manner.
                    </p>
                </div>
                <div className='w-full md:w-full lg:w-4/12 flex lg:flex justify-between lg:items-center lg:justify-center items-start'>
                    <SocialLinks view="full" />
                </div>
            </div>
        </section>
        <Works />
        <VisitingCards />
    </div>
    <Cta promoTitle={ctaSectionHome.ctaTitle} buttonText={ctaSectionHome.ctaButton} mode="light" />
    </>
  )
}

export default Intro