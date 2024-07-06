

import ProjectCards from "@/app/components/homePage/projects/index";
import AboutSection from "@/app/components/homePage/about";
import ContactSection from "@/app/components/contact";
import Education from "@/app/components/homePage/education";
import HeroSection from "@/app/components/homePage/hero-section";
import Skills from "@/app/components/homePage/skills";

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
