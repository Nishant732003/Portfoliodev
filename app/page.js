

import ProjectCards from "./components/homePage/projects/index";
import AboutSection from "./components/homepage/about";
import ContactSection from "./components/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Skills from "./components/homepage/skills";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills />
      <Education />
      <ProjectCards />
      <ContactSection />
    </>
  );
}
