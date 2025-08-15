import React from 'react';
import styled from "styled-components";

const DivHead = styled.div`
    padding: 0;
    color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    font-size: 32px;
    
.card-projeto {
    flex: 0 0 50%;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 12px;
    border: #111 solid 2px;
    box-shadow: 
        0 10px 10px rgba(41, 41, 41, 0.4),   
        0 0 15px rgba(151, 151, 151, 0.05), 
        0 0 15px rgba(255, 255, 255, 0.1);  
    background: linear-gradient(170deg, rgba(26, 26, 26, 0.623) 0%, rgb(31, 31, 31) 100%);
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 30%;
    max-height: auto;
    margin: 1%;
    transition: 0.5s;
}

.card-projeto:hover {
  transform: scale(1.2); /* aumenta 10% ao passar o mouse */
  z-index: 10; /* garante que fique acima das outras divs */
}

.img_certificado {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
`;

export function CardFormacao() {
  return (
    <DivHead>
        <div className='card-projeto'>
            <img className='img_certificado' src="images/santa_certi.png" alt="" />
        </div>
        <div className='card-projeto'>
            <img className='img_certificado' src="images/inovacps_certi.png" alt="" />
        </div>
        <div className='card-projeto'>
            <img className='img_certificado' src="images/piva_certi.png" alt="" />
        </div>
        <div className='card-projeto'>
            <img className='img_certificado' src="images/devfest_certi.png" alt="" />
        </div>
    </DivHead>
  );
}