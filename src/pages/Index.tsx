import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import InstagramSection from "@/components/InstagramSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <ServicesSection />
          <ReviewsSection />
          <GallerySection />
          <InstagramSection />
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default Index;
