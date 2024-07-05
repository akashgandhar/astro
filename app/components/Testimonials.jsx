import React from 'react'
import Image from 'next/image'
const testimonials = [
  {
    src: "/slider/1.jpg",
    text: "I came to consultation, because I was puzzled with current life situation and Stargaze gave me clear ways to develop.",
    name: "Aiyana Murphy, Singer",
  },
  {
    src: "/slider/1.jpg",
    text: "I came to consultation, because I was puzzled with current life situation and Stargaze gave me clear ways to develop.",
    name: "Aiyana Murphy, Singer",
  },
  {
    src: "/slider/1.jpg",
    text: "I came to consultation, because I was puzzled with current life situation and Stargaze gave me clear ways to develop.",
    name: "Aiyana Murphy, Singer",
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex border border-r-red-800 border-b-red-800 border-t-red-800 w-1/3 justify-between m-2">
            <div className="flex flex-col justify-center w-full items-center h-[50vh] py-5 px-1 md:px-4">
              <div className="flex w-full md:w-[15%] h-full md:h-[20%]">
                <Image src={testimonial.src} width={1000} height={1000} className="rounded-full" alt="testimonial" />
              </div>
              <div className="flex flex-col w-full items-center text-start md:text-center">
                <div className="flex py-3 text-xs md:text-sm items-center justify-start md:justify-center w-full">
                  <p className='w-full md:w-[50%] text-xs md:text-xl text-[#936d42]'>{`"${testimonial.text}"`}</p>
                </div>
                <p className='text-xs text-[#936d42]'>{testimonial.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
