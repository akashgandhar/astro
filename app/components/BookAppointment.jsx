import UnderlinedText from '@/utils/UnderlinedText'
import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function BookAppointment() {
  return (
    
    <div className="flex bg-[url('/parallex/bgimg.jpg')] bg-cover ')] w-full h-[80vh]">
        <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-col w-full items-center justify-center">
                <p className='text-white px-3 sm:px-0 text-xl sm:text-4xl text-start justify-center py-7'>BREAK DOWN YOUR PERSONAL<br/>NUMBERS FOR THE YEAR AHEAD!</p>
                <div className="flex p-4 bg-white">
                    <UnderlinedText text='MAKE APPOINTMENT' />
                </div>
            </div>
        </div>
    </div>
  )
}
