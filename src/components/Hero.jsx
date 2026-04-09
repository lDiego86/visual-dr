import React from "react";
import { motion } from "framer-motion";
import HeroBg from "../img/Hero/HeroVisualDR.png";

export default function Hero() {
  const services = [
    { title: "Fotografía", text: "Imágenes que venden", icon: "📸", link: "#fotografia" },
    { title: "Drone", text: "Tomas aéreas impactantes", icon: "🚁", link: "#drone" },
    { title: "Video", text: "Contenido dinámico", icon: "🎥", link: "#video" },
    { title: "Web", text: "Sitios que convierten", icon: "💻", link: "#paquetes" },
    { title: "Marca", text: "Estrategia e identidad visual", icon: "🎯", link: "#tips" },
  ];

  const handleScroll = (link) => {
    if (!link) return;
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold mb-6 z-10 text-white drop-shadow-2xl"
      >
        DR Visual
      </motion.h1>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-100 mb-8 z-10 max-w-2xl drop-shadow-lg"
      >
        Contenido visual y estrategia que hacen crecer tu marca.<br />
        Fotografía, video, drone y desarrollo de identidad para negocios y marcas.<br />
        Transformamos ideas en experiencias que impactan y venden.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="z-10 mb-12"
      >
        <button
          onClick={() =>
            window.open(
              "https://wa.me/50688971845?text=Hola,%20quiero%20cotizar%20con%20ustedes",
              "_blank"
            )
          }
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          Cotizar por WhatsApp
        </button>
      </motion.div>

      {/* CONTENEDOR SLIDER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        {/* FADE IZQUIERDO (SUAVE) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 md:w-16 bg-gradient-to-r from-black/40 via-black/20 to-transparent z-20"></div>

        {/* FADE DERECHO (SUAVE) */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 md:w-16 bg-gradient-to-l from-black/40 via-black/20 to-transparent z-20"></div>

        {/* SLIDER */}
        <div className="flex gap-6 px-6 py-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[200px] md:min-w-[220px] lg:min-w-[180px] snap-center cursor-pointer"
              onClick={() => handleScroll(service.link)}
            >
              <div className="relative group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg overflow-hidden">

                {/* PARALLAX GLOW */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-2xl group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                </div>

                {/* ICONO */}
                <div className="text-4xl mb-4 relative z-10">
                  {service.icon}
                </div>

                {/* TEXTO */}
                <h3 className="text-white font-bold text-xl mb-2 relative z-10">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm relative z-10">
                  {service.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}