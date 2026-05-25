"use client";

import { useEffect, useState } from "react";

type BackToTopProps = {
  label: string;
  href: string;
};

export default function BackToTop({ label, href }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 240);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <a
      href={href}
      aria-label={label}
      className={`fixed bottom-6 right-6 sm:right-8 lg:right-12 z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/60 bg-ink/90 p-0 text-paper shadow-[0_22px_55px_-30px_rgba(56,189,248,0.75)] ring-1 ring-accent/40 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-accent/80 hover:shadow-[0_26px_60px_-30px_rgba(56,189,248,0.9)] overflow-hidden ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
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
        <path d="m18 15-6-6-6 6" />
      </svg>
    </a>
  );
}
