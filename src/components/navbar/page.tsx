"use client";

import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Import ikon menu dan ikon close

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // State untuk mengontrol buka/tutup menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu antara terbuka dan tertutup
  };

  return (
    <nav className="sticky top-0 z-20 bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-500 hover:text-yellow-400 dark:text-blue-500">
          <a href="#">
            About<span className="text-white">Me.</span>
          </a>
        </div>

        {/* Menu (Desktop) */}
        <div className="hidden space-x-8 text-white md:flex">
          <a href="#Home" className="hover:scale-110 hover:text-blue-500">
            HOME
          </a>
          <a href="#AboutMe" className="hover:scale-110 hover:text-blue-500">
            ABOUT
          </a>
          <a href="#contact" className="hover:scale-110 hover:text-blue-500">
            CONTACT
          </a>
          <a href="#Portofolio" className="hover:scale-110 hover:text-blue-500">
            PORTFOLIO
          </a>
          <a href="#Skills" className="hover:scale-110 hover:text-blue-500">
            SKILLS
          </a>
          <a
            href="#Experience"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
          >
            EXPERIENCE
          </a>
          <a
            href="https://wa.me/+6282178342897"
            className="transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-500"
          >
            HELP
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <HiX size="30px" /> : <HiMenu size="30px" />}{" "}
            {/* Ikon berubah tergantung apakah menu terbuka atau tertutup */}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (Mobile) */}
      {isOpen && (
        <div className="h-screen space-y-4 bg-gray-800 p-4 text-white md:hidden">
          <a href="#Home" className="block hover:text-yellow-500">
            HOME
          </a>
          <a href="#AboutMe" className="block hover:text-yellow-500">
            ABOUT
          </a>
          <a href="#contact" className="block hover:text-yellow-500">
            CONTACT
          </a>
          <a href="#Portofolio" className="block hover:text-yellow-500">
            PORTFOLIO
          </a>
          <a href="#Skills" className="block hover:text-yellow-500">
            SKILLS
          </a>
          <a href="#Experience" className="block hover:text-yellow-500">
            EXPERIENCE
          </a>
          <a
            href="https://wa.me/+6282178342897"
            className="block hover:text-yellow-500"
          >
            HELP
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
