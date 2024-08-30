import React, {useState} from 'react'
import { pageServices, pageAbout, pageContact, defaultPageTitle } from '../elements/Copywriting';

function PageTitle(props) {

    // Define a message constant based on the props.page prop
    
    let message;

    if (!props.page) {
        message = defaultPageTitle.content;
    } else if (props.page === "about") {
        message = pageAbout.content;
    } else if (props.page === "contact") {
        message = pageContact.content;
    } else if (props.page === "services") {
        message = pageServices.content;
    } else {
        message = defaultPageTitle.content;
    }
       
      return (
        <div className='w-full flex flex-col justify-start items-start pb-16 lg:pb-24 border-b border-zinc-600/20'>
            <h2 className='w-full lg:w-8/12 pb-6 font-extralight'>
                {message}
            </h2>
        </div>
      )
}

export default PageTitle

//PageTitle.propTypes = {page: PropTypes.string.isRequired}