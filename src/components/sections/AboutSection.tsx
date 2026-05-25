import SectionHeader from "@/components/SectionHeader";
import type { AboutContent, EducationContent } from "@/data/portfolio";

type AboutSectionProps = {
  about: AboutContent;
  education: EducationContent;
};

export default function AboutSection({
  about,
  education,
}: AboutSectionProps) {
  return (
    <section
      className="scroll-mt-28 space-y-6 animate-[fade-up_0.7s_ease-out] [animation-delay:360ms] [animation-fill-mode:both]"
      id={about.id}
    >
      <SectionHeader
        kicker={about.kicker}
        title={about.title}
        description={about.description}
      />
      <div className="max-w-3xl space-y-4 text-sm text-muted sm:text-base">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
            {education.kicker}
          </p>
          <h3 className="text-lg font-serif text-ink sm:text-xl">
            {education.title}
          </h3>
        </div>
        <div className="flex flex-nowrap gap-6">
          {education.items.map((item) => (
            <div
              key={item.title}
              className="group relative min-w-0 flex-1 rounded-3xl border border-outline/70 bg-card/80 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_24px_60px_-40px_rgba(56,189,248,0.6)]"
            >
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)]" />
              <p className="text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-xs text-muted">{item.meta}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
