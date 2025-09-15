import React, { useEffect, useState } from "react";
import "./Inscricoes.css";

function loadFromStorage() {
  try {
    return JSON.parse(localStorage.getItem("inscricoes") || "[]");
  } catch {
    return [];
  }
}

export default function Inscricoes() {
  const [inscricoes, setInscricoes] = useState([]);

  useEffect(() => {
    // Carrega ao montar
    setInscricoes(loadFromStorage());

    // Também atualiza caso outra aba altere localStorage (opcional)
    const onStorage = (e) => {
      if (e.key === "inscricoes") setInscricoes(loadFromStorage());
    };
    window.addEventListener("storage", onStorage);

    // Caso queira atualizar ao voltar por hashchange (apenas por segurança)
    const onHash = () => setInscricoes(loadFromStorage());
    window.addEventListener("hashchange", onHash);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return (
    <div className="inscricoes-page">
      <section className="inscricoes-hero">
        <h1>Inscrições</h1>
        <p>
          Faça parte da história do futebol feminino brasileiro. Inscreva-se
          agora!
        </p>
        <button
          className="btn-primary"
          onClick={() => (window.location.hash = "/inscricoes/formulario")}
        >
          Fazer Inscrição
        </button>
      </section>

      <section className="inscricoes-lista">
        <h2>Inscrições Realizadas ({inscricoes.length})</h2>
        <p style={{ color: "#6b7280", marginTop: 6 }}>
          Lista de todas as inscrições em ordem de chegada
        </p>

        {inscricoes.length === 0 ? (
          <div style={{ marginTop: 18 }}>
            Nenhuma inscrição realizada ainda. Seja a primeira!
          </div>
        ) : (
          <div style={{ marginTop: 18 }}>
            {inscricoes
              .slice()
              .reverse()
              .map((insc) => (
                <div key={insc.id} className="inscricao-card">
                  <div className="inscricao-header">
                    <strong>
                      #{insc.id} - {insc.nome}
                    </strong>
                    <small>{insc.dataHora}</small>
                  </div>

                  <div className="inscricao-grid">
                    <div>
                      <p>
                        <b>Email:</b> {insc.email}
                      </p>
                      <p>
                        <b>Posição:</b> {insc.posicao || "—"}
                      </p>
                      <p>
                        <b>Observações:</b> {insc.observacoes || "—"}
                      </p>
                    </div>

                    <div>
                      <p>
                        <b>Telefone:</b> {insc.telefone || "—"}
                      </p>
                      <p>
                        <b>Experiência:</b> {insc.experiencia || "—"}
                      </p>
                      <p>
                        <b>Time:</b> {insc.time || "—"}
                      </p>
                      <p>
                        <b>Data de Nascimento:</b> {insc.nascimento || "—"}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </section>
    </div>
  );
}
