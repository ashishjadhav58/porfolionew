import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Certifications } from "@/components/certifications";
import { Experience } from "@/components/experience";
import { Publications } from "@/components/publications";
import { Education } from "@/components/education";
import { Contact, Footer } from "@/components/contact";
import { certifications, publications } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        {certifications.length > 0 && <Certifications />}
        <Experience />
        {publications.length > 0 && <Publications />}
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
