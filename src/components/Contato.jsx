import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const DivHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 40px;
  color: white;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;


form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  border-radius: 10px;
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

label {
  font-size: 16px;
  font-weight: 500;
}

input,
textarea {
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
}

input[type="submit"] {
  background-color: #4cafef;
  color: white;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

input[type="submit"]:hover {
  background-color: #3aa0d8;
}

.text_msg{
  resize: none;
}

.contate-me{
  width: 20%;
  flex-direction: column;
}

h2{
  text-align: center;
  justify-content: center;
  margin-bottom: 10%;
}

.loader {
  --duration: 3s;
  --primary: rgb(56, 56, 56);
  --primary-light: #5c5c5c;
  --primary-rgba: rgba(39, 94, 254, 0);
  width: 200px;
  height: 320px;
  position: relative;
  transform-style: preserve-3d;
}

@media (max-width: 480px) {
  .loader {
    zoom: 0.44;
  }
}

.loader:before, .loader:after {
  --r: 20.5deg;
  content: "";
  width: 320px;
  height: 140px;
  position: absolute;
  right: 32%;
  bottom: -11px;
  background: #0f0f0f;
  transform: translateZ(200px) rotate(var(--r));
  -webkit-animation: mask var(--duration) linear forwards infinite;
  animation: mask var(--duration) linear forwards infinite;
}

.loader:after {
  --r: -20.5deg;
  right: auto;
  left: 32%;
}

.loader .ground {
  position: absolute;
  left: -50px;
  bottom: -120px;
  transform-style: preserve-3d;
  transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
}

.loader .ground div {
  transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  width: 200px;
  height: 200px;
  background: var(--primary);
  background: linear-gradient(45deg, var(--primary) 0%, var(--primary) 50%, var(--primary-light) 50%, var(--primary-light) 100%);
  transform-style: preserve-3d;
  -webkit-animation: ground var(--duration) linear forwards infinite;
  animation: ground var(--duration) linear forwards infinite;
}

.loader .ground div:before, .loader .ground div:after {
  --rx: 90deg;
  --ry: 0deg;
  --x: 44px;
  --y: 162px;
  --z: -50px;
  content: "";
  width: 156px;
  height: 300px;
  opacity: 0;
  background: linear-gradient(var(--primary), var(--primary-rgba));
  position: absolute;
  transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
  -webkit-animation: ground-shine var(--duration) linear forwards infinite;
  animation: ground-shine var(--duration) linear forwards infinite;
}

.loader .ground div:after {
  --rx: 90deg;
  --ry: 90deg;
  --x: 0;
  --y: 177px;
  --z: 150px;
}

.loader .box {
  --x: 0;
  --y: 0;
  position: absolute;
  -webkit-animation: var(--duration) linear forwards infinite;
  animation: var(--duration) linear forwards infinite;
  transform: translate(var(--x), var(--y));
}

.loader .box div {
  background-color: var(--primary);
  width: 48px;
  height: 48px;
  position: relative;
  transform-style: preserve-3d;
  -webkit-animation: var(--duration) ease forwards infinite;
  animation: var(--duration) ease forwards infinite;
  transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
}

.loader .box div:before, .loader .box div:after {
  --rx: 90deg;
  --ry: 0deg;
  --z: 24px;
  --y: -24px;
  --x: 0;
  content: "";
  position: absolute;
  background-color: inherit;
  width: inherit;
  height: inherit;
  transform: rotateX(var(--rx)) rotateY(var(--ry)) translate(var(--x), var(--y)) translateZ(var(--z));
  filter: brightness(var(--b, 1.2));
}

.loader .box div:after {
  --rx: 0deg;
  --ry: 90deg;
  --x: 24px;
  --y: 0;
  --b: 1.4;
}

.loader .box.box0 {
  --x: -220px;
  --y: -120px;
  left: 58px;
  top: 108px;
}

.loader .box.box1 {
  --x: -260px;
  --y: 120px;
  left: 25px;
  top: 120px;
}

.loader .box.box2 {
  --x: 120px;
  --y: -190px;
  left: 58px;
  top: 64px;
}

.loader .box.box3 {
  --x: 280px;
  --y: -40px;
  left: 91px;
  top: 120px;
}

.loader .box.box4 {
  --x: 60px;
  --y: 200px;
  left: 58px;
  top: 132px;
}

.loader .box.box5 {
  --x: -220px;
  --y: -120px;
  left: 25px;
  top: 76px;
}

.loader .box.box6 {
  --x: -260px;
  --y: 120px;
  left: 91px;
  top: 76px;
}

.loader .box.box7 {
  --x: -240px;
  --y: 200px;
  left: 58px;
  top: 87px;
}

.loader .box0 {
  -webkit-animation-name: box-move0;
  animation-name: box-move0;
}

.loader .box0 div {
  -webkit-animation-name: box-scale0;
  animation-name: box-scale0;
}

.loader .box1 {
  -webkit-animation-name: box-move1;
  animation-name: box-move1;
}

.loader .box1 div {
  -webkit-animation-name: box-scale1;
  animation-name: box-scale1;
}

.loader .box2 {
  -webkit-animation-name: box-move2;
  animation-name: box-move2;
}

.loader .box2 div {
  -webkit-animation-name: box-scale2;
  animation-name: box-scale2;
}

.loader .box3 {
  -webkit-animation-name: box-move3;
  animation-name: box-move3;
}

.loader .box3 div {
  -webkit-animation-name: box-scale3;
  animation-name: box-scale3;
}

.loader .box4 {
  -webkit-animation-name: box-move4;
  animation-name: box-move4;
}

.loader .box4 div {
  -webkit-animation-name: box-scale4;
  animation-name: box-scale4;
}

.loader .box5 {
  -webkit-animation-name: box-move5;
  animation-name: box-move5;
}

.loader .box5 div {
  -webkit-animation-name: box-scale5;
  animation-name: box-scale5;
}

.loader .box6 {
  -webkit-animation-name: box-move6;
  animation-name: box-move6;
}

.loader .box6 div {
  -webkit-animation-name: box-scale6;
  animation-name: box-scale6;
}

.loader .box7 {
  -webkit-animation-name: box-move7;
  animation-name: box-move7;
}

.loader .box7 div {
  -webkit-animation-name: box-scale7;
  animation-name: box-scale7;
}

@-webkit-keyframes box-move0 {
  12% {
    transform: translate(var(--x), var(--y));
  }

  25%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move0 {
  12% {
    transform: translate(var(--x), var(--y));
  }

  25%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale0 {
  6% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  14%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale0 {
  6% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  14%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes box-move1 {
  16% {
    transform: translate(var(--x), var(--y));
  }

  29%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move1 {
  16% {
    transform: translate(var(--x), var(--y));
  }

  29%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale1 {
  10% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  18%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale1 {
  10% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  18%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes box-move2 {
  20% {
    transform: translate(var(--x), var(--y));
  }

  33%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move2 {
  20% {
    transform: translate(var(--x), var(--y));
  }

  33%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale2 {
  14% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  22%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale2 {
  14% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  22%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes box-move3 {
  24% {
    transform: translate(var(--x), var(--y));
  }

  37%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move3 {
  24% {
    transform: translate(var(--x), var(--y));
  }

  37%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale3 {
  18% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  26%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale3 {
  18% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  26%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes box-move4 {
  28% {
    transform: translate(var(--x), var(--y));
  }

  41%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move4 {
  28% {
    transform: translate(var(--x), var(--y));
  }

  41%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale4 {
  22% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  30%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale4 {
  22% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  30%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes box-move5 {
  32% {
    transform: translate(var(--x), var(--y));
  }

  45%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move5 {
  32% {
    transform: translate(var(--x), var(--y));
  }

  45%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale5 {
  26% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  34%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale5 {
  26% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  34%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes box-move6 {
  36% {
    transform: translate(var(--x), var(--y));
  }

  49%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move6 {
  36% {
    transform: translate(var(--x), var(--y));
  }

  49%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale6 {
  30% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  38%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale6 {
  30% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  38%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes box-move7 {
  40% {
    transform: translate(var(--x), var(--y));
  }

  53%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@keyframes box-move7 {
  40% {
    transform: translate(var(--x), var(--y));
  }

  53%, 52% {
    transform: translate(0, 0);
  }

  80% {
    transform: translate(0, -32px);
  }

  90%, 100% {
    transform: translate(0, 188px);
  }
}

@-webkit-keyframes box-scale7 {
  34% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  42%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@keyframes box-scale7 {
  34% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(0);
  }

  42%, 100% {
    transform: rotateY(-47deg) rotateX(-15deg) rotateZ(15deg) scale(1);
  }
}

@-webkit-keyframes ground {
  0%, 65% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }

  75%, 90% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1);
  }

  100% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }
}

@keyframes ground {
  0%, 65% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }

  75%, 90% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(1);
  }

  100% {
    transform: rotateX(90deg) rotateY(0deg) translate(-48px, -120px) translateZ(100px) scale(0);
  }
}

@-webkit-keyframes ground-shine {
  0%, 70% {
    opacity: 0;
  }

  75%, 87% {
    opacity: 0.2;
  }

  100% {
    opacity: 0;
  }
}

@keyframes ground-shine {
  0%, 70% {
    opacity: 0;
  }

  75%, 87% {
    opacity: 0.2;
  }

  100% {
    opacity: 0;
  }
}

@-webkit-keyframes mask {
  0%, 65% {
    opacity: 0;
  }

  66%, 100% {
    opacity: 1;
  }
}

@keyframes mask {
  0%, 65% {
    opacity: 0;
  }

  66%, 100% {
    opacity: 1;
  }
}
`;

export function Contato() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3cow5ni", "template_gn8j3o9", form.current, {
        publicKey: "uf4Cyu6hGG0JV4zrr",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <DivHead>

      <div className="loader">
        <div className="box box0">
          <div />
        </div>
        <div className="box box1">
          <div />
        </div>
        <div className="box box2">
          <div />
        </div>
        <div className="box box3">
          <div />
        </div>
        <div className="box box4">
          <div />
        </div>
        <div className="box box5">
          <div />
        </div>
        <div className="box box6">
          <div />
        </div>
        <div className="box box7">
          <div />
        </div>
        <div className="ground">
          <div />
        </div>
      </div>
        <div id="contato" className="contate-me">
          <h2>Interassdo? Me mande um Email</h2>
       <form ref={form} onSubmit={sendEmail}>
          <label>Nome</label>
          <input type="text" name="user_name" placeholder="Nome..." required />

          <label>Email</label>
          <input type="email" className="form-control" name="user_email" placeholder="name@example.com" required/>

          <label>Mensagem</label>
          <textarea name="message" rows="5" className="text_msg" placeholder="Digite aqui a mensagem..." required />

          <input type="submit" value="Enviar" />
        </form>  
        </div>

      <div className="loader">
        <div className="box box0">
          <div />
        </div>
        <div className="box box1">
          <div />
        </div>
        <div className="box box2">
          <div />
        </div>
        <div className="box box3">
          <div />
        </div>
        <div className="box box4">
          <div />
        </div>
        <div className="box box5">
          <div />
        </div>
        <div className="box box6">
          <div />
        </div>
        <div className="box box7">
          <div />
        </div>
        <div className="ground">
          <div />
        </div>
      </div>  
    </DivHead>
  );
}