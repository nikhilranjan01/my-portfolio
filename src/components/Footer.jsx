import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* SOCIAL ICONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-6 mb-6"
        >
          <a
            href="https://github.com/"
            target="_blank"
            className="w-11 h-11 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="w-11 h-11 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>

          <a
            href="https://leetcode.com/"
            target="_blank"
            className="w-11 h-11 flex items-center justify-center border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            <i className="fa-solid fa-code"></i>
          </a>
        </motion.div>

        {/* RED LINE */}
        <div className="w-20 h-[2px] bg-red-500 mx-auto mb-4"></div>

        {/* COPYRIGHT TEXT */}
        <p className="text-sm md:text-base">
          © 2026{" "}
          <span className="text-white font-semibold">Nikhil Ranjan</span>.  
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
