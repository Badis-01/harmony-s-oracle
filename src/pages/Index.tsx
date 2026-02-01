import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { AdvisorsSection } from '@/components/sections/AdvisorsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { HoroscopesSection } from '@/components/sections/HoroscopesSection';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CardOfDaySection } from '@/components/sections/CardOfDaySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-cosmic-deep overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AdvisorsSection />
      <HowItWorksSection />
      <ServicesSection />
      <HoroscopesSection />
      <WhyUsSection />
      <CardOfDaySection />
      <TestimonialsSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
