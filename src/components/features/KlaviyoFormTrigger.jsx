import React, { useEffect } from 'react';

export function KlaviyoFormTrigger() {
  useEffect(() => {
    const triggerElements = document.querySelectorAll('.klaviyo_form_trigger');

    const handleClick = (event) => {
      event.preventDefault();
      window._klOnsite = window._klOnsite || [];
      window._klOnsite.push(['openForm', 'SjVZ56']);
    };

    triggerElements.forEach((element) => {
      element.addEventListener('click', handleClick);
    });

    return () => {
      triggerElements.forEach((element) => {
        element.removeEventListener('click', handleClick);
      });
    };

  }, []);

  return null;
}
