"use client"
import React, { useEffect, useState } from 'react';
import UnderlinedText from '@/utils/UnderlinedText';
import Link from 'next/link';

export default function BookAppointment() {
  const [parallaxStyle, setParallaxStyle] = useState({
    backgroundPositionY: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const newPositionY = offset * 0.1;
  
      setParallaxStyle({
        backgroundPositionY: `${newPositionY}px`,
      });
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
    className="flex bg-[url('/parallex/bgimg.jpg')] w-full h-[80vh]"
    style={{
      parallaxStyle,
      backgroundPositionY: `${parallaxStyle.backgroundPositionY}px`,
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover', // Ensure the image covers the div without repeating
    }}
  >
      <div className="flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-full items-center justify-center">
          <p className='text-white px-3 sm:px-0 text-xl sm:text-4xl text-start justify-center py-7'>BREAK DOWN YOUR PERSONAL<br/>NUMBERS FOR THE YEAR AHEAD!</p>
          <div className="flex p-4 bg-white">
            <Link href="/bookappointment">
              <UnderlinedText text='MAKE APPOINTMENT' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}