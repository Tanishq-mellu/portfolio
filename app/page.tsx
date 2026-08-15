import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Research } from "@/components/research/Research";
import { OpenSource } from "@/components/open-source/OpenSource";
import { Projects } from "@/components/projects/Projects";
import { Publications } from "@/components/publications/Publications";
import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
  return (
    <div id="top">
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <OpenSource />
        <Research />
        <Publications />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}