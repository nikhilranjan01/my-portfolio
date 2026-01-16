import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mb-8"
        >
          {[
            {
              icon: "fa-brands fa-github",
              link: "https://github.com/nikhilranjan01",
            },
            {
              icon: "fa-brands fa-linkedin-in",
              link: "https://www.linkedin.com/in/nikhilranjan01",
            },
            {
              icon: "fa-solid fa-laptop-code",
              link: "https://leetcode.com/nikhilranjan01",
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="
                w-11 h-11
                flex items-center justify-center
                border-2 border-red-500
                text-red-500
                rounded-full
                transition-all duration-300
                hover:bg-red-500 hover:text-white
                hover:-translate-y-1
                hover:shadow-[0_0_15px_rgba(239,68,68,0.6)]
              "
            >
              <i className={item.icon}></i>
            </a>
          ))}
        </motion.div>

        {/* DIVIDER */}
        <div className="w-24 h-[2px] bg-red-500 mx-auto mb-6"></div>

        {/* COPYRIGHT */}
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Nikhil Ranjan
          </span>{" "}
          • All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
