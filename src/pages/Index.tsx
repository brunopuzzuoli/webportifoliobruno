import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Formations from "@/components/Formations";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      
      {/* Section divider */}
      <div className="section-divider" />
      
      <Formations />
      
      <div className="section-divider" />
      
      <Projects />
      
      <div className="section-divider" />
      
      <Experience />
      
      <div className="section-divider" />
      
      <Skills />
      
      <div className="section-divider" />
      
      <Contact />
      
      <Footer />
    </div>
  );
};

export default Index;
