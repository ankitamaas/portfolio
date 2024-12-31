"use client"; // Ensure compatibility with Next.js (if applicable)
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PiGraduationCapLight, PiBriefcaseLight } from "react-icons/pi";

// Sample Data
const qualifications = [
  {
    title: "B.tech in Computer Science",
    description: "Graduated with honors, specialized in computer sucience engineering.",
    date: "2019 - 2023",
  },
  {
    title: "Intermediate",
    description: "Focused on science and mathematics, graduated with distinction.",
    date: "2017 - 2019",
  },
  {
    title:"Schooling",
    date:"Completed-2017"
  }
];

const experiences = [
  {
    title: "Full stack Devloper/Python Devloper at Maastrix solutions",
    description: "Developed full-stack applications using Python ,Django, Html,Css,Js , Bootstrap,AI,Ml, Api, React ." ,
    date: " 17.10.2024 - (Continueing)",
  },
  {
    title: "Full stack Devloper/Python Devloper At  scitechbrief",
    description: "Devloped full stack applications , Web scrapping by using python , Django, selenium , scrapy,beautifull soup .",
    date: "03.10.2023",
  },
  {
    title: "Web Devloper at webysis web solutions",
    description: "Devloped Websites and designing  by using html,css, js ,python,wordpress  .",
    date: "03.03.2023",
  },
];

// Component
export default function QualificationExperience() {
  const [currentTab, setCurrentTab] = useState<"qualification" | "experience">(
    "qualification"
  );

  // Tab Button
  const TabButton = ({
    title,
    icon,
    isActive,
    onClick,
  }: {
    title: string;
    icon: JSX.Element;
    isActive: boolean;
    onClick: () => void;
  }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
        isActive
          ? "text-blue-600 border-b-2 border-blue-600"
          : "text-white hover:text-green-500"
      }`}
    >
      {icon}
      <span>{title}</span>
    </button>
  );

  // Card Component
  const Card = ({
    title,
    description,
    date,
  }: {
    title: string;
    description: string;
    date: string;
  }) => (
    <motion.div
      variants={{
        hidden: { opacity: 0, translateY: 75 },
        visible: { opacity: 1, translateY: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeIn" }}
      className="p-6 border border-gray-300 rounded-lg shadow-sm"
    >
      <div className="flex items-center gap-2 text-white mb-2">
        <PiGraduationCapLight />
        <span className="text-sm">{date}</span>
      </div>
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <p className="text-sm mt-2 text-white">{description}</p>
    </motion.div>
  );

  return (
    <section id="qualification" className="p-6 min-h-screen text-white">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Qualification <span>.</span> <hr /></h1>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <TabButton
            title="Qualification"
            icon={<PiGraduationCapLight />}
            isActive={currentTab === "qualification"}
            onClick={() => setCurrentTab("qualification")}
          />
          <TabButton
            title="Experience"
            icon={<PiBriefcaseLight />}
            isActive={currentTab === "experience"}
            onClick={() => setCurrentTab("experience")}
          />
        </div>

        {/* Content */}
        <div className="grid gap-6">
          {currentTab === "qualification"
            ? qualifications.map((item, index) => (
                <Card
                  key={`qualification-${index}`}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                />
              ))
            : experiences.map((item, index) => (
                <Card
                  key={`experience-${index}`}
                  title={item.title}
                  description={item.description}
                  date={item.date}
                />
              ))}
        </div>
      </div>
    </section>
  );
}
