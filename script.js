const cursos = [
  { 
    titulo: "Linguagem de Programação Python - Básico", 
    link: "https://www.ev.org.br/cursos/linguagem-de-programacao-python-basico", 
    area: "tecnologia", 
    nivel: "iniciante",
    imagem: "https://horadecodar.com.br/wp-content/uploads/2023/04/Linguagem-Python-1024x680.jpg"
  },
  { 
    titulo: "Crie um site básico usando JavaScript, CSS e HTML", 
    link: "https://www.ev.org.br/cursos/crie-um-site-simples-usando-html-css-e-javascript", 
    area: "tecnologia", 
    nivel: "iniciante",
    imagem: "https://horadecodar.com.br/wp-content/uploads/2023/08/tags-HTML.jpg"
  },
  { 
    titulo: "Inglês - Iniciante (Módulo 1)", 
    link: "https://www.cursoemvideo.com/curso/curso-de-ingles-para-iniciantes-modulo-1-beginners-gratis-e-completo/", 
    area: "idiomas", 
    nivel: "iniciante",
    imagem: "https://cdn.wizard.com.br/wp-content/uploads/2020/06/03192344/palavras-em-ingles-britanico-e-ingles-americano-wizard.jpg"
  },
    { 
    titulo: "Inglês - Iniciante (Módulo 2)", 
    link: "https://www.cursoemvideo.com/curso/curso-de-ingles-para-iniciantes-modulo-02-beginners-completo/", 
    area: "idiomas", 
    nivel: "iniciante",
    imagem: "https://cdn.wizard.com.br/wp-content/uploads/2020/06/03192344/palavras-em-ingles-britanico-e-ingles-americano-wizard.jpg"
  },
      { 
    titulo: "Inglês - Iniciante (Módulo 3)", 
    link: "https://www.cursoemvideo.com/curso/curso-de-ingles-para-iniciantes-modulo-03-beginners-completo/", 
    area: "idiomas", 
    nivel: "iniciante",
    imagem: "https://cdn.wizard.com.br/wp-content/uploads/2020/06/03192344/palavras-em-ingles-britanico-e-ingles-americano-wizard.jpg"
  },
    { 
    titulo: "Inglês - Iniciante (Módulo 4)", 
    link: "https://www.cursoemvideo.com/curso/curso-de-ingles-para-iniciantes-modulo-02-beginners-completo/", 
    area: "idiomas", 
    nivel: "iniciante",
    imagem: "https://cdn.wizard.com.br/wp-content/uploads/2020/06/03192344/palavras-em-ingles-britanico-e-ingles-americano-wizard.jpg"
  },
  { 
    titulo: "Programação de computadores - JavaScript e a web", 
    link: "https://pt.khanacademy.org/computing/computer-programming", 
    area: "tecnologia", 
    nivel: "basico",
    imagem: "https://codecrush.com.br/static/images/articles/banner-7-sites-js.png"
  },
  { 
    titulo: "Redes de computadores", 
    link: "https://www.cursoemvideo.com/curso/curso-pratico-de-redes-de-computadores-e-internet-20-horas/", 
    area: "tecnologia", 
    nivel: "iniciante",
    imagem: "https://iftm.edu.br/cursos/uberlandiacentro/tecnico-concomitante/redes-de-computadores/?arq=a64fd46ed3f4c00178e6a58b67c3c8e3.jpg"
  },
 { 
    titulo: "Git e Github", 
    link: "https://www.cursoemvideo.com/curso/curso-de-git-e-github/", 
    area: "tecnologia", 
    nivel: "iniciante",
    imagem: "https://hermes.dio.me/articles/cover/d2489f96-d56f-4b82-bc7f-84fbc9fb1368.jpg"
  },
];

const areaSelect = document.getElementById("area");
const nivelSelect = document.getElementById("nivel");
const destaquesSection = document.getElementById("destaques");
const applyBtn = document.getElementById("applyFilters");
const clearBtn = document.getElementById("clearFilters");
const sidebar = document.getElementById("sidebar");

// Mostrar cursos
function mostrarCursos(filtrados = cursos.slice(0, 4)) {
  destaquesSection.innerHTML = "";
  filtrados.forEach(curso => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${curso.imagem}" alt="Imagem do curso ${curso.titulo}">
      <h3>${curso.titulo}</h3>
      <p>Área: ${curso.area} | Nível: ${curso.nivel}</p>
      <a href="${curso.link}" target="_blank" rel="noopener">Acessar curso</a>
    `;
    destaquesSection.appendChild(card);
  });
}

// Aplica os filtros
applyBtn.addEventListener("click", () => {
  const area = areaSelect.value;
  const nivel = nivelSelect.value;

  const filtrados = cursos.filter(curso => 
    (area === "todas" || curso.area === area) &&
    (nivel === "todos" || curso.nivel === nivel)
  );

  mostrarCursos(filtrados);
  sidebar.classList.remove("open"); // fecha o menu
});

// Limpa filtros
clearBtn.addEventListener("click", () => {
  areaSelect.value = "todas";
  nivelSelect.value = "todos";
  mostrarCursos(cursos.slice(0, 4)); // volta para destaques
  sidebar.classList.remove("open");
});

// Inicial
mostrarCursos();

/* Controle do menu */
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

/* Categoria clicável */
document.querySelectorAll(".cat-card").forEach(cat => {
  cat.addEventListener("click", () => {
    const area = cat.dataset.area;
    const filtrados = cursos.filter(curso => curso.area === area);
    mostrarCursos(filtrados);
  });
});
