"use client";

import gambar1 from "../../public/website.png";
import { BackgroundGradient } from "../ui/background-gradient";
import gambar2 from "../../public/chat.png";
import gambar3 from "../../public/portofolio.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "Responsive Web Application",
      description:
        "Developed a fully responsive e-commerce platform using React and Tailwind CSS, with dynamic product listings and a custom shopping cart.",
      techStack: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image: gambar1,
      alt: "Responsive Web Application",
    },
    {
      title: "Real-time Chat Application",
      description:
        "Built a real-time chat app with WebSocket and TypeScript for seamless, instant messaging across multiple devices.",
      techStack: ["TypeScript", "WebSocket", "Node.js", "Express"],
      image: gambar2,
      alt: "Real-time Chat Application",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed my personal portfolio to showcase projects and skills, with a clean UI built using Next.js and styled-components.",
      techStack: ["Next.js", "Styled-Components", "JavaScript"],
      image: gambar3,
      alt: "Portfolio Website",
    },
  ];

  return (
    <div
      id="Portofolio"
      className="bg-gray-800 px-4 py-20 text-center md:px-40"
    >
      <h2 className="mb-6 text-3xl font-bold text-white">
        My{" "}
        <span className="text-blue-500 hover:text-yellow-400 dark:text-blue-500">
          Portfolio
        </span>
      </h2>
      <p className="mb-11 text-gray-400">
        A collection of web development projects showcasing my technical skills
        and creativity.
      </p>

      <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item, index) => (
          <BackgroundGradient key={index} className="pt-5">
            <motion.div
              className="overflow-hidden rounded-3xl bg-gray-800 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }} // Initial state with y offset
              animate={{ opacity: 1, scale: 1, y: 0 }} // Animate to this state
              transition={{ duration: 0.5 }} // Transition duration
              whileHover={{
                scale: 1.05, // Scale up on hover
                rotate: 3, // Rotate a little on hover
                backgroundColor: "rgba(255, 255, 255, 0.1)", // Change background color on hover
              }}
            >
              <Image
                src={item.image}
                alt={item.alt}
                className="h-56 w-full object-contain pt-11"
              />
              <div className="p-4">
                <h3 className="mb-2 text-xl font-semibold text-blue-500 hover:text-yellow-400">
                  {item.title}
                </h3>
                <p className="mb-4 text-gray-400">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block rounded bg-blue-500 px-2 py-1 text-xs text-white hover:bg-yellow-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
