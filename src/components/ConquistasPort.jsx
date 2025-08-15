import { useState } from "react";
import styled from "styled-components";
import { CardProjeto } from "./CardProjeto"; // Importa o card separado
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CardFormacao } from "./CardFormacao";

const DivHead = styled.div`
  padding: 0;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 32px;
  overflow-x: hidden;
section {
  width: 85%;
}

.item {
  border-bottom: 2px solid #fff;
}

.summary {
  padding: 30px 0;
  cursor: pointer;
  position: relative;
  user-select: none;
}

.summary::after {
  content: "▸";
  position: absolute;
  right: 0;
  transition: transform .25s ease;
}

.item.open .summary::after {
  transform: rotate(90deg);
}

.content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .35s ease;
}

.item.open .content {
  grid-template-rows: 1fr;
}

.inner {
  overflow: hidden;
}

.inner p {
  margin: 0;
  padding: 12px 0 16px 0;
  opacity: 0;
  transition: opacity .35s ease;
}

.item.open .inner p {
  opacity: 1;
}

.projetos{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3%;
}

`;

function AccordionItem({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`item ${open ? "open" : ""}`}>
      <div className="summary" onClick={() => setOpen(o => !o)}>
        {title}
      </div>
      <div className="content">
        <div className="inner">
          {children}
        </div>
      </div>
    </div>
  );
}


export function ConquistasPort() {
  return (
    <DivHead>
      <section>
        <AccordionItem title="Formações">
          <CardFormacao />
        </AccordionItem>

        <AccordionItem title="Projetos">
          <div className="projetos">
            <CardProjeto />
          </div>
        </AccordionItem>

        <AccordionItem title="Experiência">
        </AccordionItem>
      </section>
    </DivHead>
  );
}