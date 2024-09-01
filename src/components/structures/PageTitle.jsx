import React from 'react'
import { pages } from '../elements/Copywriting';

function PageTitle(props) {

    const page = pages.find((p) => p.page === props.page );
       
      return (
        <div className='w-full flex flex-col justify-start items-start pb-16 lg:pb-24 border-b border-zinc-600/20'>
            <h2 className='w-full lg:w-8/12 pb-6 font-extralight'>
                {page.title}
            </h2>
        </div>
      )
}

export default PageTitle

//PageTitle.propTypes = {page: PropTypes.string.isRequired}