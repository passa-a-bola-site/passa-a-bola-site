import React, { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Inicio from "./pages/Inicio.jsx";
import Historia from "./pages/historia.jsx";

function getRoute() {
  const raw = window.location.hash.replace(/^#/, "");
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  if (path === "/" || path === "/inicio" || path === "/home") return "/";
  if (path.startsWith("/historia")) return "/historia";
  if (path.startsWith("/campeonatos")) return "/campeonatos";
  if (path.startsWith("/times")) return "/times";
  if (path.startsWith("/noticias")) return "/noticias";
  if (path.startsWith("/inscricoes")) return "/inscricoes";
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
      {route === "/campeonatos" && <div style={{ padding: 24 }}>Campeonatos (em construção)</div>}
      {route === "/times" && <div style={{ padding: 24 }}>Times (em construção)</div>}
      {route === "/noticias" && <div style={{ padding: 24 }}>Notícias (em construção)</div>}
      {route === "/inscricoes" && <div style={{ padding: 24 }}>Inscrições (em construção)</div>}
    </>
  );
}
