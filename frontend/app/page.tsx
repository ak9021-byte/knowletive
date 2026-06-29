import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FounderMessage from "@/components/FounderMessage";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ScrollReveal>
        <FounderMessage />
      </ScrollReveal>
      <ScrollReveal>
        <About />
      </ScrollReveal>
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal>
        <FAQ />
      </ScrollReveal>
      <ScrollReveal>
        <section id="book" className="py-20 px-6 bg-gray-50">
          <AppointmentForm />
        </section>
      </ScrollReveal>
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}