// src/pages/campeonatos.jsx

import React from 'react';
import './Campeonatos.css'; 

// Importe as imagens dos logos que você salvou no Passo 1
import flamengoLogo from '../assets/Flamengo.png';
import corinthiansLogo from '../assets/Corinthians.png';
import palmeirasLogo from '../assets/Palmeiras.png';
import saoPauloLogo from '../assets/Brasao_do_Sao_Paulo_Futebol_Clube.svg.png';
import gremioLogo from '../assets/Gremio.png';
import internacionalLogo from '../assets/Internacional.png';

function Campeonatos() {
  
  const classificacaoMock = [
    { pos: 1, time: "Flamengo", pts: 21, vit: 7, e: 0, d: 0, sg: 12, pj: 7, logo: flamengoLogo },
    { pos: 2, time: "Corinthians", pts: 18, vit: 6, e: 0, d: 1, sg: 7, pj: 7, logo: corinthiansLogo },
    { pos: 3, time: "Palmeiras", pts: 15, vit: 5, e: 0, d: 2, sg: 5, pj: 7, logo: palmeirasLogo },
    { pos: 4, time: "São Paulo", pts: 12, vit: 4, e: 0, d: 3, sg: -7, pj: 7, logo: saoPauloLogo },
    { pos: 5, time: "Grêmio", pts: 9, vit: 3, e: 0, d: 4, sg: -3, pj: 7, logo: gremioLogo },
    { pos: 6, time: "Internacional", pts: 6, vit: 2, e: 0, d: 5, sg: -4, pj: 7, logo: internacionalLogo },
  ];

  return (
    <div className="campeonatos-page">
      {/* ... código do banner, etc. ... */}
      
      <section className="classificacao-section container">
        <h2>Classificação</h2>
        <table className="classificacao-table">
          <thead>
            {/* ... cabeçalho da tabela ... */}
          </thead>
          <tbody>
            {classificacaoMock.map((item) => (
              <tr key={item.pos}>
                <td>{item.pos}</td>
                <td>
                  <div className="time-info">
                    {/* AQUI ESTÁ A IMAGEM! */}
                    <img src={item.logo} alt={item.time} className="time-logo" />
                    <span className="time-name">{item.time}</span>
                  </div>
                </td>
                <td>{item.pts}</td>
                <td>{item.vit}</td>
                <td>{item.e}</td>
                <td>{item.d}</td>
                <td>{item.sg}</td>
                <td>{item.pj}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* ... restante do código ... */}
      </section>

      {/* ... outras seções ... */}

    </div>
  );
}

export default Campeonatos;