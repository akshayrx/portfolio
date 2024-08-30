import React from 'react';
import ButtonOutline from '../elements/ButtonOutline';

function Notes() {

  return (
    <div className="container py-6 flex flex-col md:flex-row gap-3 justify-between items-center z-0">
        {[
            "onboarding in 3 easy steps", 
            "4 to 6 weeks delivery",
            ].map((item, index) => 
                (
            <p key={index} className="hidden md:flex justify-between text-sm curly-braces">{item}</p>
        ))}
        <span>
            <ButtonOutline url="/services#pricing-table" target="_self" cta="transparent pricing" />
        </span>
    </div>
  )
}

export default Notes