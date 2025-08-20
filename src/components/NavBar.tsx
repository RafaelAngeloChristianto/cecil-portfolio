import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to section on hash change (after navigation)
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const sections = ["about", "projects", "contact"];

  return (
    <nav className="w-full fixed top-0 z-50 backdrop-blur-sm bg-white/80 shadow-md transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <h2 className="font-Inter font-bold text-xl md:text-2xl text-[#000] tracking-wide">
          <span className="text-[#B91C1C]">Cecillia </span>Tan Handoko
        </h2>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          <Link
            to="/"
            className="font-Roboto text-base md:text-lg relative text-[#000] hover:text-[#B91C1C] transition-all duration-300
              after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#B91C1C] after:rounded-full after:transition-all after:duration-300
              hover:after:w-full"
          >
            Home
          </Link>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(`#${section}`);
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-Roboto text-base md:text-lg relative text-[#000] hover:text-[#B91C1C] transition-all duration-300
                after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#B91C1C] after:rounded-full after:transition-all after:duration-300
                hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#B91C1C]">
            {isOpen ? (
              <FiX className="text-3xl" />
            ) : (
              <FiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg px-6 py-6 flex flex-col gap-5 animate-slideDown">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-Roboto text-base text-[#000] hover:text-[#B91C1C] transition-all duration-200"
          >
            Home
          </Link>
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(`#${section}`);
                if (target) target.scrollIntoView({ behavior: "smooth" });
                setIsOpen(false);
              }}
              className="font-Roboto text-base text-[#000] hover:text-[#B91C1C] transition-all duration-200"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};
