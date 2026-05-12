import Image from "next/image";

type SectionHeaderProps = {
  kicker: string;
  title: string;
  description: string;
};

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
];

const skills = [
  "React.js",
  "JavaScript",
  "Java",
  "C#",
  "PHP Laravel",
  "MySQL",
  "PL/SQL",
  "Python",
  "React Native (Expo)",
  "Node.js",
  "Prisma",
  "PostgreSQL",
  "Help Desk GLPI",
  "Pacote Office",
  "Ingles intermediario",
];

const projects = [
  {
    name: "FitQuestGo",
    description:
      "Projeto de inovacao em saude preventiva com plataforma gamificada e foco em engajamento.",
    stack: "React Native (Expo) • TypeScript • Node.js • Prisma • PostgreSQL • REST API",
  },
  {
    name: "Bot TI pra mexer no NTISS",
    description:
      "colocar coisa auqi",
    stack: "python",
  },
];

function SectionHeader({ kicker, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-xs font-mono font-semibold uppercase tracking-[0.35em] text-muted">
        {kicker}
      </span>
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-serif leading-tight text-ink sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-2xl text-base text-muted sm:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
        <div className="absolute top-32 right-[-12%] h-80 w-80 rounded-full bg-accent-2/10 blur-3xl" />
      </div>

      <header className="sticky top-4 z-20 px-6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-outline/70 bg-card/80 px-4 py-2 backdrop-blur">
          <div className="flex items-center gap-3">
            <Image
              src="/avatar.jpg"
              alt="Foto de Pedro Henrique Pecly Gomes"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
              priority
            />
            <div>
              <p className="text-sm font-semibold text-ink">
                Pedro Henrique Pecly Gomes
              </p>
              <p className="text-xs text-muted">
                Desenvolvedor Full Stack
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-muted md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contato"
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-paper shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)]"
          >
            Contato
          </a>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-10">
        <section
          id="inicio"
          className="flex flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-outline/70 bg-card/80 px-4 py-2 text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted animate-[fade-up_0.7s_ease-out] [animation-fill-mode:both]">
            Desenvolvedor Full Stack
          </span>
          <h1 className="text-4xl font-serif leading-tight text-ink sm:text-5xl lg:text-6xl animate-[fade-up_0.7s_ease-out] [animation-delay:120ms] [animation-fill-mode:both]">
            Pedro Henrique Pecly Gomes.
          </h1>
          <p className="max-w-2xl text-base text-muted sm:text-lg animate-[fade-up_0.7s_ease-out] [animation-delay:200ms] [animation-fill-mode:both]">
            Desenvolvedor Full Stack com experiencia em suporte tecnico e administracao de sistemas na area da saude, com foco em ReactJS, JavaScript, Java e C#.
          </p>
          <div className="flex flex-wrap gap-3 animate-[fade-up_0.7s_ease-out] [animation-delay:280ms] [animation-fill-mode:both]">
            <a
              href="/cv.pdf"
              download="Pedro-Henrique-Pecly-Gomes-CV.pdf"
              className="rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-paper shadow-[0_18px_40px_-22px_rgba(15,23,42,0.6)]"
            >
              Baixar CV
            </a>
            <a
              href="#contato"
              className="rounded-full border border-outline/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-ink transition-colors hover:border-ink/40"
            >
              Falar comigo
            </a>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-28 space-y-6">
          <SectionHeader
            kicker="Sobre"
            title="Resumo profissional."
            description="Experiencia em suporte tecnico, desenvolvimento e automacao de processos."
          />
          <div className="max-w-3xl space-y-4 text-sm text-muted sm:text-base">
            <p>
              Profissional em TI com experiencia em suporte tecnico e administracao de sistemas na area da saude de grande porte.
            </p>
            <p>
              Experiencia pratica em consultas e relatorios em PL/SQL, alem de desenvolvimento full stack com foco em ReactJS.
            </p>
            <p>
              Formacao: Bacharelado em Sistemas de Informacao (IFF, 2021 - 2026). Cursos: PHP, JavaScript, Logica de Programacao e Docker.
            </p>
          </div>
        </section>

        <section id="habilidades" className="scroll-mt-28 space-y-10">
          <SectionHeader
            kicker="Habilidades"
            title="Principais competencias."
            description="Tecnologias e ferramentas com foco em desenvolvimento full stack."
          />
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-outline/70 bg-card/80 px-3 py-1 text-xs text-muted"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projetos" className="scroll-mt-28 space-y-10">
          <SectionHeader
            kicker="Projetos"
            title="Projetos e experiencias recentes."
            description="Resumo do que ja executei e do que estou desenvolvendo." 
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col gap-3 rounded-3xl border border-outline/70 bg-card/80 p-6"
              >
                <h3 className="text-xl font-serif text-ink">
                  {project.name}
                </h3>
                <p className="text-sm text-muted">{project.description}</p>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
                  {project.stack}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="scroll-mt-28 space-y-8">
          <SectionHeader
            kicker="Contato"
            title="Aberto a oportunidades e projetos."
            description="Entre em contato para conversar sobre vagas e colaboracoes."
          />
          <div className="max-w-2xl">
            <form className="rounded-3xl border border-outline/70 bg-card/80 p-6">
              <div className="grid gap-5">
                <div>
                  <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                    Nome
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-outline/70 bg-paper/70 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                    placeholder="Seu nome completo"
                    type="text"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                    Email
                  </label>
                  <input
                    className="mt-2 w-full rounded-2xl border border-outline/70 bg-paper/70 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                    placeholder="voce@empresa.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                    Mensagem
                  </label>
                  <textarea
                    className="mt-2 w-full rounded-2xl border border-outline/70 bg-paper/70 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                    placeholder="Conte sobre a vaga ou projeto"
                    rows={4}
                  />
                </div>
              </div>
              <button
                className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-paper"
                type="button"
              >
                Enviar mensagem
              </button>
              <p className="mt-3 text-xs text-muted">
                Formulario demonstrativo. Conecte a um servico quando quiser.
              </p>
            </form>
            <div className="mt-4 grid gap-2 text-xs text-muted">
              <p>Email: pedrohpg23@hotmail.com</p>
              <p>Telefone: (22) 99600-3545</p>
              <p>Endereco: Rua Maria Ortega Arrabal, 291 - Bairro Aeroporto - Itaperuna</p>
              <p>LinkedIn: linkedin.com/in/pedro-henrique-pecly-gomes-096277308</p>
              <p>GitHub: github.com/pedroPecly</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-outline/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pedro Henrique Pecly Gomes.</p>
          <p>Portfolio tech do Pecly.</p>
        </div>
      </footer>
    </div>
  );
}
