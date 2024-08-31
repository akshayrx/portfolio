import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SectionTitle from '../structures/SectionTitle'
import {FaArrowUpLong} from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import { portfolioWorks } from '../elements/Copywriting';

function Works() {

  return (
    <section className='container w-full bg-zinc-900'>
        <SectionTitle title="featured projects" />
        <div className="cardgrid-portfolio-behance">
            <div className="flex flex-wrap -mx-2">
                {portfolioWorks.map((card) => (
                    <NavLink
                    key={card.id}
                    to={card.link}
                    target='_blank'
                    className={({ isActive, isPending }) => 
                        `${ isActive ? "text-[#0066cc]" : "" }
                            group sm:basis-full w-full md:basis-1/2 lg:basis-1/2 p-2 mb-4`
                    }
                    >
                    <div className="" title='Redirects to portfolio on Behance.com'>
                        <div className="rounded-lg overflow-hidden">
                            <img src={card.image} alt={card.caption} className="rounded-lg shadow-md hover:scale-95 ease-in-out duration-700 cursor-pointer w-full" />
                            <div className='w-full flex justify-between items-center gap-4 text-lg px-4 pt-2 pb-1'>
                                <div className='group-hover:text-[#0066cc]'>
                                    <span>{card.caption}</span>
                                </div>
                                <div title="Opens on Behance" className='capitalize group-hover:text-zinc-300 flex gap-2 text-sm text-zinc-500 font-light 2xl:font-normal justify-between items-center'>
                                    View on Behance <FaBehance /><span className="rotate-45"><FaArrowUpLong /></span>
                                </div>
                            </div>
                            <div className='w-full flex px-4'>
                                <div className='uppercase text-sm tracking-wide text-zinc-500 font-light 2xl:font-normal group-hover:text-[#0066cc]'>{card.keyword}</div>
                            </div>
                        </div>
                    </div>
                    </NavLink>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Works