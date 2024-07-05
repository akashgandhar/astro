import React from 'react'
import Image from 'next/image'
import Testimonials from '../components/Testimonials'
import Services from '../components/Services'

export default function page() {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col sm:flex-row h-[90vh] p-[10%]">
                <div className="flex flex-col w-1/2">
                    <h1 className='text-xl md:text-6xl justify-center'>HELLO! I'M<br />NAMENAME</h1>
                    <p className='py-9 w-[70%] text-sm md:text-xl'>Our certified professional astrologer with over 15 years of consulting experience is ready to help you comprehend the secrets of your fate encoded in position of celestial bodies at the time of your birth. Absolute confidentiality is guaranteed.</p>
                    <p>Award Winning Author</p>
                    <p>Best Seller 2022</p>
                    <p>A Guide Through Life</p>
                    <p>Horoscope of Future</p>
                </div>
                <div className="flex p-5 justify-center w-1/2">
                    <Image className='rounded-xl w-auto md:h-[100%] h-[70%] items-center justify-center' src="/dp.jpeg" width={5000} height={5000} alt="about" />
                </div>
            </div>
            <div className="flex flex-col">
                <p className="text-5xl text-center w-full-items-center pb-20">What Others Say...</p>
                <Testimonials/>
            </div>
            <div className="flex flex-col">
            <p className="text-5xl text-center w-full-items-center pt-20">My Services</p>
            <Services/>
            </div>
        </div>
    )
}
