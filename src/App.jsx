import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";


import VisualDR from "./pages/VisualDR.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Router>
        <Navbar />
        <WhatsAppButton />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<VisualDR />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}