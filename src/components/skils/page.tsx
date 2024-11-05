"use client";

import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

const Skills: React.FC = () => {
  const skills = [
    {
      title: "Web Development",
      description:
        "Experienced in building modern web applications using a range of technologies.",
      tools: "HTML, CSS, JavaScript, TypeScript, React, Node.js",
    },
    {
      title: "Version Control & Collaboration",
      description:
        "Proficient in using Git and GitHub for version control and team collaboration.",
      tools: "Git, GitHub, Branching & Merging",
    },
    {
      title: "Construction & Heavy Equipment",
      description:
        "Practical experience in construction work, including handling heavy equipment.",
      tools: "Teamwork, Physical Endurance, Heavy Equipment",
    },
    {
      title: "Agriculture & Livestock",
      description:
        "Hands-on experience working on a farm, managing livestock and handling equipment.",
      tools: "Farm Equipment, Livestock Management, Japanese Language (N4)",
    },
    {
      title: "Language Skills",
      description:
        "Skilled in communication in both Japanese and basic English, along with cultural knowledge.",
      tools: "Japanese (N4), Basic English",
    },
    {
      title: "Customer Service & Time Management",
      description:
        "Experience running a small tailoring business, handling customer service and managing deadlines.",
      tools: "Sewing, Time Management, Customer Service",
    },
  ];

  return (
    <div className="my-11 flex justify-center bg-gray-800 md:mb-14">
      <BackgroundGradient>
        <div
          id="Skills"
          className="gap-36 rounded-3xl bg-gray-800 px-4 text-center md:px-36 md:py-16"
        >
          <h2 className="mb-6 text-3xl font-bold text-white">
            My{" "}
            <span className="text-blue-500 hover:text-yellow-400 dark:text-blue-500">
              Skills
            </span>
          </h2>
          <p className="mb-12 text-gray-400">
            A collection of skills I have developed through my experiences and
            education.
          </p>

          <div className="mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 md:max-w-7xl lg:grid-cols-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-gray-900 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <h3 className="mb-2 text-xl font-semibold text-blue-500  hover:from-yellow-400 hover:to-blue-500">
                  {skill.title}
                </h3>

                <p className="mb-4 text-gray-400">{skill.description}</p>
                <p className="text-gray-500">
                  <span className="font-semibold">Tools: </span>
                  {skill.tools}
                </p>
              </div>
            ))}
          </div>
        </div>
      </BackgroundGradient>
    </div>
  );
};

export default Skills;
