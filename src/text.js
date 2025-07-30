export const textContent = {
  pt: {
    header: {
      nav: {
        about: "Sobre",
        experience: "Experiência",
        skills: "Habilidades",
        projects: "Projetos",
        education: "Educação",
      },
    },
    about: {
      title: "Sobre Mim",
      paragraph: "Olá! Sou Conrado Maia Heckler, um desenvolvedor de software apaixonado pela criação de aplicações desktop e mobile. Atualmente, estou cursando Ciência da Computação na Unisinos e trabalhando como Desenvolvedor de Software C# na ALTUS Sistemas de Automação SA. Adoro aprender novas tecnologias e enfrentar projetos desafiadores.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    experience: {
      title: "Experiência Profissional",
      jobs: [
        {
          role: "C# Software Developer (R&D)",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2023 - Presente",
          tasks: [
            "Contribuição no desenvolvimento do programa desktop \"MasterTool\" em C#, focando na implementação de novas features, correção de bugs e criação de documentação.",
            "Arquitetura de estratégias para refatoração de software para melhorar a manutenibilidade e escalabilidade do código.",
            "Otimização contínua de performance, garantindo alta disponibilidade e confiabilidade dos serviços.",
            "Construção de pipelines de CI/CD com GitLab.",
          ],
        },
        {
          role: "Product Designer (R&D)",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2022 - 2023",
          tasks: [
            "Contribuição para a integração contínua e testes automatizados do \"Master Tool\".",
            "Desenvolvimento e manutenção de protocolos de comunicação entre PLCs (MODBUS, EtherNet/IP, PROFINET, EtherCAT).",
            "Integração da aplicação desktop com a API da CodeSys Automation Platform.",
          ],
        },
        {
          role: "Estagiário em Desenvolvimento de Software .NET",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2021 - 2022",
          tasks: [
            "Participação no programa \"Impulsionando Talentos\", contribuindo para o desenvolvimento do \"Master Tool\".",
            "Auxílio na implementação de novas funcionalidades, resolução de bugs e suporte ao desenvolvimento de projetos.",
          ],
        },
      ],
    },
    skills: {
      title: "Habilidades Técnicas",
      filters: ["Todos", "Backend & Desktop", "Frontend & Mobile", "IA & Dados", "DevOps & Outros"],
      list: [
        // Backend & Desktop
        { name: ".NET / C#", level: 95, category: "Backend & Desktop" },
        { name: "Java", level: 75, category: "Backend & Desktop" },
        { name: "Python", level: 80, category: "Backend & Desktop" },
        { name: "REST API", level: 90, category: "Backend & Desktop" },
        { name: "Microservices", level: 70, category: "Backend & Desktop" },
        { name: "Unity", level: 65, category: "Backend & Desktop" },
        { name: "WPF", level: 90, category: "Backend & Desktop" },
        { name: "Windows Forms", level: 85, category: "Backend & Desktop" },
        { name: "NUnit", level: 80, category: "Backend & Desktop" },
        { name: "Inno Setup", level: 85, category: "Backend & Desktop" },
        { name: "MSBuild", level: 70, category: "Backend & Desktop" },
        // Frontend & Mobile
        { name: "React", level: 75, category: "Frontend & Mobile" },
        { name: "JavaScript", level: 80, category: "Frontend & Mobile" },
        { name: "Flutter / Dart", level: 70, category: "Frontend & Mobile" },
        { name: "Android Studio", level: 65, category: "Frontend & Mobile" },
        // IA & Dados
        { name: "Machine Learning", level: 75, category: "IA & Dados" },
        { name: "Deep Learning", level: 70, category: "IA & Dados" },
        { name: "TensorFlow", level: 70, category: "IA & Dados" },
        { name: "MySQL", level: 85, category: "IA & Dados" },
        { name: "SQLite", level: 80, category: "IA & Dados" },
        // DevOps & Outros
        { name: "GitLab", level: 90, category: "DevOps & Outros" },
        { name: "Docker", level: 65, category: "DevOps & Outros" },
        { name: "Kubernetes", level: 60, category: "DevOps & Outros" },
        { name: "Jenkins", level: 60, category: "DevOps & Outros" },
        { name: "AWS", level: 50, category: "DevOps & Outros" },
        { name: "Bash / Shell Script", level: 75, category: "DevOps & Outros" },
        { name: "Markdown / Latex", level: 85, category: "DevOps & Outros" },
        { name: "JSON / XML / YAML", level: 95, category: "DevOps & Outros" },
      ]
    },
    projects: {
      title: "Projetos Relevantes",
      items: [
        {
          title: "TCC: Aplicação Gamificada para Desenvolvimento Cognitivo",
          year: "2024",
          description: "Atualmente em desenvolvimento, uma aplicação gamificada focada no desenvolvimento cognitivo infantil, com conteúdo de dessensibilização.",
          awards: []
        },
        {
          title: "SIIP - Sistema Inteligente de Identificação de Pragas",
          year: "2020/21",
          description: "Projeto que realiza a identificação autônoma de doenças em alface através de Inteligência Artificial.",
          awards: [
            "Medalha de Ouro na INTERNATIONAL SCIENCE AND INVENTION FAIR (ISIF) 2021",
            "Primeiro lugar em 'Ciência da Computação' na MOSTRATEC 2020",
            "Participação na FEBRACE 2021",
          ],
        },
        {
          title: "Your Skin Assistant AI",
          year: "2020",
          description: "Projeto de IA para análise de pele que conquistou o segundo lugar na competição Startup Garage Tecnopuc.",
          awards: [],
        },
        {
          title: "Projeto 'Impulsionando Talentos'",
          year: "2021",
          description: "Participação no programa de desenvolvimento de talentos da ALTUS, contribuindo para a ferramenta 'Master Tool'.",
          awards: [],
        },
        {
          title: "Desafio de Empreendedorismo e Soluções Inovadoras",
          year: "2019",
          description: "Participação em desafio de inovação na Fundação Liberato.",
          awards: [],
        },
        {
          title: "Uso da Planta Crotalária no Combate à Dengue",
          year: "2016",
          description: "Projeto de iniciação científica premiado em primeiro lugar geral na FEICICC.",
          awards: [],
        },
      ],
    },
    education: {
      title: "Educação e Cursos",
      academicTitle: "Formação Acadêmica",
      coursesTitle: "Cursos e Certificações",
      academic: [
        {
          degree: "Bacharelado em Ciência da Computação",
          institution: "UNISINOS (2022 - Em Andamento)",
        },
        {
          degree: "Curso Técnico em Eletrônica",
          institution: "Fundação Liberato (2017-2021)",
        },
        {
          degree: "Curso de Inglês",
          institution: "TIMES IDIOMAS (2024 - Em Andamento)",
        },
      ],
      courses: [
        "Desenvolvimento Android e iOS com Flutter - Create 15 Apps (Udemy, 2024)",
        "ASP.NET CORE MVC (Udemy, 2023-2024)",
        "Deep Learning com Python de A a Z (Udemy, 2022-2023)",
        "Design Patterns com C# (Udemy, 2021)",
        "Fundamentals of Deep Learning for Computer Vision (NVIDIA DLI, 2021)",
        "Professional, Emotional, and Technological Skills (PUCRS ONLINE, 2020)",
        "Estratégia Empresarial (Fundação Bradesco, 2020)",
      ],
    },
    footer: {
      text: "Desenvolvido por Conrado Maia Heckler",
    },
  },
  en: {
    header: {
      nav: {
        about: "About",
        experience: "Experience",
        skills: "Skills",
        projects: "Projects",
        education: "Education",
      },
    },
    about: {
      title: "About Me",
      paragraph: "Hello! I'm Conrado Maia Heckler, a software developer passionate about creating desktop and mobile applications. I am currently studying Computer Science at Unisinos and working as a C# Software Developer at ALTUS Sistemas de Automação SA. I love learning new technologies and taking on challenging projects.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  }
};