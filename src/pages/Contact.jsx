import React from 'react'
import { Link } from 'react-router-dom'
import { KlaviyoFormTrigger }from '../components/features/KlaviyoFormTrigger'
import PageTitle from '../components/structures/PageTitle'
import SocialLinks from '../components/structures/SocialLinks'
import Cta from '../components/footer/Cta'

function Contact() {
  return (
    <>
    <section className='container w-full py-20'>
            <PageTitle page="contact" />
            <div className='page-contact w-full mt-6 pt-6 flex flex-col md:flex-col lg:flex-row justify-start lg:justify-between items-start gap-6 lg:gap-6'>
                <div className="w-full md:w-full lg:w-8/12 flex flex-col justify-start items-start gap-6 mb-12 lg:mb-6 font-extralight">
                    <p>For almost every project, <span className='font-medium'>onboarding is summarised in 3 simple steps</span>.</p>
                    <ol className='list-decimal pl-8'>
                      <li>Send your details via <span className='klaviyo_form_trigger text-[#0066cc] hover:underline underline-offset-4 cursor-pointer font-medium'>this form</span></li>
                      <li>Get on <span className='font-medium'>a call</span> to discuss your work</li>
                      <li>Contract <span className='font-medium'>proposal</span> & signing payment</li>
                    </ol>
                    <p>After you share your details, <span className='font-medium'>you will receive an email to schedule a call</span> or video meeting. Once on the call, I will take it further from there.</p>
                    <p>For inquiries other than website projects, you can reach me by writing an email at <em><Link to="mailto:hello@akshayravikant.com" className='underline text-zinc-700'>hello@akshayravikant.com</Link>.</em></p>
                    <p>Excited to see you all!</p>
                </div>
                <div className='w-full md:w-full lg:w-4/12 flex lg:flex justify-between lg:items-center lg:justify-center items-start'>
                    <SocialLinks view="full" />
                </div>
            </div>
    </section>
    <Cta promoTitle="Yes, you're at the right place." buttonText="let's talk" mode="dark" />
    <KlaviyoFormTrigger />
    </>
  )
}

export default Contact