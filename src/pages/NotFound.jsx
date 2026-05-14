import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="text-center max-w-2xl">

        {/* ERROR */}
        <h1 className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-6">
          404
        </h1>

        {/* TITULO */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Página no encontrada
        </h2>

        {/* TEXTO */}
        <p className="text-gray-400 text-lg mb-10">
          La página que intentas visitar no existe o fue movida.
        </p>

        {/* BOTONES */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">

          {/* INICIO */}
          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 rounded-xl border border-white hover:bg-white hover:text-black transition"
          >
            Volver al inicio
          </button>

          {/* WHATSAPP */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/50688971845?text=Hola, vengo desde el sitio web",
                "_blank"
              )
            }
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 font-bold hover:scale-105 transition"
          >
            Contactar
          </button>

        </div>

      </div>

    </section>
  );
}