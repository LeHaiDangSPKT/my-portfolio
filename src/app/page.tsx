import HeroSection from "../modules/homepage/hero-section";

export default function Home() {
  return (
    <div suppressHydrationWarning >
      <HeroSection />
      {/* <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog blogs={blogs} />
      <ContactSection /> */}
    </div>
    
  );
}
