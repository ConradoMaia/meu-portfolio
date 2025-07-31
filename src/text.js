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
      paragraph: "Oi! Sou o Conrado Maia Heckler, desenvolvedor de software com interesse especial em criar aplicações web e mobile que resolvem problemas de forma prática. Atualmente, curso Ciência da Computação na Unisinos e trabalho como desenvolvedor C# na ALTUS Sistemas de Automação. Gosto de aprender coisas novas, enfrentar desafios e encontrar soluções eficientes no dia a dia do desenvolvimento.",
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
            "Desenvolvi e mantive o programa desktop MasterTool em C#, com foco em novas funcionalidades, correções de bugs e documentação técnica.",
            "Implementei pipelines de CI/CD com GitLab, promovendo automação e eficiência no fluxo de entrega.",
            "Liderei estratégias de refatoração arquitetural visando maior escalabilidade e modularidade do sistema.",
            "Realizei otimizações de performance para garantir confiabilidade e alta disponibilidade da aplicação."
          ]
        },
        {
          role: "Product Designer (R&D)",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2022 - 2023",
          tasks: [
            "Contribuí para a integração contínua e a criação de testes automatizados do MasterTool.",
            "Implementei e mantive protocolos industriais de comunicação (MODBUS, EtherNet/IP, PROFINET, EtherCAT).",
            "Realizei a integração da aplicação desktop com a API da CodeSys Automation Platform.",
            "Orientei a equipe na implementação do Jenkins como parte da melhoria dos processos DevOps."
          ]
        },
        {
          role: "Estagiário em Desenvolvimento de Software .NET",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2021 - 2022",
          tasks: [
            "Participei do programa Impulsionando Talentos, colaborando no desenvolvimento da ferramenta MasterTool.",
            "Implementei novas funcionalidades, corrigi bugs e ofereci suporte no desenvolvimento de projetos internos."
          ]
        }
      ]
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
          title: "Aplicativo Gamificado para Desenvolvimento Cognitivo (TCC)",
          year: "2024/25",
          description: "Projeto finalizado como Trabalho de Conclusão de Curso (TCC). Desenvolvi um aplicativo mobile gamificado focado no desenvolvimento cognitivo infantil, com conteúdo de dessensibilização voltado à terapia de exposição.",
          awards: []
        },
        {
          title: "SIIP - Sistema Inteligente de Identificação de Pragas",
          year: "2020/21",
          description: "Desenvolvi um sistema autônomo de reconhecimento de doenças em alface usando Visão Computacional e Inteligência Artificial.",
          awards: [
            "Medalha de Ouro na INTERNATIONAL SCIENCE AND INVENTION FAIR (ISIF) 2021",
            "Primeiro lugar em 'Ciência da Computação' na MOSTRATEC 2020",
            "Participação na FEBRACE 2021"
          ]
        },
        {
          title: "Your Skin Assistant AI",
          year: "2020",
          description: "Criei uma aplicação de IA para análise de pele e recomendação de produtos personalizados, premiada com 2º lugar na competição Startup Garage Tecnopuc.",
          awards: []
        },
        {
          title: "Projeto 'Impulsionando Talentos'",
          year: "2021",
          description: "Participei do programa de formação interna da ALTUS, colaborando no desenvolvimento da IDE MasterTool com foco em automação de processos de engenharia.",
          awards: []
        },
        {
          title: "Desafio de Empreendedorismo e Soluções Inovadoras",
          year: "2019",
          description: "Participei de desafio promovido pela Fundação Liberato, propondo soluções inovadoras para problemas reais do setor industrial.",
          awards: []
        },
        {
          title: "Uso da Planta Crotalária no Combate à Dengue",
          year: "2016",
          description: "Desenvolvi projeto de iniciação científica focado na utilização da planta Crotalária no combate ao mosquito da dengue, premiado com 1º lugar geral na FEICICC.",
          awards: []
        }
      ]
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
        "Scrum Fundamentals Certified (SCRUMstudy, 2020)",
        "Introdução ao JavaScript (Fundação Bradesco, 2020)",
        "Modelagem de Dados (Fundação Bradesco, 2020)",
        "Estratégia de Negócios (Fundação Bradesco, 2020)",
        "Como elaborar um Plano de Negócio (SEBRAE, 2020)",
        "Gestão Financeira (SEBRAE, 2020)",
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
      paragraph: "Hi! I'm Conrado Maia Heckler, a software developer with a special interest in creating practical web and mobile applications that solve real-world problems. I'm currently pursuing a degree in Computer Science at Unisinos and working as a C# developer at ALTUS Sistemas de Automação. I enjoy learning new things, facing challenges, and finding efficient solutions in my daily development work.",
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
            "Developed and maintained the MasterTool desktop program in C#, focusing on new features, bug fixes, and technical documentation.",
            "Implemented CI/CD pipelines with GitLab, promoting automation and efficiency in the delivery workflow.",
            "Led architectural refactoring strategies aimed at greater system scalability and modularity.",
            "Performed performance optimizations to ensure application reliability and high availability."
          ]
        },
        {
          role: "Product Designer (R&D)",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2022 - 2023",
          tasks: [
            "Contributed to the continuous integration and creation of automated tests for MasterTool.",
            "Implemented and maintained industrial communication protocols (MODBUS, EtherNet/IP, PROFINET, EtherCAT).",
            "Integrated the desktop application with the CodeSys Automation Platform API.",
            "Guided the team in implementing Jenkins as part of improving DevOps processes."
          ]
        },
        {
          role: "Intern in .NET Software Development",
          company: "ALTUS SISTEMAS DE AUTOMACAO SA",
          period: "2021 - 2022",
          tasks: [
            "Participated in the 'Driving Talents' program, collaborating on the development of the MasterTool tool.",
            "Implemented new features, fixed bugs, and provided support for internal project development."
          ]
        }
      ]
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
          title: "Gamified App for Cognitive Development (UG Thesis)",
          year: "2024/25",
          description: "Completed as a final undergraduate project. I developed a gamified mobile app focused on children's cognitive development, with desensitization content geared towards exposure therapy.",
          awards: []
        },
        {
          title: "SIIP - Intelligent Pest Identification System",
          year: "2020/21",
          description: "Developed an autonomous system for recognizing diseases in lettuce using Computer Vision and Artificial Intelligence.",
          awards: [
            "Gold Medal at the INTERNATIONAL SCIENCE AND INVENTION FAIR (ISIF) 2021",
            "First place in 'Computer Science' at MOSTRATEC 2020",
            "Participation in FEBRACE 2021"
          ]
        },
        {
          title: "Your Skin Assistant AI",
          year: "2020",
          description: "Created an AI application for skin analysis and personalized product recommendations, awarded 2nd place in the Startup Garage Tecnopuc competition.",
          awards: []
        },
        {
          title: "'Driving Talents' Project",
          year: "2021",
          description: "Participated in ALTUS's internal training program, collaborating on the development of the MasterTool IDE with a focus on automating engineering processes.",
          awards: []
        },
        {
          title: "Entrepreneurship and Innovative Solutions Challenge",
          year: "2019",
          description: "Participated in a challenge promoted by the Liberato Foundation, proposing innovative solutions to real problems in the industrial sector.",
          awards: []
        },
        {
          title: "Use of the Crotalaria Plant in Combating Dengue",
          year: "2016",
          description: "Developed a scientific initiation project focused on using the Crotalaria plant to combat the dengue mosquito, awarded 1st place overall at FEICICC.",
          awards: []
        }
      ]
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
        "Scrum Fundamentals Certified (SCRUMstudy, 2020)",
        "Introduction to JavaScript (Fundação Bradesco, 2020)",
        "Data Modeling (Fundação Bradesco, 2020)",
        "Business Strategy (Fundação Bradesco, 2020)",
        "How to Create a Business Plan (SEBRAE, 2020)",
        "Financial Management (SEBRAE, 2020)",
      ],
    },
    footer: {
      text: "Developed by Conrado Maia Heckler",
    },
  },
};