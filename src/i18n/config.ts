export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeToLang: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en-US",
};

export const isLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getLocale = (value?: string | null): Locale =>
  value && isLocale(value) ? value : defaultLocale;
