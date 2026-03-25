import React from "react";
import WorldVapes from "../img/Marcas/Logo-World-Vapes.jpg";
import SesionLu from "../img/Sesiones/Lu.jpg";
import TuProyecto from "../img/Proyectos/TuProyecto.png";

export default function Projects() {
  const clients = [
    { name: "The World Vapes", description: "“Tu sabor, tu mundo, tu vape”", image: WorldVapes },
    { name: "Sesión Fotográfica", description: "Capturamos momentos que cuentan tu historia", image: SesionLu },
    { name: "Tu proyecto aquí", description: "Espacio disponible para tu marca o sesión", image: TuProyecto },
  ];

  return (
    <section className="bg-gray-900 py-20 px-6">
      <h2 className="text-4xl font-extrabold text-center mb-16 text-white">Nuestros Proyectos Destacados</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {clients.map((client, index) => (
          <div key={index} className="relative group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-500">
            <img src={client.image} alt={client.name} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 text-white">{client.name}</h3>
              <p className="text-gray-300">{client.description}</p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}