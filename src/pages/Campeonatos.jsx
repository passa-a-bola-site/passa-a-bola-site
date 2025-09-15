import React from "react";

// ===== IMPORTS (de src/pages -> ../assets) =====
import Flamengo         from "../assets/Flamengo.png";
import Corinthians      from "../assets/Corinthians.png";
import Palmeiras        from "../assets/Palmeiras.png";
import SaoPaulo         from "../assets/Brasao_do_Sao_Paulo_Futebol_Clube.svg.png";
import Gremio           from "../assets/Gremio.png";
import Internacional    from "../assets/Internacional.png";

import Cruzeiro         from "../assets/Cruzeiro.png";
import Ferroviaria      from "../assets/Ferroviaria.png";

import Botafogo         from "../assets/Botafogo.png";
import TunaLuso         from "../assets/TunaLuso.png";
import Coritiba         from "../assets/Coritiba.png";
import RolimDeMoura     from "../assets/RolimDeMoura.png";
import Santos           from "../assets/Santos.png";
import PerolasNegras    from "../assets/PerolasNegras.png";
import PindaSP          from "../assets/PindaSP.png";
import DoceMel          from "../assets/DoceMel.png";

// logos pequenos dos chips de título
import BrasileiraoFeminino from "../assets/BrasileiraoFeminino.png";
import CopaBrasilLogo       from "../assets/CopaBrasil.png";

// fallback
import Generic from "../assets/logo.png";

// Escudo com fallback automático
function Crest({ src, alt, sm = false }) {
  return (
    <span className={`crest ${sm ? "crest--sm" : ""}`}>
      <img
        src={src || Generic}
        alt={alt}
        onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = Generic; }}
      />
    </span>
  );
}

export default function Campeonatos() {
  const classificacaoMock = [
    { pos: 1, time: "Cruzeiro",    pts: 35, vit: 10, e: 2,  d: 0, sg: 13, pj: 13, logo: Cruzeiro },
    { pos: 2, time: "Corinthians", pts: 27, vit: 8,  e: 3,  d: 2, sg: 10, pj: 13, logo: Corinthians },
    { pos: 3, time: "São Paulo",   pts: 25, vit: 7,  e: 4,  d: 2, sg: 10, pj: 13, logo: SaoPaulo },
    { pos: 4, time: "Ferroviária", pts: 24, vit: 7,  e: 3,  d: 3, sg: 17, pj: 12, logo: Ferroviaria },
    { pos: 5, time: "Flamengo",    pts: 24, vit: 7,  e: 3,  d: 3, sg: 15, pj: 13, logo: Flamengo },
    { pos: 6, time: "Palmeiras",   pts: 20, vit: 6,  e: 2,  d: 5, sg: 10, pj: 13, logo: Palmeiras },
  ];

  const copaDoBrasil = [
    { data: "09/06", hora: "15:00", casa: "Doce Mel",   casaLogo: DoceMel,      fora: "Pinda-SP",       foraLogo: PindaSP,       estadio: "Waldomirão" },
    { data: "10/06", hora: "10:00", casa: "Botafogo",   casaLogo: Botafogo,     fora: "Tuna Luso",      foraLogo: TunaLuso,      estadio: "NILTON SANTOS" },
    { data: "11/06", hora: "15:30", casa: "Coritiba",   casaLogo: Coritiba,     fora: "Rolim de Moura", foraLogo: RolimDeMoura,  estadio: "Ct Bayard Osna" },
    { data: "11/06", hora: "20:00", casa: "Santos",     casaLogo: Santos,       fora: "Pérolas Negras", foraLogo: PerolasNegras, estadio: "VILA BELMIRO" },
  ];

  const resultadosRecentes = [
    { data: "22/05", casa: "Palmeiras",   casaLogo: Palmeiras,    placar: "0x1", fora: "Cruzeiro",   foraLogo: Cruzeiro },
    { data: "26/05", casa: "Ferroviária", casaLogo: Ferroviaria,  placar: "1x0", fora: "São Paulo",  foraLogo: SaoPaulo },
    { data: "26/05", casa: "Corinthians", casaLogo: Corinthians,  placar: "0x1", fora: "Flamengo",   foraLogo: Flamengo },
  ];

  return (
    <div className="campeonatos-page">
      <section className="container">
        <h1 className="section-title">CAMPEONATOS EM ANDAMENTO</h1>

        <div className="camp-boards">
          {/* ESQUERDA — Tabela */}
          <article className="camp-panel">
            <header className="camp-header camp-header--yellow">
              <div className="camp-title-row">
                <span className="camp-chip">
                  <img className="chip-logo chip-logo--br" src={BrasileiraoFeminino} alt="Brasileirão Feminino" />
                  Campeonato Brasileiro de Futebol Feminino A1
                </span>
                <span className="camp-kicker">Rodada 18 • Classificação</span>
              </div>
            </header>

            <div className="camp-body">
              <table className="camp-table">
                <thead>
                  <tr>
                    <th>POS</th>
                    <th>TIME</th>
                    <th>PTS</th>
                    <th>VIT</th>
                    <th>E</th>
                    <th>D</th>
                    <th>SG</th>
                    <th>PJ</th>
                  </tr>
                </thead>
                <tbody>
                  {classificacaoMock.map((t) => (
                    <tr key={t.pos}>
                      <td><span className="pos-badge">{t.pos}</span></td>
                      <td>
                        <div className="time-cell">
                          <Crest src={t.logo} alt={t.time} />
                          <span className="time-name">{t.time}</span>
                        </div>
                      </td>
                      <td className="num">{t.pts}</td>
                      <td className="num">{t.vit}</td>
                      <td className="num">{t.e}</td>
                      <td className="num">{t.d}</td>
                      <td className="num">{t.sg}</td>
                      <td className="num">{t.pj}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="camp-footer">
                <a className="camp-link" href="#tabela">Ver Tabela Completa →</a>
              </div>
            </div>
          </article>

          {/* DIREITA — Copa */}
          <article className="camp-panel">
            <header className="camp-header camp-header--purple">
              <div className="camp-title-row">
                <span className="camp-chip camp-chip--light">
                  <img className="chip-logo chip-logo--copa" src={CopaBrasilLogo} alt="Copa do Brasil Feminina" />
                  Copa do Brasil Feminina
                </span>
                <span className="camp-kicker camp-kicker--light">Quartas de Final • Próximos Jogos</span>
              </div>
            </header>

            <div className="camp-body">
              <ul className="copa-list">
                {copaDoBrasil.map((j, i) => (
                  <li className="copa-row" key={i}>
                    <div className="team team--left">
                      <Crest src={j.casaLogo} alt={j.casa} />
                      <span className="team-name">{j.casa}</span>
                    </div>

                    <div className="when">
                      <div className="date">{j.data}</div>
                      <div className="time">{j.hora}</div>
                      <div className="venue">{j.estadio}</div>
                    </div>

                    <div className="team team--right">
                      <span className="team-name">{j.fora}</span>
                      <Crest src={j.foraLogo} alt={j.fora} />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="camp-footer camp-footer--right">
                <a className="camp-link" href="#chaveamento">Ver Chaveamento Completo →</a>
              </div>
            </div>
          </article>
        </div>

        {/* RESULTADOS — chips */}
        <section className="rr">
          <header className="rr-head">
            <span>⏱️</span><h3>RESULTADOS RECENTES</h3>
          </header>
          <div className="rr-scroll">
            {resultadosRecentes.map((r, i) => (
              <div className="rr-chip" key={i}>
                <span className="rr-date">{r.data}</span>
                <div className="rr-match">
                  <Crest sm src={r.casaLogo} alt={r.casa} />
                  <span className="rr-text">{r.casa} <strong>{r.placar}</strong> {r.fora}</span>
                  <Crest sm src={r.foraLogo} alt={r.fora} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}
