import React from "react";

export default function Footer() {
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">

        {/* MARCA */}
        <div>
          <h3 className="text-white text-2xl font-extrabold mb-3">
            DR Visual
          </h3>
          <p className="text-gray-400 text-sm">
            Contenido visual y estrategia para marcas que quieren destacar.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="text-white font-bold mb-4">Servicios</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li onClick={() => handleScroll("#fotografia")} className="cursor-pointer hover:text-white transition">
              Fotografía
            </li>
            <li onClick={() => handleScroll("#drone")} className="cursor-pointer hover:text-white transition">
              Drone
            </li>
            <li onClick={() => handleScroll("#video")} className="cursor-pointer hover:text-white transition">
              Video
            </li>
            <li onClick={() => handleScroll("#web")} className="cursor-pointer hover:text-white transition">
              Web
            </li>
            <li onClick={() => handleScroll("#branding")} className="cursor-pointer hover:text-white transition">
              Branding
            </li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h4 className="text-white font-bold mb-4">Contacto</h4>

          <div className="flex flex-col items-center md:items-start gap-3">

            {/* WhatsApp */}
            <button
              onClick={() =>
                window.open(
                  "https://wa.me/50688971845?text=Hola,%20quiero%20cotizar%20con%20ustedes",
                  "_blank"
                )
              }
              className="px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold rounded-lg hover:scale-105 transition shadow-lg"
            >
              WhatsApp
            </button>

            {/* Redes */}
            <div className="flex gap-4 text-gray-500 text-xl">
              <a href="#" className="hover:text-white transition">📸</a>
              <a href="#" className="hover:text-white transition">🎥</a>
              <a href="#" className="hover:text-white transition">💻</a>
            </div>

          </div>
        </div>
      </div>

      {/* LÍNEA */}
      <div className="max-w-6xl mx-auto mt-10 border-t border-white/10 pt-6 text-center">

        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} DR Visual. Todos los derechos reservados.
        </p>

        <p className="text-gray-600 text-[11px] mt-2">
          Diseño y desarrollo por DR Visual
        </p>

      </div>
    </footer>
  );
}