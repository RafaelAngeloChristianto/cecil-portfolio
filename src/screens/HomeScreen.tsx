import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { SiGmail, SiInstagram, SiWhatsapp } from "react-icons/si";
import { HiOutlineAcademicCap, HiOutlineBriefcase } from "react-icons/hi";
import { MdOutlineDesignServices } from "react-icons/md";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { PageLoader } from "../components/PageLoader";

import portrait from "/me.jpeg";
import { artGalleryItems } from "../data/artGalleryItems";

export const HomeScreen: React.FC = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <AnimatePresence>
        {showLoader && <PageLoader onLoadComplete={() => {}} />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen bg-[#F8F8F8] text-gray-800 mt-[-100px]">
        <NavBar />

        <main className="flex-grow">
          {/* HERO */}
          <section className="relative min-h-screen flex items-center justify-center px-6 pt-56 md:pt-16">

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 max-w-6xl w-full mx-auto">
              {/* Portrait first on mobile */}
              <div className="relative order-first md:order-last">
                <div className="absolute inset-0 bg-[#B91C1C]/5 rounded-full blur-xl"></div>
                <motion.img
                  src={portrait}
                  alt="Portrait"
                  initial={{ opacity: 0 }}
                  animate={imgLoaded ? { opacity: 1 } : {}}
                  onLoad={() => setImgLoaded(true)}
                  className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full object-cover border-8 border-[#B91C1C]/20 shadow-2xl"
                />
              </div>

              {/* LEFT */}
              <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold tracking-tight leading-tight mb-4 md:mb-6 text-gray-900">
                  I'm Cecillia Tan Handoko
                </h1>

                <h3 className="text-lg md:text-xl text-gray-700 mb-3 flex items-center justify-center md:justify-start gap-2">
                  <MdOutlineDesignServices className="text-[#B91C1C]" />
                  Designer & Creative Thinker
                </h3>

                <h4 className="text-sm md:text-md text-gray-600 mb-8 md:mb-10 flex items-center justify-center md:justify-start gap-2">
                  <HiOutlineAcademicCap className="text-[#B91C1C]" />
                  Universitas Tarumanagara
                </h4>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full sm:w-auto">
                  <button className="w-full sm:w-auto px-8 py-3 bg-[#B91C1C] text-white rounded-xl font-medium hover:bg-[#991B1B] transition-all shadow-lg hover:shadow-xl">
                    Download CV
                  </button>

                  <Link to="/certifications" className="w-full sm:w-auto">
                    <button className="w-full px-8 py-3 border-2 border-[#B91C1C] text-[#B91C1C] rounded-xl font-medium hover:bg-[#B91C1C] hover:text-white transition-all">
                      View Certifications
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* ABOUT */}
          <motion.section
            id="about"
            {...fadeInUp}
            className="max-w-4xl mx-auto px-6 py-12 md:py-20 bg-[#B91C1C]/5 rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold mb-3">About Me</h2>
            <div className="w-16 h-[3px] bg-[#B91C1C] mb-8 rounded-full"></div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mb-8 md:mb-10">
              I am passionate about visual communication and creative design. I
              enjoy blending aesthetics with functionality, ensuring that every
              project delivers both impact and clarity.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-6">
              {[
                { value: "10+", label: "Projects Completed" },
                { value: "2+", label: "Years Experience" },
                { value: "3.84", label: "Current GPA" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#B91C1C]/20 p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                >
                  <h3 className="text-2xl md:text-3xl font-semibold text-[#991B1B]">
                    {stat.value}
                  </h3>
                  <p className="text-gray-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* JOURNEY */}
          <motion.section
            {...fadeInUp}
            className="max-w-6xl mx-auto px-6 py-12 md:py-20"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10 md:mb-16 text-[#991B1B]">
              My Journey
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Education */}
              <div className="bg-white border border-[#B91C1C]/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineAcademicCap className="text-2xl text-[#B91C1C]" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>

                <div className="space-y-6 text-gray-600">
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Universitas Tarumanagara
                    </h4>
                    <p>Desain Komunikasi Visual (2024 – 2028)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Bina Tunas Bangsa
                    </h4>
                    <p>Science (2020 – 2023)</p>
                  </div>
                </div>
              </div>

              {/* Experience */}
              <div className="bg-white border border-[#B91C1C]/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition">
                <div className="flex items-center gap-3 mb-6">
                  <HiOutlineBriefcase className="text-2xl text-[#B91C1C]" />
                  <h3 className="text-2xl font-semibold">Experience</h3>
                </div>

                <div className="space-y-6 text-gray-600">
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Member of CREBO 3
                    </h4>
                    <p>Universitas Tarumanagara (2024 – 2025)</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      Member of CREBO 2
                    </h4>
                    <p>Universitas Tarumanagara (2024 – 2025)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROJECTS */}
          <motion.section
            id="projects"
            {...fadeInUp}
            className="max-w-6xl mx-auto px-6 py-12 md:py-20 bg-gradient-to-b from-[#B91C1C]/5 to-transparent rounded-3xl"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-[#991B1B]">
              Featured Projects
            </h2>

            <p className="text-gray-600 text-center mb-8 md:mb-14">
              Selected creative works and visual explorations
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {artGalleryItems.map((item, i) => (
                <Link key={i} to={`/gallery/${i}`}>
                  <div className="group bg-white border border-[#B91C1C]/20 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>

          {/* CONTACT */}
          <motion.section
            id="contact"
            {...fadeInUp}
            className="max-w-4xl mx-auto px-4 py-12 md:py-20"
          >
            <div className="bg-gradient-to-br from-[#B91C1C] to-[#991B1B] text-white rounded-3xl p-6 md:p-10 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">
                Contact Me
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-3 mb-4">
                    <SiGmail className="text-2xl" />
                    <h3 className="font-medium">Email</h3>
                  </div>

                  <p className="text-sm text-white/80 mb-4 break-all">
                    cecilliatanhandoko555@gmail.com
                  </p>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=cecilliatanhandoko555@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="w-full py-3 bg-white text-[#B91C1C] rounded-xl font-medium hover:bg-gray-100 transition">
                      Send Message
                    </button>
                  </a>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 space-y-4">
                  <h3 className="font-medium mb-2">Social</h3>

                  <a
                    href="https://www.instagram.com/liaura.c"
                    target="_blank"
                    className="flex items-center gap-3 text-white/90 hover:text-white transition"
                  >
                    <SiInstagram /> @liaura.c
                  </a>

                  <a
                    href="https://wa.me/6281514383863"
                    target="_blank"
                    className="flex items-center gap-3 text-white/90 hover:text-white transition"
                  >
                    <SiWhatsapp /> +62 815-1438-3863
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </>
  );
};
