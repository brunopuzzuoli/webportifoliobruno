import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const DivHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: white;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  overflow-y: hidden;

.container {
  --glow-color: rgba(255, 255, 255, 0.9);
  --glow-spread-color: rgba(255, 255, 255, 0.3);
  --enhanced-glow-color: rgba(255, 255, 255, 0.5);
  border-radius: 1em;
  border: solid #fff 2px;
  box-shadow:
    0 0 0.6em 0.1em var(--glow-color),
    0 0 1.5em 0.1em var(--glow-spread-color),
    inset 0 0 0.2em 0.1em var(--glow-color);
  text-shadow: 0 0 0.1em var(--glow-color);
  max-width: 400px;
  background: linear-gradient(
    0deg,
    rgb(49, 49, 49) 0%,
    rgb(39, 39, 39) 100%
  );
  padding: 25px 35px;
  margin: 20px;
}

.heading {
  text-align: center;
  font-size: 20px;
  color: #fff;
}

form.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input,
.text_msg {
  width: 100%;
  background: #1f1f1f;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  margin-top: 10px;
  border-inline: 2px solid transparent;
  font-size: 14px;
  color: #fff;
  resize: none;
}


.cssbuttons-io-button {
  background: #242424;
  color: white;
  font-family: inherit;
  padding-left: 1.2em;
  font-size: 17px;
  font-weight: 500;
  border-radius: 0.9em;
  border: solid 1px #fff;
  letter-spacing: 0.05em;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  height: 2.8em;
  width: 50%;
  margin: 0% 25% 0% 25%;
  padding-right: 3.3em;
  cursor: pointer;

}

.cssbuttons-io-button .icon {
  background: white;
  margin-left: 1em;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.2em;
  width: 2.2em;
  border-radius: 0.7em;
  right: 0.3em;
  transition: all 0.3s;
}

.cssbuttons-io-button:hover .icon {
  width: calc(100% - 0.6em);
}

.cssbuttons-io-button .icon svg {
  width: 1.1em;
  transition: transform 0.3s;
  color: #000;
}

.cssbuttons-io-button:hover .icon svg {
  transform: translateX(0.1em);
}

.cssbuttons-io-button:active .icon {
  transform: scale(0.95);
}


.contate-me {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  min-width: 300px;
  margin-bottom: 5%;
}

h2 {
  text-align: center;
  justify-content: center;
  margin-bottom: 5%;
  color: white;
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
      <div id="contato" className="contate-me">
        <h2>Interessado? Me mande um Email</h2>
        <div className="container">
          <div className="heading">Formulário de Contato</div>
          <form ref={form} onSubmit={sendEmail} className="form">
            <input
              type="text"
              name="user_name"
              placeholder="Nome..."
              required
              className="input"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="input"
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Digite aqui a mensagem..."
              required
              className="text_msg"
            />

            <button type="submit" class="cssbuttons-io-button">
              Enviar
              <div class="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
          </form>
        </div>
      </div>
    </DivHead>
  );
}