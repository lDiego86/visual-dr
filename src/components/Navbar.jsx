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
            className="text-left text-gray-200 hover:text-white"
          >
            Inicio
          </button>

          <button
            onClick={() => {
              navigate("/galeria");
              setMenuOpen(false);
            }}
            className="text-left text-gray-200 hover:text-white"
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
            className="group p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-white transition 
                      group-hover:scale-110 
                      group-hover:text-pink-400"
            >
              <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0120 7.75v8.5A3.75 3.75 0 0116.25 20h-8.5A3.75 3.75 0 014 16.25v-8.5A3.75 3.75 0 017.75 4zm8.75 1.5a.75.75 0 100 1.5.75.75 0 000-1.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z" />
            </svg>
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