import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import VisualDR from "./pages/VisualDR.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import ClientGallery from "./pages/ClientGallery.jsx";
import Admin from "./pages/Admin.jsx";
import Login from "./pages/Login.jsx";

import { useAuth } from "./hooks/useAuth";

export default function App() {

  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black text-white flex items-center justify-center">
        Cargando sesión...
      </div>
    );
  }

  return (
    <Router>
      <Navbar />
      <WhatsAppButton />
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<VisualDR />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/clientes/:clientId" element={<ClientGallery />} />
        <Route path="*" element={<NotFound />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/admin" replace /> : <Login />}
        />

        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/login" replace />}
        />

      </Routes>
    </Router>
  );
}