import React, { useState } from "react";

import img1 from "../img/Drone/Drone3.jpg";
import img2 from "../img/Drone/Drone2.jpg";
import img3 from "../img/Drone/Drone1.jpg";

export default function DroneSection() {
  const droneImages = [
    img1, img2, img3
  ]; // imágenes

  const services = [
    {
      title: "Fotografía aérea",
      text: "Capturas de eventos, paisajes y proyectos desde el aire. ",
    },
    {
      title: "Video promocional",
      text: "Videos espectaculares para marketing, tours virtuales y promociones.",
    },
    {
      title: "Inspecciones técnicas",
      text: "Monitoreo de terrenos, construcciones y proyectos especiales.",
    },
    {
      title: "Tours virtuales",
      text: "Recorridos aéreos para inmobiliarias, turismo o eventos especiales.",
    },
  ];

  const [current, setCurrent] = useState(0);

  return (
    <section className="bg-gray-900 py-24 px-6 text-center">
      {/* Título */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        Fotografía y Video con Drone
      </h2>
      <p className="text-gray-400 mb-16 max-w-3xl mx-auto">
        Capturamos tu mundo desde otra perspectiva. Imágenes y videos aéreos de alta calidad para eventos, inmuebles, turismo y proyectos especiales. 
      </p>

      {/* Carrusel principal */}
      <div className="max-w-5xl mx-auto mb-6 rounded-2xl overflow-hidden shadow-lg border border-white/10">
        <img
          src={droneImages[current]}
          alt={`Drone shot ${current + 1}`}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Miniaturas */}
      <div className="flex justify-center gap-4 mb-12">
        {droneImages.map((img, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-20 h-20 cursor-pointer rounded-xl overflow-hidden border-4 ${
              current === i ? "border-purple-500" : "border-white/10"
            } transition-transform transform hover:scale-105 shadow-lg`}
          >
            <img
              src={img}
              alt={`Thumbnail ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Servicios */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-16">
        {services.map((service, i) => (
          <div key={i} className="relative group">

            {/* Card */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md group-hover:scale-105 transition">
              <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 text-sm">{service.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/50688971845?text=Hola, quiero agendar una sesión con drone",
              "_blank"
            )
          }
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition shadow-lg"
        >
          Agendar Sesión con Drone
        </button>
      </div>
    </section>
  );
}