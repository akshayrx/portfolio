import { motion } from 'framer-motion';
import React, { useState } from 'react'

function Featured() {

    const [isHover, setisHover] = useState(false);

  return (
    <section className='w-full py-20 bg-zinc-900'>
        <div className='py-10 border-t border-zinc-600 flex gap-4'>
            <h3 className='text-[3vw] font-extralight leading-none tracking-normal'>Featured projects</h3>
        </div>
        <div className='card-placeholder'>
            <div className='cards-container w-full py-10 flex gap-10 relative'>
                <div className='card w-1/2 border border-zinc-100' 
                    onMouseEnter={() => setisHover(true)}
                    onMouseLeave={() => setisHover(false)}>
                    <div className="card-keyword absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-[9] overflow-hidden">
                        <div className='text-[4vw] flex uppercase font-semibold tracking-tight text-green-500'>
                            {"unique".split("").map((item, index) => (
                                <motion.span
                                    initial={{y: "100%"}}
                                    transition={{ease:"linear", delay: index*0.03 }}
                                    animate={isHover ? {y: "0"} : {y: "100%"}}
                                    className=''>
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <div className='card-title text-sm uppercase pb-4 font-light flex items-center gap-2'>
                        <span className='h-2 w-2 rounded-full bg-zinc-100'></span><span>Fyde</span>
                    </div>
                    <img 
                        className='rounded-lg hover:scale-95 ease-in-out duration-700 cursor-pointer w-full' 
                        src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" 
                        alt="" />
                </div>
                <div className='card w-1/2 border border-zinc-100' 
                    onMouseEnter={() => setisHover(true)}
                    onMouseLeave={() => setisHover(false)}>
                    <div className="card-keyword absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 z-[9] overflow-hidden">
                        <div className='text-[4vw] flex uppercase font-semibold tracking-tight text-green-500'>
                            {"talent".split("").map((item, index) => (
                                <motion.span
                                    initial={{y: "100%"}}
                                    transition={{ease:"linear", delay: index*0.03 }}
                                    animate={isHover ? {y: "0"} : {y: "100%"}}
                                    className=''>
                                    {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                    <div className='card-title text-sm uppercase pb-4 font-light flex items-center gap-2'>
                        <span className='h-2 w-2 rounded-full bg-zinc-100'></span><span>Trawa</span>
                    </div>
                    <img 
                        className='rounded-lg hover:scale-95 ease-in-out duration-700 cursor-pointer w-full' 
                        src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg" 
                        alt="" />
                </div>
                
            </div>
            <div className='cards w-full py-10 flex gap-10 relative'>
                <div className='card w-1/2'>
                    <div className='card-title text-sm uppercase pb-4 font-light flex items-center gap-2'>
                        <span className='h-2 w-2 rounded-full bg-zinc-100'></span><span>Fyde</span>
                    </div>
                    <img 
                        className='rounded-lg hover:scale-95 ease-in-out duration-700 cursor-pointer' 
                        src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" 
                        alt="" />
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Featured