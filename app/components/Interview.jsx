import UnderlinedText from '@/utils/UnderlinedText'
import React from 'react'
import Image from 'next/image'

export default function Interview() {
  return (
    <div className="flex p-[8%] px-[13%] justify-between">
        <div className="flex flex-col px-9">
            <p className='py-4 text-base sm:text-6xl text-[#936d42] font-light'>INTERVIEW WITH<br/> Lorem Ipsum </p>
            <p className='py-7 w-full sm:w-[70%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, se do eiusmod tempor incididunt util labore et dolore magna aliqua ut enim ad minim venia quis </p>
            <UnderlinedText text='MAKE APPOINTMENT' classes={'text-center text-sm sm:text-base p-1 sm:p-4 bg-black text-white'} />

        </div>
        <div className="hidden sm:flex w-[70%] h-[70%]">
            <Image
                src="/slider/1.jpg"
                width={1000}
                height={1000}
                className="rounded-xl"
            />
        </div>
    </div>
  )
}
