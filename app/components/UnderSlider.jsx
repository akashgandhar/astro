import React from 'react';
import Image from 'next/image';
import UnderlinedText from '@/utils/UnderlinedText';
import Link from 'next/link';

const sliderItems = [
  { id: 1, src: '/slider/1.jpg', alt: 'Slider Image 1', name: 'CANDLE HEALING' },
  { id: 2, src: '/slider/2.jpg', alt: 'Slider Image 2', name: 'MA KALI HEALING' },
  { id: 3, src: '/slider/3.jpg', alt: 'Slider Image 3', name: 'CHAKRA BALANCING COURSE' },
];

export default function UnderSlider() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex">
        {sliderItems.map((item) => (
          <div key={item.id} className="flex border border-r-red-800 border-b-red-800 w-1/3 justify-between">
            <div className="flex flex-col sm:flex-row justify-between w-full items-center h-[23vh] py-5 px-4">
              <div className="flex sm:hidden w-[30%] h-[100%]">
                <Image src={item.src} alt={item.alt} width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex py-3 text-xs sm:text-3xl text-[#936d42]">
                  <p className="text-sm md:text-base">{item.name}</p>
                </div>
                <div className="flex py-3 text-xs sm:text-sm">
                  <Link href="/services">               
                      <UnderlinedText text="Learn More" />
                  </Link>
                </div>
              </div>
              <div className="hidden sm:flex w-[30%] h-[100%]">
                <Image src={item.src} alt={item.alt} width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex">
        {/* Additional content can go here */}
      </div>
    </div>
  );
}