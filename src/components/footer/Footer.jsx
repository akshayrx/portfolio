import React from 'react'
import { NavLink } from 'react-router-dom'
import { navItems } from '../elements/Copywriting'
//import { KlaviyoFormTrigger } from '../features/KlaviyoFormTrigger'


function Footer() {
  return (
    <footer className='w-full flex flex-col justify-center items-center pt-2 pb-12 border-t border-zinc-100/30 bg-zinc-900 text-zinc-200'>
        <nav className='container'>
            <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pt-12 gap-4">
                <small className=''>
                    <ul className='menu justify-between items-center flex font-light text-xs gap-8'>
                        <li>
                            <NavLink to="https://linkedin.com" target='_blank'>LinkedIn</NavLink>
                        </li>
                        <li>
                            <NavLink to="https://linkedin.com" target='_blank'>Portfolio on Behance</NavLink>
                        </li>
                    </ul>
                </small>
                <small>
                    <ul className='menu justify-between items-center flex font-light text-xs gap-8'>
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
            <div className="w-full flex justify-between items-center pt-4 gap-4">
                <small className='menu justify-between items-center flex font-light text-xs gap-8'>
                    <span className='text-xs'>&copy; 2024</span>
                    <span><NavLink to="/" target='_blank' className='curly-braces text-xs'>this site on github</NavLink></span>
                </small>
                <small>
                    <span className='font-light text-xs'>Based in Mumbai, IN</span>
                </small>
            </div>
        {/* <KlaviyoFormTrigger /> */}
        </nav>
    </footer>
  )
}

export default Footer