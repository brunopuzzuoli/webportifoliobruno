import { useEffect, useRef } from "react";
import { Conhecimento } from "../components/Conhecimento";
import { ConquistasPort } from "../components/ConquistasPort";
import { StartPort } from "../components/StartPort";
import { Contato } from "../components/Contato";


export function PrincipalPort() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.4}
    );

    refs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={(el) => (refs.current[0] = el)} className="fade-in">
        <StartPort />
      </div>

      <div ref={(el) => (refs.current[1] = el)} className="fade-in">
        <ConquistasPort />
      </div>

      <div ref={(el) => (refs.current[2] = el)} className="fade-in">
        <Conhecimento />
      </div>

      <div ref={(el) => (refs.current[3] = el)} className="fade-in">
        <Contato />
      </div>
    </>
  );
}
