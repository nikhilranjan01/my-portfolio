import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const projects = [
  {
    title: "Student Voting System",
    image: project1,
    desc: "Role-based voting system with authentication, secure voting, and real-time results using MERN stack.",
    link: "https://github.com/nikhilranjan01/election.git",
  },
  {
    title: "Game Library",
    image: project2,
    desc: "Game exploration platform using React, Redux, RAWG API, and Clerk authentication.",
    link: "https://gamelibrary01.vercel.app/",
  },
  {
    title: "MultiMart E-Commerce",
    image: project3,
    desc: "Responsive e-commerce website with product listing and cart system built in React.",
    link: "https://multimart01.vercel.app/",
  },
  {
    title: "Notes App",
    image: project4,
    desc: "Full-stack notes app supporting CRUD operations with MERN stack.",
    link: "https://nikhilnotes.vercel.app/",
  },
  {
    title: "Coffee Creation Website",
    image: project5,
    desc: "Interactive coffee brand website built with HTML, CSS, and JavaScript.",
    link: "https://coffeecreation.vercel.app/",
  },
  {
    title: "Python Snake Game",
    image: project6,
    desc: "Classic Snake game developed in Python using Tkinter.",
    link: "https://github.com/nikhilranjan01/PYTHON/blob/main/SnakeGameProject2.py",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white px-6 md:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          Latest <span className="text-red-500">Projects</span>
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="
                group bg-white rounded-2xl overflow-hidden
                border border-transparent
                shadow-md
                transition-all duration-300
                hover:bg-red-50
                hover:border-red-300
                hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]
              "
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-red-600 transition">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* SOCIAL-STYLE BUTTON */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-2
                    border-2 border-red-500
                    text-red-500
                    rounded-full
                    font-medium
                    transition-all duration-300
                    hover:bg-red-500 hover:text-white
                    hover:-translate-y-1
                  "
                >
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
