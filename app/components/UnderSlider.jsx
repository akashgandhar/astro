import React from 'react'
import Image from 'next/image'

export default function UnderSlider() {
  return (
    <div className="flex w-full flex-col">
        <div className="flex">
          <div className="flex border border-r-red-800 border-b-red-800 w-1/3 justify-between">
            <div className="flex flex-col sm:flex-row justify-between  w-full items-center h-[23vh] py-5 px-4">
            <div className="flex sm:hidden  w-[30%] h-[100%]">
                <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex py-3 text-xs sm:text-3xl text-[#936d42]"><p className="text-sm md:text-base">LATEST ARTICLES</p></div>
                <div className="flex py-3 text-xs sm:text-sm"><p>LEARN MORE</p></div>
              </div>
              <div className="hidden sm:flex w-[30%] h-[100%]">
                <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
            </div>
          </div>
          <div className="flex border border-r-red-800 border-b-red-800 w-1/3 justify-between">
            <div className="flex flex-col sm:flex-row justify-between  w-full items-center h-[23vh] py-5 px-4">
            <div className="flex sm:hidden  w-[30%] h-[100%]">
                <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex py-3 text-xs sm:text-3xl text-[#936d42]"><p className="text-sm md:text-base">LATEST ARTICLES</p></div>
                <div className="flex py-3 text-xs sm:text-sm"><p>LEARN MORE</p></div>
              </div>
              <div className="hidden sm:flex w-[30%] h-[100%]">
                <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
            </div>
          </div>
          <div className="flex border border-r-red-800 border-b-red-800 w-1/3 justify-between">
            <div className="flex flex-col sm:flex-row justify-between  w-full items-center h-[23vh] py-5 px-4">
            <div className="flex sm:hidden  w-[30%] h-[100%]">
                <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex py-3 text-xs sm:text-3xl text-[#936d42]"><p className="text-sm md:text-base">LATEST ARTICLES</p></div>
                <div className="flex py-3 text-xs sm:text-sm"><p>LEARN MORE</p></div>
              </div>
              <div className="hidden sm:flex w-[30%] h-[100%]">
                <Image src="/slider/1.jpg" width={1000} height={1000} className="rounded-full sm:rounded-t-full" />
              </div>
            </div>
          </div>
          
        </div>
        <div className="flex">

        </div>
      </div>
  )
}
