import { projetos } from "./data";

export default function Projetos() {
  return (
    <section id="projetos" className="secao">
      <h2 className="secao-titulo">
        <span>03</span> projetos
      </h2>
      <ul className="projetos">
        {projetos.map((p) => (
          <li key={p.id} className="projeto">
            <span className="projeto-id">{p.id}</span>
            <div className="projeto-corpo">
              <h3>{p.titulo}</h3>
              <p>{p.descricao}</p>
              <p className="projeto-tec">{p.tecnologias.join(" · ")}</p>
            </div>
            <a href={p.link} className="projeto-link">
              ver →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
