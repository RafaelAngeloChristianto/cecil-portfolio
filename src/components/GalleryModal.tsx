import React, { useState } from "react";
import { motion } from "framer-motion";

interface Art {
  name: string;
  image: string;
  pdf?: string;
}

interface Props {
  arts: Art[];
  initialIndex?: number;
}

export const GalleryModal: React.FC<Props> = ({ arts, initialIndex = 0 }) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const selectedArt = arts[selectedIndex];

  return (
    <div className="w-full max-w-full mx-auto">
      {/* Big Center Image */}
      <div className="w-full flex flex-col items-center mb-8">
        <motion.div
          key={selectedArt.image}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-4"
        >
          <img
            src={selectedArt.image}
            alt={selectedArt.name}
            className="w-full h-[500px] object-contain"
          />
        </motion.div>

        {/* Show Button if PDF exists */}
        {selectedArt.pdf && (
          <a
            href={selectedArt.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-xl shadow-md hover:bg-red-700 transition"
          >
            Check Project Details
          </a>
        )}
      </div>

      {/* Thumbnail Scroll */}
      <div className="flex justify-center">
        <div className="flex overflow-x-auto space-x-4 py-4 px-2 snap-x snap-mandatory scroll-smooth scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-red-100 max-w-4xl">
          {arts.map((art, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`flex-shrink-0 snap-start cursor-pointer rounded-xl border transition-all w-[100px] h-[100px] p-2 ${
                index === selectedIndex
                  ? "border-red-500 shadow-md"
                  : "border-gray-200"
              } bg-white`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={art.image}
                alt={art.name}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
