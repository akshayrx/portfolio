import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

function SocialLinks(props) {
  
  let social;
  if(props.view === "logo"){
    social =
          <div className="social flex items-start gap-4">
            <span><Link title="Akshay Ravikant on LinkedIn" to="https://www.linkedin.com/in/akshayravikant/" target="_blank"><FaLinkedin /></Link></span>
            <span><Link title="Akshay Ravikant on Twitter X" to="https://x.com/exJeweller" target="_blank"><FaXTwitter /></Link></span>
            <span><Link title="Akshay Ravikant on Behance" to="#" className='opacity-25'><FaBehance /></Link></span>
            <span><Link title="Akshay Ravikant on GutHub" to="#"><FaGithub /></Link></span>
          </div>
    
  } else if(props.view === "full"){
    social = 
      <div className=''>
        <p className='curly-braces text-sm pb-6 font-extralight'>I'm also at</p>
        <ul className='w-full md:w-full social-list font-extralight leading-none tracking-normal flex md:flex-row lg:flex-col justify-between gap-4'>
            <li><Link to="https://www.linkedin.com/in/akshayravikant/" target="_blank">LinkedIn</Link></li>
            <li><Link to="https://x.com/exJeweller" target="_blank">X / Twitter</Link></li>
            <li><Link to="https://google.com" target="_blank" className='text-zinc-700'>Behance</Link></li>
            <li><Link to="https://www.fiverr.com/ark_jewelry" target="_blank">Fiverr</Link></li>
        </ul>
      </div>
    
  }

  return (
    // <div className=''>
    //     <p className='curly-braces text-sm pb-6 font-extralight'>I'm also at</p>
    //     <ul className='w-full md:w-full social-list font-extralight leading-none tracking-normal flex md:flex-row lg:flex-col justify-between gap-4'>
    //         <li><Link to="https://www.linkedin.com/in/akshayravikant/" target="_blank">LinkedIn</Link></li>
    //         <li><Link to="https://x.com/exJeweller" target="_blank">X / Twitter</Link></li>
    //         <li><Link to="https://google.com" target="_blank" className='text-zinc-700'>Behance</Link></li>
    //         <li><Link to="https://www.fiverr.com/ark_jewelry" target="_blank">Fiverr</Link></li>
    //     </ul>
    // </div>
    <span>{social}</span>
  )
    
    
}

export default SocialLinks