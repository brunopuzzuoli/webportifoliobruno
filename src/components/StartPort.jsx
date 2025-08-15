import styled from "styled-components";

const DivHead = styled.div`
  .introduction {
    padding: 8%;
    color: white;
    font-family: 'Poppins';
    font-size: 38px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow-x: hidden;
    gap: 2rem;
  }

  .introduction_foto {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  .introduction_foto img {
    max-width: 100%;
    height: auto;
  }

  .introduction_text_descricao {
    margin-top: 10%;
    font-size: 23px;
    line-height: 1.4;
  }

  .glowbutton {
    --glow-color: rgba(255, 255, 255, 0.9);
    --glow-spread-color: rgba(255, 255, 255, 0.3);
    --enhanced-glow-color: rgba(255, 255, 255, 0.5);
    --btn-color: rgb(40, 40, 40);

    border: 0.2em solid var(--glow-color);
    padding: 1em 3em;
    color: var(--glow-color);
    font-size: 15px;
    font-weight: bold;
    background-color: var(--btn-color);
    border-radius: 1em;
    outline: none;
    box-shadow:
      0 0 0.6em 0.1em var(--glow-color),
      0 0 1.5em 0.4em var(--glow-spread-color),
      inset 0 0 0.5em 0.1em var(--glow-color);
    text-shadow: 0 0 0.4em var(--glow-color);
    position: relative;
    transition: all 0.3s;
  }

  .glowbutton::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 90%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(0.9em);
    opacity: 0.3;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  .glowbutton:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow:
      0 0 0.6em 0.1em var(--glow-color),
      0 0 2em 0.5em var(--glow-spread-color),
      inset 0 0 0.6em 0.1em var(--glow-color);
  }

  .glowbutton:active {
    box-shadow:
      0 0 0.3em 0.1em var(--glow-color),
      0 0 1.2em 0.4em var(--glow-spread-color),
      inset 0 0 0.3em 0.1em var(--glow-color);
  }

  .links {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .img_git {
    width: 18%;
    min-width: 40px;
    padding: 5%;
  }

  /* Tablets grandes e monitores médios */
  @media (max-width: 1200px) {
    .introduction {
      flex-direction: column;
      text-align: center;
      font-size: 32px;
    }

    .introduction_text_descricao {
      font-size: 20px;
      margin-top: 5%;
    }

    .img_git {
      width: 14%;
    }
  }

  /* Tablets pequenos e celulares grandes */
  @media (max-width: 768px) {
    .introduction {
      font-size: 26px;
      padding: 5%;
    }

    .introduction_text_descricao {
      font-size: 18px;
    }

    .glowbutton {
      padding: 0.8em 2em;
      font-size: 14px;
    }

    .img_git {
      width: 12%;
    }
  }

  /* Celulares médios e pequenos */
  @media (max-width: 480px) {
    .introduction {
      font-size: 22px;
      gap: 1.5rem;
    }

    .introduction_text_descricao {
      font-size: 16px;
    }

    .glowbutton {
      width: 100%;
      font-size: 14px;
      padding: 0.8em;
    }

    .links {
      flex-direction: column;
    }

    .img_git {
      width: 20%;
    }
  }
`;

export function StartPort() {
  return (
    <DivHead>
      <div className="row introduction">
        <div className="col-5 introduction_text">
          <div className="introduction_text_ola">
            OLá, sou <strong>Bruno Puzzuoli Souza</strong>
            <br />
            <strong>DEV</strong> e <strong>WEB developer</strong>
          </div>
          <div className="introduction_text_descricao">
            Sou Programador com foco em criar sites e aplicações modernas, rápidas e responsivas. Gosto de transformar ideias em interfaces funcionais, sempre buscando um equilíbrio entre design, performance e código limpo.
            Confira meus projetos e veja como posso ajudar a levar sua presença digital para o próximo nível.
          </div>
          <div className="links">
            <button
              className="glowbutton"
              onClick={() =>
                document.getElementById("contato").scrollIntoView({ behavior: "smooth" })
              }
            >
              Contate-me
            </button>
            <img className="img_git" src="images/github.png" alt="a" />
            <img className="img_git" src="images/linkedin_icon.png" alt="a" />
          </div>
        </div>
        <div className="col-4 introduction_foto">
          <img src="images/Group 2.png" alt="foto" />
        </div>
      </div>
    </DivHead>
  );
}