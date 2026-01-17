import React, { useState } from "react";
import logo from "../assets/hero.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white
        shadow-md
        h-16
      "
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">

        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-xl font-bold text-black">
            My<span className="text-red-500"> Portfolio</span>
          </span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-red-500 transition-colors"
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
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden">
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
        </div>
      )}
    </header>
  );
};

export default Header;
