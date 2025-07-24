
// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandinPage";
import AboutPage from "../pages/AboutPage";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
              <Route path="/about" element={<AboutPage/>} />
     
    </Routes>
  );
};

export default AllRoutes;
