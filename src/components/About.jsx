import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.img
            src={aboutImg}
            alt="About Nikhil"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="
              w-[90%] max-w-md
              rounded-2xl
              shadow-lg
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(239,68,68,0.35)]
            "
          />
        </motion.div>

        {/* CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3">
            About <span className="text-red-500">Me</span>
          </h2>

          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Frontend <span className="text-red-500">Developer</span>
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            Hi, I’m <strong>Nikhil Ranjan</strong>, a passionate Frontend Developer
            and CSE (AI & ML) undergraduate with hands-on experience in building
            responsive and user-focused web applications.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            I specialize in HTML, CSS, JavaScript, and React.js, with a strong
            foundation in Data Structures & Algorithms using C++. I enjoy
            transforming ideas into clean, scalable interfaces focused on
            performance and usability.
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            Alongside frontend development, I work with Node.js, Express.js, and
            MongoDB, and continuously explore Artificial Intelligence and Machine
            Learning to expand my technical skill set.
          </p>

          {/* VIEW PROJECTS (SAME AS SOCIAL BUTTON STYLE) */}
          <a
            href="#projects"
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
            <i className="fa-solid fa-briefcase"></i>
            View Projects
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
