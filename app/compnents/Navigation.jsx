"use client";

import Link from "next/link";
import Image from "next/image";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className=" fixed  bg-red-500 w-full px-6 py-4 ">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/Mobilepasal logo.png"
              alt="Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>

        {/* Search Box - Hidden on small screens */}
        <div className="hidden md:flex items-center gap-1">
          <input
            type="text"
            placeholder="Search..."
            className="bg-white h-10 px-4 rounded-tl-lg rounded-bl-lg focus:outline-none"
          />
          <button className="bg-white h-10 px-3 rounded-tr-lg rounded-br-lg text-gray-600 hover:text-black transition">
            <IoSearch size={20} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-6 text-white font-medium">
            <li>
              <Link href="/" className="hover:text-green-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Mobile" className="hover:text-green-200">
                Mobile
              </Link>
            </li>
            <li>
              <Link href="/Watch" className="hover:text-green-200">
                Watch
              </Link>
            </li>
            <li>
              <Link href="/Accessories" className="hover:text-green-200">
                Accessories
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 text-white">
            <Link href="/login">
              <BsPerson size={22} />
            </Link>
            <IoBagOutline size={22} />
          </div>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 text-white space-y-4 text-lg">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/Mobile" className="block">
            Mobile
          </Link>
          <Link href="/Watch" className="block">
            Watch
          </Link>
          <Link href="/Accessories" className="block">
            Accessories
          </Link>
          <div className="flex gap-4 pt-2">
            <Link href="/login">
              <BsPerson size={22} />
            </Link>
            <IoBagOutline size={22} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
