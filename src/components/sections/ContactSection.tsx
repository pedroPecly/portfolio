import SectionHeader from "@/components/SectionHeader";
import { contact, profile } from "@/data/portfolio";

export default function ContactSection() {
  return (
    <section
      className="scroll-mt-28 space-y-8 animate-[fade-up_0.7s_ease-out] [animation-delay:540ms] [animation-fill-mode:both]"
      id="contato"
    >
      <SectionHeader
        kicker={contact.kicker}
        title={contact.title}
        description={contact.description}
      />
      <div className="max-w-2xl">
        <form className="rounded-3xl border border-outline/70 bg-card/80 p-6">
          <div className="grid gap-5">
            <div>
              <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                {contact.form.nameLabel}
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-outline/70 bg-paper/70 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                placeholder={contact.form.namePlaceholder}
                type="text"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                {contact.form.emailLabel}
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-outline/70 bg-paper/70 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                placeholder={contact.form.emailPlaceholder}
                type="email"
              />
            </div>
            <div>
              <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                {contact.form.messageLabel}
              </label>
              <textarea
                className="mt-2 w-full rounded-2xl border border-outline/70 bg-paper/70 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                placeholder={contact.form.messagePlaceholder}
                rows={4}
              />
            </div>
          </div>
          <button
            className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-paper"
            type="button"
          >
            {contact.form.buttonLabel}
          </button>
          <p className="mt-3 text-xs text-muted">{contact.form.note}</p>
        </form>
        <div className="mt-6 grid gap-3">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-outline/70 bg-card/80 px-4 py-3 transition-colors hover:border-accent/50"
              aria-label={`${link.label} de ${profile.name}`}
            >
              <p className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                {link.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-ink break-all">
                {link.display}
              </p>
            </a>
          ))}
        </div>
        <div className="mt-4 grid gap-1 text-xs text-muted">
          {contact.details.map((detail) =>
            detail.href ? (
              <a key={detail.label} href={detail.href}>
                {detail.label}: {detail.value}
              </a>
            ) : (
              <p key={detail.label}>
                {detail.label}: {detail.value}
              </p>
            )
          )}
        </div>
      </div>
    </section>
  );
}
