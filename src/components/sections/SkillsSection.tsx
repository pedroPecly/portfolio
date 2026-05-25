import SectionHeader from "@/components/SectionHeader";
import type { SkillsSectionContent } from "@/data/portfolio";

type SkillsSectionProps = {
  section: SkillsSectionContent;
  skills: string[];
};

export default function SkillsSection({
  section,
  skills,
}: SkillsSectionProps) {
  return (
    <section
      className="scroll-mt-28 space-y-10 animate-[fade-up_0.7s_ease-out] [animation-delay:420ms] [animation-fill-mode:both]"
      id={section.id}
    >
      <SectionHeader
        kicker={section.kicker}
        title={section.title}
        description={section.description}
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
