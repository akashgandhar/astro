import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-center h-[5vh] bg-red-200 p-10 gap-4">
      <div className="flex items-center justify-end w-full ">
        <Link href="/">
          <p className="text-black text-xl font-bold">Home</p>
        </Link>

        <Link href="/about">
          <p className="text-black text-xl font-bold ml-10">About</p>
        </Link>

        <Link href="/contact">
          <p className="text-black text-xl font-bold ml-10">Contact</p>
        </Link>
      </div>

      <div className="flex items-center justify-center w-fit px-10 ">
        {/* logo  */}
        <Link href="/">
          <p className="text-black text-2xl font-bold">LOGO</p>
        </Link>
      </div>

      <div className="flex items-center justify-between w-full ">
        <div className="flex items-center justify-start w-full ">
          <Link href="/login">
            <p className="text-black text-xl font-bold">Login</p>
          </Link>

          <Link href="/signup">
            <p className="text-black text-xl font-bold ml-10">Signup</p>
          </Link>

          <Link href="/cart">
            <p className="text-black text-xl font-bold ml-10">Cart</p>
          </Link>
        </div>

        <button className="bg-black text-white px-5 py-2 rounded-lg max-w-fit whitespace-nowrap">
          Buy Now
        </button>
      </div>
    </nav>
  );
}
