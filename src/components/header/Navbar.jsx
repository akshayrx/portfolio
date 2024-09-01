import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ButtonSolid from '../elements/ButtonSolid'
import { callToActions, navItems } from '../elements/Copywriting'
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";


function Navbar() {

        const ctaTextNavbar = callToActions.find((c) => c.block === "header/navigation" );
        const [mobileIsOpen, setMobileIsOpen] = useState(false);
      
        const toggleMenu = () => {
          setMobileIsOpen(!mobileIsOpen);
          //console.log(e.name);
        };

        const closeMenu = () => {
            setMobileIsOpen(false);
        }

        let close = "Close Menu"

  return (
    <header className=".site-container-size sticky top-0 z-50 w-full py-5 backdrop-blur-sm backdrop-saturate-100 mix-blend-normal bg-zinc-300/70">
        <nav className="container">
            <div className='flex justify-between items-center'>
                <Link to='/#hero' onClick={closeMenu} className='name md:w-3/12 poppins-regular text-lg'>
                        Akshay Ravikant
                </Link>
                <div className='menu-trials absolute md:static md:9/12 w-full md:justify-end justify-start items-start flex bg-white/95 md:bg-transparent top-[64px] md:flex left-0 rounded-b-lg drop-shadow-lg md:drop-shadow-none border-b border-zinc-600 md:border-0'>
                    <div className={`${mobileIsOpen ? "block" : "hidden md:flex"} transform transition-transform duration-500 ease-in actions flex flex-col md:flex-row items-start md:items-center px-20 py-12 md:px-0 md:py-0 gap-6`}>
                        <ul className='flex flex-col md:flex-row items-start gap-6'>
                            {navItems.map((item, index) => (
                                <li key={index} className='mb-1 py-1'>
                                    <NavLink
                                        to={item.href}
                                        onClick={closeMenu}
                                        className={({ isActive, isPending }) => 
                                            `${ isActive ? "text-[#0066cc]" : "" }
                                            hover:text-zinc-600 text-sm`
                                        }
                                        >
                                        {item.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <ButtonSolid url="/" cta={ctaTextNavbar.ctaButton} buttonMode="dark" />
                    </div>
                </div>
                <div className="md:hidden flex flex-col justify-end">
                    <button onClick={toggleMenu}>
                        {mobileIsOpen ? <IoCloseSharp /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar