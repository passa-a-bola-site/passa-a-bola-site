import React from "react";
import "../index.css";

const Parceiros = () => {
  const cores = [
    "rosa",
    "verde",
    "roxo",
    "rosa",
    "verde",
    "roxo",
    "rosa",
    "verde",
    "roxo",
    "rosa",
    "verde",
    "roxo",
  ];

  return (
    <div className="flex flex-col items-center p-6 min-h-screen">
      {/* Título */}
      <h1 className="text-3xl font-bold mb-2 text-center">Clubes Parceiros</h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl">
        Conectamos talentos com oportunidades reais no futebol feminino
      </p>

      {/* Avatares dos clubes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16 w-full max-w-5xl">
        {cores.map((color, index) => (
          <div
            key={index}
            className={`w-16 h-16 flex items-center justify-center rounded-full bg-[var(--color-${color})] text-white font-bold shadow-md`}
          >
            AB
          </div>
        ))}
      </div>

      {/* Card de chamada no rodapé */}
      <div className="w-full flex justify-center">
        <div className="bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] text-white rounded-xl p-8 max-w-lg text-center shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Quer ser um clube parceiro?</h2>
          <p className="mb-6">
            Tenha acesso antecipado aos melhores talentos, ferramentas de
            organização de campeonatos e muito mais.
          </p>
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-roxo)] to-[var(--color-verde)] text-white text-lg font-bold shadow-md hover:scale-105 transition">
            Solicitar parceria
          </button>
        </div>
      </div>
    </div>
  );
};

export default Parceiros;
