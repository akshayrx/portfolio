import React from 'react'
import SectionTitle from '../components/structures/SectionTitle'
import PageTitle from '../components/structures/PageTitle'
import Cta from '../components/footer/Cta';
import { KlaviyoFormTrigger }from '../components/features/KlaviyoFormTrigger'
import SocialLinks from '../components/structures/SocialLinks';
import { callToActions } from '../components/elements/Copywriting';


function About() {

  const ctaSectionAbout = callToActions.find((c) => c.block === "about/ctasection" );

  return (
    <>
    <section className='container w-full py-20'>
      <PageTitle page="about" />
      <div className='page-about w-full mt-6 pt-6 flex flex-col md:flex-col lg:flex-row justify-start lg:justify-between items-start gap-6 lg:gap-6'>
          <div className="w-full md:w-full lg:w-6/12 flex flex-col justify-start items-start gap-6 font-extralight">
              <img 
                className='rounded-lg w-full' 
                src="../../akshay-ravikant-cafe.JPG"
                alt="Akshay Ravikant Picture in a Cafe" />
          </div>
          <div className='w-full md:w-full lg:w-6/12 font-extralight flex flex-col justify-start items-start gap-6'>
            <h3>Hi, I'm Akshay</h3>
            <p>For nearly the last decade, I've built a jewellery business from scratch without any background. Then, in late 2023, I decided to pivot. So then, what's now?</p>
            <p>It's almost been a year since I've been working as a full-time web developer, again. Yes, you read it correctly - again. It's a circle back to being a developer. At college, I studied computer science and then worked at a job in an IT firm for more than a year.</p>
            <p>Fast forward a few years, I was in the Jewelry business operating a manufacturing unit, completely out of nowhere. It has been an incredible journey for 8 years. Learned many facets of the Jewelry industry, and in November 2023, I decided to pursue something more meaningful, something that is not chaotic. Many events occurred for me to be able to reach that conclusion, but that's a story for later.</p>
            <p>Today, I work as a full-time developer. To put it simply, <em>I create websites for all kinds of businesses - I occasionally work on projects for a few leading tech agencies - and I am also open to collaborations with other senior developers.</em></p>
            <SocialLinks view="logo" />
          </div>
        </div>
    </section>
    <section className='container w-full py-20'>
          <SectionTitle title="built to scale" />
          <div className='page-about w-full mt-6 pt-6 flex flex-col md:flex-col lg:flex-row justify-start lg:justify-between items-start gap-6 lg:gap-6'>
                <div className='w-full md:w-full lg:w-4/12 font-extralight mb-12 flex flex-col gap-2'>
                    <p className='curly-braces lg:pb-8 text-sm'>I craft the core</p>
                    <p>Strategy</p>
                    <p>Web Design</p>
                    <p>Frontend Development</p>
                </div>
                <div className="w-full md:w-full lg:w-4/12 font-extralight flex flex-col justify-start items-start gap-6 mb-12 lg:mb-6">
                    <p>In pursuit of a larger vision, it is best to get the a-team on board, everytime. My team and I work together to create industry-shifting web experience that helps you win your user's hearts and minds.</p>
                    <p>And I strive to become one of the most recognizable website developers of the time for jewelry brands across the world.</p>
                </div>
                <div className='w-full md:w-full lg:w-4/12 font-extralight flex lg:flex flex-col justify-between lg:items-center lg:justify-between items-start'>
                    <div className='font-extralight flex flex-col gap-2'>
                      <p className='curly-braces lg:pb-8 text-sm'>and collaborate with specialists</p>
                        <p>Illustrators</p>
                        <p>Graphic Designers</p>
                        <p>Copywriters</p>
                        <p>Backend Developers</p>
                    </div>
                </div>
          </div>
    </section>
    
    <Cta promoTitle={ctaSectionAbout.ctaTitle} buttonText={ctaSectionAbout.ctaButton} mode="dark" />
    <KlaviyoFormTrigger />
    </>
  )
}

export default About