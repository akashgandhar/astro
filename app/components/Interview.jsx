import UnderlinedText from '@/utils/UnderlinedText'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Interview() {
  return (
    <div className="flex p-[8%] px-[13%] justify-between">
        <div className="flex flex-col px-9">
            <p className='py-4 text-base sm:text-6xl text-[#936d42] font-light'>INTERVIEW WITH<br/> Sabha Tiwari </p>
            <p className='py-7 w-full sm:w-[70%]'>In an enlightening conversation with Sabha Tiwari, we delve into the intricacies of creative processes, the importance of perseverance in the face of challenges, and the profound impact of art on society. Sabha shares insights from her journey, emphasizing the transformative power of dedication and the beauty of finding one's voice through artistic expression.</p>
            <Link href="/contact">
            <UnderlinedText text='CONTACT US' classes={'text-center text-sm sm:text-base p-1 sm:p-4 bg-black text-white'} />
            </Link>

        </div>
        <div className="hidden sm:flex w-[70%] h-[70%]">
            <Image
                src="/dp.jpeg"
                width={1000}
                height={1000}
                className="rounded-xl"
            />
        </div>
    </div>
  )
}
