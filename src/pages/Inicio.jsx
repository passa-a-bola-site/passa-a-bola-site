import React from "react";
import heroBg from "../assets/hero.jpg"; // ajuste o nome/extensão se necessário

export default function Inicio() {
  return (
    <main className="home" aria-labelledby="home-title">
      {/* HERO (sem borda/sombra/overlay) */}
      <section
        className="hero"
        role="img"
        aria-label="Gramado de futebol com bola"
        style={{
          position: "relative",
          minHeight: "62vh",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          borderRadius: 0,         // <= sem borda/raio
          overflow: "visible",     // <= garante sem “recorte”
          display: "flex",
          alignItems: "center",
          marginTop: 0,            // <= encosta no topo
        }}
      >
        {/* conteúdo */}
        <div
          style={{
            position: "relative",
            width: "min(1200px,92%)",
            marginInline: "auto",
            paddingBlock: "clamp(32px,6vw,70px)",
          }}
        >
          <h1
            id="home-title"
            style={{
              fontWeight: 500,
              letterSpacing: ".6px",
              textTransform: "uppercase",
              fontSize: "clamp(56px, 7.6vw, 92px)",
              lineHeight: 0.95,
              color: "#7B3AF5",
              margin: "0 0 14px 0",
            }}
          >
            PASSA A BOLA
          </h1>

          <p
            style={{
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: 300,
              lineHeight: 1.28,
              fontSize: "clamp(14px,2.1vw,20px)",
              margin: "0 0 26px 0",
              maxWidth: 720,
            }}
          >
            ACOMPANHE A HISTÓRIA, OS CAMPEONATOS E AS <br />
            CONQUISTAS DO FUTEBOL FEMININO NO BRASIL
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#/campeonatos"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                borderRadius: 999,
                fontWeight: 800,
                textDecoration: "none",
                border: "2px solid #00000033",
                background: "#FADF63",
                color: "#1e1e1e",
                boxShadow: "0 6px 0 rgba(0,0,0,.25)",
              }}
            >
              Ver Campeonatos
            </a>
            <a
              href="#/historia"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                borderRadius: 999,
                fontWeight: 800,
                textDecoration: "none",
                border: "2px solid #00000033",
                background: "#7B3AF5",
                color: "#fff",
                boxShadow: "0 6px 0 rgba(0,0,0,.2)",
              }}
            >
              Conhecer História
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        aria-label="Indicadores do projeto"
        style={{
          width: "min(1200px,92%)",
          marginInline: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 18,
          paddingBlock: "28px 40px",
        }}
      >
        {[
          { v: "8+", l: "Times Cadastrados", purple: true },
          { v: "3", l: "Campeonatos" },
          { v: "197+", l: "Jogadoras" },
          { v: "10+", l: "Partidas", black: true },
        ].map((card, i) => (
          <article
            key={i}
            style={{
              background: card.black ? "#101010" : card.purple ? "rgba(123,58,245,.14)" : "#F4F4F4",
              color: card.black ? "#fff" : "#111",
              border: card.purple ? "2px solid rgba(123,58,245,.35)" : "none",
              borderRadius: 16,
              padding: 26,
              minHeight: 112,
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 0 rgba(0,0,0,.04)",
            }}
          >
            <strong style={{ fontSize: "clamp(26px,3.6vw,32px)", fontWeight: 800, marginBottom: 6 }}>
              {card.v}
            </strong>
            <span style={{ fontSize: "clamp(13px,1.6vw,15px)", fontWeight: 600 }}>{card.l}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
