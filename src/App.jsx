import React, { useEffect, useState } from "react";
import "./App.css";
import heroImg from "./assets/hero.jpg";
import Historia from "./Historia.jsx";

/* Mini-router por hash (#/, #/historia, #/campeonatos) */
function getRoute() {
  const raw = window.location.hash.replace(/^#/, "");
  const path = raw.startsWith("/") ? raw : `/${raw}`;
  if (path === "/" || path === "/inicio" || path === "/home") return "/";
  if (path.startsWith("/historia")) return "/historia";
  if (path.startsWith("/campeonatos")) return "/campeonatos";
  return "/";
}

function Navbar({ route }) {
  const isActive = (r) =>
    route === r ? "menu__link menu__link--active" : "menu__link";

  return (
    <header className="nav">
      <div className="container nav__row">
        <a className="brand" href="#/">
          <img src="/logo-passa-a-bola.png" alt="Passa a Bola" className="brand__logo" />
          <span className="brand__text"><strong>Passa a</strong> Bola</span>
        </a>
        <nav className="menu" aria-label="Navegação principal">
          <a className={isActive("/")} href="#/">Início</a>
          <a className={isActive("/historia")} href="#/historia">História</a>
          <a className={isActive("/campeonatos")} href="#/campeonatos">Campeonatos</a>
          <a className="menu__link" href="#">Times</a>
          <a className="menu__link" href="#">Notícias</a>
          <a className="menu__link" href="#">Inscrições</a>
        </nav>
      </div>
    </header>
  );
}

/* Página Inicial */
function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero__bg" src={heroImg} alt="" />
        <div className="container hero__wrap">
          <h1 className="hero__title">Passa a Bola</h1>
          <p className="hero__subtitle">
            Acompanhe a HISTÓRIA, os CAMPEONATOS e as CONQUISTAS do futebol feminino no BRASIL
          </p>
          <div className="hero__actions">
            <a href="#/campeonatos" className="btn btn--banana"><span className="btn__chip">ver campeonatos</span></a>
            <a href="#/historia" className="btn btn--grape"><span className="btn__chip">conhecer história</span></a>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container stats__grid">
          <div className="stat"><div className="stat__number stat__big">8+</div><div className="stat__caption">Times Cadastrados</div></div>
          <div className="stat"><div className="stat__number">3</div><div className="stat__label">Campeonatos</div></div>
          <div className="stat"><div className="stat__number">197+</div><div className="stat__label">Jogadoras</div></div>
          <div className="stat"><div className="stat__number stat__big">10+</div><div className="stat__caption">Partidas</div></div>
        </div>
      </section>
    </>
  );
}

/* Página Campeonatos (placeholder simples) */
function Campeonatos() {
  return (
    <main className="stats">
      <div className="container">
        <h2 className="timeline__title" style={{ marginTop: "24px" }}>Campeonatos</h2>
        <div className="stats__grid">
          <div className="stat"><div className="stat__number">3</div><div className="stat__label">Campeonatos Ativos</div></div>
          <div className="stat"><div className="stat__number">24</div><div className="stat__label">Partidas</div></div>
          <div className="stat"><div className="stat__number">197+</div><div className="stat__label">Jogadoras</div></div>
          <div className="stat"><div className="stat__number stat__big">8+</div><div className="stat__caption">Times</div></div>
        </div>
      </div>
    </main>
  );
}

/* App com o mini-router */
export default function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHash = () => { setRoute(getRoute()); window.scrollTo(0, 0); };
    window.addEventListener("hashchange", onHash);
    if (!window.location.hash) window.location.hash = "#/"; // rota padrão
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <Navbar route={route} />
      {route === "/" && <Home />}
      {route === "/historia" && <Historia />}
      {route === "/campeonatos" && <Campeonatos />}
    </>
  );
}