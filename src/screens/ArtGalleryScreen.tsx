import React from "react";
import { useParams } from "react-router-dom";
import { GalleryModal } from "../components/GalleryModal";
import { artGalleryItems } from "../data/artGalleryItems";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

export const ArtGalleryScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const initialIndex = parseInt(id || "0", 10);

  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#fff0f0] px-4 py-10">
        <h1 className="text-center text-3xl font-bold mb-10 text-[#B91C1C] font-Inter">
          Art Gallery
        </h1>
        <div className="flex justify-center items-center ml-auto mr-auto w-full max-w-6xl">
          <GalleryModal arts={artGalleryItems} initialIndex={initialIndex} />
        </div>
      </div>
      <Footer />
    </>
  );
};
