import { sobre } from "../components/data";

export default function Sobre() {
  return (
    <section id="sobre" className="secao">
      <h2 className="secao-titulo">
        <span>01</span> sobre
      </h2>
      <div className="sobre-texto">
        {sobre.map((paragrafo) => (
          <p key={paragrafo}>{paragrafo}</p>
        ))}
      </div>
    </section>
  );
}
