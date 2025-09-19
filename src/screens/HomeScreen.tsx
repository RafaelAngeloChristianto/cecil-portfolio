import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SiGmail, SiInstagram, SiWhatsapp } from "react-icons/si";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import portrait from "../assets/portrait.jpg";
import { artGalleryItems } from "../data/artGalleryItems";

export const HomeScreen: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 scroll-smooth">
      <NavBar />

      <main className="flex-grow mt-[50px]">
        {/* Hero Section */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-12 px-6 py-24 max-w-6xl mx-auto text-center"
        >
          <div className="md:w-1/2 md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-[#B91C1C] font-Hammersmith-One mb-3">
              Cecillia Tan Handoko
            </h1>
            <h3 className="text-xl md:text-2xl text-gray-700 font-Open-Sans mb-1">
              Designer
            </h3>
            <h4 className="text-md md:text-lg text-gray-500 font-Open-Sans mb-6">
              Student at Universitas Tarumanagara
            </h4>

            <div className="flex flex-col sm:flex-row sm:gap-4 gap-3 justify-center md:justify-start">
              <a target="_blank">
                <button className="px-6 py-3 bg-[#B91C1C] text-white rounded-lg font-Inter shadow-md hover:shadow-lg hover:scale-105 transition-transform hover:cursor-pointer">
                  Download CV
                </button>
              </a>
              <Link to="/certifications">
                <button className="px-6 py-3 bg-white text-[#B91C1C] border border-[#B91C1C] rounded-lg font-Inter shadow-md hover:shadow-lg hover:scale-105 transition-transform hover:cursor-pointer">
                  Certifications
                </button>
              </Link>
            </div>
          </div>

          <motion.img
            src={portrait}
            alt="Portrait"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={imgLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            onLoad={() => setImgLoaded(true)}
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-gray-200 shadow-xl hover:scale-105 transition-transform object-cover"
          />
        </motion.section>

        {/* About Section */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl font-jomolhari font-bold text-[#B91C1C] mb-6 text-center md:text-left">
            About Me
          </h2>
          <p className="text-gray-700 leading-relaxed text-base md:text-lg font-open-sans text-justify">
            My name is Cecillia Tan Handoko. I am passionate about design,
            especially visual communication and creative projects. I enjoy
            combining creativity with functionality in every project I
            undertake.
          </p>
        </motion.section>

        {/* Education & Experience */}
        <motion.section
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16 px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Education */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-jomolhari font-bold text-[#B91C1C] mb-4">
              Education
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-roboto font-semibold text-gray-800">
                  Bina Tunas Bangsa
                </h3>
                <p className="font-open-sans text-gray-600">Science</p>
                <span className="text-gray-400 text-sm">
                  July 2020 - May 2023
                </span>
              </div>
              <div>
                <h3 className="font-roboto font-semibold text-gray-800">
                  Universitas Tarumanagara (UNTAR)
                </h3>
                <p className="font-open-sans text-gray-600">
                  Desain, Komunikasi & Visual
                </p>
                <span className="text-gray-400 text-sm">
                  August 2024 - June 2028
                </span>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition">
            <h2 className="text-2xl font-jomolhari font-bold text-[#B91C1C] mb-4">
              Experience
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-roboto font-semibold text-gray-800">
                  Member of CREBO 2
                </h3>
                <p className="font-open-sans text-gray-600">
                  Universitas Tarumanagara
                </p>
                <span className="text-gray-400 text-sm">
                  September 2024 - Feb 2025
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-roboto font-semibold text-gray-800">
                  Member of CREBO 3
                </h3>
                <p className="font-open-sans text-gray-600">
                  Universitas Tarumanagara
                </p>
                <span className="text-gray-400 text-sm">
                  December 2024 - September 2025
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-6 py-12 mb-16"
        >
          <h2 className="text-3xl font-bold font-jomolhari text-[#B91C1C] mb-10 text-center">
            Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {artGalleryItems.map((item, i) => (
              <Link to={`/gallery/${i}`} key={i}>
                <div className="w-full aspect-square overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition">
                  <img
                    src={item.image}
                    alt={`Project ${i + 1}`}
                    className="w-full h-full object-cover hover:opacity-80 hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-6 py-10 mb-16 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold font-jomolhari text-[#B91C1C] mb-6 text-center">
            Contact Me
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-700 text-sm md:text-base font-open-sans">
                <SiGmail /> cecilliatanhandoko555@gmail.com
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=cecilliatanhandoko555@gmail.com"
              >
                <button className="w-[200px] h-10 bg-[#B91C1C] text-white rounded-lg hover:bg-[#991B1B] transition font-inter">
                  Contact Me Here!
                </button>
              </a>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/liaura.c"
                target="_blank"
                className="flex items-center gap-2 text-gray-700 hover:text-[#B91C1C] transition text-sm md:text-base font-open-sans"
              >
                <SiInstagram />
                <span>liaura.c</span>
              </a>
              <a
                href="https://wa.me/6281514383863"
                target="_blank"
                className="flex items-center gap-2 text-gray-700 hover:text-[#B91C1C] transition text-sm md:text-base font-open-sans"
              >
                <SiWhatsapp />
                <span>+62 815-1438-3863</span>
              </a>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};
