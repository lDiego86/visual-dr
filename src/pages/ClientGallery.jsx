import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";

export default function ClientGallery() {
  const { clientId } = useParams();

  const [loading, setLoading] = useState(true);
  const [galleryConfig, setGalleryConfig] = useState(null);

  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const [selected, setSelected] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);

  const [sending, setSending] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadGallery = async () => {
      try {

        if (!clientId) {
          console.error("clientId no existe en la URL");
          setGalleryConfig(null);
          setLoading(false);
          return;
        }

        const docRef = doc(db, "clientes", clientId);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
          console.error("Cliente no encontrado:", clientId);
          setGalleryConfig(null);
          return;
        }

        const data = docSnap.data();

        

        setGalleryConfig({
          id: docSnap.id,
          ...data
        });

        const selectionRef = doc(db, "selecciones", clientId);
        const selectionSnap = await getDoc(selectionRef);

        if (selectionSnap.exists()) {
          const selectionData = selectionSnap.data();
          setSelected(selectionData.selectedPhotos || []);
        }

      } catch (error) {
        console.error("ERROR FIRESTORE:", error);
        setErrorMessage("Error cargando la galería");
      } finally {
        setLoading(false);
      }
    };

    loadGallery();
  }, [clientId]);

  const login = () => {
    if (password === galleryConfig.password) {
      setAuthenticated(true);
    } else {
      setWarningMessage("La contraseña ingresada es incorrecta.");

      setTimeout(() => {
        setWarningMessage("");
      }, 4000);
    }
  };

  const toggleSelection = (id) => {
    setSelected((prev) => {

      if (prev.includes(id)) {
        return prev.filter((photoId) => photoId !== id);
      }

      if (prev.length >= galleryConfig.maxSelections) {
        setWarningMessage(
          `Has alcanzado el límite de ${galleryConfig.maxSelections} fotografías.`
        );

        setTimeout(() => {
          setWarningMessage("");
        }, 5000);

        return prev;
      }

      return [...prev, id];
    });
  };

  const sendSelection = async () => {
    if (sending) return;

    setSending(true);

    try {
      await setDoc(doc(db, "selecciones", clientId), {
        clientId,
        clientName: galleryConfig.clientName,
        packageName: galleryConfig.packageName,
        selectedPhotos: selected,
        totalSelected: selected.length,
        updatedAt: serverTimestamp(),
        status: "Pendiente"
      });

      setSuccessMessage("✅ Selección actualizada correctamente.");

      setTimeout(() => {
        setSuccessMessage("");
      }, 4000);

    } catch (error) {
      console.error(error);

      setErrorMessage("No fue posible guardar tu selección.");

      setTimeout(() => {
        setErrorMessage("");
      }, 5000);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl font-bold">
          Cargando galería...
        </div>
      </section>
    );
  }

  if (!galleryConfig) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Galería no encontrada
          </h1>
          <p className="text-gray-400">
            Verifique el enlace recibido.
          </p>
        </div>
      </section>
    );
  }

  const today = new Date();
  const expiration = galleryConfig?.expires
    ? new Date(galleryConfig.expires)
    : null;

  if (expiration && today > expiration) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Galería expirada
          </h1>
          <p className="text-gray-400">
            Contacte a DR Visual para acceso nuevamente.
          </p>
        </div>
      </section>
    );
  }

  const images = (galleryConfig.images || []).map((image) => ({
    id: image.replace(/\.[^/.]+$/, ""),
    src: `/galerias/${galleryConfig.galleryFolder}/${image}`,
  }));

  if (!authenticated) {
    return (
      <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">

        <div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

          <h1 className="text-4xl font-extrabold text-center mb-4">
            Galería Privada
          </h1>

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-gray-700 mb-4"
          />

          {warningMessage && (
            <p className="text-red-400 text-center mb-4">
              {warningMessage}
            </p>
          )}

          <button
            onClick={login}
            className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-bold hover:scale-105 transition"
          >
            Acceder
          </button>

        </div>

      </section>
    );
  }

  return (
    <section className="bg-black text-white min-h-screen py-20 px-6 select-none">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold">
            {galleryConfig.clientName}
          </h1>
        </div>

        {/* GALERÍA */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {images.map((image) => (
            <div key={image.id} className="bg-white/5 rounded-2xl overflow-hidden">

              <div className="relative w-full h-72">

                <img
                  src={image.src}
                  className="w-full h-72 object-cover"
                  onClick={() => setPreviewImage(image.src)}
                />

                {/* WATERMARK */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-white/20 text-3xl font-black rotate-[-25deg] tracking-widest">
                    DR VISUAL
                  </span>
                </div>

              </div>



              <div className="p-4">
                <button
                  onClick={() => toggleSelection(image.id)}
                  className={`w-full py-3 rounded-xl font-bold transition ${selected.includes(image.id)
                    ? "bg-green-600 text-white"
                    : "bg-white/10 hover:bg-white/20"
                    }`}
                >
                  {selected.includes(image.id)
                    ? "Seleccionada"
                    : "Seleccionar"}
                </button>
              </div>

            </div>
          ))}

        </div>

        {selected.length > 0 && (
          <div className="text-center mt-12">
            <button
              onClick={sendSelection}
              disabled={sending}
              className="px-10 py-4 bg-purple-600 rounded-xl font-bold"
            >
              {sending ? "Guardando..." : "Guardar selección"}
            </button>
          </div>
        )}

      </div>

      {successMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 px-6 py-3 rounded-xl">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-red-600 px-6 py-3 rounded-xl">
          {errorMessage}
        </div>
      )}

      {previewImage && (
  <div
    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6"
    onClick={() => setPreviewImage(null)}
    onContextMenu={(e) => e.preventDefault()}
  >

    <div
      className="relative"
      onClick={(e) => e.stopPropagation()}
    >

      {/* IMAGEN GRANDE */}
      <img
        src={previewImage}
        className="max-w-6xl max-h-[90vh] rounded-2xl select-none pointer-events-none"
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* WATERMARK EN GRANDE */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-white/15 text-6xl font-black rotate-[-25deg] tracking-widest">
          DR VISUAL
        </span>
      </div>

    </div>
  </div>
)}
    </section>
  );
}