import Link from "next/link";

import type { NavItem } from "@/data/portfolio";
import { locales, type Locale } from "@/i18n/config";

type HeaderProps = {
  navItems: NavItem[];
  contactLabel: string;
  contactHref: string;
  locale: Locale;
  languageLabel: string;
  languageAriaLabel: string;
  languageNames: Record<Locale, string>;
};

export default function Header({
  navItems,
  contactLabel,
  contactHref,
  locale,
  languageLabel,
  languageAriaLabel,
  languageNames,
}: HeaderProps) {
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
        <div className="flex items-center gap-2">
          <div
            role="group"
            aria-label={languageLabel}
            className="flex items-center gap-1 rounded-full border border-outline/70 bg-card/80 p-1 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-muted"
          >
            {locales.map((item) => {
              const isActive = item === locale;
              const ariaLabel = languageAriaLabel.replace(
                "{language}",
                languageNames[item]
              );

              return (
                <Link
                  key={item}
                  href={`/${item}`}
                  aria-label={ariaLabel}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-2 py-1 transition-colors ${
                    isActive
                      ? "bg-ink text-paper"
                      : "text-muted hover:text-ink"
                  }`}
                >
                  {item.toUpperCase()}
                </Link>
              );
            })}
          </div>
          <a
            href={contactHref}
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-paper shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)]"
          >
            {contactLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
