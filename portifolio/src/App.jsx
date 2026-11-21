import Header from "./components/header";
import Hero from "./components/hero";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import "./app.css";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Sobre />
        <Habilidades />
        <Projetos />
        <Contato />
      </main>
    </>
  );
}
