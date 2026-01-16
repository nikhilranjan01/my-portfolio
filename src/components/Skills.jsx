import React from "react";
import { motion } from "framer-motion";

const skills = [
  {
    title: "Programming & DSA",
    icon: "fa-solid fa-code",
    desc: "Strong problem-solving skills using C++ with solid knowledge of Data Structures and Algorithms, focused on writing optimized and efficient code.",
    link: "https://cplusplus.com/",
  },
  {
    title: "Frontend Development",
    icon: "fa-solid fa-laptop-code",
    desc: "Skilled in HTML, CSS, JavaScript, and React.js for building responsive, interactive, and user-friendly interfaces with clean UI design.",
    link: "https://developer.mozilla.org/en-US/docs/Learn/Front-end_web_developer",
  },
  {
    title: "Backend Development",
    icon: "fa-brands fa-node-js",
    desc: "Experience with Node.js and Express.js for building REST APIs, handling server-side logic, and developing scalable backend applications.",
    link: "https://nodejs.org/en/docs",
  },
  {
    title: "Database Management",
    icon: "fa-solid fa-database",
    desc: "Hands-on experience with MongoDB including schema design, CRUD operations, and efficient data handling.",
    link: "https://www.mongodb.com/docs/",
  },
  {
    title: "Tools & Workflow",
    icon: "fa-solid fa-screwdriver-wrench",
    desc: "Proficient with Git, GitHub, VS Code, and Postman for version control, debugging, and team collaboration.",
    link: "https://git-scm.com/doc",
  },
  {
    title: "Deployment & Hosting",
    icon: "fa-solid fa-cloud-arrow-up",
    desc: "Experience deploying applications on Vercel, Render, and GitHub Pages with a basic understanding of CI/CD workflows.",
    link: "https://vercel.com/docs",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-16"
        >
          My <span className="text-red-500">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="
                bg-gray-100 p-8 rounded-2xl
                shadow-md
                transition-all duration-300
                hover:shadow-[0_0_25px_rgba(239,68,68,0.35)]
                seeing-red-50
                text-center
              "
            >
              {/* ICON */}
              <div className="text-red-500 text-4xl mb-5">
                <i className={skill.icon}></i>
              </div>

              <h3 className="text-xl font-semibold mb-4 text-black">
                {skill.title}
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                {skill.desc}
              </p>

              {/* READ MORE BUTTON (SOCIAL STYLE) */}
              <a
                href={skill.link}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2
                  px-5 py-2
                  border-2 border-red-500
                  text-red-500
                  rounded-full
                  font-medium
                  transition-all duration-300
                  hover:bg-red-500 hover:text-white
                  hover:-translate-y-1
                "
              >
                <i className="fa-solid fa-book-open"></i>
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
