'use client'
import React, { useEffect, useState } from "react";

// import { navLinks } from "../constants";
// import { logo, menu, close } from "../assets";
import Link from "next/link";
import UnderlinedText from "@/utils/UnderlinedText";


const leftLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "contact",
    title: "CONTACT",
  },

];
const rightLinks = [
  {
    id: "services",
    title: "SERVICES",
  },
  {
    id: "tarot",
    title: "TAROT",
  },

];

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed  ease-in md:relative md:min-h-28 md:h-28 bg-[#fbe5d0] flex justify-between items-center transition-all duration-300 px-5 md:px-10">


      {/* hamburger menu  */}
      <div className=" md:hidden transition-all duration-300 ease-in flex flex-col w-full items-end justify-center py-5">
        <div className="w-full flex items-center justify-between">
          
          {/* logo  */}
          <div className="flex-1  flex justify-start items-center">
            <Link href="/">
              <p>
                logo
              </p>
            </Link>
          </div>
          
          <button onClick={
          () => setMenuOpen(!menuOpen)

        }>
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#000000" />
          </svg>
        </button>
        </div>

        <div className={`w-full ${menuOpen ? "h-[100vh] transition-all duration-300 ease-in" : "h-0 transition-all duration-300 ease-in"} transition-all duration-300 ease-in overflow-hidden`}>
          <div className="flex flex-col gap-5 items-center justify-center">
            {leftLinks.map((link) => (
              <Link key={link.id} href={`/${link.title.toLowerCase()}`}>
                <d className=" text-lg font-semibold text-black">{link.title}</d>
              </Link>
            ))}



            {rightLinks.map((link) => (
              <Link key={link.id} href={`/${link.title.toLowerCase()}`}>
                <d className="text-lg font-semibold text-black">{link.title}</d>
              </Link>
            ))}

          </div>
        </div>


      </div>



      {/* nav links 3 to the left center logo 3 to gthe right  */}
      <div className="flex-1 hidden md:flex items-center justify-center "><div className="flex gap-5 items-center ">
        {leftLinks.map((link) => (
          <Link key={link.id} href={`/${link.title.toLowerCase()}`}>
            <d className=" text-lg font-semibold text-black">{link.title}</d>
          </Link>
        ))}

        {/* logo  */}
        <div className="flex-1 px-10 flex justify-center items-center">
          <Link href="/">
            <p>
              logo
            </p>
          </Link>
        </div>

        {rightLinks.map((link) => (
          <Link key={link.id} href={`/${link.title.toLowerCase()}`}>
            <d className="text-lg font-semibold text-black">{link.title}</d>
          </Link>
        ))}
      </div>
      </div>
      <div className="absolute right-10 md:block hidden bg-black text-white py-4 px-3">
        <p>
          Book Appointment
        </p>
      </div>

    </nav >
  );
};

export default Navbar;