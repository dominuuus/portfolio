document.addEventListener("DOMContentLoaded", function () {
  const skillsData = [
    {
      name: "Comunicação interpessoal",
      category: "soft",
      level: 95,
      description:
        "Minha formação em Jornalismo e atuação como monitor me proporcionam excelente comunicação e clareza.",
    },
    {
      name: "HTML/CSS",
      category: "hard",
      level: 80,
      description:
        "Utilizo na construção de interfaces responsivas e bem estruturadas, com atenção à semântica e usabilidade.",
    },
    {
      name: "JavaScript/TypeScript",
      category: "hard",
      level: 60,
      description:
        "Aplico em projetos com React e Angular, com domínio crescente de lógica e boas práticas modernas.",
    },

    {
      name: "Proatividade",
      category: "soft",
      level: 90,
      description:
        "Busco constantemente oportunidades de aprendizado, atuo em monitorias e apoio iniciativas técnicas.",
    },
    {
      name: "Figma",
      category: "hard",
      level: 80,
      description:
        "Realizo prototipação funcional, com foco em acessibilidade, hierarquia visual e fluidez de navegação.",
    },
    {
      name: "Resolução de problemas",
      category: "soft",
      level: 85,
      description:
        "Tenho facilidade em identificar pontos de melhoria e atuar na solução com foco técnico e humano.",
    },

    {
      name: "Angular",
      category: "hard",
      level: 65,
      description:
        "Desenvolvo aplicações modulares com rotas, componentes e integração com API, seguindo padrão organizacional.",
    },

    {
      name: "Metodologias Ágeis",
      category: "hard",
      level: 70,
      description:
        "Tenho conhecimento com aplicação prática em projetos da faculdade com metodologias como scrum e kanban, com experiência em organização de tarefas e entrega iterativa.",
    },

    {
      name: "API Rest",
      category: "hard",
      level: 55,
      description:
        "Tenho boa compreensão da arquitetura REST e realizo integração com back-end em projetos fullstack.",
    },
    {
      name: "React",
      category: "hard",
      level: 70,
      description:
        "Estruturo interfaces dinâmicas com uso de hooks, Context API e foco na experiência do usuário.",
    },
    {
      name: "Aprendizado contínuo",
      category: "soft",
      level: 95,
      description:
        "Estou em constante evolução, com participação ativa em cursos, certificações e experiências práticas.",
    },

    {
      name: "Empatia e escuta ativa",
      category: "soft",
      level: 96,
      description:
        "Tenho sensibilidade no apoio a alunos e colegas, com atenção às necessidades e feedbacks construtivos.",
    },

    {
      name: "Trabalho em equipe",
      category: "soft",
      level: 95,
      description:
        "Atuei em grandes equipes, monitorias e projetos colaborativos, sempre com empatia e cooperação.",
    },
    {
      name: "Spring Boot (Java)",
      category: "hard",
      level: 50,
      description:
        "Crio APIs REST com estrutura MVC, integração com banco de dados e testes com Postman em projetos práticos.",
    },

    {
      name: "SQL (MySQL/PostgreSQL)",
      category: "hard",
      level: 45,
      description:
        "Desenvolvo comandos de manipulação e consulta de dados em projetos acadêmicos com consistência.",
    },
    {
      name: "Power BI",
      category: "hard",
      level: 55,
      description:
        "Crio dashboards e relatórios visuais para representar dados de forma clara e eficiente.",
    },

    {
      name: "Git/GitHub",
      category: "hard",
      level: 90,
      description:
        "Versiono meus projetos com organização, commits claros e colaboração em repositórios públicos.",
    },
    {
      name: "Organização e planejamento",
      category: "soft",
      level: 90,
      description:
        "Estruturei oficinas, coordenei times e conduzo tarefas com foco em qualidade e entrega eficiente.",
    },
  ];

  const listContainer = document.getElementById("skills-list");

  // Lista de progressos dos skills
  skillsData.forEach((skill) => {
    const skillItem = document.createElement("div");
    skillItem.className = `skill-item skill-${skill.category}`;

    skillItem.innerHTML = `
        <div class="skill-info">
          <span>${skill.name}</span>
          <span>${skill.level}%</span>
        </div>
        
        <div class="skill-progress">
          <div class="skill-progress-bar" style="width: ${skill.level}%"></div>
          
        </div>
        <div class="skill-description"> <span>${skill.description}</span> </div>
      `;

    listContainer.appendChild(skillItem);
  });

  
});
