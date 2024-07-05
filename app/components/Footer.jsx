import React from 'react';
import { FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import UnderlinedText from '@/utils/UnderlinedText';

const contactInfo = [
  { icon: FaPhone, text: 'Call +919999999999' },
  { icon: MdMessage, text: 'text@text.com' },
  { icon: FaMapMarkerAlt, text: '121, location to your workplace' },
];

const sections = [
  { title: 'HOROSCOPE', items: ['Daily Horoscope', 'Weakly Horoscope', 'Monthly Horoscope', 'Yearly Horoscope'] },
  { title: 'ASTROLOGY', items: ['ZODIAC', 'PLANETS', 'HOROSCOPE', 'PERSONAL GUIDE', 'MYSTIC', 'CRYSTAL'] },
];

export default function Footer() {
  return (
    <div className='h-[150vh] sm:h-[75vh] flex'>
      <footer className='flex flex-col sm:flex-row justify-between py-[6%] px-[4%] bg-[#FDF8F3] text-black text-center p-4 w-full h-full'>
        <div className="flex flex-col w-full items-start text-black">
          <h1 className="text-2xl">CONTACT INFO</h1>
          <div className="flex flex-col py-8">
            {contactInfo.map(({ icon: Icon, text }, index) => (
              <div className="flex py-3" key={index}>
                <div className='flex px-2 pl-4'>
                  <Icon className='w-5 h-5 text-black' />
                </div>
                <div className="flex text-black text-sm">
                  <UnderlinedText text={text} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {sections.map(({ title, items }) => (
          <div className="flex flex-col w-full items-start" key={title}>
            <h1 className="text-2xl">{title}</h1>
            <div className="flex flex-col py-8">
              {items.map((item, index) => (
                <div className="flex py-3" key={index}>
                  <div className="flex text-black text-sm">
                    <UnderlinedText text={item} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col w-full items-start">
          <h1 className="text-2xl">SIGN-UP FOR OUR NEWSLETTER</h1>
          <div className="flex flex-col py-8 w-full">
            <div className="flex">
              <div className="flex py-3 w-full">
                <input type="text" placeholder="Enter your email" className="bg-white border text-black p-4 w-full" />
              </div>
              <div className="flex py-3">
                <button className="bg-gray-900 text-white p-2 w-full text-sm">Subscribe</button>
              </div>
            </div>
            <div className="flex py-3">
              <div className="flex text-black text-sm">
                <p>We promise not to spam you :)</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}