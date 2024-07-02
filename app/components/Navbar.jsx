"use client"
import { useState } from "react";
import UnderlinedText from "@/utils/UnderlinedText";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between h-[5vh] p-10 gap-4 relative z-20">
      {/* Hamburger Icon for small screens */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden z-20">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>

      {/* Full-width vertical menu for small screens */}
      <div className={`absolute top-0 left-0 h-screen w-full bg-white flex flex-col items-center justify-start pt-20 md:pt-0 md:bg-transparent md:h-auto md:w-auto md:relative md:flex-row ${isMenuOpen ? "block" : "hidden"} md:block`}>
        <Link href="/" legacyBehavior>
          <a className="text-black text-xl font-bold px-3 py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>HOME</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className="text-black text-xl font-bold px-3 py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>ABOUT</a>
        </Link>
        <Link href="/contact" legacyBehavior>
          <a className="text-black text-xl font-bold px-3 py-2 md:py-0" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </Link>
      </div>

      {/* Centered logo remains unchanged */}
      <div className="flex items-center justify-center w-fit px-10 md:px-0">
        <Link href="/">
          <p className="text-black text-2xl font-bold">LOGO</p>
        </Link>
      </div>

      {/* Right-side menu items for larger screens */}
      <div className="hidden md:flex items-center justify-between w-full">
        <div className="flex items-center justify-start w-full">
          <Link href="/login" legacyBehavior>
            <a className="text-black text-xl font-bold px-4">LOGIN</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a className="text-black text-xl font-bold px-4">SIGN UP</a>
          </Link>
          <Link href="/cart" legacyBehavior>
            <a className="text-black text-xl font-bold px-4">CART</a>
          </Link>
        </div>
        <button className="bg-black text-white px-5 py-2 max-w-fit whitespace-nowrap">
          Buy Now
        </button>
      </div>
    </nav>
  );
}