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
    desc: "Role-based voting system with authentication, secure voting, and real-time results using React, Node.js, Express, and MongoDB.",
    link: "https://github.com/nikhilranjan01",
  },
  {
    title: "Game Library",
    image: project2,
    desc: "Game exploration platform built with React, Redux, RAWG API, and Clerk authentication for secure state management.",
    link: "https://github.com/nikhilranjan01",
  },
  {
    title: "MultiMart E-Commerce",
    image: project3,
    desc: "Responsive e-commerce website with product listing and cart system built using React and Bootstrap.",
    link: "https://github.com/nikhilranjan01",
  },
  {
    title: "Notes App",
    image: project4,
    desc: "Full-stack notes app supporting CRUD operations with timestamp-based persistence using MERN stack.",
    link: "https://github.com/nikhilranjan01",
  },
  {
    title: "Coffee Creation Website",
    image: project5,
    desc: "Interactive and responsive coffee brand website developed using HTML, CSS, and JavaScript.",
    link: "https://nikhilranjan01.github.io/Coffeecreation/",
  },
  {
    title: "Python Snake Game",
    image: project6,
    desc: "Classic Snake game developed in Python using Tkinter with score tracking and collision handling.",
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-red-300/40 transition"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-red-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-red-500 font-semibold rounded-full shadow-lg hover:scale-105 transition"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
