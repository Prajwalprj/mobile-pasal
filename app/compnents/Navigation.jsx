"use client";

import Link from "next/link";
import Image from "next/image";
import { IoBagOutline, IoSearch } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";

import { useCart } from "../context/cartcontext";

function Navigation() {
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-20">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/Mobilepasal logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="w-auto pt-6"
          />
        </Link>

        {/* Search (hidden on mobile) */}
        <div className="hidden md:flex items-center gap-1 pl-4">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-300 h-10 w-60 px-4 rounded-tl-lg rounded-bl-lg focus:outline-none"
          />
          <button className="bg-gray-300 h-10 px-3 rounded-tr-lg rounded-br-lg text-gray-600 hover:text-black transition">
            <IoSearch size={20} />
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-6 text-gray-500 font-medium">
            <li><Link href="/" className="hover:text-black">Home</Link></li>
            <li className="relative group">
              <span className="hover:text-black cursor-pointer">Mobiles</span>
              {/* Dropdown */}
              <ul className="absolute left-0 top-full hidden group-hover:block bg-white mt-2 rounded-md shadow-lg w-40 z-50">
                {["apple", "samsung", "oppo", "vivo", "mi"].map((brand) => (
                  <li key={brand} className="px-4 py-2 hover:bg-gray-200 capitalize">
                    <Link href={`/Mobile/${brand}`}>{brand}</Link>
                  </li>
                ))}
              </ul>
            </li>
            <li><Link href="/Watch" className="hover:text-black">Watch</Link></li>
            <li><Link href="/Accessories" className="hover:text-black">Accessories</Link></li>
          </ul>

          {/* Icons */}
          <div className="flex gap-4 text-gray-500 relative">
            <Link href="/login">
              <BsPerson className="hover:text-black" size={22} />
            </Link>
            <Link href="/cart" className="relative">
              <IoBagOutline size={22} className="hover:text-black" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pt-2 pb-4 space-y-4 text-gray-700 font-medium">
          <Link href="/" className="block hover:text-black">Home</Link>

          {/* Mobile dropdown */}
          <div>
            <span
              className="block hover:text-black cursor-pointer"
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              Mobiles
            </span>
            {isMobileDropdownOpen && (
              <ul className="pl-4 space-y-1">
                {["apple", "samsung", "oppo", "vivo", "mi"].map((brand) => (
                  <li key={brand} className="capitalize">
                    <Link href={`/Mobile/${brand}`} className="block hover:text-black">
                      {brand}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/Watch" className="block hover:text-black">Watch</Link>
          <Link href="/Accessories" className="block hover:text-black">Accessories</Link>

          {/* Mobile Icons */}
          <div className="flex gap-6 pt-2 text-gray-500">
            <Link href="/login">
              <BsPerson size={22} />
            </Link>
            <Link href="/cart" className="relative">
              <IoBagOutline size={22} />
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
