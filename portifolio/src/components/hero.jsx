import { useState } from "react";
import { perfil } from "./data";

export default function Hero() {
  const [semFoto, setSemFoto] = useState(false);

  return (
    <section id="topo" className="hero">
      <div className="hero-texto">
        <p className="rotulo">{perfil.funcao}</p>
        <h1>{perfil.nome}</h1>
        <p className="hero-frase">{perfil.frase}</p>
        <div className="hero-links">
          <a href="#projetos" className="botao">
            ver projetos
          </a>
          <a href={perfil.github} className="link-borda" target="_blank" rel="noreferrer">
            github
          </a>
          <a href={perfil.linkedin} className="link-borda2" target="_blank" rel="noreferrer">
            linkedin
          </a>
        </div>
      </div>
      <div className="hero-foto">
        {semFoto ? (
          <span className="foto-vazia">AC</span>
        ) : (
          <img
            src="/fotominha.png"
            alt={perfil.nome}
            onError={() => setSemFoto(true)}
          />
        )}
      </div>
    </section>
  );
}
