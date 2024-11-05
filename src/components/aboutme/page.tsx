"use client";

import konstruksi from "../../public/konstruksi.jpeg";
import { cn } from "../../lib/utils";

import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <div
      id="AboutMe"
      className="lg:px-25 grid grid-cols-1 gap-20 bg-gray-800 px-4 text-white md:grid-cols-2 md:px-40 md:py-24"
    >
      {/* Image Section with BackgroundGradient */}
      <BackgroundGradient containerClassName="relative h-80 w-full md:h-[500px]">
        <div className="relative z-10 h-80 w-full md:h-[492px] group overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src={konstruksi}
            alt="Background Banner"
            className={cn(
              "inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out",
              "rounded-3xl group-hover:scale-110 group-hover:rotate-1"
            )}
          />
          {/* Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-50 bg-[url('https://www.myeducationrepublic.com/wp-content/uploads/2022/12/Cara-Daftar-Biaya-Kuliah-di-Purwadhika-Digital-Technology-School-2023.png')] bg-cover bg-center opacity-0 rounded-3xl"></div>
        </div>
      </BackgroundGradient>

      {/* Content Section */}
      <div className="flex flex-col gap-7 text-center md:text-left">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent transition-colors duration-300 hover:text-yellow-400">
          About<span className="text-white">Me.</span>
        </h2>

        <p className="text-lg leading-relaxed text-white transition-transform duration-500 ease-in-out transform hover:scale-105">
          Hi, I'm Andika Luhur Pambudi, a Web Developer specializing in
          full-stack development. I focus on building modern, responsive
          interfaces with React and Tailwind CSS.
        </p>
        <p className="text-lg leading-relaxed text-white transition-transform duration-500 ease-in-out transform hover:scale-105">
          With a background in construction and agriculture during my 4 years in
          Japan, I learned discipline and perseverance. I speak Japanese (N4)
          fluently and am improving my English while deepening my web
          development skills.
        </p>
        <p className="text-lg leading-relaxed text-white transition-transform duration-500 ease-in-out transform hover:scale-105">
          My goal is to contribute to impactful projects, combining my technical
          and multilingual abilities for global collaboration.
        </p>

        <div className="flex justify-center md:justify-start">
          <a
            href="#contact"
            className="relative inline-block rounded-full bg-gradient-to-r from-blue-500 to-teal-400 px-8 py-3 font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-gradient-to-l hover:from-yellow-500 hover:to-orange-500 hover:scale-105"
          >
            Contact Me
            <span className="absolute inset-0 rounded-full opacity-20 bg-blue-500 blur-md"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
