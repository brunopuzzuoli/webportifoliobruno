import React from 'react';
import styled from "styled-components";

const DivHead = styled.div`
  padding: 0;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 32px;

.card-projeto{
  border-radius: 12px;
  border: #111111 solid 2px;
  padding: 10px;
  box-shadow: 
      0 4px 8px rgba(41, 41, 41, 0.4),   
      0 0 15px rgba(151, 151, 151, 0.05), 
      0 0 40px rgba(255, 255, 255, 0.1);  
  background: linear-gradient(170deg, rgba(26, 26, 26, 0.623) 0%, rgb(31, 31, 31) 100%);
  position: relative;
  cursor: pointer;
  transition: all .3s;
  width: 30%;
  height: 27vw;
  border-radius: 20px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items:center;
}

.carousel {
  max-width: 100%;
}

.carousel-item img {
  width: 100%;
  object-fit: contain;
  background: #000;
  overflow: hidden;
}

.carousel-control-prev,
.carousel-control-next {
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  filter: invert(1);
}

.carousel-indicators button {
  background-color: #333; 
  border: none;
  opacity: 0.8;
}

.carousel-indicators .active {
  background-color: #555;
}

.descricao-projeto{
  font-size: 1vw;
  p{
      color: gray;
  }
  }

  .button_projeto{
  --white: #fff;
  font-size: 15px;
  width: 60%;
  padding: 0.7em 2.9em;
  letter-spacing: 0.06em;
  position: relative;
  font-family: inherit;
  border-radius: 0.6em;
  overflow: hidden;
  transition: all 0.3s;
  line-height: 1.4em;
  border: 2px solid var(--white);
  background: linear-gradient(to right, rgba(255,255,255,0.1) 1%, transparent 40%, transparent 60%, rgba(255,255,255,0.1) 100%);
  color: var(--white);
  box-shadow: inset 0 0 10px rgba(255,255,255,0.4), 0 0 9px 3px rgba(255,255,255,0.1);
}

.button_projeto:hover {
  color: #fff;
  box-shadow: inset 0 0 10px rgba(255,255,255,0.6), 0 0 9px 3px rgba(255,255,255,0.2);
}

.button_projeto:before {
content: "";
  position: absolute;
  left: -4em;
  width: 4em;
  height: 100%;
  top: 0;
  transition: transform .4s ease-in-out;
  background: linear-gradient(to right, transparent 1%, rgba(255,255,255,0.1) 40%, rgba(255,255,255,0.1) 60%, transparent 100%);
}

.button_projeto:hover:before {
  transform: translateX(15em);
}
`;

export function CardProjeto() {
  return (
    <DivHead>
      <div className='card-projeto'>
        <div id="carousel1" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel1" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/turi_tela_inicio.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/turi_mapa.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/turi_usu.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel1" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel1" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='descricao-projeto'>
          <h2>TuriSantos</h2>
          <p>Um site que tem como objetivo aprimorar o aproveitamento dos pontos turísticos e de interesse na cidade de Santos.</p>
        </div>
        <button className='button_projeto'>Saiba mais...</button>
      </div>

      <div className='card-projeto'>
        <div id="carousel2" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel2" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/inova_tela_inicio.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/inova_projects.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/inova_login.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel2" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel2" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='descricao-projeto'>
          <h2>InovaRede</h2>
          <p>Um site para que alunos do Unisantos possam compartilhar seus projetos e permitir que outros entrem.</p>
        </div>
        <button className='button_projeto'>Saiba mais...</button>
      </div>
    </DivHead>
  );
}