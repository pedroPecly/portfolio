import Image from "next/image";

import { hero } from "@/data/portfolio";

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16v12H4z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-6">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-outline/70 bg-card/80 px-4 py-2 text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-muted animate-[fade-up_0.7s_ease-out] [animation-fill-mode:both]">
          {hero.label}
        </span>
        <h1 className="text-4xl font-serif leading-tight text-ink sm:text-5xl lg:text-6xl animate-[fade-up_0.7s_ease-out] [animation-delay:120ms] [animation-fill-mode:both]">
          {hero.heading}
        </h1>
        <p className="max-w-2xl text-base text-muted sm:text-lg animate-[fade-up_0.7s_ease-out] [animation-delay:200ms] [animation-fill-mode:both]">
          {hero.summary}
        </p>
        <div className="grid grid-cols-2 gap-2 animate-[fade-up_0.7s_ease-out] [animation-delay:280ms] [animation-fill-mode:both] sm:flex sm:flex-wrap sm:gap-3">
          <a
            href={hero.cv.href}
            download={hero.cv.download}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-ink px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-paper shadow-[0_18px_40px_-22px_rgba(15,23,42,0.6)] sm:px-6 sm:text-xs sm:tracking-[0.3em]"
          >
            <DownloadIcon />
            {hero.cv.label}
          </a>
          <a
            href={hero.contactCta.href}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-outline/70 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-ink/40 sm:px-6 sm:text-xs sm:tracking-[0.3em]"
          >
            <MailIcon />
            {hero.contactCta.label}
          </a>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end animate-[fade-up_0.7s_ease-out] [animation-delay:320ms] [animation-fill-mode:both]">
        <div className="group relative w-full max-w-xs sm:max-w-sm lg:max-w-md">
          <div className="absolute -inset-2 rounded-3xl border border-accent/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-outline/70 bg-card/80 p-2 shadow-[0_30px_70px_-50px_rgba(56,189,248,0.6)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-[0_24px_60px_-40px_rgba(56,189,248,0.6)]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={480}
              height={600}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
