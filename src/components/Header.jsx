import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/hero.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* LOGO WITH FLOAT */}
        <motion.a
          href="#home"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2"
        >
          <img
            src={logo}
            alt="Logo"
            className="w-9 h-9 object-cover rounded-full"
          />

          <span className="text-xl font-bold text-black">
            My<span className="text-red-500">Portfolio</span>
          </span>
        </motion.a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
          <li><a href="#skills" className="hover:text-red-500 transition">Skills</a></li>
          <li><a href="#project" className="hover:text-red-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-black"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg"
        >
          <ul className="flex flex-col items-center gap-6 py-6 font-medium text-gray-700">
            <li><a onClick={() => setMenuOpen(false)} href="#home">Home</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#about">About</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#Portfolio">Projects</a></li>
            <li><a onClick={() => setMenuOpen(false)} href="#contact">Contact</a></li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
