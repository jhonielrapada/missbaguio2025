import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContestantsCarousel from "@/components/home/ContestantsCarousel";
import PartnersSection from "@/components/home/PartnersSection";

export default function HomePage() {
  return (
    <div className="scroll-smooth">
      <Navbar />

      <section
        id="contestants"
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <ContestantsCarousel />
      </section>

      <PartnersSection />

      <section id="contact" className="min-h-screen py-20">
        {/* Contact Section */}
      </section>
      <Footer />
    </div>
  );
}
