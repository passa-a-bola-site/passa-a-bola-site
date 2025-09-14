import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Inicio from "./pages/Inicio.jsx";
import Historia from "./pages/Historia.jsx";
import Campeonatos from "./pages/campeonatos.jsx";

function getRoute() {
  const raw = (window.location.hash || "#/").replace(/^#/, "");
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  if (path === "/" || path === "/inicio" || path === "/home") return "/";
  if (path.startsWith("/historia")) return "/historia";
  if (path.startsWith("/campeonatos")) return "/campeonatos";
  return "/";
}

export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const handler = () => setRoute(getRoute());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  return (
    <>
      <Header />
      {route === "/" && <Inicio />}
      {route === "/historia" && <Historia />}
      {route === "/campeonatos" && <Campeonatos />}
    </>
  );
}
