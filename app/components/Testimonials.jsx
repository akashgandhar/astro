import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <div className="flex w-full items-center">
      <div className="flex justify-center items-center">
        <div className="flex border border-r-red-800 border-b-red-800 border-t-red-800 w-1/3 justify-between">
          <div className="flex flex-col justify-center  w-full items-center h-[50vh] py-5 px-1 md:px-4">
            <div className="flex w-full md:w-[15%] h-full md:h-[20%]">
              <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full" />
            </div>
            <div className="flex flex-col w-full items-center text-start md:text-center">
              <div className="flex py-3 text-xs md:text-sm items-center justify-start md:justify-center w-full"><p className='w-full md:w-[50%] text-xs md:text-xl text-[#936d42]'>"I came to consultation, because I was puzzled with current life situation and Stargaze gave me clear ways to develop."</p></div>
              <p className='text-xs text-[#936d42]'>Aiyana Murphy, Singer</p>
            </div>
          </div>
        </div>
        <div className="flex border border-r-red-800 border-b-red-800 border-t-red-800 w-1/3 justify-between">
          <div className="flex flex-col justify-center  w-full items-center h-[50vh] py-5 px-1 md:px-4">
            <div className="flex w-full md:w-[15%] h-full md:h-[20%]">
              <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full" />
            </div>
            <div className="flex flex-col w-full items-center text-start md:text-center">
              <div className="flex py-3 text-xs md:text-sm items-center justify-start md:justify-center w-full"><p className='w-full md:w-[50%] text-xs md:text-xl text-[#936d42]'>"I came to consultation, because I was puzzled with current life situation and Stargaze gave me clear ways to develop."</p></div>
              <p className='text-xs text-[#936d42]'>Aiyana Murphy, Singer</p>
            </div>
          </div>
        </div>
        <div className="flex border border-r-red-800 border-b-red-800 border-t-red-800 w-1/3 justify-between">
          <div className="flex flex-col justify-center  w-full items-center h-[50vh] py-5 px-1 md:px-4">
            <div className="flex w-full md:w-[15%] h-full md:h-[20%]">
              <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full" />
            </div>
            <div className="flex flex-col w-full items-center text-start md:text-center">
              <div className="flex py-3 text-xs md:text-sm items-center justify-start md:justify-center w-full"><p className='w-full md:w-[50%] text-xs md:text-xl text-[#936d42]'>"I came to consultation, because I was puzzled with current life situation and Stargaze gave me clear ways to develop."</p></div>
              <p className='text-xs text-[#936d42]'>Aiyana Murphy, Singer</p>
            </div>
          </div>
        </div>
        
        
        
      </div>

    </div>
  )
}
