import Link from "next/link";

import type { NavItem } from "@/data/portfolio";
import { locales, type Locale } from "@/i18n/config";

type HeaderProps = {
  brandLabel: string;
  brandHref: string;
  navItems: NavItem[];
  contactLabel: string;
  contactHref: string;
  locale: Locale;
  languageLabel: string;
  languageAriaLabel: string;
  languageNames: Record<Locale, string>;
};

export default function Header({
  brandLabel,
  brandHref,
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
      <div className="mx-auto w-full max-w-6xl rounded-3xl border border-outline/70 bg-card/80 px-4 py-3 backdrop-blur sm:rounded-full sm:py-2">
        <div className="flex items-center justify-between gap-3">
          <Link
            href={brandHref}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-ink"
          >
            {brandLabel}
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-6 text-xs font-mono font-semibold uppercase tracking-[0.2em] text-muted sm:flex">
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

          <div className="hidden items-center gap-2 sm:flex">
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

          <details className="relative sm:hidden" data-menu>
            <summary
              aria-label="Menu"
              className="flex items-center rounded-full border border-outline/70 bg-card/80 px-3 py-2 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 list-none [&::-webkit-details-marker]:hidden"
            >
              <span className="sr-only">Menu</span>
              <span className="menu-icon flex h-3 w-4 flex-col justify-between">
                <span className="menu-bar h-0.5 w-full rounded-full bg-current" />
                <span className="menu-bar h-0.5 w-full rounded-full bg-current" />
                <span className="menu-bar h-0.5 w-full rounded-full bg-current" />
              </span>
            </summary>
            <div className="menu-panel absolute right-0 mt-3 w-72 rounded-2xl border border-outline/70 bg-card/95 p-4 backdrop-blur shadow-[0_18px_40px_-26px_rgba(15,23,42,0.7)]">
              <nav className="flex flex-col gap-3 text-[11px] font-mono font-semibold uppercase tracking-[0.2em] text-muted">
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
              <div className="mt-4 border-t border-outline/60 pt-4">
                <p className="text-[10px] font-mono font-semibold uppercase tracking-[0.2em] text-muted">
                  {languageLabel}
                </p>
                <div className="mt-2 flex items-center gap-2">
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
                        className={`rounded-full border border-outline/70 px-3 py-2 text-[10px] font-mono font-semibold uppercase tracking-[0.2em] transition-colors ${
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
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-paper shadow-[0_12px_30px_-18px_rgba(15,23,42,0.6)]"
                >
                  {contactLabel}
                </a>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
