import BackToTop from "@/components/BackToTop";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div id="inicio" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-accent/12 blur-3xl" />
        <div className="absolute top-32 right-[-12%] h-80 w-80 rounded-full bg-accent-2/10 blur-3xl" />
      </div>

      <Header />

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-10">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
