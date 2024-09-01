import React from 'react'
import ButtonSolid from '../elements/ButtonSolid'
import { NavLink } from 'react-router-dom'

function Cta(props) {  

  return (
    <section className={`cta container py-12 w-full ${props.mode === 'light' ? 'bg-zinc-900' : 'bg-zinc-300'}`}>
        <div className={`flex py-32 px-4 gap-8 flex-col justify-center items-center ${props.mode === 'light' ? 'bg-zinc-300 text-zinc-800' : 'bg-zinc-900 text-zinc-300'} rounded-lg`}>
          <h2 className='w-8/12 lg:w-5/12 xl:w-5/12 font-extralight text-center'>{props.promoTitle}</h2>
          <ButtonSolid cta={props.buttonText} buttonMode={props.mode === 'light'?'dark':'light'} />
          <div className='email flex flex-col justify-center items-center'>
            <p className='curly-braces text-xs'>or write to me at</p>
            <NavLink to="mailto:hello@akshayravikant.com" className='font-extralight pt-2 leading-tight tracking-normal hover:underline underline-offset-4'>hello@akshayravikant.com</NavLink>
          </div>
        </div>
    </section>
  )
}

export default Cta