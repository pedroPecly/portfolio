import SectionHeader from "@/components/SectionHeader";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  return (
    <section
      className="scroll-mt-28 space-y-10 animate-[fade-up_0.7s_ease-out] [animation-delay:420ms] [animation-fill-mode:both]"
      id="habilidades"
    >
      <SectionHeader
        kicker="Habilidades"
        title="Principais competencias."
        description="Tecnologias e ferramentas com foco em desenvolvimento full stack."
      />
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-outline/70 bg-card/80 px-3 py-1 text-xs text-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_40px_-30px_rgba(56,189,248,0.6)]"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
