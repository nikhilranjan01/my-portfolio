import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/hero.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur shadow-md">
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

        {/* LOGO */}
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
            My<span className="text-red-500"> Portfolio</span>
          </span>
        </motion.a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-red-500 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-black"
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
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-red-500"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
