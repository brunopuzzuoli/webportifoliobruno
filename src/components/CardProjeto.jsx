import React from 'react';
import styled from "styled-components";

const DivHead = styled.div`
  padding: 2%;
  color: white;
  display: flex;
  flex-wrap: wrap; /* permite quebrar linha em telas menores */
  justify-content: center; /* centraliza os cards */
  gap: 2%; /* espaçamento entre cards */
  font-size: 2vw;
  overflow-x: hidden;

  .card-projeto{
    border-radius: 12px;
    border: #111111 solid 2px;
    padding: 10px;
    box-shadow: 
        0 4px 8px rgba(41, 41, 41, 0.4),   
        0 0 15px rgba(151, 151, 151, 0.05), 
        0 0 15px rgba(255, 255, 255, 0.1);  
    background: linear-gradient(170deg, rgba(26, 26, 26, 0.623) 0%, rgb(31, 31, 31) 100%);
    position: relative;
    cursor: pointer;
    transition: all .3s;
    width: 30%;
    height: auto;
    border-radius: 20px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  }

  .carousel {
    max-width: 100%;
  }

  .carousel-item img {
    width: 100%;
    height: auto;
    object-fit: contain;
    background: #000;
    overflow: hidden;
  }

  .descricao-projeto{
    font-size: 1rem;
    margin: 10px 0;
    text-align: center;

    p{
      color: gray;
    }
  }

  .button_projeto{
    --white: #fff;
    font-size: 0.9rem;
    width: 70%;
    padding: 0.7em 2em;
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

  /* Media Queries para responsividade */
  @media (max-width: 1024px) {
    .card-projeto {
      margin: 4%;
      width: 45%;
      height: auto;
    }
  }

  @media (max-width: 768px) {
    font-size: 3vw;
    .card-projeto {
      width: 90%;
    }
    .descricao-projeto {
      font-size: 0.9rem;
    }
    .button_projeto {
      width: 80%;
      font-size: 0.85rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 4vw;
    .card-projeto {
      width: 95%;
    }
    .descricao-projeto {
      font-size: 0.8rem;
    }
    .button_projeto {
      width: 90%;
      font-size: 0.8rem;
    }
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

      <div className='card-projeto'>
        <div id="carousel3" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carousel3" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/proj_port_tela1.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/proj_port_tela2.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="images/proj_port_tela3.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carousel3" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carousel3" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className='descricao-projeto'>
          <h2>WebPortfolio</h2>
          <p>Meu portifolio para usos acadêmicos e profissionais.</p>
        </div>
        <button className='button_projeto'>Saiba mais...</button>
      </div>
    </DivHead>
  );
}