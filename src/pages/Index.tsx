
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import Navbar from "@/components/Navbar";
import ScheduleVisitSection from "@/components/ScheduleVisitSection";
import ServicesHighlightsSection from "@/components/ServicesHighlightsSection";
import TeethViewSection from "@/components/TeethViewSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesHighlightsSection />
      <TeethViewSection />
      <ScheduleVisitSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
