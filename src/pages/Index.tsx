
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import DoctorTipsSection from "@/components/DoctorTipsSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InstagramSection from "@/components/InstagramSection";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TeethViewSection from "@/components/TeethViewSection";
import TrainingSection from "@/components/TrainingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DoctorTipsSection />
      <TeethViewSection />
      <TrainingSection />
      <InstagramSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
