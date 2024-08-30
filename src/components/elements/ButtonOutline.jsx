import React from 'react';
import {FaArrowUpLong} from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function ButtonOutline(props) {
  return (
    <NavLink 
      to={props.url} 
      target={props.target} 
      //rel="noopener noreferrer" 
      className='border border-zinc-800 text-zinc-900 hover:bg-zinc-900 hover:text-zinc-300 hover:ease-linear transition duration-150 ease-out uppercase text-sm rounded-full font-normal leading-none flex justify-between items-center gap-2 px-4 py-2 w-fit'>
      {props.cta}
      <span className="rotate-45"><FaArrowUpLong /></span>
    </NavLink>
  )
}

export default ButtonOutline