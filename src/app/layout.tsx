import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { headers } from "next/headers";

import { getLocale, localeToLang } from "@/i18n/config";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const locale = getLocale(headerList.get("x-locale"));
  const lang = localeToLang[locale];

  return (
    <html
      lang={lang}
      className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
