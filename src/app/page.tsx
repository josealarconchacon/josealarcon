import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import SideProjects from "@/components/sections/SideProjects";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import AnimatedBackground from "@/components/layout/AnimatedBackground";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans overflow-x-hidden">
      <ScrollProgress />
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <FeaturedProject />
      <SideProjects />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
