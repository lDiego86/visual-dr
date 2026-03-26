import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  let lastScrollY = window.scrollY;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${showNav ? "translate-y-0" : "-translate-y-full"
        } ${scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-black/40 backdrop-blur-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1
          onClick={() => navigate("/")}
          className="text-xl md:text-2xl font-bold cursor-pointer text-white drop-shadow-lg"
        >
          Visual DR
        </h1>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-8">

          <button
            onClick={() => navigate("/")}
            className={`font-medium transition-colors duration-300 ${isActive("/") ? "text-white" : "text-gray-200 hover:text-pink-400"} drop-shadow`}
          >
            Inicio
          </button>

          <button
            onClick={() => navigate("/galeria")}
            className={`font-medium transition-colors duration-300 ${isActive("/galeria") ? "text-white" : "text-gray-200 hover:text-pink-400"} drop-shadow`}
          >
            Galería
          </button>

          <button
            onClick={() => navigate("/about")}
            className={`font-medium transition-colors duration-300 ${isActive("/about") ? "text-white" : "text-gray-200 hover:text-pink-400"} drop-shadow `}
          >
            Nosotros
          </button>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/dr.visualcr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-pink-400 transition-colors duration-300 drop-shadow group"
          >
            <FaInstagram className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            Instagram
          </a>

          {/* CTA */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/50688971845?text=Hola, quiero agendar una sesión",
                "_blank"
              )
            }
            className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-lg"
          >
            Agendar Sesión
          </button>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl px-6 pb-6 flex flex-col gap-4">

          <button
            onClick={() => {
              navigate("/");
              setMenuOpen(false);
            }}
            className="text-medium text-gray-200 hover:text-white"
          >
            Inicio
          </button>

          <button
            onClick={() => {
              navigate("/galeria");
              setMenuOpen(false);
            }}
            className="text-medium text-gray-200 hover:text-white"
          >
            Galería
          </button>
          <button
            onClick={() => navigate("/about")}
            className={`font-medium transition ${isActive("/about") ? "text-white" : "text-gray-200 hover:text-white"
              }`}
          >
            Nosotros
          </button>
          <a
            href="https://www.instagram.com/dr.visualcr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-200 hover:text-pink-400 transition-colors duration-300 drop-shadow group"
          >
            <FaInstagram className="w-5 h-5 transform transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            Instagram
          </a>

          <button
            onClick={() => {
              window.open(
                "https://wa.me/50688971845?text=Hola, quiero agendar una sesión",
                "_blank"
              );
              setMenuOpen(false);
            }}
            className="mt-2 px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white"
          >
            Agendar sesión
          </button>
        </div>
      )}
    </nav>
  );
}