"use client"; // Marking this component as a Client Component

import React, { useState } from "react";

// Sample Data
const skills = {
  FRONTEND: [
    
    { name: "Html", image: "https://cdn-icons-png.flaticon.com/128/888/888859.png"},
    { name: "css", image: "https://cdn-icons-png.flaticon.com/128/5968/5968242.png"},
    { name: "js", image: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png"},
    { name: "Bootstrap", image: "https://cdn-icons-png.flaticon.com/128/5968/5968672.png"},
    { name: "Word press", image: "https://cdn-icons-png.flaticon.com/128/63/63961.png"},
    { name: "React", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png" },
    {name:'Tailwind css',image:"https://img.icons8.com/?size=48&id=4PiNHtUJVbLs&format=png"},
    {name:"Vue js",image:"https://img.icons8.com/?size=48&id=rY6agKizO9eb&format=png"},
  ],
  BACKEND: [
    { name: "Python", image: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png" },
    { name: "Django", image: "https://cdn-icons-png.flaticon.com/128/9307/9307630.png" },
    { name: "Api", image: "https://cdn-icons-png.flaticon.com/128/15267/15267841.png" },
    { name: "AI", image: "https://img.icons8.com/?size=80&id=iNLVh7PK06iu&format=png" },
    
    
  ],
  DATABASE: [
    { name: "Postgress Sql", image: "https://cdn-icons-png.flaticon.com/128/5968/5968342.png" },
    { name: "MySQL", image: "https://cdn-icons-png.flaticon.com/128/18405/18405529.png" },
    { name: "Sqlite", image: "https://cdn-icons-png.flaticon.com/128/16781/16781152.png" },
  ],
  OTHER: [
    { name: "AI", image: "https://img.icons8.com/?size=80&id=iNLVh7PK06iu&format=png" },
    { name: "Machine learning", image: "https://cdn-icons-png.flaticon.com/128/12392/12392292.png" },
    { name: "Data Analysis", image: "https://img.icons8.com/?size=64&id=IKEeGrkdNNMS&format=png" },
    { name: "Git", image: "https://cdn-icons-png.flaticon.com/128/4494/4494748.png" },
    { name: "Flutter", image: "https://img.icons8.com/?size=80&id=IYQQHplg11Ie&format=png" },
    { name: "Canva", image: "https://cdn-icons-png.flaticon.com/128/16758/16758081.png" },
    { name: "Github", image: "https://img.icons8.com/?size=80&id=wqGmdISvpm0c&format=png" },
    {name:"Selenium",image:"https://img.icons8.com/?size=60&id=VOnRj9vGpXV8&format=png"},

    
  ],
};

// Enum for tabs
export enum Stack {
  FRONTEND = "FRONTEND",
  BACKEND = "BACKEND",
  DATABASE = "DATABASE",
  OTHER = "OTHER",
}

const Skills = () => {
  const [current, setCurrent] = useState<Stack>(Stack.FRONTEND); // Default tab is FRONTEND

  return (
    <section id="skills" className="pt-28">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl md:text-5xl font-bold">
          Skills
          <span className="text-primary"> .</span>
        </h1>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      {/* Tab Buttons */}
      <div className="flex items-center mt-12 gap-4 justify-center md:justify-start">
        {/* Frontend Tab */}
        <button
          onClick={() => setCurrent(Stack.FRONTEND)}
          className={`px-4 py-2 text-lg ${current === Stack.FRONTEND ? "text-primary" : "text-white hover:text-green-500"}`}
        >
          Frontend
        </button>

        {/* Backend Tab */}
        <button
          onClick={() => setCurrent(Stack.BACKEND)}
          className={`px-4 py-2 text-lg ${current === Stack.BACKEND ? "text-primary" : "text-white hover:text-green-500"}`}
        >
          Backend
        </button>

        {/* Database Tab */}
        <button
          onClick={() => setCurrent(Stack.DATABASE)}
          className={`px-4 py-2 text-lg ${current === Stack.DATABASE ? "text-primary" : "text-white hover:text-green-500"}`}
        >
          Database
        </button>

        {/* Other Tab */}
        <button
          onClick={() => setCurrent(Stack.OTHER)}
          className={`px-4 py-2 text-lg ${current === Stack.OTHER ? "text-primary" : "text-white hover:text-green-500"}`}
        >
          Other
        </button>
      </div>

      {/* Display Skills Based on Tab Selection */}
      <div className="mt-12 w-full md:max-w-[550px] gap-12 mx-auto grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5">
        {/* Show images and names based on the current tab */}
        {skills[current].map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
