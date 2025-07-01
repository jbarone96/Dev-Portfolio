import React from "react";

const Navbar = () => {
  return (
    <div className="w-full z-50">
      {/* Reserve vertical space to prevent overlap */}
      <div className="h-20" />

      {/* Fixed navbar overlay */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md bg-primary bg-opacity-80 h-20">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold">My Portfolio</h1>
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
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sm:hidden relative">
      <button
        onClick={() => setOpen(!open)}
        className="text-white text-2xl focus:outline-none"
      >
        {open ? "✖" : "☰"}
      </button>
      {open && (
        <ul className="absolute right-0 mt-4 bg-tertiary text-white rounded-xl p-4 space-y-2 shadow-lg overflow-hidden">
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
      )}
    </div>
  );
};

export default Navbar;
