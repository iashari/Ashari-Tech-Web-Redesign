import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <div className="section-divider" />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <div className="section-divider" />
      <ScrollReveal>
        <Industries />
      </ScrollReveal>
      <div className="section-divider" />
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <div className="section-divider" />
      <ScrollReveal>
        <Contact />
      </ScrollReveal>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
