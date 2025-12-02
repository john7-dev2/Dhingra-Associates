import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Dhingra Associates | The Real Estate Consultancy - West Delhi</title>
        <meta
          name="description"
          content="Dhingra Associates - Your trusted real estate consultancy in Tilak Nagar, West Delhi. Buy, sell or rent residential flats, plots, and commercial spaces with expert guidance."
        />
        <meta
          name="keywords"
          content="real estate, Delhi, West Delhi, Tilak Nagar, property, flats, plots, commercial spaces, buy property, sell property"
        />
        <link rel="canonical" href="https://dhingraassociates.com" />
      </Helmet>

      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
