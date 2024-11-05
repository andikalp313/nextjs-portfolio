"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-10 text-white">
      <div className="container mx-auto flex flex-col items-center space-y-4 text-center">
        {/* Ikon Sosial Media */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/andika-luhur-pambudi-6737852b6/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-yellow-400"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="https://www.youtube.com/@Sambatbahagiaa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-yellow-400"
          >
            <FaYoutube size={28} />
          </a>
          <a
            href="https://www.instagram.com/andikalp_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-yellow-400"
          >
            <FaInstagram size={28} />
          </a>
          <a
            href="https://github.com/andikalp313"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 transition-colors duration-300 hover:text-yellow-400"
          >
            <FaGithub size={28} />
          </a>
        </div>
      </div>

      {/* Garis Horizontal dan Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
        <p>&copy; 2024 Andika Luhur Pambudi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
