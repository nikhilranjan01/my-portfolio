import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import heroImg from "../assets/hero.png";

const Hero = () => {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: [
        "Frontend Developer",
        "React.js Developer",
        "Full Stack Developer",
        "C++ DSA Enthusiast",
      ],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 120,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: "fa-brands fa-facebook-f",
      link: "https://www.facebook.com/", 
    },
    {
      name: "LinkedIn",
      icon: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/in/nikhilranjan01",
    },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      link: "https://github.com/nikhilranjan01",
    },
    {
      name: "LeetCode",
      icon: "fa-solid fa-laptop-code",
      link: "https://leetcode.com/nikhilranjan01",
    },
    {
      name: "Instagram",
      icon: "fa-brands fa-instagram",
      link: "https://www.instagram.com/nikhil_ranjan_01/",
    },

    {
      name: "Resume",
      icon: "fa-solid fa-download",
      link: "/resume.pdf",
    },
  ];


  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white px-6 md:px-16 pt-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center order-1"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-red-50 shadow-2xl shadow-red-300/40 overflow-hidden">
            <img
              src={heroImg}
              alt="Nikhil"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2"
        >
          <h3 className="text-xl font-medium mb-2">Hi, Myself</h3>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
            Nikhil <span className="text-red-500">Ranjan</span>
          </h1>

          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            And I'm a <span className="multiple-text text-red-500"></span>
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0">
            Welcome to my portfolio! Here you’ll find projects showcasing my
            skills in modern web development, clean UI design, and efficient
            problem-solving.
          </p>

          {/* SOCIAL LINKS WITH NAME */}
          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
                  flex items-center gap-2
                  px-4 py-2
                  border-2 border-red-500
                  text-red-500
                  rounded-full
                  font-medium
                  transition-all duration-300
                  hover:bg-red-500 hover:text-white
                  hover:-translate-y-1
                "
              >
                <i className={item.icon}></i>
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
