"use client";

import { BackgroundGradient } from "../ui/background-gradient";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const experiences = [
    {
      period: "Oct 2024 - Present",
      title: "Web Developer Bootcamp Student",
      company: "Purwadhika Bootcamp",
      tools: "JavaScript, TypeScript, React, Next.js",
      description:
        "Currently developing skills in full-stack web development through an intensive bootcamp program focusing on JavaScript and modern web technologies.",
    },
    {
      period: "2020 - 2023",
      title: "Construction Worker",
      company: "Hayaken Construction, Japan",
      tools: "Japanese Language (N4), Teamwork, Heavy Equipment",
      description:
        "Worked as a construction worker in Japan for three years, mastering construction techniques and working in a fast-paced environment while improving communication skills in Japanese.",
    },
    {
      period: "2023 - 2024",
      title: "Farm Assistant",
      company: "Jet Farm, Japan",
      tools: "Japanese Language (N4), Farm Equipment, Livestock Management",
      description:
        "Assisted with day-to-day farming operations, while adapting to the rural agricultural environment in Japan.",
    },
  ];

  return (
    <div
      id="Experience"
      className="bg-gray-800 object-cover px-4 text-center md:mb-20 md:px-40 md:py-20"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">
        My{" "}
        <span className="text-blue-500 hover:text-yellow-400 dark:text-blue-500">
          Experiences
        </span>
      </h2>
      <p className="mb-12 text-gray-400">
        A summary of my professional journey and the skills I’ve developed along
        the way.
      </p>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {experiences.map((experience, index) => (
          <BackgroundGradient key={index} className="pt-5">
            <motion.div
              className="overflow-hidden rounded-3xl bg-gray-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }} // Initial state
              animate={{ opacity: 1, scale: 1 }} // Animate to this state
              transition={{ duration: 0.5, ease: "easeInOut" }} // Transition duration
              whileHover={{
                scale: 1.1, // Scale up on hover
                rotate: 5, // Rotate slightly on hover
                backgroundColor: "rgba(0, 0, 255, 0.1)", // Change background color on hover
                boxShadow: "0 10px 20px rgba(255, 255, 255, 0.4)", // Add a stronger shadow on hover
              }}
              whileTap={{
                scale: 0.95, // Scale down on tap (mobile)
              }}
            >
              <h3 className="mb-2 text-xl font-semibold text-blue-500 hover:text-yellow-400">
                {experience.title}
              </h3>
              <h4 className="mb-2 text-gray-400">{experience.company}</h4>
              <p className="mb-4 italic text-gray-500">{experience.period}</p>
              <p className="mb-4 text-gray-400">{experience.description}</p>
              <p className="text-gray-500">
                <span className="font-semibold">Tools: </span>
                {experience.tools}
              </p>
            </motion.div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default Experience;
