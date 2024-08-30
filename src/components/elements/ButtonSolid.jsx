import React, { useEffect } from 'react'

function ButtonSolid(props) {

  //receives 2 props to function: CTA and MODE
  
  return (
    <>
    <button className={`klaviyo_form_trigger w-fit hover:border hover:font-normal hover:bg-[#0066cc] hover:text-zinc-100 hover:border-zinc-400/70 px-6 py-4 rounded-full ${props.buttonMode === 'light' ? 'bg-zinc-300 text-zinc-800' : 'bg-zinc-900 text-zinc-300'} border border-transparent flex gap-8 items-center capitalize text-sm font-light leading-none tracking-normal`}>
        <span>{props.cta}</span>
        <span className={`w-2 h-2 rounded-full hover:bg-zinc-100 ${props.buttonMode === 'light' ? 'bg-zinc-800' : 'bg-zinc-300'}`}></span>
    </button>
    
    </>
  )
}

export default ButtonSolid