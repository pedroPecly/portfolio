"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Script from "next/script";

import SectionHeader from "@/components/SectionHeader";
import type { ContactContent } from "@/data/portfolio";

type FormStatus = "idle" | "loading" | "success" | "error";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme?: "light" | "dark" | "auto";
      "response-field"?: boolean;
      "response-field-name"?: string;
    }
  ) => string;
  reset: (widgetId?: string) => void;
  remove?: (widgetId?: string) => void;
};

type ContactSectionProps = {
  contact: ContactContent;
  profileName: string;
};

export default function ContactSection({
  contact,
  profileName,
}: ContactSectionProps) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";
  const turnstileRef = useRef<HTMLDivElement | null>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const renderTurnstile = useCallback(() => {
    if (!turnstileSiteKey) {
      return;
    }

    const turnstile = (window as Window & { turnstile?: TurnstileApi })
      .turnstile;

    if (!turnstile || !turnstileRef.current) {
      return;
    }

    if (turnstileWidgetId.current) {
      turnstile.reset(turnstileWidgetId.current);
      return;
    }

    turnstileWidgetId.current = turnstile.render(turnstileRef.current, {
      sitekey: turnstileSiteKey,
      theme: "dark",
      "response-field": true,
      "response-field-name": "turnstileToken",
    });
  }, [turnstileSiteKey]);

  useEffect(() => {
    renderTurnstile();

    return () => {
      const turnstile = (window as Window & { turnstile?: TurnstileApi })
        .turnstile;

      if (turnstileWidgetId.current && turnstile?.remove) {
        turnstile.remove(turnstileWidgetId.current);
      }

      turnstileWidgetId.current = null;
    };
  }, [renderTurnstile]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      website: String(formData.get("website") ?? "").trim(),
      turnstileToken: String(formData.get("turnstileToken") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setStatusMessage(contact.form.feedback.requiredFields);
      return;
    }

    if (!payload.turnstileToken) {
      setStatus("error");
      setStatusMessage(contact.form.feedback.turnstileMissing);
      return;
    }

    setStatus("loading");
    setStatusMessage(contact.form.feedback.sending);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(contact.form.feedback.submitError);
        return;
      }

      form.reset();
      const turnstile = (window as Window & { turnstile?: TurnstileApi })
        .turnstile;
      if (turnstileWidgetId.current) {
        turnstile?.reset(turnstileWidgetId.current);
      }
      setStatus("success");
      setStatusMessage(contact.form.feedback.success);
    } catch {
      setStatus("error");
      setStatusMessage(contact.form.feedback.unexpectedError);
    }
  };

  const feedbackClassName =
    status === "error"
      ? "text-rose-400"
      : status === "success"
      ? "text-accent"
      : "text-muted";

  const feedbackText =
    status === "idle" ? contact.form.note : statusMessage;

  return (
    <section
      className="scroll-mt-28 space-y-8 animate-[fade-up_0.7s_ease-out] [animation-delay:540ms] [animation-fill-mode:both]"
      id={contact.id}
    >
      <SectionHeader
        kicker={contact.kicker}
        title={contact.title}
        description={contact.description}
      />
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
        onReady={renderTurnstile}
      />
      <div className="max-w-2xl">
        <form
          className="rounded-3xl border border-outline/70 bg-card/80 p-6"
          onSubmit={handleSubmit}
        >
          <input
            className="hidden"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
          <div className="grid gap-5">
            <div>
              <label className="text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted">
                {contact.form.nameLabel}
              </label>
              <input
                className="mt-2 w-full rounded-2xl border border-outline/70 bg-paper/70 px-4 py-3 text-sm text-ink focus:border-accent focus:outline-none"
                placeholder={contact.form.namePlaceholder}
                type="text"
                name="name"
                required
                autoComplete="name"
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
                name="email"
                required
                autoComplete="email"
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
                name="message"
                required
                minLength={10}
              />
            </div>
          </div>
          <div className="mt-5">
            {turnstileSiteKey ? (
              <div ref={turnstileRef} />
            ) : (
              <p className="text-xs text-amber-400">
                {contact.form.turnstileMissingNote}
              </p>
            )}
          </div>
          <button
            className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-paper transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading"
              ? contact.form.buttonLoadingLabel
              : contact.form.buttonLabel}
          </button>
          <p
            className={`mt-3 text-xs ${feedbackClassName}`}
            role="status"
            aria-live="polite"
          >
            {feedbackText}
          </p>
        </form>
        <div className="mt-6 grid gap-3">
          {contact.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-outline/70 bg-card/80 px-4 py-3 transition-colors hover:border-accent/50"
              aria-label={contact.linkAriaLabel
                .replace("{label}", link.label)
                .replace("{name}", profileName)}
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
