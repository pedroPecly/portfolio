import SectionHeader from "@/components/SectionHeader";
import { about } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section
      className="scroll-mt-28 space-y-6 animate-[fade-up_0.7s_ease-out] [animation-delay:360ms] [animation-fill-mode:both]"
      id="sobre"
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
    </section>
  );
}
