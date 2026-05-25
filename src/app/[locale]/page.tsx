import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BackToTop from "@/components/BackToTop";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { getPortfolio } from "@/data/portfolio";
import { getLocale, isLocale, locales, type Locale } from "@/i18n/config";

type PageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const normalizedLocale = getLocale(locale);
  const { meta } = getPortfolio(normalizedLocale);

  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const normalizedLocale = locale as Locale;
  const content = getPortfolio(normalizedLocale);
  const topHref = `#${content.page.topId}`;

  return (
    <div id={content.page.topId} className="relative overflow-hidden">
      <Header
        navItems={content.navItems}
        contactLabel={content.header.contactLabel}
        contactHref={`#${content.contact.id}`}
        locale={normalizedLocale}
        languageLabel={content.header.languageLabel}
        languageAriaLabel={content.header.languageAriaLabel}
        languageNames={content.header.languageNames}
      />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-10">
        <Hero hero={content.hero} />
        <AboutSection about={content.about} education={content.education} />
        <SkillsSection
          section={content.skillsSection}
          skills={content.skills}
        />
        <ProjectsSection
          section={content.projectsSection}
          projects={content.projects}
        />
        <ContactSection
          contact={content.contact}
          profileName={content.profile.name}
        />
      </main>

      <Footer footer={content.footer} />
      <BackToTop label={content.backToTop.label} href={topHref} />
    </div>
  );
}
