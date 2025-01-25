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
    <div className="p-6 flex items-center justify-center h-screen">
      <div className="p-8 flex flex-col items-center justify-center rounded-lg bg-[#2A2F60] text-white shadow-lg max-w-lg w-full">
        {isAuthenticated ? (
          <>
            <h1 className="text-4xl font-bold text-center text-[#F8E9A1] leading-relaxed mb-4">
              Franco Echeverria es de la mujer más hermosa de la Argentina, Valentina Godoy. 💖
            </h1>
            <p className="text-xl text-center text-[#F8E9A1]">
              Esa morocha linda, de ojos negros hermosos, me tiene loco. ❤️
            </p>
          </>
        ) : (
          <form
            onSubmit={handlePasswordSubmit}
            className="flex flex-col items-center space-y-6 w-full"
          >
            <h2 className="text-3xl font-bold text-[#22D3EE] mb-6">Sección protegida</h2>
            <input
              type="password"
              placeholder="Ingresa la contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 focus:ring-[#22D3EE] transition"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#22D3EE] text-white rounded-lg hover:bg-[#D946EF] transition transform hover:scale-105"
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
