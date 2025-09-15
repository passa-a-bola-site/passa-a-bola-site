// src/pages/Noticias.jsx
import React from "react";

// Imagens (ajuste os nomes se necessário)
import heroDestaque from "../assets/TimeCruzeiro.jpg"; // destaque grande (esquerda)
import imgRight1 from "../assets/Juventude.png";       // card de cima (direita)
import imgRight2 from "../assets/feminino.jpg";        // card de baixo (direita) — ESTATÍSTICAS

export default function Noticias() {
  return (
    <section className="container" style={{ paddingBlock: 24 }}>
      <style>{`
        /* ===== layout geral: flex pra evitar o "vazio" no card esquerdo ===== */
        .news-wrap{
          display:flex; gap:22px; align-items:flex-start;
        }
        .news-left{ flex: 2 1 0; min-width: 0; }
        .news-right{ flex: 1 1 0; min-width: 0; display:grid; gap:22px; }

        @media (max-width: 1024px){
          .news-wrap{ flex-direction:column; }
          .news-right{ grid-template-columns: 1fr; }
        }

        .news-card{
          background:#fff; border:1px solid #eee; border-radius:14px; overflow:hidden;
          box-shadow:0 8px 22px rgba(0,0,0,.06);
        }
        .news-chip{
          font-size:11px; font-weight:900; color:#111827; background:#FDE68A;
          border:1px solid #FCD34D; padding:3px 6px; border-radius:999px; text-transform:uppercase;
        }
        .news-chip--violet{ background:#E9D5FF; border-color:#D8B4FE; }
        .news-date{ font-size:12px; color:#6b7280 }
        .news-title{ margin:6px 0 10px; font-weight:900; line-height:1.1 }
        .news-desc{ margin:0; color:#4b5563; font-size:14px }
        .news-link{ font-weight:900; color:#6D28D9; text-decoration:none }
      `}</style>

      <h2 className="section-title" style={{ marginTop: 6, marginBottom: 2 }}>
        Últimas Notícias
      </h2>
      <p style={{ textAlign: "center", color: "#6b7280", marginTop: 0, marginBottom: 18 }}>
        Fique por dentro do que acontece no futebol feminino
      </p>

      <div className="news-wrap">
        {/* ===== Coluna ESQUERDA (card destaque) ===== */}
        <div className="news-left">
          <article className="news-card">
            <div style={{ height: 290, overflow: "hidden" }}>
              <img
                src={heroDestaque}
                alt="Cruzeiro — goleia, segue invicto e garante liderança"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div style={{ padding: 16 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                <span className="news-chip">Destaque</span>
                <span className="news-date">07 de junho, 2025</span>
              </div>

              <h3 className="news-title" style={{ fontSize: 28 }}>
                Cruzeiro goleia, segue invicto e garante liderança no Brasileirão feminino
              </h3>
              <p className="news-desc">
                O Cruzeiro confirmou sua superioridade no Brasileiro Feminino com uma goleada por 5 a 1
                sobre o 3B da Amazônia neste sábado (7), em Contagem. A vitória assegura matematicamente
                a liderança da primeira fase, com duas rodadas de antecedência.
              </p>

              <div style={{ textAlign: "right", marginTop: 10 }}>
                <a href="#/noticias/cruzeiro-goleia" className="news-link">Ler mais →</a>
              </div>
            </div>
          </article>
        </div>

        {/* ===== Coluna DIREITA (2 cards empilhados) ===== */}
        <div className="news-right">
          {/* Card 1 — Juventude (com objectPosition pra não cortar a cabeça) */}
          <article className="news-card">
            <div style={{ height: 150, overflow: "hidden" }}>
              <img
                src={imgRight1}
                alt="Juventude conquista vitória importante no Brasileiro Feminino"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 18%",
                  display: "block",
                }}
              />
            </div>

            <div style={{ padding: 12 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                <span className="news-chip">Copa do Brasil</span>
                <span className="news-date">06 de junho, 2025</span>
              </div>

              <h4 className="news-title" style={{ marginTop: 4, marginBottom: 6 }}>
                Juventude conquista vitória importante no Brasileiro Feminino
              </h4>
              <p className="news-desc" style={{ marginBottom: 8 }}>
                Esmeraldas superaram o Sport e abriram distância da zona de rebaixamento…
              </p>

              <div style={{ textAlign: "right" }}>
                <a href="#/noticias/juventude" className="news-link">Ler mais →</a>
              </div>
            </div>
          </article>

          {/* Card 2 — Estatísticas (AGORA com feminino.jpg) */}
          <article className="news-card">
            <div style={{ height: 150, overflow: "hidden" }}>
              <img
                src={imgRight2}
                alt="Números do futebol feminino brasileiro impressionam"
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </div>

            <div style={{ padding: 12 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 6 }}>
                <span className="news-chip news-chip--violet">Estatísticas</span>
                <span className="news-date">09 de junho, 2025</span>
              </div>

              <h4 className="news-title" style={{ marginTop: 4, marginBottom: 6 }}>
                Números do futebol feminino brasileiro impressionam
              </h4>
              <p className="news-desc" style={{ marginBottom: 8 }}>
                Crescimento de 40% no público dos estádios marca temporada histórica…
              </p>

              <div style={{ textAlign: "right" }}>
                <a href="#/noticias/estatisticas-2025" className="news-link">Ler mais →</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
