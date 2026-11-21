import { useState } from "react";
import { perfil } from "../components/data";

export default function Contato() {
  const [copiado, setCopiado] = useState(false);

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(perfil.email);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };

  return (
    <section id="contato" className="secao contato">
      <h2 className="secao-titulo">
        <span>04</span> contato
      </h2>
      <p className="contato-texto">
        Se quiser trocar uma ideia ou falar de algum projeto, é só chamar.
      </p>
      <div className="contato-email-linha">
        <a href={`mailto:${perfil.email}`} className="contato-email">
          {perfil.email}
        </a>
        <button type="button" className="botao-copiar" onClick={copiar}>
          {copiado ? "copiado ✓" : "copiar"}
        </button>
      </div>
      <div className="hero-links">
        <a
          href={perfil.github}
          target="_blank"
          rel="noreferrer"
          className="link-borda"
        >
          github
        </a>
        <a
          href={perfil.linkedin}
          target="_blank"
          rel="noreferrer"
          className="link-borda"
        >
          linkedin
        </a>
      </div>
      <p className="rodape">
        © {new Date().getFullYear()} {perfil.nome}
      </p>
    </section>
  );
}
