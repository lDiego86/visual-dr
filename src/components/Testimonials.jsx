import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      text: "Increíble trabajo, las fotos superaron mis expectativas. Totalmente recomendado.",
    },
    {
      name: "Carlos Ramírez",
      text: "Muy profesional, excelente calidad y atención. Sin duda volveré a trabajar con Visual DR.",
    },
    {
      name: "Lucía Fernández",
      text: "El resultado fue espectacular, justo lo que necesitaba para mi marca.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-900 py-20 px-6 text-center overflow-hidden">
      
      {/* Título */}
      <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
        Testimonios
      </h2>

      {/* Slider */}
      <div className="max-w-2xl mx-auto relative h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="absolute w-full"
          >
            <p className="text-yellow-400 mb-2">★★★★★</p>

            <p className="text-lg text-gray-300 mb-4">
              “{testimonials[index].text}”
            </p>

            <h3 className="font-bold text-white">
              {testimonials[index].name}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-10 gap-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </section>
  );
}