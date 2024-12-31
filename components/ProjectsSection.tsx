"use client"; // Marking this component as a Client Component

import React, { FC } from "react";
import { IProjectResponse } from "../interfaces/project_interface";
import Project from "./Project";
import Reveal from "./Reveal";
import Image from "next/image";
import { motion } from "framer-motion"; // Importing motion for animation

interface IProjectProps {
  projects: IProjectResponse;
}

const ProjectsSection: FC<IProjectProps> = ({ projects }): JSX.Element => {
  return (
    <section id="projects" className="text-secondary dark:text-white pt-28">
      {/* Heading Section */}
      <div className="flex flex-row-reverse items-center gap-4">
        <Reveal>
          <h1 className="text-4xl md:text-5xl font-bold transition-all hover:text-primary duration-300">
            Projects<span className="text-primary"> .</span>
          </h1>
        </Reveal>
        <div className="w-full flex-1 h-[0.2em] bg-gray-100 dark:bg-secondaryVarient"></div>
      </div>

      {/* Content Section */}
      <div className="mt-12 flex items-center gap-8">
        {/* Left Side (Image with Green Circle) */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full -z-10" />
          <Image
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww"
            alt="Example Project"
            width={400}
            height={400}
            className="rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </motion.div>

        {/* Right Side (Text) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary">
            <a href="https://hotelambikapalace.com/">Hotel Ambikapalace</a>
          </h2>
          <p className="text-lg">
            A hotel management project typically aims to automate and streamline the various operations of a hotel, from guest bookings to managing room availability, billing, and customer services.
          </p>
        </motion.div>
      </div>

      {/* Another Project */}
      <div className="mt-12 flex items-center gap-8">
        {/* Left Side (Image with Green Circle) */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full -z-10" />
          <Image
            src="https://images.unsplash.com/photo-1554774853-b415df9eeb92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHNhdGlzZmllZCUyMGN1c3RvbWVyfGVufDB8fDB8fHww"
            alt="Car Booking Project"
            width={400}
            height={400}
            className="rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </motion.div>

        {/* Right Side (Text) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary">
            <a href="https://www.drivo.in/">Car booking side</a>
          </h2>
          <p className="text-lg">
            A Car Booking Project is a system designed to facilitate the booking and reservation of vehicles for users. The project can include features such as user registration, vehicle selection, booking details, payment integration, and user profile management.
          </p>
        </motion.div>
      </div>

      {/* Another Project */}
      <div className="mt-12 flex items-center gap-8">
        {/* Left Side (Image with Green Circle) */}
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 rounded-full -z-10" />
          <Image
            src="https://images.unsplash.com/photo-1606421753414-8d165c9d48e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJyb2FkYmFuZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Pop Telecom Project"
            width={400}
            height={400}
            className="rounded-lg transition-transform transform hover:scale-105 duration-300"
          />
        </motion.div>

        {/* Right Side (Text) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.75 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 hover:text-primary">
            <a href="https://www.poptelecom.co.uk/">Pop Telecom</a>
          </h2>
          <p className="text-lg">
            A broadband and landline project typically involves providing internet connectivity (broadband) and telecommunication services (landline) to residential or commercial customers.
          </p>
        </motion.div>
      </div>

      {/* Projects List */}
      <div className="mt-12">
        {projects.map((project, index) => (
          <Project
            key={project._id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
