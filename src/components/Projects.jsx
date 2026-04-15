import React from "react";
import WorldVapes from "../img/Marcas/Logo-World-Vapes.jpg";
import SesionLu from "../img/Sesiones/Lu.jpg";
import TuProyecto from "../img/Proyectos/TuProyecto.png";
import BrisasTilawa from "../img/Proyectos/BrisasTilawa.jpg";

export default function Projects() {
  const clients = [
    { name: "The World Vapes", description: "“Tu sabor, tu mundo, tu vape”", image: WorldVapes },
    { name: "Sesión Fotográfica", description: "Capturamos momentos que cuentan tu historia", image: SesionLu },
    { name: "Brisas de Tilawa", description: "“Donde cada planta, sendero y rincón cuentan una historia”", image: BrisasTilawa },
   // { name: "Tu proyecto aquí", description: "Espacio disponible para tu marca o sesión", image: TuProyecto },
  ];

  return (
    <section className="bg-gray-900 py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-white">
        Últimos Proyectos Destacados
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {clients.map((client, index) => (
          <div
            key={index}
            className="relative group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] hover:shadow-2xl transition-all duration-500"
          >
            {/* Imagen */}
            <img
              src={client.image}
              alt={client.name}
              className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
            />

            {/* Overlay SIEMPRE activo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl pointer-events-none"></div>

            {/* Contenido */}
            <div className="absolute bottom-0 p-6 z-10">
              <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">
                {client.name}
              </h3>
              <p className="text-gray-300 text-sm opacity-90">
                {client.description}
              </p>
            </div>

            {/* Overlay extra en hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
}