export const perfil = {
  nome: "Anderson Crespani",
  funcao: "Desenvolvedor Full Stack",
  frase: "contruindo soluções.",
  email: "andersoncrespani2007@gmail.com",
  github: "https://github.com/andersoncrespani",
  linkedin:
    "https://www.linkedin.com/in/anderson-crespani-da-silva/",
};

export const sobre = [
  "sou um desenvolvedor full stack gosto de entender a lógica por trás de cada coisa que construo, não só fazer funcionar.",
  "Hoje divido o tempo entre interfaces em React e a parte de servidor com Python e Java, sempre com banco de dados PostgreSQL no meio.",
  "Aprendo fazendo: cada projeto abaixo nasceu de uma dúvida que eu quis resolver na prática.",
];

export const linguagens = [
  { nome: "Java", icone: "java" },
  { nome: "JavaScript", icone: "js" },
  { nome: "Python", icone: "py" },
  { nome: "SQL", icone: "postgres" },
  { nome: "HTML", icone: "html" },
  { nome: "CSS", icone: "css" },
  
];

export const ferramentas = [
  { nome: "React", icone: "react" },
  { nome: "PostgreSQL", icone: "postgres" },
  { nome: "Git", icone: "git" },
  { nome: "GitHub", icone: "github" },
  { nome: "VS Code", icone: "vscode" },
  { nome: "IntelliJ", icone: "idea" },
  { nome: "Docker", icone: "docker" },
  { nome: "nodejs", icone: "nodejs" }
];

export const projetos = [
  {
    id: "01",
    titulo: "Informa Saúde",
    descricao:
      "Plataforma de jornadas de saúde para idosos, com login, cadastro, dashboard e um mapa das redes públicas de atendimento.",
    tecnologias: ["React", "JavaScript"],
    link: "https://github.com/jaq1997/informa-saude-frontend",
  },
  
  {
    id: "03",
    titulo: "Recuperação de senha em modais",
    descricao:
      "Fluxo de três etapas (e-mail, código e nova senha) feito para o informa Saúde.",
    tecnologias: ["React", "CSS"],
    link: "https://github.com/jaq1997/informa-saude-frontend",
  },
  {
    id: "04",
    titulo: "Login com FastAPI",
    descricao:
      "Autenticação com login local e Google, senha com bcrypt, tokens JWT e tabela de usuários no PostgreSQL esta logica de autenticação foi usada no informa Saúde.",
    tecnologias: ["Python", "FastAPI", "PostgreSQL"],
    link: "https://github.com/andersoncrespani/backend-python",
  },
];
