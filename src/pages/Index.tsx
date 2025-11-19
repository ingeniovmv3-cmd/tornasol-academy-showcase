import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PasosSection from "@/components/PasosSection";
import CoursesSection from "@/components/CoursesSection";
import DocentesSection from "@/components/DocentesSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CommunitySection from "@/components/CommunitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <PasosSection />
      <CoursesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CommunitySection />
      <DocentesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
