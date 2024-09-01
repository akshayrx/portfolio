import React from 'react'

function SectionTitle(props) {
  return (
        <div className='w-full py-8 border-t border-zinc-600/20'>
            <h3 className='text-[inherit] capitalize'>{props.title}</h3>
        </div>
  )
}

export default SectionTitle