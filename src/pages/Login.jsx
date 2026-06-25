import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (loading) return;

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);

      // 🔥 navegación manual única (evita flick)
      navigate("/admin", { replace: true });

    } catch (err) {
      console.error(err);
      setError("Error de acceso");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-gray-900 p-6 rounded w-80">

        <h1 className="text-xl mb-4">Acceso Admin</h1>

        <input
          className="w-full p-2 mb-2 text-black"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full p-2 mb-4 text-black"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-400 text-sm mb-2">
            {error}
          </p>
        )}

        <button
          className="bg-blue-600 w-full py-2 disabled:opacity-50"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Ingresando..." : "Ingresar"}
        </button>

      </div>
    </div>
  );
}