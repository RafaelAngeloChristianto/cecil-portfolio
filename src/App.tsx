import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { Certifications } from "./screens/Certifications";

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </div>
  );
};
