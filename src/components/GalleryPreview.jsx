import React from "react";
import { useNavigate } from "react-router-dom";

// IMPORTA SOLO ALGUNAS IMÁGENES
import img1 from "../img/Galeria/img15.jpg";
import img2 from "../img/Galeria/img37.jpg";
import img3 from "../img/Galeria/img3.jpg";
import img4 from "../img/Galeria/img7.png";
import img5 from "../img/Galeria/img5.jpg";
import img6 from "../img/Galeria/img6.jpg";

export default function GalleryPreview() {
  const navigate = useNavigate();

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section 
    id="fotografia" // 👈 CLAVE para navegación directa
    className="bg-black text-white py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Galería
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((img, index) => (
          <div key={index} className="overflow-hidden rounded-xl group relative">
            <img
              src={img}
              alt="Preview"
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* BOTÓN VER MÁS */}
      <div className="text-center mt-10">
        <button
          onClick={() => {
              window.scrollTo(0, 0);
              navigate("/galeria");
            }}
          className="px-8 py-3 border border-white rounded-xl hover:bg-white hover:text-black transition"
        >
          Ver galería completa
        </button>
      </div>
    </section>
  );
}