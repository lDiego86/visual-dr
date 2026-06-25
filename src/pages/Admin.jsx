import React, { useEffect, useState } from "react";
import {
    collection,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    setDoc
} from "firebase/firestore";

import { db } from "../firebase";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const emptyForm = {
    id: "",
    clientName: "",
    packageName: "",
    expires: "",
    galleryFolder: "",
    extraPhotoPrice: 0,
    maxSelections: 0,
    password: "",
    status: "",
    active: true,
    totalSelected: 0,
    images: []
};

const slugify = (text = "") =>
    text.toLowerCase().trim().replace(/\s+/g, "-");

export default function Admin() {

    const { user, loading } = useAuth();

    const [userData, setUserData] = useState(undefined);
    const [clients, setClients] = useState([]);

    const [selected, setSelected] = useState(null);
    const [form, setForm] = useState(emptyForm);

    const [newImages, setNewImages] = useState("");

    const [loadingData, setLoadingData] = useState(true);

    // ================= LOAD =================
    useEffect(() => {
        if (!user?.uid) return;

        const load = async () => {
            try {
                setLoadingData(true);

                const userSnap = await getDoc(doc(db, "users", user.uid));

                if (!userSnap.exists()) {
                    setUserData(null);
                    return;
                }

                const data = userSnap.data();
                setUserData(data);

                if (data.role !== "admin") return;

                const snap = await getDocs(collection(db, "clientes"));

                setClients(
                    snap.docs.map(d => ({
                        id: d.id,
                        ...d.data()
                    }))
                );

            } catch (e) {
                console.error(e);
                setUserData(null);
            } finally {
                setLoadingData(false);
            }
        };

        load();
    }, [user?.uid]);

    // ================= GUARDS =================
    if (loading || loadingData) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Cargando...
            </div>
        );
    }

    if (!user) return <Navigate to="/login" />;

    if (userData === null) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                Sin acceso
            </div>
        );
    }

    // ================= SAVE =================
    const saveClient = async () => {
        try {
            await updateDoc(doc(db, "clientes", form.id), {
                ...form,
                extraPhotoPrice: Number(form.extraPhotoPrice || 0),
                maxSelections: Number(form.maxSelections || 0),
                totalSelected: Number(form.totalSelected || 0),
                images: form.images || []
            });

            setClients(prev =>
                prev.map(c => (c.id === form.id ? { ...c, ...form } : c))
            );

            setSelected(null);

        } catch (e) {
            console.error(e);
            alert("Error guardando cliente");
        }
    };

    // ================= CREATE =================
    const createClient = async () => {
        try {
            const id = form.id?.trim() || slugify(form.clientName);

            const data = {
                ...form,
                id,
                images: form.images || []
            };

            if (!id) {
                alert("Debes ingresar un ID o nombre válido");
                return;
            }
            await setDoc(doc(db, "clientes", id), data);

            setClients(prev => [...prev, data]);
            setSelected(null);
            setForm(emptyForm);

        } catch (e) {
            console.error(e);
            alert("Error creando cliente");
        }
    };

    // ================= ADD IMAGES =================
    const addImages = () => {
        const imgs = newImages
            .split(",")
            .map(i => i.trim())
            .filter(Boolean);

        setForm(prev => ({
            ...prev,
            images: [...(prev.images || []), ...imgs]
        }));

        setNewImages("");
    };

    // ================= UI =================
    return (
        <div className="min-h-screen bg-black text-white p-6">

            {/* HEADER */}
            <div className="flex justify-between items-center mb-6 relative z-40">

                <h1 className="text-xl font-bold text-white">
                    Panel Admin
                </h1>

                <button
                    onClick={() => {
                        setForm(emptyForm);
                        setSelected({ new: true });
                    }}
                    className="
        relative z-[60]
        bg-gradient-to-r from-green-500 to-green-600
        hover:from-green-600 hover:to-green-700
        text-white
        px-5 py-2
        rounded-xl
        font-semibold
        shadow-lg
        shadow-green-500/20
        transition-all duration-200
        whitespace-nowrap
        border border-green-300/30
    "
                >
                    + Nuevo cliente
                </button>

            </div>

            {/* CARDS */}
            <div className="grid md:grid-cols-3 gap-4">

                {clients.map(c => (
                    <div
                        key={c.id}
                        className="bg-gray-900 p-4 rounded-xl cursor-pointer hover:bg-gray-800"
                        onClick={() => {
                            setSelected(c);
                            setForm({
                                ...emptyForm,
                                ...c,
                                id: c.id,
                                images: c.images || []
                            });
                        }}
                    >
                        <h2 className="font-bold">{c.clientName}</h2>
                        <p className="text-sm text-gray-400">{c.packageName}</p>
                        <p className="text-xs text-gray-500">
                            Expira: {c.expires}
                        </p>
                    </div>
                ))}

            </div>

            {/* MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">

                    <div className="bg-gray-900 w-[650px] max-h-[90vh] overflow-y-auto p-5 rounded-xl">

                        <h2 className="mb-3 font-bold">
                            {selected.new ? "Nuevo cliente" : "Editar cliente"}
                        </h2>

                        {selected?.new && (
                            <input
                                className="w-full p-2 mb-2 text-black"
                                value={form.id}
                                onChange={(e) =>
                                    setForm({ ...form, id: e.target.value })
                                }
                                placeholder="ID del cliente (ej: maria-gonzalez)"
                            />
                        )}

                        <input
                            className="w-full p-2 mb-2 text-black"
                            value={form.clientName || ""}
                            onChange={e =>
                                setForm({ ...form, clientName: e.target.value })
                            }
                            placeholder="Nombre cliente"
                        />

                        <input
                            className="w-full p-2 mb-2 text-black"
                            value={form.packageName || ""}
                            onChange={e =>
                                setForm({ ...form, packageName: e.target.value })
                            }
                            placeholder="Paquete contratado"
                        />

                        <input
                            type="date"
                            className="w-full p-2 mb-2 text-black"
                            value={form.expires || ""}
                            onChange={e =>
                                setForm({ ...form, expires: e.target.value })
                            }
                        />

                        <input
                            className="w-full p-2 mb-2 text-black"
                            value={form.galleryFolder || ""}
                            onChange={e =>
                                setForm({ ...form, galleryFolder: e.target.value })
                            }
                            placeholder="Carpeta de galería"
                        />

                        <input
                            className="w-full p-2 mb-2 text-black"
                            value={form.password || ""}
                            onChange={e =>
                                setForm({ ...form, password: e.target.value })
                            }
                            placeholder="Contraseña cliente"
                        />

                        <input
                            className="w-full p-2 mb-2 text-black"
                            value={form.status || ""}
                            onChange={e =>
                                setForm({ ...form, status: e.target.value })
                            }
                            placeholder="Estado (Ej: Activa / Completada)"
                        />

                        {/* 🧠 NUMBERS CLAROS */}
                        <label className="text-xs text-gray-400">Precio foto extra</label>
                        <input
                            type="number"
                            className="w-full p-2 mb-2 text-black"
                            value={form.extraPhotoPrice}
                            onChange={e =>
                                setForm({ ...form, extraPhotoPrice: Number(e.target.value) })
                            }
                        />

                        <label className="text-xs text-gray-400">Máximo fotos seleccionables</label>
                        <input
                            type="number"
                            className="w-full p-2 mb-2 text-black"
                            value={form.maxSelections}
                            onChange={e =>
                                setForm({ ...form, maxSelections: Number(e.target.value) })
                            }
                        />

                        <label className="text-xs text-gray-400">Total seleccionadas por cliente</label>
                        <input
                            type="number"
                            className="w-full p-2 mb-2 text-black"
                            value={form.totalSelected}
                            onChange={e =>
                                setForm({ ...form, totalSelected: Number(e.target.value) })
                            }
                        />

                        {/* IMÁGENES */}
                        <div className="grid grid-cols-3 gap-2 mt-3">
                            {(form.images || []).map((img, i) => (
                                <img
                                    key={i}
                                    src={`/galerias/${form.galleryFolder}/${img}`}
                                    className="h-20 object-cover rounded"
                                />
                            ))}
                        </div>

                        {/* ADD IMAGES */}
                        <div className="mt-4 flex gap-2">
                            <input
                                className="flex-1 p-2 text-black"
                                value={newImages}
                                onChange={e => setNewImages(e.target.value)}
                                placeholder="IMG1.jpg, IMG2.jpg"
                            />

                            <button
                                onClick={addImages}
                                className="bg-blue-600 px-3 rounded"
                            >
                                Agregar
                            </button>
                        </div>

                        {/* ACTIONS */}
                        <div className="flex justify-end gap-2 mt-4">

                            <button
                                onClick={selected.new ? createClient : saveClient}
                                className="bg-green-600 px-3 py-1 rounded"
                            >
                                Guardar
                            </button>

                            <button
                                onClick={() => setSelected(null)}
                                className="bg-red-600 px-3 py-1 rounded"
                            >
                                Cerrar
                            </button>

                        </div>

                    </div>

                </div>
            )}



            <button
                onClick={() => {
                    setForm(emptyForm);
                    setSelected({ new: true });
                }}
                className="
        fixed bottom-6 right-6
        z-[999]
        bg-gradient-to-r from-green-500 to-green-600
        hover:from-green-600 hover:to-green-700
        text-white
        px-6 py-3
        rounded-full
        font-semibold
        shadow-xl
        shadow-green-500/30
        transition-all duration-200
    "
            >
                + Nuevo cliente
            </button>

        </div>
    );
}