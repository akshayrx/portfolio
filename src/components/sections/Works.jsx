import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import SectionTitle from '../structures/SectionTitle'
import {FaArrowUpLong} from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";

function Works() {
  return (
    <section className='container w-full bg-zinc-900'>
        <SectionTitle title="featured projects" />
        <div className='card-placeholder'>
            <div className='cards-container w-full pb-10 flex grow flex-col md:flex-row lg:flex-row xl:flex-row gap-10'>
                <div className='card w-full md:w-1/2 lg:w-1/2' title='Redirects to portfolio on Behance.com'>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive, isPending }) => 
                            `${ isActive ? "text-[#0066cc] font-medium" : "" }
                            hover:text-[#0066cc]`
                        }
                        >
                        <img 
                            className='rounded-lg hover:scale-95 ease-in-out duration-700 cursor-pointer w-full' 
                            src='../../akshayrx-standby-image.png'
                            alt="" />
                        <div className='card-title mt-4 capitalize pb-4 font-light flex flex-col justify-start items-start gap-2'>
                            <div className='w-full flex justify-between items-center gap-4 text-lg'>
                                <div className=''>
                                    <span>Project Name</span>
                                    <span className='hidden h-2 w-2 rounded-full bg-zinc-100'></span>
                                </div>
                                <div title="Opens on Behance" className='capitalize flex gap-2 text-sm text-zinc-500 justify-between items-center'>
                                    View on Behance <FaBehance /><span className="rotate-45"><FaArrowUpLong /></span>
                                </div>
                            </div>
                            <div className='w-full flex'>
                                <div className='uppercase text-sm tracking-wide text-zinc-500'>2024 / design system / cms design</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className='card w-full md:w-1/2 lg:w-1/2' title='Redirects to portfolio on Behance.com'>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive, isPending }) => 
                            `${ isActive ? "text-[#0066cc] font-medium" : "" }
                            hover:text-[#0066cc]`
                        }
                        >
                        <img 
                            className='rounded-lg hover:scale-95 ease-in-out duration-700 cursor-pointer w-full' 
                            src='../../akshayrx-standby-image.png' 
                            alt="" />
                        <div className='card-title mt-4 capitalize pb-4 font-light flex flex-col justify-start items-start gap-2'>
                            <div className='w-full flex justify-between items-center gap-4 text-lg'>
                                <div className=''>
                                    <span>Project Name</span>
                                    <span className='hidden h-2 w-2 rounded-full bg-zinc-100'></span>
                                </div>
                                <div title="Opens on Behance" className='capitalize flex gap-2 text-sm text-zinc-500 justify-between items-center'>
                                    View on Behance <FaBehance /><span className="rotate-45"><FaArrowUpLong /></span>
                                </div>
                            </div>
                            <div className='w-full flex'>
                                <div className='uppercase text-sm tracking-wide text-zinc-500'>2024 / design principal / cms design</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className='cards-container w-full pb-10 flex flex-col md:flex-row lg:flex-row gap-10'>
                <div className='card w-full md:w-1/2 lg:w-1/2' title='Redirects to portfolio on Behance.com'>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive, isPending }) => 
                            `${ isActive ? "text-[#0066cc] font-medium" : "" }
                            hover:text-[#0066cc]`
                        }
                        >
                        <img 
                            className='rounded-lg hover:scale-95 ease-in-out duration-700 cursor-pointer w-full' 
                            src='../../akshayrx-standby-image.png'
                            alt="" />
                        <div className='card-title mt-4 capitalize pb-4 font-light flex flex-col justify-start items-start gap-2'>
                            <div className='w-full flex justify-between items-center gap-4 text-lg'>
                                <div className=''>
                                    <span>Project Name</span>
                                    <span className='hidden h-2 w-2 rounded-full bg-zinc-100'></span>
                                </div>
                                <div title="Opens on Behance" className='capitalize flex gap-2 text-sm text-zinc-500 justify-between items-center'>
                                    View on Behance <FaBehance /><span className="rotate-45"><FaArrowUpLong /></span>
                                </div>
                            </div>
                            <div className='w-full flex'>
                                <div className='uppercase text-sm tracking-wide text-zinc-500'>2024 / design principal / cms design</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className='card w-full md:w-1/2 lg:w-1/2' title='Redirects to portfolio on Behance.com'>
                    <NavLink
                        to="/portfolio"
                        className={({ isActive, isPending }) => 
                            `${ isActive ? "text-[#0066cc] font-medium" : "" }
                            hover:text-[#0066cc]`
                        }
                        >
                        <img 
                            className='rounded-lg hover:scale-95 ease-in-out duration-700 cursor-pointer w-full' 
                            src='../../akshayrx-standby-image.png'
                            alt="" />
                        <div className='card-title mt-4 capitalize pb-4 font-light flex flex-col justify-start items-start gap-2'>
                            <div className='w-full flex justify-between items-center gap-4 text-lg'>
                                <div className=''>
                                    <span>Project Name</span>
                                    <span className='hidden h-2 w-2 rounded-full bg-zinc-100'></span>
                                </div>
                                <div title="Opens on Behance" className='capitalize flex gap-2 text-sm text-zinc-500 justify-between items-center'>
                                    View on Behance <FaBehance /><span className="rotate-45"><FaArrowUpLong /></span>
                                </div>
                            </div>
                            <div className='w-full flex'>
                                <div className='uppercase text-sm tracking-wide text-zinc-500'>2024 / design principal / cms design</div>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Works