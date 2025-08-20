import React from "react";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";
// import cali from "../assets/caligraphy_white.png";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#B91C1C] py-6 flex flex-col items-center">
      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-center mb-4 px-4">
        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-Roboto font-bold mb-3">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-2">
            <Link
              className="text-white hover:underline hover:text-gray-300 transition-colors duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white hover:underline hover:text-gray-300 transition-colors duration-200"
              to="/certifications"
            >
              Certifications
            </Link>
          </nav>
        </div>

        {/* <img src={cali} className="w-[200px]" alt="" /> */}

        {/* Contact */}
        <div>
          <h3 className="text-white text-xl font-Roboto font-bold mb-3">
            Contact Me
          </h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rafaaelangelo@gmail.com"
              className="flex items-center space-x-2 bg-white text-[#152238] px-3 py-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
            >
              <SiGmail className="text-lg" />
              <span>Contact via Email</span>
            </a>
            <a
              href="https://wa.me/6281319727350?text=Hello%20Rafael%2C%20I%20want%20your%20service%20to%20create%20a%20website%20like%20..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-500 transition-colors duration-200"
            >
              <SiWhatsapp className="text-lg" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-full border-gray-500 mb-3" />

      {/* Footer Bottom */}
      <p className="text-center text-white text-sm mt-[5px] text-[15px] font-Inter">
        &copy; {new Date().getFullYear()} Cecillia Tan Handoko. All rights
        reserved.
      </p>
    </footer>
  );
};
