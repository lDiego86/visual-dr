import React from "react";

export default function Process() {
  const steps = [
    {
      title: "Contáctame",
      text: "Escríbeme por WhatsApp y cuéntame tu idea",
    },
    {
      title: "Estrategia",
      text: "Definimos estilo, objetivos y enfoque visual",
    },
    {
      title: "Producción",
      text: "Realizamos la sesión o desarrollo del proyecto",
    },
    {
      title: "Entrega",
      text: "Recibes contenido listo para impactar y vender",
    },
  ];

  return (
    <section className="bg-gray-900 py-24 px-6 text-center">
      
      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">
        ¿Cómo funciona?
      </h2>

      <p className="text-gray-400 mb-16">
        Un proceso simple, rápido y enfocado en resultados
      </p>

      {/* STEPS */}
      <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {steps.map((step, i) => (
          <div key={i} className="relative group">

            {/* LÍNEA CONECTORA */}
            {i !== steps.length - 1 && (
              <div className="hidden md:block absolute top-10 right-[-50%] w-full h-[2px] bg-gradient-to-r from-purple-500 to-pink-500 opacity-30"></div>
            )}

            {/* CÍRCULO */}
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xl font-bold shadow-lg group-hover:scale-110 transition">
              {i + 1}
            </div>

            {/* CARD */}
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md group-hover:scale-105 transition">
              <h3 className="text-lg font-bold text-white mb-2">
                {step.title}
              </h3>

              <p className="text-gray-300 text-sm">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16">
        <button
          onClick={() =>
            window.open(
              "https://wa.me/50688971845?text=Hola, quiero iniciar un proyecto",
              "_blank"
            )
          }
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition shadow-lg"
        >
          Iniciar proyecto
        </button>
      </div>

    </section>
  );
}