import AboutSection from "@/modules/homepage/about";
import HeroSection from "../modules/homepage/hero-section";
import Experience from "@/modules/homepage/experience";
import Skills from "@/modules/homepage/skills";
import Projects from "@/modules/homepage/projects";
import Education from "@/modules/homepage/education";
import ContactSection from "@/modules/homepage/contact";

export default function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <ContactSection />
    </div>
    
  );
}
