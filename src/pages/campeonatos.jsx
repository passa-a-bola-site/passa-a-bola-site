import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Swal from "sweetalert2";
import "leaflet/dist/leaflet.css";

export default function Escolinhas() {
  const [results, setResults] = useState([]);
  const [position, setPosition] = useState([-23.5505, -46.6333]); // Posição inicial: São Paulo

  const handleSearchNearby = () => {
    if (!navigator.geolocation) {
      Swal.fire({
        icon: "error",
        title: "Geolocalização não suportada",
        text: "Seu navegador não suporta geolocalização.",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);

        // Consulta Overpass API (escolinhas até 100 km de distância)
const overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];node(around:100000,${latitude},${longitude})[sport=soccer];out;`;

        fetch(overpassUrl)
          .then((res) => res.json())
          .then((data) => {
            if (data.elements && data.elements.length > 0) {
              setResults(data.elements);
              Swal.fire({
                icon: "success",
                title: "Escolinhas encontradas!",
                text: `${data.elements.length} escolinhas de futebol próximas foram localizadas ⚽`,
              });
            } else {
              setResults([]);
              Swal.fire({
                icon: "warning",
                title: "Nenhuma escolinha encontrada",
                text: "Não encontramos nenhuma escolinha de futebol perto de você 😢",
              });
            }
          });
      },
      () => {
        Swal.fire({
          icon: "error",
          title: "Erro na localização",
          text: "Não conseguimos acessar sua localização. Verifique as permissões.",
        });
      }
    );
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Escolinhas de Futebol
      </h1>

      <button
        onClick={handleSearchNearby}
        className="mb-6 px-6 py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-[var(--color-roxo)] via-[var(--color-rosa)] to-[var(--color-verde)] hover:opacity-90"
      >
        Procurar perto de mim
      </button>

      <div className="w-full max-w-4xl h-[400px] rounded-lg shadow-md overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          style={{ width: "100%", height: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Marcadores */}
          {results.map((el, index) => (
            <Marker
              key={index}
              position={[el.lat, el.lon]}
            >
              <Popup>⚽ Escolinha encontrada!</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </main>
  );
}
