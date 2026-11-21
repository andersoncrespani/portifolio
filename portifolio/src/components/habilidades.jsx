import { linguagens, ferramentas } from "../components/data";

function Grupo({ titulo, itens }) {
  return (
    <div className="grupo">
      <h3>{titulo}</h3>
      <ul className="icones">
        {itens.map((item) => (
          <li key={item.nome}>
            <img
              src={`https://skillicons.dev/icons?i=${item.icone}&theme=dark`}
              alt=""
              width="40"
              height="40"
            />
            <span>{item.nome}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Habilidades() {
  return (
    <section id="habilidades" className="secao">
      <h2 className="secao-titulo">
        <span>02</span> habilidades
      </h2>
      <Grupo titulo="Linguagens" itens={linguagens} />
      <Grupo titulo="Ferramentas" itens={ferramentas} />
    </section>
  );
}
