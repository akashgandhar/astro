'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const services = [
  { title: 'Reiki Healing', description: 'A healing technique based on the principle that the therapist can channel energy into the patient by means of touch.', src: '/services/reiki.webp' },
  { title: 'Candle Healing', description: 'A spiritual healing method that involves focusing energy and intention through candles.', src: '/services/candle.jpeg' },
  { title: 'Spells & Black Magic Removal', description: 'Specialized services to remove curses, spells, and the effects of black magic.', src: '/services/bmr.webp' },
  { title: 'Tarot Spell', description: 'Using Tarot as a tool to identify and clear blockages and negative energies.', src: '/services/tarotandspells.jpeg' },
  { title: 'Numerology', description: 'The belief in the divine or mystical relationship between a number and one or more coinciding events.', src: '/services/numerology.jpeg' },
  { title: 'Maa Kali Healing', description: 'Healing techniques invoking the energy of Maa Kali for protection and strength.', src: '/services/makali.jpeg' },
];

export default function Services() {
  return (
    <div className="flex items-center h-[70vh] py-20">
      <div className="flex flex-nowrap sm:flex-row items-center justify-between overflow-x-auto">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col justify-center items-center min-w-[300px] mx-2">
            <div className="image-container" style={{ height: '250px', width: '250px', position: 'relative' }}>
              <Image src={service.src} layout="fill" objectFit="cover" alt={service.title} />
            </div>
            <p className='py-3'>{service.title}</p>
            <p className='w-[90%] justify-left text-left description' style={{ height: '100px' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}