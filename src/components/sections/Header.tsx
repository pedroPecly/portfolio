import { navItems } from "@/data/portfolio";

export default function Header() {
  return (
    <header className="sticky top-4 z-20 px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-outline/70 bg-card/80 px-4 py-2 backdrop-blur">
        <nav className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-3 text-[10px] font-mono font-semibold uppercase tracking-[0.12em] text-muted md:flex-nowrap md:justify-start md:gap-6 md:text-xs md:tracking-[0.2em]">
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
  );
}
