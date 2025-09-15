// src/pages/Times.jsx
import React from "react";

/* ====== ESCUDOS ====== */
import crestFla from "../assets/Flamengo.png";
import crestPal from "../assets/Palmeiras.png";
import crestSan from "../assets/Santos.png";
import crestCor from "../assets/Corinthians.png";
import crestSao from "../assets/Brasao_do_Sao_Paulo_Futebol_Clube.svg.png";
import crestCru from "../assets/Cruzeiro.png";

/* ====== FOTOS (BANNERS) ====== */
import photoFla from "../assets/TimeFlamengo.jpg";
/* <- AQUI a correção: arquivo singular TimePalmeira.jpg */
import photoPal from "../assets/TimePalmeira.jpg";
import photoSan from "../assets/TimeSantos.jpg";
import photoCor from "../assets/TimeCorinthians.jpg";
import photoSao from "../assets/TimeSaoPaulo.jpg";
import photoCru from "../assets/TimeCruzeiro.jpg";

/* ====== DADOS ====== */
const TEAMS = [
  { slug: "flamengo",    nome: "Flamengo",    cidade: "Rio de Janeiro, RJ", crest: crestFla, foto: photoFla, cor: "#E63B3B" },
  { slug: "palmeiras",   nome: "Palmeiras",   cidade: "São Paulo, SP",      crest: crestPal, foto: photoPal, cor: "#2C7A48" }, // usa TimePalmeira.jpg
  { slug: "santos",      nome: "Santos",      cidade: "Santos, SP",         crest: crestSan, foto: photoSan, cor: "#111111" },
  { slug: "corinthians", nome: "Corinthians", cidade: "São Paulo, SP",      crest: crestCor, foto: photoCor, cor: "#6D28D9" },
  { slug: "sao-paulo",   nome: "São Paulo",   cidade: "São Paulo, SP",      crest: crestSao, foto: photoSao, cor: "#C53030" },
  { slug: "cruzeiro",    nome: "Cruzeiro",    cidade: "Belo Horizonte, MG", crest: crestCru, foto: photoCru, cor: "#0D5EA6" },
];

/* ====== CARD ====== */
function Card({ t }) {
  return (
    <div
      className="team-card"
      style={{
        background: "#fff",
        border: "1px solid #eee",
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: "0 8px 22px rgba(0,0,0,.06)",
      }}
    >
      {/* FOTO */}
      <div style={{ width: "100%", height: 190, overflow: "hidden" }}>
        <img
          src={t.foto}
          alt={t.nome}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* BLOCO INFERIOR */}
      <div style={{ padding: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
          <img
            src={t.crest}
            alt={`Escudo do ${t.nome}`}
            style={{ width: 22, height: 22, objectFit: "contain" }}
          />
          <div style={{ lineHeight: 1.1 }}>
            <strong style={{ fontWeight: 900 }}>{t.nome}</strong>
            <div style={{ fontSize: 12, color: "#6b7280", marginTop: 2 }}>{t.cidade}</div>
          </div>
        </div>

        <a
          href={`#/time/${t.slug}`}
          className="btn btn-block"
          style={{
            marginTop: 10,
            display: "block",
            textAlign: "center",
            textDecoration: "none",
            fontWeight: 900,
            color: "#fff",
            background: t.cor,
            padding: "10px 12px",
            borderRadius: 10,
          }}
        >
          Ver perfil completo
        </a>
      </div>
    </div>
  );
}

/* ====== PÁGINA ====== */
export default function Times() {
  return (
    <section className="times-section container" style={{ paddingBlock: 22 }}>
      <div
        className="times-grid"
        style={{
          display: "grid",
          gap: 20,
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {TEAMS.map((t) => (
          <Card key={t.slug} t={t} />
        ))}
      </div>

      {/* Botão do rodapé (não funcional) */}
      <div style={{ marginTop: 22, display: "flex", justifyContent: "center" }}>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          style={{
            textDecoration: "none",
            fontWeight: 900,
            color: "#6D28D9",
            background: "#EEE5FE",
            border: "1px solid #E1D6FF",
            padding: "12px 16px",
            borderRadius: 12,
          }}
        >
          Ver Todos os Times →
        </a>
      </div>
    </section>
  );
}
