import React from "react";
import { SiWhatsapp, SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gradient-to-br from-[#B91C1C] to-[#7f1d1d] pt-10 pb-6 flex flex-col items-center relative overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />

      {/* Branding */}
      <div className="mb-6 text-center z-10">
        <p className="text-white text-2xl font-extrabold tracking-tight">Cecillia Tan Handoko</p>
        <p className="text-red-200 text-sm mt-1">Designer · Creative Thinker</p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-center md:items-start mb-6 px-6 space-y-6 md:space-y-0 z-10">
        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-3 opacity-70">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-2">
            <Link
              className="text-white hover:text-red-200 transition-colors duration-200 text-sm"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-white hover:text-red-200 transition-colors duration-200 text-sm"
              to="/certifications"
            >
              Certifications
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right">
          <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-3 opacity-70">
            Contact Me
          </h3>
          <div className="flex flex-col items-center md:items-end space-y-2">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=cecilliatanhandoko555@gmail.com"
              className="flex items-center space-x-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition-colors duration-200 text-sm"
            >
              <SiGmail className="text-base" />
              <span>Contact via Email</span>
            </a>
            <a
              href="https://wa.me/6281514383863?text=Hello%20Cecillia%2C%20I%20am%20interested%20in%20your%20services%20as%20a%20designer.%20Can%20we%20discuss%20further%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-500/80 border border-green-400/30 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-colors duration-200 text-sm"
            >
              <SiWhatsapp className="text-base" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-5xl px-6 z-10">
        <hr className="border-white/20 mb-4" />
      </div>

      {/* Footer Bottom */}
      <p className="text-center text-white/60 text-xs z-10">
        &copy; {new Date().getFullYear()} Cecillia Tan Handoko. All rights reserved.
      </p>
    </footer>
  );
};
