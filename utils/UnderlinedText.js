import React from 'react';

export default function UnderlinedText({ text, active, classes }) {
  const underlineClass = active ? 'bg-[length:100%_2px]' : 'group-hover:bg-[length:100%_2px]';

  return (
    <div className='group '>
      <span className={`bg-left-bottom bg-gradient-to-r from-[#936d42] to-[#936d42] bg-[length:0%_2px] bg-no-repeat transition-all duration-500 ease-out font-light ${classes}  ${underlineClass}`}>
        {text}
      </span>
    </div>
  );
}