import React from 'react';

export default function UnderlinedText({ text, active }) {
  const underlineClass = active ? 'bg-[length:100%_2px]' : 'group-hover:bg-[length:100%_2px]';

  return (
    <div className='group inline-block'>
      <span className={`bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat transition-all duration-500 ease-out ${underlineClass}`}>
        {text}
      </span>
    </div>
  );
}
