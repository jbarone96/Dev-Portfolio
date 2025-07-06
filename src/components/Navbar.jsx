import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const Navbar = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.history.pushState(null, "", window.location.pathname); // Clear any hash
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full z-50 sticky top-0">
      <div className="relative z-[99999] backdrop-blur-md bg-primary bg-opacity-80 h-20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            onClick={scrollToTop}
            className="text-white text-2xl font-bold transition-colors duration-300 hover:text-[#915EFF]"
          >
            Jordan Barone
          </a>
          <ul className="hidden sm:flex gap-10 text-secondary text-lg font-medium">
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
          <MobileMenu />
        </nav>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dropdown = (
    <ul
      className={`fixed top-20 right-4 z-[99999] bg-tertiary text-white rounded-xl p-4 space-y-2 shadow-lg transform transition-all duration-300 ease-in-out ${open ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
    >
      <li>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
      </li>
      <li>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
      </li>
      <li>
        <a href="#experience" onClick={() => setOpen(false)}>
          Experience
        </a>
      </li>
      <li>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </li>
    </ul>
  );

  return (
    <div className="sm:hidden relative z-[99999]">
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl focus:outline-none"
      >
        {open ? "×" : "☰"}
      </button>
      {mounted &&
        createPortal(dropdown, document.getElementById("dropdown-root"))}
    </div>
  );
};

export default Navbar;
