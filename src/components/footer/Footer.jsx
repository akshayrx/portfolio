import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navItems } from '../elements/Copywriting'
import {FaArrowUpLong} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
//import { KlaviyoFormTrigger } from '../features/KlaviyoFormTrigger'


function Footer() {
  return (
    <footer className='w-full flex flex-col justify-center items-center pt-2 pb-12 border-t border-zinc-100/30 bg-zinc-900 text-zinc-200'>
        <nav className='container'>
            <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start pt-12 gap-4">
                <small className=''>
                    <ul className='menu justify-between items-start flex font-light text-xs gap-8'>
                        <li>
                            <NavLink to="https://www.linkedin.com/in/akshayravikant/" target='_blank'>LinkedIn</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://www.behance.net/akshayrx" target='_blank'>Portfolio on Behance</NavLink>
                        </li>
                    </ul>
                </small>
                <small>
                    <ul className='menu justify-between items-start flex font-light text-xs gap-8'>
                        {navItems.map((item, index) => (
                            <li key={index}>
                            <NavLink
                                to={item.href}
                                className={({ isActive, isPending }) => 
                                    `${ isActive ? "text-[#0066cc] font-medium" : "" }
                                    hover:text-[#0066cc]`
                                }
                                >
                                {item.label}
                            </NavLink>
                            </li>
                        ))}
                </ul>
                </small>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between items-start pt-4 gap-4 mt-4 border-t border-zinc-600/30">
                <small className='menu justify-between items-center flex font-light text-xs gap-8'>
                    <p className='text-xs'>&copy; 2024</p>
                    <p className='text-xs'>Based in Mumbai, IN</p>
                    
                </small>
                <small><Link title="This site on GitHub" to="https://github.com/akshayrx/portfolio" target='_blank' className='flex gap-2 text-xs font-light 2xl:font-normal justify-between items-center'><FaGithub /> This site on GitHub <span className="rotate-45"><FaArrowUpLong /></span></Link></small>
            </div>
        {/* <KlaviyoFormTrigger /> */}
        </nav>
    </footer>
  )
}

export default Footer