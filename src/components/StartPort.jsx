import styled from "styled-components";

const DivHead = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 10%;
overflow: hidden;

.introduction{
  color: white;
  font-family: 'Poppins';
  font-size: 38px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.introduction_text{
  color: white;
  justify-content: center;
  align-items: center;
  width: 50%;
}

.introduction_foto{ 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: auto 0;
}


.introduction_text_descricao{
  font-size: 23px;
}

.glowbutton {
  --glow-color: rgba(255, 255, 255, 0.9);
  --glow-spread-color: rgba(255, 255, 255, 0.3);
  --enhanced-glow-color: rgba(255, 255, 255, 0.5);
  --btn-color: rgb(40, 40, 40); /* Fundo escuro para o branco destacar */

  border: 0.2em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 16px;
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
  width: 100%;
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

}

.links{
  margin-top: 3%;
  display: flex;
  justify-content: left;
  align-items: center
}

a{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.img_git{
  width: 35%;
  padding: 5%;
}
/* Monitores médios/grandes */
@media (max-width: 1550px) {
  .introduction{
    flex-direction: column;
  }
  .introduction_foto{
    width: 90%;
  }
  .introduction_text{
    width: 90%;
  }
}

/* Notebooks pequenos */
@media (max-width: 1024px) {
  .glowbutton {
  font-size: 1.9vw;
  }
}

/* Tablets */
@media (max-width: 768px) {
  .introduction_text_ola{
    font-size: 4.2vw;
  }
  .introduction_text_descricao {
    font-size: 3.4vw;
  }

}
/* Celulares pequenos */
@media (max-width: 425px) {

}

`;

export function StartPort() {
  return (
      <DivHead>
        <div className="introduction">
          <div className="introduction_text">
            <div className="introduction_text_ola">
              OLá, sou  <strong>Bruno Puzzuoli Souza</strong><br /><strong>DEV</strong> e <strong>WEB developer</strong>
            </div>
            <div className="introduction_text_descricao">
              Sou Programador com foco em criar sites e aplicações modernas, rápidas e responsivas. Gosto de transformar ideias em interfaces funcionais, sempre buscando um equilíbrio entre design, performance e código limpo.
              Confira meus projetos e veja como posso ajudar a levar sua presença digital para o próximo nível.
            </div>
            <div className="links">
              <button
                className="glowbutton"
                onClick={() => {
                  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contate-me
              </button>
              <a href="https://github.com/brunopuzzuoli" target="_blank"><img className="img_git" src="images/github.png" alt="a" /></a> 
              <a href="https://www.linkedin.com/in/bruno-puzzuoli-a06456375" target="_blank"><img className="img_git" src="images/linkedin_icon.png" alt="a" /></a>
            </div>
          </div>
          <div className="introduction_foto">
            <img className="w-100"  src="images/Group 2.png" alt="foto" />
          </div>
        </div>
      </DivHead>
  );
}