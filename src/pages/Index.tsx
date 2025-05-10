
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import Navbar from "@/components/Navbar";
import ServicesHighlightsSection from "@/components/ServicesHighlightsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesHighlightsSection />
      <InstagramSection />
      <Footer />
    </div>
  );
};

export default Index;
