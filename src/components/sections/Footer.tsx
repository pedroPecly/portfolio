import type { FooterContent } from "@/data/portfolio";

type FooterProps = {
  footer: FooterContent;
};

export default function Footer({ footer }: FooterProps) {
  return (
    <footer className="border-t border-outline/70 animate-[fade-up_0.7s_ease-out] [animation-delay:600ms] [animation-fill-mode:both]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>{footer.copyright}</p>
        <p>{footer.tagline}</p>
      </div>
    </footer>
  );
}
