import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

import portrait from "../assets/portrait.jpg";
// import cv from "../assets/Rafael Angelo - CV.pdf";

import { SiInstagram, SiWhatsapp } from "react-icons/si";

export const HomeScreen: React.FC = () => {
  const [imgLoaded, setImgLoaded] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col min-h-screen scroll-smooth">
        <NavBar />

        {/* Hero Section */}
        <motion.div
          id="home"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-center items-center flex-grow px-6 py-20 gap-10"
        >
          <div className="text-center md:text-left">
            <h1 className="font-Inter font-bold text-[24px] md:text-[28px] mb-2 text-[#B91C1C]">
              Cecillia Tan Handoko
            </h1>
            <h3 className="font-Open Sans text-[16px] md:text-[18px] text-gray-700">
              Designer
            </h3>
            <h4 className="font-Open Sans text-[14px] text-gray-600">
              Student at Universitas Tarumanegara
            </h4>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-4">
              {/* <a target="_blank" href={cv} download="cv"> */}
              <button className="p-3 mt-4 rounded-[10px] bg-[#B91C1C] text-white font-Inter hover:bg-[#991B1B] transition hover:cursor-pointer">
                Download CV
              </button>
              {/* </a> */}
              <Link to="/certifications">
                <button className="p-3 mt-4 rounded-[10px] bg-white shadow-lg text-[#B91C1C] font-Inter border border-[#B91C1C] hover:bg-[#FEE2E2] transition hover:cursor-pointer">
                  Certifications
                </button>
              </Link>
            </div>
          </div>

          <motion.img
            initial={{ opacity: 0 }}
            animate={imgLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            onLoad={() => setImgLoaded(true)}
            decoding="async"
            className="w-[250px] md:w-[350px] rounded-full hover:outline hover:outline-2 hover:outline-[#B91C1C]"
            src={portrait}
            alt="Portrait"
          />
        </motion.div>

        {/* About Section */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="px-6 py-12 text-justify max-w-[900px] w-full shadow-xl mb-[50px] mt-[50px] bg-white rounded-[20px]"
        >
          <h1 className="text-2xl font-bold mb-4 text-[#B91C1C] font-Inter">
            About Me
          </h1>
          <p className="text-base leading-relaxed text-gray-700">
            My name is Cecillia Tan Handoko, and I am the prettiest girl in the
            whole wild world.
          </p>
        </motion.div>

        {/* Education & Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-center items-center gap-8 font mb-[50px] px-4"
        >
          {/* Education */}
          <div className="w-full max-w-[300px] shadow-xl px-5 py-12 rounded-[20px]">
            <h1 className="text-2xl font-bold mb-4 text-[#B91C1C] font-Inter">
              Educations
            </h1>
            <div>
              <h2 className="font-Roboto">Bina Tunas Bangsa</h2>
              <h3>Science</h3>
              <h4 className="text-gray-600 text-[14px]">
                July 2020 - May 2023
              </h4>
            </div>
            <br />
            <div>
              <h2 className="font-Roboto">Universitas Tarumanegara (UNTAR) </h2>
              <h3>Desain, Komunikasi & Visual</h3>
              <h4 className="text-gray-600 text-[14px]">
                August 2024 - June 2028
              </h4>
            </div>
            <br />
          </div>

          {/* Experience */}
          <div className="w-full max-w-[300px] shadow-xl px-5 py-12 rounded-[20px]">
            <h1 className="text-2xl font-bold mb-4 text-[#B91C1C] font-Inter">
              Experiences
            </h1>
            <div>
              <h2 className="font-Roboto">CREBO Volunteer</h2>
              <h3>Universitas Tarumanegara</h3>
              <h4 className="text-gray-600 text-[14px]">
                September 2024 - Now
              </h4>
            </div>
            <br />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-[50px] shadow-xl w-full max-w-[900px] px-6 py-12 bg-[#FEE2E2] rounded-[20px]"
          id="projects"
        >
          <h1 className="text-3xl font-bold mb-8 text-center text-[#B91C1C] font-Inter">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">

          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="shadow-xl font-Inter mb-[50px] px-6 py-6 rounded-[20px] bg-white w-full md:w-fit self-end"
          id="contact"
        >
          <h1 className="text-2xl font-bold mb-2 font-Inter text-[#B91C1C]">
            Contact Me
          </h1>

          <h4 className="text-sm text-gray-600 mb-2">
            ✉️ cecilliatan@gmail.com
          </h4>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=cecilliatan@gmail.com"
          >
            <button className="w-[170px] h-[35px] text-[12px] font-Inter bg-white text-[#B91C1C] rounded-md mt-2 border border-[#B91C1C] hover:bg-[#FEE2E2] transition hover:cursor-pointer">
              Contact Me Here!
            </button>
          </a>

          <div className="flex flex-col gap-3 justify-center items-start mt-6 text-gray-700 text-sm">
            <a
              href="https://www.instagram.com/ceaxil"
              target="_blank"
              className="flex items-center gap-2"
            >
              <SiInstagram className="text-lg text-[#B91C1C]" />
              <span>ceaxil</span>
            </a>
            <a
              href="https://wa.me/6281514383863?text=Hello%20Cecillia%2C%20I%20want%20your%20service%20to%20create%20a%20design%20like%20..."
              target="_blank"
              className="flex items-center gap-2"
            >
              <SiWhatsapp className="text-lg text-[#B91C1C]" />
              <span>+62 815-1438-3863</span>
            </a>
          </div>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
};
