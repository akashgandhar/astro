'use client'
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const services = [
  {
    src: "/slider/2.jpg",
    title: "HOROSCOPE",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas.",
    className: 'rounded-xl'
  },
  {
    src: "/slider/2.jpg",
    title: "TARROT",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas.",
    className: 'rounded-full'
  },
  {
    src: "/slider/2.jpg",
    title: "NATAL CHART",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas.",
    className: 'rounded-xl'
  },
  {
    src: "/slider/2.jpg",
    title: "GUIDANCE",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quas.",
    className: 'rounded-full'
  },
];

export default function Services() {
    return (
      <div className="flex items-center h-[70vh] py-20">
        <div className="flex flex-nowrap sm:flex-row items-center justify-between overflow-x-auto ">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col justify-center items-center min-w-[300px] mx-2">
              <Image src={service.src} width={5000} height={5000} className={`w-[50%] h-auto justify-center ${service.className}`} alt={service.title} />
              <p className='py-3'>{service.title}</p>
              <p className='w-52 justify-center text-justify'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }