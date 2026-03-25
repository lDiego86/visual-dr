import React from "react";

export default function Packages() {
  const packages = [
    { title: "Básico", price: "₡50,000", features: ["1 sesión de fotos", "12 fotos editadas", "Entrega digital", "1 foto impresa enmarcada"] },
    { title: "Premium", price: "₡100,000", features: ["2 sesiones de fotos", "30 fotos editadas", "Video promocional corto", "1 foto impresa enmarcada"] },
    { title: "Elite", price: "₡200,000", features: ["5 sesiones de fotos", "50 fotos editadas", "Video profesional completo", "Asesoría de branding", "1 foto impresa enmarcada"] },
  ];

  return (
    <section className="bg-black text-white py-20 px-6">
      
      {/* TÍTULO */}
      <h2 className="text-4xl font-extrabold text-center mb-6 text-white">
        Inversión
      </h2>

      <p className="text-center text-gray-400 mb-12">
        Planes diseñados para crecer
      </p>

      {/* PAQUETES */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">{pkg.title}</h3>
            <p className="text-xl font-semibold mb-4 text-purple-400">{pkg.price}</p>

            <ul className="text-gray-300 mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="mb-2">• {feature}</li>
              ))}
            </ul>

            <button
          onClick={() =>
            window.open(
              `https://wa.me/50688971845?text=${encodeURIComponent(
                `Hola, quiero contratar el paquete ${pkg.title}`
              )}`,
              "_blank"
            )
          }
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition"
        >
          Contratar
        </button>
          </div>
        ))}
      </div>

      {/* 🔥 FRANJA DESARROLLO WEB */}
      <div className="max-w-7xl mx-auto mt-16">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8">

          {/* TEXTO */}
          <div className="max-w-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Tu negocio aún no tiene un sitio web que venda?
            </h3>

            <p className="text-gray-300 mb-4">
              Lleva tu marca al siguiente nivel con un sitio web profesional diseñado para convertir visitantes en clientes.
            </p>

            <ul className="text-gray-300 mb-6 space-y-2">
              <li>✔ Más clientes desde Google y redes sociales</li>
              <li>✔ Imagen profesional para tu negocio</li>
              <li>✔ Integración directa con WhatsApp</li>
              <li>✔ Diseño optimizado para vender</li>
            </ul>

            <p className="text-purple-400 font-bold text-lg mb-2">
              Proyectos desde ₡75,000
            </p>

             <p className="text-sm text-gray-400 mb-4">
                Cotización personalizada según lo que necesites
              </p>

              <p className="text-sm text-yellow-400 mb-6">
                ⚡ Cupos limitados por mes para nuevos proyectos
              </p>
          </div>

          {/* BOTÓN */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/50688971845?text=Hola, quiero información sobre desarrollo de sitio web",
                "_blank"
              )
            }
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-xl hover:scale-105 transition"
          >
            Solicitar cotización
          </button>
        </div>
      </div>

    </section>
  );
}