"use client"
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'


export default function Page() {

  const type = useSearchParams().get('type');
  const service = useSearchParams().get('service');



  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [requiredService, setRequiredService] = useState(service)
  const [course, setCourse] = useState(type)
  const [time, setTime] = useState('')




  return (
    <div class="mx-14 mt-10  rounded-lg">
      {/* <div class="mt-10 text-center font-bold">Contact Us</div> */}
      <div class="mt-3 text-center text-4xl font-bold">Make an Appointment</div>
      
      <div class="p-8">
        <div class="flex gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="Name" name="name" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Full Name *" />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" name="email" class="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm" placeholder="Email *" />
        </div>
        <div class="my-6 flex gap-4">
          <select value={requiredService} onChange={
            (e) => setRequiredService(e.target.value)

          } name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
            <option class="font-semibold text-slate-300">Please Select Service</option>
            <option class="font-semibold text-slate-300">Course</option>
            <option class="font-semibold text-slate-300">Reiki Healing</option>
            <option class="font-semibold text-slate-300">Crystal Healing</option>
            <option class="font-semibold text-slate-300">Tarot Reading</option>
            <option class="font-semibold text-slate-300">Angel Card Reading</option>
            <option class="font-semibold text-slate-300">Past Life Regression</option>
            <option class="font-semibold text-slate-300">Chakra Balancing</option>
            <option class="font-semibold text-slate-300">Chakra Balancing</option>

          </select>
          {requiredService === "Course" && <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-500 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
            <option class="font-semibold text-slate-300">Please Select Course</option>
            <option class="font-semibold text-slate-300">Chakra Balancing Course</option>
            <option class="font-semibold text-slate-300">Reiki Healing Course</option>

          </select>}
          <select name="select" id="select" class="block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 font-semibold text-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm">
            <option class="font-semibold text-slate-300">4:00 Available</option>
          </select>
        </div>
        <div class="">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            name="textarea" id="text" cols="30" rows="10" class="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-gray-300">Message</textarea>
        </div>
        <div class="text-center">
          <a class="cursor-pointer bg-black px-8 py-5 text-sm font-semibold text-white">Book Appoinment</a>
        </div>
      </div>
    </div>
  )
}
