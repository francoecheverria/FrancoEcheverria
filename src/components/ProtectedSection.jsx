import React, { useState } from "react";

const ProtectedSection = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    // Cambia la contraseña aquí
    const correctPassword = "valentina";
    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="p-6 w-200">
      <div className="p-4 flex flex-col items-center justify-center rounded-lg bg-[#1E1B47] text-white">
        {isAuthenticated ? (
          <>
            <h1 className="text-4xl font-bold text-center text-[#F8E9A1] leading-relaxed mb-4">
              Franco Echeverria es de la mujer mas hermosa de la Argentina, Valentina godoy. 💖
            </h1>
            <p className="text-xl text-center text-[#F8E9A1]">
              Esa morocha linda, de ojos negros hermosos me tiene loco. ❤️
            </p>
          </>
        ) : (
          <form
            onSubmit={handlePasswordSubmit}
            className="flex flex-col items-center space-y-4"
          >
            <h2 className="text-2xl font-bold">Sección protegida</h2>
            <input
              type="password"
              placeholder="Ingresa la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[#22D3EE]"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-[#22D3EE] text-white rounded-lg hover:bg-[#D946EF] transition"
            >
              Ingresar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProtectedSection;
