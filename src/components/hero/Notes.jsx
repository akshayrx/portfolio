import React from 'react';
import ButtonOutline from '../elements/ButtonOutline';
import { callToActions } from '../elements/Copywriting';

function Notes() {

  const ctaTextHero = callToActions.find((c) => c.block === "hero/subcta" );

  return (
    <div className="hero-notes container py-6 flex flex-col md:flex-row gap-3 justify-between items-center z-0">
        {[
            "onboarding in 3 easy steps", 
            "4 to 6 weeks delivery",
            ].map((item, index) => 
                (
            <p key={index} className="hidden md:flex justify-between text-sm curly-braces">{item}</p>
        ))}
        <span>
            <ButtonOutline url="/services#pricing-table" target="_self" cta={ctaTextHero.ctaButton} />
        </span>
    </div>
  )
}

export default Notes