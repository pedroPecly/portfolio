"use client";

import { useState } from "react";
import Script from "next/script";

import SectionHeader from "@/components/SectionHeader";
import { contact, profile } from "@/data/portfolio";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

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
      setStatusMessage("Preencha todos os campos obrigatorios.");
      return;
    }

    if (!payload.turnstileToken) {
      setStatus("error");
      setStatusMessage("Confirme o desafio anti-spam.");
      return;
    }

    setStatus("loading");
    setStatusMessage("Enviando mensagem...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus("error");
        setStatusMessage(
          data?.error ?? "Nao foi possivel enviar sua mensagem."
        );
        return;
      }

      form.reset();
      const turnstile = (window as Window & {
        turnstile?: { reset: () => void };
      }).turnstile;
      turnstile?.reset();
      setStatus("success");
      setStatusMessage("Mensagem enviada com sucesso. Retornarei em breve.");
    } catch {
      setStatus("error");
      setStatusMessage("Erro inesperado. Tente novamente em instantes.");
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
      id="contato"
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
              <div
                className="cf-turnstile"
                data-sitekey={turnstileSiteKey}
                data-theme="dark"
                data-response-field="true"
                data-response-field-name="turnstileToken"
              />
            ) : (
              <p className="text-xs text-amber-400">
                Configure NEXT_PUBLIC_TURNSTILE_SITE_KEY para ativar o anti-spam.
              </p>
            )}
          </div>
          <button
            className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-paper transition-opacity disabled:cursor-not-allowed disabled:opacity-70"
            type="submit"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando..." : contact.form.buttonLabel}
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
