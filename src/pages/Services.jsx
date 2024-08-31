import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import PageTitle from '../components/structures/PageTitle'
import SectionTitle from '../components/structures/SectionTitle'
import Cta from '../components/footer/Cta';
import { KlaviyoFormTrigger }from '../components/features/KlaviyoFormTrigger'
import { simplePricing, serviceWorkfflowProcess } from '../components/elements/Copywriting';

function Services() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Scroll to the element
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
    
    <section className='hidden w-full px-20 py-8 bg-zinc-300'>
      <div className='pb-12'>
        <div className='my-introduction py-8 w-full flex justify-between items-start gap-10'>
          <div className="image-card w-1/2"></div>
          <div className="content-card w-1/2 font-light leading-normal tracking-normal flex flex-col justify-start items-start gap-8">
            <h3 className='text-[2.4vw] font-extralight leading-tight tracking-normal'>Services</h3>
              <p className='w-full'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, soluta numquam quis facilis sapiente ab excepturi dicta fuga odio, est delectus odit similique quas.
              </p>
          </div>
        </div>
      </div>
    </section>
    <section className='container w-full py-20'>
          <PageTitle page="services" />
          <div className='promo-services w-full mt-6 pt-6 flex flex-col md:flex-col lg:flex-row justify-start lg:justify-between items-start gap-6 lg:gap-6'>
                <div className='w-full md:w-full lg:w-4/12 mb-12 flex-col gap-6 font-extralight flex justify-start items-start'>
                    <p className='curly-braces pb-8 font-extralight text-sm'>what all you can create</p>
                    <p>It all begins with a simple question: "What is your top-most expectation from your website?"</p>
                    <p>It could be for selling products, or to generate leads, or a platform to express your ideas, or a tool to automate your business.</p>
                </div>
                <div className="w-full md:w-full lg:w-4/12 font-extralight flex flex-col justify-start items-start gap-6 mb-12 lg:mb-6">
                  <p>What do you want to achieve with your website? Understanding the purpose of your website allows me to suggest the right medium to deliver it.</p>
                  <p>Commonly there are 4 types of websites that you may consider:</p>
                  <ol className='list-decimal pl-8 flex flex-col gap-4'>
                    <li>
                      <span className='font-medium'>Shop: </span>
                      <span>E-commerce website to sell products, services, digital products, courses & memberships, etc.</span></li>
                    <li>
                      <span className='font-medium'>Media: </span>
                      <span>A blog, news, research publication, magazine or anything that requires daily updates.</span></li>
                    <li>
                      <span className='font-medium'>Marketing: </span>
                      <span>To present ideas, provide company information, collect leads, explain processes, etc.</span></li>
                    <li>
                      <span className='font-medium'>Application: </span>
                      <span>To manage complex tasks, organize process flow for enterprises, manage large inventory.</span></li>
                  </ol>
                  <p>I will guide you through more detail, once I understand your requirements.</p>
                </div>
                <div className='w-full md:w-full lg:w-4/12 flex lg:flex justify-between lg:items-center lg:justify-center items-start'>
                    <div className='font-extralight flex flex-col gap-6'>
                      <p className='curly-braces pb-8 font-extralight text-sm'>and how it works</p>
                      <ol className="relative border-s border-zinc-800/40">
                          {serviceWorkfflowProcess.map((stage, index) => (
                                <li key={index} className="mb-6 ms-2">   
                                  <span className="absolute only:bottom-0 last:bottom-0 w-2 h-2 bg-zinc-800 rounded-full -start-1">
                                    </span>         
                                    <span className="flex items-center -mt-1 text-sm font-medium text-zinc-800">{stage.stage}</span>
                                    <p className="mb-4 text-sm font-light">{stage.meaning}</p>
                                </li>
                            ))}      
                            <li className="mb-2 ms-2">   
                                  <span className="absolute bottom-0 w-2 h-2 bg-zinc-800 rounded-full -start-1">
                                    </span>         
                                    <span className="flex items-center -mt-1 text-sm font-medium text-zinc-800">Offboarding & Support</span>
                                    <p className="mb-1 text-sm font-light">Covers 60 day support, paid retainers available</p>
                            </li>            
                          {/* <li className="mb-6 ms-2">   
                            <span className="absolute top-0 flex items-center justify-center w-2 h-2 bg-zinc-800 rounded-full -start-1">
                              </span>         
                              <span className="flex items-center -mt-1 text-sm font-medium text-zinc-800">Onboarding</span>
                              <p className="mb-4 text-sm font-light">Get access to over 20+ pages.</p>
                          </li>
                          <li className="mb-6 ms-2">            
                              <span className="absolute flex items-center justify-center w-2 h-2 bg-zinc-800 rounded-full -start-1">
                              </span>
                              <span className="flex items-center mb-1 text-sm font-medium text-zinc-800">Strategy</span>
                              <p className="mb-4 text-sm font-light">Get access to over 20+ pages.</p>
                          </li>
                          <li className="mb-6 ms-2">            
                              <span className="absolute flex items-center justify-center w-2 h-2 bg-zinc-800 rounded-full -start-1">
                              </span>
                              <span className="flex items-center mb-1 text-sm font-medium text-zinc-800">Copywriting</span>
                              <p className="mb-4 text-sm font-light">Get access to over 20+ pages.</p>
                          </li>
                          <li className="mb-6 ms-2">            
                              <span className="absolute flex items-center justify-center w-2 h-2 bg-zinc-800 rounded-full -start-1">
                              </span>
                              <span className="flex items-center mb-1 text-sm font-medium text-zinc-800">Web Design</span>
                              <p className="mb-4 text-sm font-light">Get access to over 20+ pages.</p>
                          </li>
                          <li className="mb-6 ms-2">            
                              <span className="absolute flex items-center justify-center w-2 h-2 bg-zinc-800 rounded-full -start-1">
                              </span>
                              <span className="flex items-center mb-1 text-sm font-medium text-zinc-800">Development</span>
                              <p className="mb-4 text-sm font-light">Get access to over 20+ pages.</p>
                          </li>
                          <li className="mb-6 ms-2">            
                              <span className="absolute flex items-center justify-center w-2 h-2 bg-zinc-800 rounded-full -start-1">
                              </span>
                              <span className="flex items-center mb-1 text-sm font-medium text-zinc-800">Launch</span>
                              <p className="mb-4 text-sm font-light">Get access to over 20+ pages.</p>
                          </li>
                          <li className="ms-2">
                          <span className="absolute bottom-0 flex items-center justify-center w-2 h-2 bg-zinc-800 rounded-full -start-1">
                          </span>
                              <span className="flex items-center text-sm font-medium text-zinc-800">Offboarding & Support</span>
                              <p className="text-sm font-light">Get access to over 20+ pages.</p>
                          </li> */}
                      </ol>
                    </div>
                </div>
            </div>
    </section>
    <section id="pricing-table" className='container w-full py-20'>
        <SectionTitle title="simple pricing" />
        <div className='promo-pricing w-full flex flex-col lg:flex-row justify-between items-start gap-4'>
          <div className='w-full md:w-full lg:w-4/12 flex justify-start items-start font-light leading-none tracking-normal '>
            <p className='curly-braces pb-8 font-light text-sm'>investment, priced in USD</p>
          </div>
          <div className='w-full md:w-full lg:w-8/12 flex flex-col justify-start items-start font-extralight leading-normal tracking-normal'>
              {simplePricing.map((plan, index) => (
                  <div key={index} className={`pricing-table w-full flex-col lg:flex-row hover:bg-zinc-800/20 hover:cursor-pointer klaviyo_form_trigger border-b first:border-t border-zinc-800/60 py-4 font-normal text-lg flex justify-between items-center`}>
                      <div className='w-full lg:w-6/12 flex justify-between gap-4 capitalize mb-2 lg:mb-0'>
                          <p className='w-1/2 flex justify-start items-center gap-2'>
                            <span className='w-2 h-2 rounded-full bg-zinc-800'></span>{plan.package}
                          </p>
                          <p className='w-1/2 flex justify-end lg:justify-start tracking-normal'>{plan.price}</p>
                      </div>
                      <p className='w-full lg:w-6/12 font-extralight text-sm'>{plan.description}</p>
                  </div>
              ))}
          {/* <div className='pricing-table w-full hover:bg-zinc-800/20 hover:cursor-pointer klaviyo_form_trigger border-t border-zinc-800/60 py-4 font-normal text-lg flex justify-between items-center'>
            <p className='w-3/12 flex justify-start items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-zinc-800'></span>Landing page</p>
              <p className='w-3/12 tracking-normal'>starts $800</p>
            <p className='w-6/12 font-extralight text-sm'>Creating the design and content of a single webpage or funnel that encourages your user for a specific action.</p>
          </div>
          <div className='pricing-table w-full hover:bg-zinc-800/20 hover:cursor-pointer klaviyo_form_trigger border-t border-zinc-800/60 py-4 font-normal text-lg flex justify-between items-center'>
            <p className='w-3/12 flex justify-start items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-zinc-800'></span>Multi - pages</p>                                
            <p className='w-3/12 tracking-normal'>starts $1000</p>
            <p className='w-6/12 font-extralight text-sm'>Creating a website with advanced structure, multiple pages interconnected by a menu, other features.</p>
          </div>
          <div className='pricing-table w-full hover:bg-zinc-800/20 hover:cursor-pointer klaviyo_form_trigger border-t border-zinc-800/60 py-4 font-normal text-lg flex justify-between items-center'>
            <p className='w-3/12 flex justify-start items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-zinc-800'></span>Online shop</p>
              <p className='w-3/12 tracking-normal'>starts $1500</p>
            <p className='w-6/12 font-extralight text-sm'>A website for sale of goods with an integrated payment system, logistics integration, notifications to seller and buyer.</p>
          </div>
          <div className='pricing-table w-full hover:bg-zinc-800/20 hover:cursor-pointer klaviyo_form_trigger border-t border-b border-zinc-800/60 py-4 font-normal text-lg flex justify-between items-center'>
            <p className='w-3/12 flex justify-start items-center gap-2'>
              <span className='w-2 h-2 rounded-full bg-zinc-800'></span>Application</p>
              <p className='w-3/12 tracking-normal'>starts $3500</p>
            <p className='w-6/12 font-extralight text-sm'>A customized web application for complex tasks, managing your data on the cloud, capable to serve millions of users.</p>
          </div> */}
            <div className='pricing-addons-optional w-full pt-6 mt-12 lg:mt-6 font-extralight text-sm flex flex-col justify-start items-start gap-2'>
              <p className='font-light mb-2'>Optional Add-ons</p>
              <p className='w-full flex justify-start items-center gap-2'>
                Copy writing:<span className=''>Starts $500</span></p>
              <p className='w-full flex justify-start items-center gap-2'>
              Google, facebook, instagram ads:<span>Price on request</span></p>
            </div>
          </div>
        </div>
    </section>
    <Cta promoTitle="Yes, you're at the right place." buttonText="let's talk" mode="dark" />
    <KlaviyoFormTrigger />
    </>
  )
}

export default Services