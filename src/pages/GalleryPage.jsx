import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// IMÁGENES
import img1 from "../img/Galeria/img7.png";
import img2 from "../img/Galeria/img2.jpg";
import img3 from "../img/Galeria/img3.jpg";
import img4 from "../img/Galeria/img4.jpg";
import img5 from "../img/Galeria/img5.jpg";
import img6 from "../img/Galeria/img6.jpg";
import img7 from "../img/Galeria/img1.jpg";
import img8 from "../img/Galeria/img8.jpg";
import img9 from "../img/Galeria/img30.jpg";
import img10 from "../img/Galeria/img10.jpg";
import img11 from "../img/Galeria/img13.jpg";
import img12 from "../img/Galeria/img12.jpg";
import img13 from "../img/Galeria/img25.jpg";
import img14 from "../img/Galeria/img9.jpg";
import img15 from "../img/Galeria/img27.png";
import img16 from "../img/Galeria/img15.jpg";
import img17 from "../img/Galeria/img36.jpg";
import img18 from "../img/Galeria/img22.jpg";
import img19 from "../img/Galeria/img19.jpg";
import img20 from "../img/Galeria/img18.png";
import img21 from "../img/Galeria/img23.jpg";
import img22 from "../img/Galeria/img16.jpg";
import img23 from "../img/Galeria/img14.jpg";
import img24 from "../img/Galeria/img20.jpg";
import img25 from "../img/Galeria/img28.png";
import img26 from "../img/Galeria/img29.jpg";
import img27 from "../img/Galeria/img11.jpg";
import img28 from "../img/Galeria/img26.jpg";
import img29 from "../img/Galeria/img21.jpg";
import img30 from "../img/Galeria/img34.jpg";
import img31 from "../img/Galeria/img35.jpg";
import img32 from "../img/Galeria/img17.png";

export default function GalleryPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(null);
  const touchStartX = useRef(null);

  const images = [
    img1, img2, img3, img4,
    img5, img6, img7, img8,
    img9, img10, img11, img12,
    img13, img14, img15, img16,
    img17, img18, img19, img20,
    img21, img22, img23, img24,
    img25, img26, img27, img28,
    img29, img30, img31, img32
  ];

  // PRELOAD (carga rápida)
  useEffect(() => {
    images.forEach((img) => {
      const image = new Image();
      image.src = img;
    });
  }, []);

  // TECLADO
  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }

      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) =>
          prev === 0 ? images.length - 1 : prev - 1
        );
      }

      if (e.key === "Escape") {
        setCurrentIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIndex]);

  // SWIPE (MÓVIL)
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    if (diff > 50) {
      // swipe izquierda
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (diff < -50) {
      // swipe derecha
      setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }

    touchStartX.current = null;
  };

  return (
    <section className="bg-black text-white py-20 px-6 min-h-screen">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-12">
        <button
          onClick={() => navigate("/")}
          className="text-sm border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
        >
          ← Volver
        </button>

        <button
          onClick={() =>
            window.open("https://wa.me/50688971845?text=Hola, quiero agendar una sesión", "_blank")
          }
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition"
        >
          Agendar sesión
        </button>
      </div>

      {/* TÍTULO */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
        Galería Completa
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="overflow-hidden rounded-xl group cursor-pointer"
          >
            <img
              src={img}
              alt="Galería"
              loading="lazy"
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* BOTONES INFERIORES */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 mt-16">

        <button
          onClick={() => navigate("/")}
          className="w-full md:w-auto text-sm border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition"
        >
          ← Volver
        </button>

        <button
          onClick={() =>
            window.open(
              "https://wa.me/50688971845?text=Hola, quiero agendar una sesión",
              "_blank"
            )
          }
          className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition shadow-lg"
        >
          Agendar sesión
        </button>

      </div>


      {/* LIGHTBOX PREMIUM */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >

          {/* CERRAR */}
          <button
            onClick={() => setCurrentIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:scale-110 transition"
          >
            ✕
          </button>

          {/* CONTADOR */}
          <div className="absolute top-6 left-6 text-sm text-gray-300">
            {currentIndex + 1} / {images.length}
          </div>

          {/* IZQUIERDA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(
                currentIndex === 0 ? images.length - 1 : currentIndex - 1
              );
            }}
            className="absolute left-6 text-white text-4xl hover:scale-125 transition"
          >
            ←
          </button>

          {/* IMAGEN CON ANIMACIÓN */}
          <img
            src={images[currentIndex]}
            alt="Preview"
            className="max-w-5xl max-h-[85vh] rounded-xl shadow-2xl transition-all duration-500 ease-in-out scale-100 opacity-100"
          />

          {/* DERECHA */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex((currentIndex + 1) % images.length);
            }}
            className="absolute right-6 text-white text-4xl hover:scale-125 transition"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}