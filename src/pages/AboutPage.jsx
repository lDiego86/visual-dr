import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutSection() {
  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('/about.png')" }}
    >
      {/* Overlay oscuro + degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      <div className="relative max-w-4xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 drop-shadow-2xl">
          ¿Quiénes somos?
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow-lg">
          En <span className="text-white font-semibold">Visual DR</span> creemos que una imagen no solo debe verse bien: debe <span className="text-white font-semibold">vender, conectar y generar impacto real</span>. Nos especializamos en crear contenido visual profesional que ayuda a marcas, negocios y emprendedores a destacarse en un mundo digital cada vez más competitivo.
        </p>

        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow-lg">
          Cada proyecto es una oportunidad para <span className="text-white font-semibold">contar una historia auténtica</span>. No solo tomamos fotos, desarrollamos ideas, potenciamos marcas y construimos presencia digital con intención.
        </p>

        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow-lg">
          También ofrecemos <span className="text-white font-semibold">sesiones fotográficas personales</span> diseñadas para resaltar tu esencia, estilo y presencia, logrando imágenes que conecten y destaquen.
        </p>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/50688971845?text=Hola, quiero más información sobre sus servicios",
              "_blank"
            )
          }
          className="mt-6 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold text-white shadow-xl hover:scale-105 transition-transform"
        >
          Agendar sesión
        </button>
      </div>
    </section>
  );
}
