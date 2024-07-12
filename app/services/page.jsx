"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'


const services = [
  { name: 'Reiki Healing', description: 'A healing technique based on the principle that the therapist can channel energy into the patient by means of touch.', image: '/services/reiki.webp' },
  { name: 'Candle Healing', description: 'A spiritual healing method that involves focusing energy and intention through candles.', image: '/services/candle.jpeg' },
  { name: 'Spells & Black Magic Removal', description: 'Specialized services to remove curses, spells, and the effects of black magic.', image: '/services/bmr.webp' },
  { name: 'Tarot Spell to Remove Blockages and Negative Energy', description: 'Using Tarot as a tool to identify and clear blockages and negative energies.', image: '/services/tarotandspells.jpeg' },
  { name: 'Numerology', description: 'The belief in the divine or mystical relationship between a number and one or more coinciding events.', image: '/services/numerology.jpeg' },
  { name: 'Maa Kali Healing', description: 'Healing techniques invoking the energy of Maa Kali for protection and strength.', image: '/services/makali.jpeg' },
];

const courses = [
  { name: 'Chakra Balancing Course', description: 'Learn how to balance and align your chakras for better energy flow and well-being.', image: '/services/chakra.jpeg' },
  { name: 'Reiki Healing Course', description: 'Become a certified Reiki healer with our comprehensive Reiki healing course.', image: '/services/reikihealing.jpg' },
];

export default function ServicesPage() {
  const [showCourses, setShowCourses] = useState(false);

  const router = useRouter();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">OUR SERVICES</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <div onClick={
            ()=>router.push(`/bookappointment?service=${service.name}&type=service`)
          } key={index} className="bg-white shadow-md -lg p-6">
            <img src={service.image} alt={service.name} className="w-full h-auto aspect-video object-cover -t-lg" />
            <h2 className="text-2xl font-light text-[#926D41] mt-4">{service.name}</h2>
            <p className="mt-2 font-light">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="my-12">
        
        <p className='font-semibold text-xl md:text-4xl w-full text-center'> COURSES</p>

          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div onClick={
                ()=>router.push(`/bookappointment?service=Course&type=${course.name}`)
              } key={index} className="bg-white shadow-md -lg p-6">
                <img src={course.image} alt={course.name} className="w-full h-auto object-cover aspect-video -t-lg" />
                <h2 className="text-2xl font-light text-[#926D41] mt-4">{course.name}</h2>
                <p className="mt-2 font-light">{course.description}</p>
              </div>
            ))}
          </div>
        
      </div>
    </div>
  );
}