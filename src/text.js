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
      searchPlaceholder: "Pesquisar habilidade...",
      sortLabel: "Ordenar por:",
      sortOptions: {
        levelDesc: "Nível (maior-menor)",
        levelAsc: "Nível (menor-maior)",
        nameAsc: "Nome (A-Z)",
        nameDesc: "Nome (Z-A)",
      },
      filters: ["Todos", "Linguagens", "Backend & Desktop", "Frontend & Mobile", "IA & Dados", "DevOps", "Ferramentas & Outros"],
      list: [
        // Linguagens
        { name: "C#", level: 100, category: "Linguagens" },
        { name: "Java", level: 50, category: "Linguagens" },
        { name: "Python", level: 80, category: "Linguagens" },
        { name: "Dart", level: 30, category: "Linguagens" },
        { name: "JavaScript", level: 65, category: "Linguagens" },
        { name: "TypeScript", level: 65, category: "Linguagens" },
        { name: "SQL", level: 90, category: "Linguagens" },
        { name: "Bash / Shell Script", level: 95, category: "Linguagens" },
        { name: "Structured Text (ST)", level: 90, category: "Linguagens" },
        // Backend & Desktop
        { name: ".NET", level: 100, category: "Backend & Desktop" },
        { name: "REST API", level: 90, category: "Backend & Desktop" },
        { name: "Arquitetura de Microsserviços", level: 60, category: "Backend & Desktop" },
        { name: "WPF", level: 50, category: "Backend & Desktop" },
        { name: "Windows Forms", level: 85, category: "Backend & Desktop" },
        { name: "Unity", level: 60, category: "Backend & Desktop" },
        { name: "Inno Setup", level: 100, category: "Backend & Desktop" },
        { name: "MSBuild", level: 100, category: "Backend & Desktop" },
        { name: "NUnit", level: 80, category: "Backend & Desktop" },
        // Frontend & Mobile
        { name: "React", level: 75, category: "Frontend & Mobile" },
        { name: "Flutter", level: 60, category: "Frontend & Mobile" },
        { name: "Android Studio", level: 60, category: "Frontend & Mobile" },
        { name: "HTML & CSS", level: 80, category: "Frontend & Mobile" },
        // IA & Dados
        { name: "Machine Learning", level: 70, category: "IA & Dados" },
        { name: "Deep Learning", level: 70, category: "IA & Dados" },
        { name: "TensorFlow", level: 70, category: "IA & Dados" },
        { name: "Pandas / NumPy", level: 70, category: "IA & Dados" },
        { name: "MySQL", level: 90, category: "IA & Dados" },
        { name: "SQLite", level: 90, category: "IA & Dados" },
        { name: "Firebase / Firestore", level: 80, category: "IA & Dados" },
        // DevOps
        { name: "GitLab", level: 90, category: "DevOps" },
        { name: "Pipelines de CI/CD", level: 85, category: "DevOps" },
        { name: "Docker", level: 65, category: "DevOps" },
        { name: "Kubernetes", level: 50, category: "DevOps" },
        { name: "Jenkins", level: 50, category: "DevOps" },
        { name: "AWS (EC2, S3, Lambda)", level: 50, category: "DevOps" },
        { name: "IAM e Permissões (AWS)", level: 30, category: "DevOps" },
        { name: "Terraform (Básico)", level: 20, category: "DevOps" },
        // Ferramentas & Outros
        { name: "GIT", level: 100, category: "Ferramentas & Outros" },
        { name: "Bugzilla", level: 100, category: "Ferramentas & Outros" },
        { name: "Markdown / LaTeX", level: 85, category: "Ferramentas & Outros" },
        { name: "JSON / XML / YAML", level: 100, category: "Ferramentas & Outros" },
        { name: "Visual Studio", level: 80, category: "Ferramentas & Outros" },
        { name: "SCRUM / Metodologias Ágeis", level: 80, category: "Ferramentas & Outros" }
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
      paragraph: "Hello! I'm Conrado Maia Heckler, a software developer passionate about creating desktop and mobile applications. I am currently pursuing a degree in Computer Science at Unisinos and working as a C# Software Developer at ALTUS Sistemas de Automação SA. I love learning new technologies and tackling challenging projects.",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    experience: {
      title: "Work Experience",
      jobs: [
        {
          role: "C# Software Developer (R&D)",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2023 - Present",
          tasks: [
            "Contributed to the development of the \"MasterTool\" desktop program in C#, focusing on implementing new features, bug fixing, and documentation creation.",
            "Architected software refactoring strategies to improve code maintainability and scalability.",
            "Drove continuous performance enhancements, ensuring high availability and reliability of services.",
            "Built CI/CD pipelines with GitLab.",
          ],
        },
        {
          role: "Product Designer (R&D)",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2022 - 2023",
          tasks: [
            "Contributed to continuous integration and automated testing for the \"Master Tool\".",
            "Developed and maintained communication protocols between PLCs (MODBUS, EtherNet/IP, PROFINET, EtherCAT).",
            "Integrated the desktop application with the CodeSys Automation Platform API.",
          ],
        },
        {
          role: "Intern in .NET Software Development",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2021 - 2022",
          tasks: [
            "Participated in the \"Driving Talents\" program, contributing to the development of the \"Master Tool\".",
            "Assisted in implementing new features, resolving bugs, and supporting project development.",
          ],
        },
      ],
    },
    skills: {
      title: "Technical Skills",
      searchPlaceholder: "Search skill...",
      sortLabel: "Sort by:",
      sortOptions: {
        levelDesc: "Level (high-low)",
        levelAsc: "Level (low-high)",
        nameAsc: "Name (A-Z)",
        nameDesc: "Name (Z-A)",
      },
      filters: ["All", "Languages", "Backend & Desktop", "Frontend & Mobile", "AI & Data", "DevOps", "Tools & Others"],
      list: [
        // Languages
        { name: "C#", level: 100, category: "Languages" },
        { name: "Java", level: 50, category: "Languages" },
        { name: "Python", level: 80, category: "Languages" },
        { name: "Dart", level: 30, category: "Languages" },
        { name: "JavaScript", level: 65, category: "Languages" },
        { name: "TypeScript", level: 65, category: "Languages" },
        { name: "SQL", level: 90, category: "Languages" },
        { name: "Bash / Shell Script", level: 95, category: "Languages" },
        { name: "Structured Text (ST)", level: 90, category: "Languages" },
        // Backend & Desktop
        { name: ".NET", level: 100, category: "Backend & Desktop" },
        { name: "REST API", level: 90, category: "Backend & Desktop" },
        { name: "Microservices Architecture", level: 60, category: "Backend & Desktop" },
        { name: "WPF", level: 50, category: "Backend & Desktop" },
        { name: "Windows Forms", level: 85, category: "Backend & Desktop" },
        { name: "Unity", level: 60, category: "Backend & Desktop" },
        { name: "Inno Setup", level: 100, category: "Backend & Desktop" },
        { name: "MSBuild", level: 100, category: "Backend & Desktop" },
        { name: "NUnit", level: 80, category: "Backend & Desktop" },
        // Frontend & Mobile
        { name: "React", level: 75, category: "Frontend & Mobile" },
        { name: "Flutter", level: 60, category: "Frontend & Mobile" },
        { name: "Android Studio", level: 60, category: "Frontend & Mobile" },
        { name: "HTML & CSS", level: 80, category: "Frontend & Mobile" },
        // AI & Data
        { name: "Machine Learning", level: 70, category: "AI & Data" },
        { name: "Deep Learning", level: 70, category: "AI & Data" },
        { name: "TensorFlow", level: 70, category: "AI & Data" },
        { name: "Pandas / NumPy", level: 70, category: "AI & Data" },
        { name: "MySQL", level: 90, category: "AI & Data" },
        { name: "SQLite", level: 90, category: "AI & Data" },
        { name: "Firebase / Firestore", level: 80, category: "AI & Data" },
        // DevOps
        { name: "GitLab", level: 90, category: "DevOps" },
        { name: "CI/CD Pipelines", level: 85, category: "DevOps" },
        { name: "Docker", level: 65, category: "DevOps" },
        { name: "Kubernetes", level: 50, category: "DevOps" },
        { name: "Jenkins", level: 50, category: "DevOps" },
        { name: "AWS (EC2, S3, Lambda)", level: 50, category: "DevOps" },
        { name: "IAM & Permissions (AWS)", level: 30, category: "DevOps" },
        { name: "Terraform (Basics)", level: 20, category: "DevOps" },
        // Tools & Others
        { name: "GIT", level: 100, category: "Tools & Others" },
        { name: "Bugzilla", level: 100, category: "Tools & Others" },
        { name: "Markdown / LaTeX", level: 85, category: "Tools & Others" },
        { name: "JSON / XML / YAML", level: 100, category: "Tools & Others" },
        { name: "Visual Studio", level: 80, category: "Tools & Others" },
        { name: "SCRUM / Agile", level: 80, category: "Tools & Others" }
      ]
    },
    projects: {
      title: "Relevant Projects",
      items: [
        {
          title: "UG Thesis: Gamified App for Cognitive Development",
          year: "2024",
          description: "Currently in development, a gamified application focused on children's cognitive development, with desensitization content.",
          awards: []
        },
        {
          title: "SIIP - Intelligent Pest Identification System",
          year: "2020/21",
          description: "A project that performs autonomous identification of diseases in lettuce using Artificial Intelligence.",
          awards: [
            "Gold Medal at the INTERNATIONAL SCIENCE AND INVENTION FAIR (ISIF) 2021",
            "First place in the 'Computer Science' category at MOSTRATEC 2020",
            "Participation in FEBRACE 2021",
          ],
        },
        {
          title: "Your Skin Assistant AI",
          year: "2020",
          description: "An AI project for skin analysis that won second place in the Startup Garage Tecnopuc competition.",
          awards: [],
        },
        {
          title: "'Driving Talents' Project",
          year: "2021",
          description: "Participation in ALTUS's talent development program, contributing to the 'Master Tool' software.",
          awards: [],
        },
        {
          title: "Entrepreneurship and Innovative Solutions Challenge",
          year: "2019",
          description: "Participation in an innovation challenge at Liberato Foundation.",
          awards: [],
        },
        {
          title: "Use of the Crotalaria Plant in Combating Dengue",
          year: "2016",
          description: "A scientific initiation project awarded first place overall at FEICICC.",
          awards: [],
        },
      ],
    },
    education: {
      title: "Education & Courses",
      academicTitle: "Academic Background",
      coursesTitle: "Courses & Certifications",
      academic: [
        {
          degree: "Bachelor of Computer Science",
          institution: "UNISINOS (2022 - In Progress)",
        },
        {
          degree: "Technical Course in Electronics",
          institution: "Liberato Foundation (2017-2021)",
        },
        {
          degree: "English Course",
          institution: "TIMES IDIOMAS (2024 - In Progress)",
        },
      ],
      courses: [
        "Android and iOS Development with Flutter - Create 15 Apps (Udemy, 2024)",
        "ASP.NET CORE MVC (Udemy, 2023-2024)",
        "Deep Learning with Python from A to Z (Udemy, 2022-2023)",
        "Design Patterns with C# (Udemy, 2021)",
        "Fundamentals of Deep Learning for Computer Vision (NVIDIA DLI, 2021)",
        "Professional, Emotional, and Technological Skills (PUCRS ONLINE, 2020)",
        "Business Strategy (Fundação Bradesco, 2020)",
      ],
    },
    footer: {
      text: "Developed by Conrado Maia Heckler",
    },
  },
};
