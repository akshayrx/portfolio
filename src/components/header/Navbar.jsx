import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ButtonSolid from '../elements/ButtonSolid'
import { navItems } from '../elements/Copywriting'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { KlaviyoFormTrigger }from '../features/KlaviyoFormTrigger'


function Navbar() {

        const [mobileIsOpen, setMobileIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setMobileIsOpen(!mobileIsOpen);
        };

        let close = "Close Menu"

  return (
    <header className=".site-container-size w-full py-5 backdrop-blur-sm backdrop-saturate-100 mix-blend-normal bg-zinc-300/70">
        <nav className="container">
            <div className='flex justify-between items-center'>
                <Link to='/' className='name'>
                        Akshay Ravikant
                </Link>
                <ul className='menu hidden md:flex md:items-center md:space-x-6 font-light text-sm'>
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
                    <li>
                        <ButtonSolid url="/services" cta="book now" buttonMode="dark" />
                    </li>
                </ul>
                <div className="md:hidden flex flex-col justify-end">
                    <button onClick={toggleMenu}>
                        {mobileIsOpen ? <IoCloseSharp /> : <FiMenu />}
                    </button>
                </div>
            </div>
            {mobileIsOpen && (
                <div className='fixed top-0 left-0 right-0 rounded-b-lg sm:hidden px-4 pt-2 z-[99] bg-zinc-800 text-zinc-300 font-normal'>
                    <div className='flex justify-between items-start pt-12 px-6'>
                        <div className='flex flex-col justify-start items-start gap-4 py-12'>
                            <ul className='mobilemenu mb-6'>
                                {navItems.map((item, index) => (
                                <li key={index} className='mb-1 py-1'>
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
                            <div className='klaviyo_form_trigger call flex justify-start items-center gap-2 underline underline-offset-4'><span className='w-2 h-2 rounded-full bg-green-500'></span>Available for projects</div>
                        </div>
                        <div className='text-sm'>
                            <button onClick={toggleMenu}>
                                {mobileIsOpen ? close : <FiMenu />}
                            </button>
                        </div>
                    </div>
                    <KlaviyoFormTrigger />
                </div>
            )}
        </nav>
    </header>
  )
}

export default Navbar