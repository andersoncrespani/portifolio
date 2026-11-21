import { perfil } from "../components/data";

export default function Header() {
  return (
    <header className="header">
      <a href="#topo" className="header-nome">
        {perfil.nome}
      </a>
      <nav className="header-nav">
        <a href="#sobre">sobre</a>
        <a href="#habilidades">habilidades</a>
        <a href="#projetos">projetos</a>
        <a href="#contato">contato</a>
      </nav>
    </header>
  );
}
