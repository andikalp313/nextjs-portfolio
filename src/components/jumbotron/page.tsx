"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa6";
import { cn } from "../../lib/utils";
import { BackgroundGradient } from "../ui/background-gradient"; // Pastikan path-nya benar
import kereta from "../../public/kereta.jpeg";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Image from "next/image";

const Jumbotron: React.FC = () => {
  const words = [
    { text: "Hello," },
    {
      text: "Welcome",
      className: "text-blue-500 dark:text-blue-500 hover:text-yellow-500",
    },
    { text: "Everyone!!!!" },
    { text: "I'm" },
    { text: "Andika" },
    { text: "Luhur" },
    {
      text: "Pambudi.",
      className: "text-blue-500 dark:text-blue-500 hover:text-yellow-500",
    },
  ];
  return (
    <section
      id="Home"
      className="bg-gray-800 px-4 py-10 text-white sm:px-4 md:px-4 md:py-24 lg:px-16"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-20 md:grid-cols-2">
        {/* Text Section */}
        <div>
          <TypewriterEffect words={words} className="mb-7 text-left" />{" "}
          <p className="mb-6 transition-opacity duration-300 ease-in-out hover:opacity-75">
            I'm a dedicated web developer with a background in construction and
            agriculture from my time in Japan. Fluent in Japanese, I returned to
            Indonesia and completed a bootcamp at Purwadhika to strengthen my
            web development skills. With a disciplined, adaptable mindset, I’m
            eager to create innovative digital solutions.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="rounded-full bg-blue-500 px-6 py-2 text-white transition-transform duration-300 ease-in-out hover:scale-110 hover:bg-yellow-600"
          >
            Hire Me
          </button>
          {/* Social Media Links */}
          <div className="mt-6 flex space-x-4">
            <a
              href="https://www.linkedin.com/in/andika-luhur-pambudi-6737852b6/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.youtube.com/@Sambatbahagiaa"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaYoutube size={24} />
            </a>
            <a
              href="https://www.instagram.com/andikalp_"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://github.com/andikalp313"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-yellow-500"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Image Section with BackgroundGradient */}
        <BackgroundGradient containerClassName="relative h-80 w-full md:h-[500px]">
          <div className="relative z-10 h-80 w-full md:h-[492px]">
            <Image
              src={kereta}
              alt="Background Banner"
              className={cn(
                "inset-0 h-full w-full object-cover transition-transform duration-300 ease-in-out",
                "rounded-3xl hover:scale-105"
              )}
            />
          </div>
        </BackgroundGradient>
      </div>
    </section>
  );
};

export default Jumbotron;
