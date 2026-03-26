import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const Certifications: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      title: "Committee of CREBO II : Eclipse of Eternity",
      file: "crebo1_certi.png",
    },
    {
      title: "Committee of Crebo III : Dive Into The Dives",
      file: "CREBO 3 DIVE INTO THE DIVES.jpeg",
    },
    {
      title: "UNTAR ASTARIKA 2025 Committee",
      file: "ASTARIKA UNTAR.jpeg",
    },
    {
      title: "Creasia: Creativity Together, Growing Sustainable",
      file: "Creasia Creativity Together Growing Sustainable.jpeg",
    },
    {
      title: "Seminar Anti Plagiasi Visual UNTAR",
      file: "Seminar Anti Plagiat Visual UNTAR.jpeg",
    },
    {
      title: "STELLAR 8.0: Bloom",
      file: "STELLAR 8.0 BLOOME UNTAR.jpeg",
    },
    {
      title: "Pameran Multimedia UNTAR",
      file: "Multimedia UNTAR.jpeg",
    },
    {
      title: "Pameran Studi Media Desain UNTAR",
      file: "Studi Media Design UNTAR.jpeg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      {/* Navbar */}
      <NavBar />

      {/* Main Content */}
      <div className="flex-grow max-w-6xl mx-auto px-4 py-8 md:py-12 mt-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center text-[#B91C1C]">
          Certifications
        </h1>
        <p className="text-base md:text-lg text-center mb-8 md:mb-10 text-gray-600">
          A showcase of my achievements and learning milestones over the years.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              className="cursor-pointer rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(cert.file)}
            >
              <img
                src={`/certificates/${cert.file}`}
                alt={cert.title}
                className="object-cover w-full h-56"
              />
              <div className="p-4 bg-white">
                <h2 className="text-sm font-semibold text-center">
                  {cert.title}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.img
                src={`/certificates/${selectedImage}`}
                alt="Enlarged certificate"
                className="max-w-4xl max-h-[90vh] rounded-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};
