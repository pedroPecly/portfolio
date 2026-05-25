import { defaultLocale, type Locale } from "@/i18n/config";

export type NavItem = {
  label: string;
  href: string;
};

export type HeroContent = {
  heading: string;
  summary: string;
  cv: {
    href: string;
    download: string;
    label: string;
  };
  contactCta: {
    href: string;
    label: string;
  };
  image: {
    src: string;
    alt: string;
  };
};

export type AboutContent = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  paragraphs: string[];
};

export type EducationItem = {
  title: string;
  meta: string;
};

export type EducationContent = {
  kicker: string;
  title: string;
  items: EducationItem[];
};

export type SkillsSectionContent = {
  id: string;
  kicker: string;
  title: string;
  description: string;
};

export type Project = {
  name: string;
  description: string;
  stack: string;
  githubUrl: string;
};

export type ProjectsSectionContent = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  ariaLabel: string;
};

export type ContactLink = {
  label: string;
  href: string;
  display: string;
};

export type ContactDetail = {
  label: string;
  value: string;
  href?: string;
};

export type ContactContent = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  form: {
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    buttonLabel: string;
    buttonLoadingLabel: string;
    note: string;
    turnstileMissingNote: string;
    feedback: {
      requiredFields: string;
      turnstileMissing: string;
      sending: string;
      success: string;
      submitError: string;
      unexpectedError: string;
    };
  };
  links: ContactLink[];
  details: ContactDetail[];
  linkAriaLabel: string;
};

export type FooterContent = {
  copyright: string;
  tagline: string;
};

export type PortfolioContent = {
  meta: {
    title: string;
    description: string;
  };
  page: {
    topId: string;
  };
  profile: {
    name: string;
  };
  navItems: NavItem[];
  header: {
    contactLabel: string;
    languageLabel: string;
    languageAriaLabel: string;
    languageNames: Record<Locale, string>;
  };
  hero: HeroContent;
  about: AboutContent;
  education: EducationContent;
  skillsSection: SkillsSectionContent;
  skills: string[];
  projectsSection: ProjectsSectionContent;
  projects: Project[];
  contact: ContactContent;
  backToTop: {
    label: string;
  };
  footer: FooterContent;
};

const portfolioContent: Record<Locale, PortfolioContent> = {
  pt: {
    meta: {
      title: "Portfolio | Pedro Pecly",
      description: "Portfolio tech.",
    },
    page: {
      topId: "inicio",
    },
    profile: {
      name: "Pedro Henrique Pecly Gomes",
    },
    navItems: [
      { label: "Sobre", href: "#sobre" },
      { label: "Habilidades", href: "#habilidades" },
      { label: "Projetos", href: "#projetos" },
    ],
    header: {
      contactLabel: "Contato",
      languageLabel: "Idioma",
      languageAriaLabel: "Mudar para {language}",
      languageNames: {
        pt: "Portugues",
        en: "Ingles",
      },
    },
    hero: {
      heading: "Pedro Henrique Pecly Gomes.",
      summary:
        "Desenvolvedor Full Stack com foco em ReactJS, JavaScript, Java e C#, com experiencia em suporte tecnico e administracao de sistemas em saude.",
      cv: {
        href: "/cv.pdf",
        download: "Pedro-Henrique-Pecly-Gomes-CV.pdf",
        label: "Baixar CV",
      },
      contactCta: {
        href: "#contato",
        label: "Falar comigo",
      },
      image: {
        src: "/avatar.jpg",
        alt: "Foto de Pedro Henrique Pecly Gomes",
      },
    },
    about: {
      id: "sobre",
      kicker: "Sobre",
      title: "Resumo profissional.",
      description:
        "Experiencia em suporte tecnico, desenvolvimento e automacao de processos.",
      paragraphs: [
        "Profissional em TI com experiencia em suporte tecnico e administracao de sistemas na area da saude de grande porte.",
        "Experiencia pratica em consultas e relatorios em PL/SQL, alem de desenvolvimento full stack com foco em ReactJS.",
      ],
    },
    education: {
      kicker: "Formacao",
      title: "Formacao academica.",
      items: [
        {
          title: "Bacharelado em Sistemas de Informacao",
          meta: "IFF · 2021 - 2026",
        },
        {
          title: "Cursos complementares",
          meta: "PHP · JavaScript · Logica de Programacao · Docker",
        },
      ],
    },
    skillsSection: {
      id: "habilidades",
      kicker: "Habilidades",
      title: "Principais competencias.",
      description:
        "Tecnologias e ferramentas com foco em desenvolvimento full stack.",
    },
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Java",
      "C#",
      "PHP Laravel",
      "MySQL",
      "PL/SQL",
      "Python",
      "React Native (Expo)",
      "Node.js",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Help Desk GLPI",
      "Pacote Office",
    ],
    projectsSection: {
      id: "projetos",
      kicker: "Projetos",
      title: "Projetos e experiencias recentes.",
      description: "Resumo do que ja executei e do que estou desenvolvendo.",
      ctaLabel: "Acessar",
      ariaLabel: "Abrir {name}",
    },
    projects: [
      {
        name: "FitQuestGo",
        description:
          "Projeto de inovacao em saude preventiva com plataforma gamificada e foco em engajamento.",
        stack:
          "React Native (Expo) • TypeScript • Node.js • Prisma • PostgreSQL • REST API",
        githubUrl: "https://github.com/pedroPecly/FiQuestLife",
      },
      {
        name: "Plano de ensino",
        description:
          "Sistema web para criacao, gerenciamento e exportacao de Planos de Ensino por professores de instituicoes de ensino superior",
        stack: "React • TypeScript • Vite • Tailwind CSS • Supabase",
        githubUrl: "https://projeto-plano-ensino.vercel.app/",
      },
      {
        name: "Pedra Papel Tesoura",
        description:
          "Uma aplicacao web interativa que simula uma batalha entre Pedra, Papel e Tesoura, colidem fisicamente e se transformam de acordo com as regras do jogo.",
        stack: "HTML • CSS • JavaScript",
        githubUrl:
          "https://pedra-papel-tesoura-ashy-delta.vercel.app/index.html",
      },
      {
        name: "Autotiss",
        description:
          "Bot desenvolvido para automatizar processos manuais de cadastro de usuarios e vinculacoes de prestadores na plataforma NTISS",
        stack: "Python • Selenium",
        githubUrl: "https://github.com/pedroPecly/autotiss",
      },
      {
        name: "Autovoxis",
        description:
          "Bot de automacao para formatacao e carga de arquivos CSV de materiais no sistema VOXIS.",
        stack: "Python • Selenium",
        githubUrl: "https://github.com/pedroPecly/autovoxis",
      },
      {
        name: "site de niver",
        description: "Site para confirmacao de presenca do meu aniversario",
        stack: "NextJS • TypeScript • Tailwind CSS • Supabase",
        githubUrl: "https://niver-do-pecly.vercel.app/",
      },
    ],
    contact: {
      id: "contato",
      kicker: "Contato",
      title: "Aberto a oportunidades e projetos.",
      description: "Entre em contato para conversar sobre vagas e colaboracoes.",
      form: {
        nameLabel: "Nome",
        emailLabel: "Email",
        messageLabel: "Mensagem",
        namePlaceholder: "Seu nome completo",
        emailPlaceholder: "voce@empresa.com",
        messagePlaceholder: "Conte sobre a vaga ou projeto",
        buttonLabel: "Enviar mensagem",
        buttonLoadingLabel: "Enviando...",
        note: "Envio direto para meu email principal.",
        turnstileMissingNote:
          "Configure NEXT_PUBLIC_TURNSTILE_SITE_KEY para ativar o anti-spam.",
        feedback: {
          requiredFields: "Preencha todos os campos obrigatorios.",
          turnstileMissing: "Confirme o desafio anti-spam.",
          sending: "Enviando mensagem...",
          success: "Mensagem enviada com sucesso. Retornarei em breve.",
          submitError: "Nao foi possivel enviar sua mensagem.",
          unexpectedError: "Erro inesperado. Tente novamente em instantes.",
        },
      },
      links: [
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/pedro-henrique-pecly-gomes-096277308",
          display: "linkedin.com/in/pedro-henrique-pecly-gomes-096277308",
        },
        {
          label: "GitHub",
          href: "https://github.com/pedroPecly",
          display: "github.com/pedroPecly",
        },
      ],
      details: [
        {
          label: "Email",
          value: "pedrohpg23@hotmail.com",
          href: "mailto:pedrohpg23@hotmail.com",
        },
        {
          label: "Telefone",
          value: "(22) 99600-3545",
          href: "tel:+5522996003545",
        },
        {
          label: "Endereco",
          value: "Rua Maria Ortega Arrabal, 291 - Bairro Aeroporto - Itaperuna",
        },
      ],
      linkAriaLabel: "Abrir {label} de {name}",
    },
    backToTop: {
      label: "Voltar ao topo",
    },
    footer: {
      copyright: "© 2026 Pedro Henrique Pecly Gomes.",
      tagline: "Portfolio tech do Pecly.",
    },
  },
  en: {
    meta: {
      title: "Portfolio | Pedro Pecly",
      description: "Tech portfolio.",
    },
    page: {
      topId: "inicio",
    },
    profile: {
      name: "Pedro Henrique Pecly Gomes",
    },
    navItems: [
      { label: "About", href: "#sobre" },
      { label: "Skills", href: "#habilidades" },
      { label: "Projects", href: "#projetos" },
    ],
    header: {
      contactLabel: "Contact",
      languageLabel: "Language",
      languageAriaLabel: "Switch to {language}",
      languageNames: {
        pt: "Portuguese",
        en: "English",
      },
    },
    hero: {
      heading: "Pedro Henrique Pecly Gomes.",
      summary:
        "Full Stack Developer focused on ReactJS, JavaScript, Java, and C#, with experience in technical support and healthcare systems administration.",
      cv: {
        href: "/cv.pdf",
        download: "Pedro-Henrique-Pecly-Gomes-CV.pdf",
        label: "Download CV",
      },
      contactCta: {
        href: "#contato",
        label: "Contact me",
      },
      image: {
        src: "/avatar.jpg",
        alt: "Photo of Pedro Henrique Pecly Gomes",
      },
    },
    about: {
      id: "sobre",
      kicker: "About",
      title: "Professional summary.",
      description:
        "Experience in technical support, development, and process automation.",
      paragraphs: [
        "IT professional with experience in technical support and administration of large healthcare systems.",
        "Hands-on experience with PL/SQL queries and reports, plus full stack development focused on ReactJS.",
      ],
    },
    education: {
      kicker: "Education",
      title: "Academic background.",
      items: [
        {
          title: "BSc in Information Systems",
          meta: "IFF · 2021 - 2026",
        },
        {
          title: "Additional courses",
          meta: "PHP · JavaScript · Programming Logic · Docker",
        },
      ],
    },
    skillsSection: {
      id: "habilidades",
      kicker: "Skills",
      title: "Core competencies.",
      description:
        "Technologies and tools focused on full stack development.",
    },
    skills: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Java",
      "C#",
      "PHP Laravel",
      "MySQL",
      "PL/SQL",
      "Python",
      "React Native (Expo)",
      "Node.js",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Help Desk GLPI",
      "Office Suite",
    ],
    projectsSection: {
      id: "projetos",
      kicker: "Projects",
      title: "Recent projects and experience.",
      description:
        "Highlights of what I have built and what I am currently developing.",
      ctaLabel: "View",
      ariaLabel: "Open {name}",
    },
    projects: [
      {
        name: "FitQuestGo",
        description:
          "Preventive health innovation project with a gamified platform focused on engagement.",
        stack:
          "React Native (Expo) • TypeScript • Node.js • Prisma • PostgreSQL • REST API",
        githubUrl: "https://github.com/pedroPecly/FiQuestLife",
      },
      {
        name: "Plano de ensino",
        description:
          "Web system for creating, managing, and exporting course plans for higher education instructors.",
        stack: "React • TypeScript • Vite • Tailwind CSS • Supabase",
        githubUrl: "https://projeto-plano-ensino.vercel.app/",
      },
      {
        name: "Pedra Papel Tesoura",
        description:
          "Interactive web app that simulates a battle between Rock, Paper, and Scissors, which collide physically and transform according to the game rules.",
        stack: "HTML • CSS • JavaScript",
        githubUrl:
          "https://pedra-papel-tesoura-ashy-delta.vercel.app/index.html",
      },
      {
        name: "Autotiss",
        description:
          "Bot developed to automate manual processes for registering users and linking providers on the NTISS platform.",
        stack: "Python • Selenium",
        githubUrl: "https://github.com/pedroPecly/autotiss",
      },
      {
        name: "Autovoxis",
        description:
          "Automation bot for formatting and loading materials CSV files into the VOXIS system.",
        stack: "Python • Selenium",
        githubUrl: "https://github.com/pedroPecly/autovoxis",
      },
      {
        name: "site de niver",
        description: "Birthday RSVP site for confirming attendance.",
        stack: "NextJS • TypeScript • Tailwind CSS • Supabase",
        githubUrl: "https://niver-do-pecly.vercel.app/",
      },
    ],
    contact: {
      id: "contato",
      kicker: "Contact",
      title: "Open to opportunities and projects.",
      description: "Reach out to talk about roles and collaborations.",
      form: {
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        namePlaceholder: "Your full name",
        emailPlaceholder: "you@company.com",
        messagePlaceholder: "Tell me about the role or project",
        buttonLabel: "Send message",
        buttonLoadingLabel: "Sending...",
        note: "Sent directly to my main email.",
        turnstileMissingNote:
          "Set NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable anti-spam.",
        feedback: {
          requiredFields: "Please fill in all required fields.",
          turnstileMissing: "Please complete the anti-spam challenge.",
          sending: "Sending message...",
          success: "Message sent successfully. I will get back to you soon.",
          submitError: "Unable to send your message.",
          unexpectedError: "Unexpected error. Please try again soon.",
        },
      },
      links: [
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/pedro-henrique-pecly-gomes-096277308",
          display: "linkedin.com/in/pedro-henrique-pecly-gomes-096277308",
        },
        {
          label: "GitHub",
          href: "https://github.com/pedroPecly",
          display: "github.com/pedroPecly",
        },
      ],
      details: [
        {
          label: "Email",
          value: "pedrohpg23@hotmail.com",
          href: "mailto:pedrohpg23@hotmail.com",
        },
        {
          label: "Phone",
          value: "(22) 99600-3545",
          href: "tel:+5522996003545",
        },
        {
          label: "Address",
          value: "Rua Maria Ortega Arrabal, 291 - Bairro Aeroporto - Itaperuna",
        },
      ],
      linkAriaLabel: "Open {label} for {name}",
    },
    backToTop: {
      label: "Back to top",
    },
    footer: {
      copyright: "© 2026 Pedro Henrique Pecly Gomes.",
      tagline: "Pecly's tech portfolio.",
    },
  },
};

export const getPortfolio = (locale: Locale): PortfolioContent =>
  portfolioContent[locale] ?? portfolioContent[defaultLocale];
