import React from "react";
import heroBg from "../assets/hero.jpg";
import proibicaoImg from "../assets/proibicao.jpg"; // troque p/ .png se necessário

export default function Historia() {
  // helpers com className p/ estilizar por CSS local
  const Container = ({ children, style, className = "" }) => (
    <div className={`hist-container ${className}`} style={style}>{children}</div>
  );

  const Card = ({ children, style, className = "" }) => (
    <article className={`hist-card ${className}`} style={style}>{children}</article>
  );

  return (
    <main aria-labelledby="hist-title" className="hist-theme">
      {/* estilos locais / tema */}
      <style>{`
        .hist-theme {
          --ink: #111;
          --muted: #4b5563;
          --bg: #ffffff;
          --soft: #f8f7ff;
          --purple: #7B3AF5;
          --yellow: #FADF63;
          --cyan: #3DB3FF;
          --pink: #FF7AB6;
          --warning: #FF6B6B;
          --rose-tint: rgba(255, 107, 107, .08);
          --purple-tint: rgba(123,58,245,.08);
          --yellow-tint: rgba(250,223,99,.16);
          --cyan-tint: rgba(61,179,255,.12);
        }

        .hist-container { width: min(1200px, 92%); margin: 0 auto; }

        .hist-card {
          background: var(--bg);
          border: 1px solid #eceaf6;
          border-radius: 16px;
          padding: 26px;
          box-shadow: 0 10px 28px rgba(0,0,0,.05);
        }

        .hist-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
        .hist-timeline { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .hist-ban-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 22px; align-items: center; }

        /* acentos coloridos */
        .accent-cyan   { border-top: 6px solid var(--cyan);   background: linear-gradient(0deg,var(--bg),var(--bg)), var(--cyan-tint); }
        .accent-pink   { border-top: 6px solid var(--pink);   background: linear-gradient(0deg,var(--bg),var(--bg)), rgba(255,122,182,.12); }
        .accent-passabola {
          background:
            linear-gradient(180deg, rgba(123,58,245,.10), rgba(250,223,99,.10)),
            var(--bg);
          border: 1px solid rgba(123,58,245,.22);
        }
        .accent-ban {
          background: linear-gradient(180deg, var(--rose-tint), rgba(255,255,255,.7));
          border: 1px solid rgba(255,107,107,.25);
        }
        .accent-ban .ban-title { color: var(--warning); }

        /* timeline cards com barra colorida */
        .tl { position: relative; overflow: hidden; }
        .tl::before{
          content:"";
          position:absolute; inset:0 0 auto 0; height:6px;
          background: linear-gradient(90deg, var(--purple), var(--yellow), var(--cyan));
        }

        /* chips/filés */
        .divider-pill {
          width: 140px; height: 8px; border-radius: 999px;
          margin: 14px auto 0;
          background: linear-gradient(90deg, var(--yellow), var(--purple));
          box-shadow: 0 2px 0 rgba(0,0,0,.12);
        }

        @media (max-width: 1080px) {
          .hist-timeline { grid-template-columns: 1fr; }
        }
        @media (max-width: 980px) {
          .hist-grid { grid-template-columns: 1fr; }
          .hist-ban-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* HERO: título por cima da imagem */}
      <section
        style={{
          position: "relative",
          minHeight: "44vh",
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        {/* overlay com mais cor */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(123,58,245,0.88) 0%, rgba(123,58,245,0.46) 48%, rgba(250,222,89,0.26) 100%)",
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
          <div className="divider-pill" aria-hidden />
        </Container>
      </section>

      {/* História do Passa a Bola (embaixo do banner) */}
      <Container style={{ paddingBlock: "28px 10px" }}>
        <Card className="accent-passabola" style={{ padding: 28 }}>
          <p
            style={{
              margin: 0,
              fontSize: "clamp(15px, 2.1vw, 20px)",
              lineHeight: 1.6,
              color: "#2b2b2b",
              textAlign: "center",
              maxWidth: 980,
              marginInline: "auto",
            }}
          >
            <strong style={{ color: "var(--purple)" }}>Passa a Bola</strong> nasceu para contar,
            organizar e celebrar a caminhada do futebol feminino no Brasil — mapeando a história,
            acompanhando campeonatos, registrando times e destacando conquistas para dar visibilidade
            às jogadoras e inspirar novas gerações.
          </p>
        </Card>
      </Container>

      {/* frase de efeito */}
      <Container style={{ paddingBlock: "22px 8px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(22px,3.2vw,34px)",
            fontWeight: 900,
            lineHeight: 1.25,
            margin: 0,
            color: "var(--ink)",
          }}
        >
          O futebol feminino é uma história de resistência, paixão e muita bola no pé.
        </h2>
      </Container>

      {/* Primeiros blocos com acentos coloridos */}
      <Container style={{ paddingBlock: "12px 10px" }}>
        <div className="hist-grid">
          <Card className="accent-cyan">
            <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 20, color: "var(--ink)" }}>
              Os Primeiros Passos
            </h3>
            <p style={{ marginTop: 0, color: "var(--muted)", lineHeight: 1.65 }}>
              <strong>Desde</strong> o final do século XIX, as mulheres já batiam bola — há registros
              na Inglaterra desde 1895 e, durante a Primeira Guerra Mundial, partidas com estádios cheios.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              O futebol feminino cresceu em clubes e torneios locais, enfrentando preconceitos e
              regras que tentavam tirá-lo de campo.
            </p>
          </Card>

          <Card className="accent-pink">
            <h3 style={{ marginTop: 0, marginBottom: 10, fontSize: 20, color: "var(--ink)" }}>
              O Baque do Machismo
            </h3>
            <p style={{ marginTop: 0, color: "var(--muted)", lineHeight: 1.65 }}>
              <strong>Em 1921</strong>, a Federação Inglesa baniu partidas femininas de seus
              gramados, declarando o jogo “inadequado para mulheres”. A decisão ecoou em outros
              países e atrasou a modalidade.
            </p>
            <p style={{ color: "var(--muted)", lineHeight: 1.65 }}>
              Mesmo assim, a teimosia e o talento das jogadoras mantiveram a chama acesa.
            </p>
          </Card>
        </div>
      </Container>

      {/* Proibição no Brasil — com imagem ao lado e visual “warning” suave */}
      <Container style={{ paddingBlock: "28px 12px" }}>
        <Card className="accent-ban" style={{ padding: 30 }}>
          <h3
            className="ban-title"
            style={{
              textAlign: "center",
              fontSize: "clamp(20px,2.6vw,26px)",
              marginTop: 0,
              marginBottom: 20,
              fontWeight: 900,
            }}
          >
            A Proibição no Brasil (décadas de 1940 a 1979)
          </h3>

          <div className="hist-ban-grid">
            {/* IMAGEM */}
            <figure style={{ margin: 0 }}>
              <img
                src={proibicaoImg}
                alt="Registros do período de proibição do futebol feminino no Brasil"
                style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: 14,
                  border: "1px solid rgba(255,107,107,.35)",
                  display: "block",
                }}
              />
              <figcaption style={{ fontSize: 13, color: "#6b7280", marginTop: 8, textAlign: "center" }}>
                Documentos e registros que marcaram o período de proibição.
              </figcaption>
            </figure>

            {/* TEXTO */}
            <div style={{ color: "var(--muted)", lineHeight: 1.7 }}>
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

      {/* A Luta Brasileira (tinta roxa suave) */}
      <Container style={{ paddingBlock: "18px 10px" }}>
        <Card style={{ padding: 30, background: "linear-gradient(0deg,var(--bg),var(--bg)), var(--purple-tint)" }}>
          <h3
            style={{
              textAlign: "center",
              fontSize: "clamp(20px,2.6vw,26px)",
              marginTop: 0,
              marginBottom: 16,
              color: "var(--ink)",
            }}
          >
            A Luta Brasileira
          </h3>

          <div style={{ maxWidth: 980, margin: "0 auto", color: "var(--muted)", lineHeight: 1.7 }}>
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
            <p style={{ marginBottom: 0, fontWeight: 800, color: "var(--ink)" }}>
              Hoje a luta segue: melhores condições de trabalho, base forte e oportunidades por todo o Brasil.
            </p>
          </div>
        </Card>
      </Container>

      {/* Linha do tempo com barra multicolor e fundos suaves */}
      <Container style={{ paddingBlock: "28px 60px" }}>
        <h3
          style={{
            textAlign: "center",
            fontSize: "clamp(20px,2.6vw,26px)",
            marginTop: 0,
            marginBottom: 18,
            color: "var(--ink)",
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
              bg: "linear-gradient(0deg,var(--bg),var(--bg)), var(--yellow-tint)",
            },
            {
              ano: "2019",
              titulo: "Copa do Mundo na França",
              texto:
                "A Seleção chega às oitavas e inspira uma nova geração, ampliando o interesse e o público do esporte.",
              bg: "linear-gradient(0deg,var(--bg),var(--bg)), var(--cyan-tint)",
            },
            {
              ano: "2013",
              titulo: "Campeonato Brasileiro Feminino",
              texto:
                "O nacional se consolida e acelera a profissionalização da modalidade no país.",
              bg: "linear-gradient(0deg,var(--bg),var(--bg)), rgba(123,58,245,.10)",
            },
          ].map((item) => (
            <Card key={item.ano} className="tl" style={{ padding: 26, textAlign: "center", background: item.bg }}>
              <div
                style={{
                  color: "var(--purple)",
                  fontSize: "clamp(34px,4.6vw,44px)",
                  fontWeight: 800,
                  marginBottom: 6,
                }}
              >
                {item.ano}
              </div>
              <h4 style={{ margin: "0 0 8px", fontSize: 18, color: "var(--ink)" }}>{item.titulo}</h4>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.6 }}>{item.texto}</p>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  );
}
