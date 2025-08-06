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

  return (
    <div className="shadow-lg bg-white scroll-smooth">
      <div className="h-16 px-6 flex items-center justify-between">
        <h2 className="font-inter font-bold text-lg text-[#000000]">
          <span className="text-[#B91C1C] font-inter font-bold text-lg">Cecillia </span> Tan Handoko
        </h2>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FiX className="text-2xl text-[#B91C1C]" />
            ) : (
              <FiMenu className="text-2xl text-[#B91C1C]" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 mr-5">
          <Link
            to="/"
            className="font-Roboto relative hover:text-[#B91C1C] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B91C1C] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
          >
            Home
          </Link>

          {["about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(`#${section}`);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
                setIsOpen(false); // close mobile menu if open
              }}
              className="font-Roboto relative hover:text-[#B91C1C] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B91C1C] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="font-Roboto text-base hover:text-[#B91C1C] transition duration-200"
          >
            Home
          </Link>

          {["about", "projects", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(`#${section}`);
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
                setIsOpen(false); // close mobile menu if open
              }}
              className="font-Roboto relative hover:text-[#B91C1C] transition duration-200 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#B91C1C] after:transition-all after:duration-300 hover:after:w-full hover:cursor-pointer"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
