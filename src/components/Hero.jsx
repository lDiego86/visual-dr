import React from "react";
import { motion } from "framer-motion";
import HeroBg from "../img/Hero/HeroVisualDR.png";

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay oscuro para mejorar contraste */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-7xl font-extrabold mb-6 z-10 text-white drop-shadow-2xl"
      >
        DR Visual
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-100 mb-8 z-10 max-w-2xl drop-shadow-lg"
      >
        Contenido visual que hace crecer tu marca.<br />
        Fotografía y producción profesional para negocios, marcas y personas. <br />
        Transformamos ideas en experiencias que impactan.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="z-10"
      >
        <button
          onClick={() => window.open("https://wa.me/50688971845?text=Hola,%20quiero%20cotizar%20con%20ustedes", "_blank")}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Cotizar por WhatsApp
        </button>
      </motion.div>
    </section>
  );
}