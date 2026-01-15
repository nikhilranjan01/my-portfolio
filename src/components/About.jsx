import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.jpg"; // 👈 image yahan rakho

const About = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center"
        >
          <img
            src={aboutImg}
            alt="About"
            className="w-[90%] max-w-md rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* CONTENT */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-2">
            About <span className="text-red-500">Me</span>
          </h2>

          <h3 className="text-xl font-semibold mb-6">
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

          <p className="text-gray-700 leading-relaxed mb-6">
            Alongside frontend development, I work with Node.js, Express.js, and
            MongoDB, and continuously explore Artificial Intelligence and Machine
            Learning to expand my technical skill set.
          </p>

          <a
            href="#projects"
            className="inline-block bg-black text-white px-8 py-3 rounded-full shadow-lg hover:shadow-red-400 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
