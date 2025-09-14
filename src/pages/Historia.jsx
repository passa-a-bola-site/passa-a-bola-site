import React from "react";
import heroBg from "../assets/hero.jpg";
import proibicaoImg from "../assets/proibicao.jpg"; // troque p/ .png se for o seu caso

export default function Historia() {
  const Container = ({ children, style }) => (
    <div className="hist-container" style={style}>{children}</div>
  );

  const Card = ({ children, style }) => (
    <article
      style={{
        background: "#fff",
        border: "1px solid #ececec",
        borderRadius: 16,
        padding: 26,
        boxShadow: "0 10px 28px rgba(0,0,0,.05)",
        ...style,
      }}
    >
      {children}
    </article>
  );

  return (
    <main aria-labelledby="hist-title">
      {/* estilos locais */}
      <style>{`
        .hist-container { width: min(1200px, 92%); margin: 0 auto; }
        .hist-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .hist-timeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .hist-ban-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 24px; align-items: center; }
        @media (max-width: 980px) {
          .hist-grid { grid-template-columns: 1fr; }
          .hist-timeline { grid-template-columns: 1fr; }
          .hist-ban-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO: só o título por cima da imagem */}
      <section
        style={{
          position: "relative",
          minHeight: "44vh",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(123,58,245,0.85) 0%, rgba(123,58,245,0.42) 48%, rgba(250,222,89,0.22) 100%)",
          }}
        />
        <Container
          style={{
            position: "relative",
            color: "#fff",
            textAlign: "center",
            paddingBlock: "clamp(52px, 9vw, 120px)",
          }}
        >
          <h1
            id="hist-title"
            style={{
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: ".6px",
              fontSize: "clamp(34px, 5.6vw, 56px)",
              fontWeight: 800,
              lineHeight: 1,
              textShadow: "0 6px 18px rgba(0,0,0,.25)",
            }}
          >
            Nossa História
          </h1>
          <div
            aria-hidden
            style={{
              width: 120,
              height: 6,
              background: "#FADF63",
              borderRadius: 999,
              margin: "14px auto 0",
              boxShadow: "0 2px 0 rgba(0,0,0,.15)",
            }}
          />
        </Container>
      </section>

      {/* História do Passa a Bola — EMBAIXO da imagem */}
      <Container style={{ paddingBlock: "28px 10px" }}>
        <Card style={{ padding: 28, background: "linear-gradient(0deg,#ffffff, #ffffff), rgba(123,58,245,.03)" }}>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(15px, 2.1vw, 20px)",
              lineHeight: 1.6,
              color: "#374151",
              textAlign: "center",
              maxWidth: 980,
              marginInline: "auto",
            }}
          >
            <strong style={{ color: "#7B3AF5" }}>Passa a Bola</strong> nasceu para contar, organizar e
            celebrar a caminhada do futebol feminino no Brasil — mapeando a história, acompanhando
            campeonatos, registrando times e destacando conquistas para dar visibilidade às jogadoras
            e inspirar novas gerações.
          </p>
        </Card>
      </Container>

      {/* frase de efeito */}
      <Container style={{ paddingBlock: "22px 8px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(22px,3.2vw,34px)",
            fontWeight: 800,
            lineHeight: 1.25,
            margin: 0,
            color: "#111",
          }}
        >
          O futebol feminino é uma história de resistência, paixão e muita bola no pé.
        </h2>
      </Container>

      {/* Primeiros blocos */}
      <Container style={{ paddingBlock: "10px 6px" }}>
        <div className="hist-grid">
          <Card>
            <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 20, color: "#111" }}>
              Os Primeiros Passos
            </h3>
            <p style={{ marginTop: 0, color: "#4b5563", lineHeight: 1.65 }}>
              <strong>Desde</strong> o final do século XIX, as mulheres já batiam bola — há registros
              na Inglaterra desde 1895 e, durante a Primeira Guerra Mundial, partidas
              com estádios cheios.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.65 }}>
              O futebol feminino cresceu em clubes e torneios locais, enfrentando preconceitos e
              regras que tentavam tirá-lo de campo.
            </p>
          </Card>

          <Card>
            <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 20, color: "#111" }}>
              O Baque do Machismo
            </h3>
            <p style={{ marginTop: 0, color: "#4b5563", lineHeight: 1.65 }}>
              <strong>Em 1921</strong>, a Federação Inglesa baniu partidas femininas de seus gramados,
              declarando o jogo “inadequado para mulheres”. A decisão ecoou em outros países e atrasou
              a modalidade.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.65 }}>
              Mesmo assim, a teimosia e o talento das jogadoras mantiveram a chama acesa.
            </p>
          </Card>
        </div>
      </Container>

      {/* Proibição no Brasil — AGORA COM IMAGEM AO LADO */}
      <Container style={{ paddingBlock: "28px 10px" }}>
        <Card style={{ padding: 30 }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "clamp(20px,2.6vw,26px)",
              marginTop: 0,
              marginBottom: 20,
              color: "#111",
            }}
          >
            A Proibição no Brasil (décadas de 1940 a 1979)
          </h3>

          <div className="hist-ban-grid">
            {/* coluna da imagem */}
            <div>
              <figure style={{ margin: 0 }}>
                <img
                  src={proibicaoImg}
                  alt="Recorte histórico sobre a proibição do futebol feminino no Brasil"
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 3",
                    objectFit: "cover",
                    borderRadius: 14,
                    border: "1px solid #eee",
                    display: "block",
                  }}
                />
                <figcaption style={{ fontSize: 13, color: "#6b7280", marginTop: 8, textAlign: "center" }}>
                  Documentos e registros que marcaram o período de proibição.
                </figcaption>
              </figure>
            </div>

            {/* coluna do texto */}
            <div style={{ color: "#4b5563", lineHeight: 1.7 }}>
              <p style={{ marginTop: 0 }}>
                Durante o Estado Novo, normas esportivas classificaram certos esportes como
                “incompatíveis com a natureza feminina”. O futebol entrou nessa lista — na prática,
                <strong> jogos oficiais proibidos, nenhum calendário e zero apoio institucional</strong>.
              </p>
              <p>
                <strong>Em 1979</strong> a restrição foi revogada. Nos <strong>anos 1980</strong>,
                vieram as primeiras regulamentações, competições oficiais e passos para consolidar a
                Seleção Brasileira Feminina — ainda com muita precariedade.
              </p>
              <p style={{ marginBottom: 0 }}>
                Quase quatro décadas de impedimentos deixaram uma defasagem estrutural: menos clubes,
                investimento e oportunidades. Ainda assim, a modalidade resistiu — graças a famílias,
                professoras, clubes de bairro e, principalmente, às próprias jogadoras.
              </p>
            </div>
          </div>
        </Card>
      </Container>

      {/* A Luta Brasileira */}
      <Container style={{ paddingBlock: "16px 8px" }}>
        <Card style={{ padding: 30 }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "clamp(20px,2.6vw,26px)",
              marginTop: 0,
              marginBottom: 16,
              color: "#111",
            }}
          >
            A Luta Brasileira
          </h3>

          <div style={{ maxWidth: 980, margin: "0 auto", color: "#4b5563", lineHeight: 1.7 }}>
            <p style={{ marginTop: 0 }}>
              Com o fim da proibição, o futebol feminino foi ganhando espaço: torneios estaduais,
              competições nacionais embrionárias e convocações da seleção surgiram na década seguinte.
              Era tudo precário — mas era o recomeço.
            </p>
            <p>
              De lá pra cá, a modalidade se profissionalizou, ganhou calendário, ligas, transmissão e
              ídolas como <strong>Marta</strong> e <strong>Formiga</strong>, abrindo caminho para
              novas gerações.
            </p>
            <p style={{ marginBottom: 0, fontWeight: 800, color: "#111" }}>
              Hoje a luta segue: melhores condições de trabalho, base forte e oportunidades por todo o
              Brasil.
            </p>
          </div>
        </Card>
      </Container>

      {/* Linha do tempo */}
      <Container style={{ paddingBlock: "28px 60px" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "clamp(20px,2.6vw,26px)",
            marginTop: 0,
            marginBottom: 18,
            color: "#111",
          }}
        >
          A Luta Continua
        </h3>

        <div className="hist-timeline">
          {[
            {
              ano: "2024",
              titulo: "Hoje, mesmo com desafios, a luta segue",
              texto:
                "Mais visibilidade, mais investimento, mais respeito — e mais meninas sonhando com objetivos que mudam vidas.",
            },
            {
              ano: "2019",
              titulo: "Copa do Mundo na França",
              texto:
                "A Seleção chega às oitavas e inspira uma nova geração, ampliando o interesse e o público do esporte.",
            },
            {
              ano: "2013",
              titulo: "Campeonato Brasileiro Feminino",
              texto:
                "O nacional se consolida e acelera a profissionalização da modalidade no país.",
            },
          ].map((item) => (
            <Card key={item.ano} style={{ padding: 26, textAlign: "center" }}>
              <div
                style={{
                  color: "#F0C419",
                  fontSize: "clamp(34px,4.6vw,44px)",
                  fontWeight: 800,
                  marginBottom: 6,
                }}
              >
                {item.ano}
              </div>
              <h4 style={{ margin: "0 0 8px", fontSize: 18, color: "#111" }}>{item.titulo}</h4>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: 1.6 }}>{item.texto}</p>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}
