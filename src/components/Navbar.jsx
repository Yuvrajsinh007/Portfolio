import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="w-full flex justify-center">
        <div className="flex items-center gap-8 py-4 px-4">
          {/* Logo */}
          <a href="#home">
            <img src="logo3.png" alt="Logo" className="w-17 h-12"/>
          </a>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            <a href="#home" className="hover:text-indigo-600 hover:scale-105 active:scale-110 transition-transform duration-200 inline-block">Home</a>
            <a href="#about" className="hover:text-indigo-600 hover:scale-105 active:scale-110 transition-transform duration-200 inline-block">About</a>
            <a href="#projects" className="hover:text-indigo-600 hover:scale-105 active:scale-110 transition-transform duration-200 inline-block">Projects</a>
            <a href="#contact" className="hover:text-indigo-600 hover:scale-105 active:scale-110 transition-transform duration-200 inline-block">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;