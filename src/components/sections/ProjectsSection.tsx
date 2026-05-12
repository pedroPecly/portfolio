import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section
      className="scroll-mt-28 space-y-10 animate-[fade-up_0.7s_ease-out] [animation-delay:480ms] [animation-fill-mode:both]"
      id="projetos"
    >
      <SectionHeader
        kicker="Projetos"
        title="Projetos e experiencias recentes."
        description="Resumo do que ja executei e do que estou desenvolvendo."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex h-full flex-col gap-3 rounded-3xl border border-outline/70 bg-card/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_-40px_rgba(56,189,248,0.6)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)]" />
            <h3 className="text-xl font-serif text-ink">{project.name}</h3>
            <p className="text-sm text-muted">{project.description}</p>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-muted">
              {project.stack}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
