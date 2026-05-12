type SectionHeaderProps = {
  kicker: string;
  title: string;
  description: string;
};

export default function SectionHeader({
  kicker,
  title,
  description,
}: SectionHeaderProps) {
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
