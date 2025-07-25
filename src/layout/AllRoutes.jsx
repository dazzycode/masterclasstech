
// src/AllRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandinPage";
import AboutPage from "../pages/AboutPage";
import ServicePage from "../pages/ServicePage";
import ConsultationPage from "../pages/ConsultationPage";
import PrivacyPage from "../pages/PrivacyPage";



const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
              <Route path="/about" element={<AboutPage/>} />
                   <Route path="/services" element={<ServicePage/>} />
               <Route path="/consultation" element={<ConsultationPage/>} />
               <Route path="/privacy" element={<PrivacyPage/>} />

    </Routes>
  );
};

export default AllRoutes;
