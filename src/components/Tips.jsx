import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCamera,
  FaPalette,
  FaChartLine,
  FaVideo,
  FaMobileAlt,
  FaUsers,
  FaStar,
  FaSyncAlt,
} from "react-icons/fa";

export default function Tips() {
  const tips = [
    { icon: <FaLightbulb />, title: "Iluminación", text: "La luz define la calidad de tu contenido." },
    { icon: <FaCamera />, title: "Composición", text: "Todo debe tener intención visual." },
    { icon: <FaPalette />, title: "Estilo", text: "La consistencia construye marca." },
    { icon: <FaChartLine />, title: "Estrategia", text: "Publica con propósito, no por publicar." },
    { icon: <FaSyncAlt />, title: "Constancia", text: "La repetición genera posicionamiento." },
    { icon: <FaVideo />, title: "Video", text: "Mayor alcance y conexión con la audiencia." },
    { icon: <FaMobileAlt />, title: "Mobile", text: "Optimiza siempre para celular." },
    { icon: <FaUsers />, title: "Humaniza", text: "Muestra el proceso, genera confianza." },
    { icon: <FaStar />, title: "Impacto", text: "Tu imagen define tu valor." },
  ];

  return (
    <section className="relative bg-black text-white py-28 px-6 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 blur-[120px] opacity-30"></div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
          Tips & Estrategia Visual
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          No es contenido… es posicionamiento.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {tips.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.04 }}
            className="relative group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300"
          >
            {/* HOVER GLOW */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition duration-300"></div>

            {/* ICON */}
            <div className="text-3xl mb-4 text-purple-400 group-hover:text-pink-400 transition">
              {tip.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-xl font-bold mb-2">
              {tip.title}
            </h3>

            {/* TEXT */}
            <p className="text-gray-300 text-sm">
              {tip.text}
            </p>

            {/* LINE */}
            <div className="mt-4 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-40 group-hover:opacity-100 transition"></div>
          </motion.div>
        ))}

      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-24"
      >
        <button
          onClick={() =>
            window.open(
              "https://wa.me/50688971845?text=Hola,%20quiero%20llevar%20mi%20marca%20al%20siguiente%20nivel",
              "_blank"
            )
          }
          className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white shadow-2xl hover:scale-110 hover:shadow-pink-500/40 transition-all duration-300"
        >
          🚀 Llevar mi marca al siguiente nivel
        </button>
      </motion.div>
    </section>
  );
}