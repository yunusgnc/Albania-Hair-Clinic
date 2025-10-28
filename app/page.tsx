import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ChiSiamoSection } from "@/components/ChiSiamoSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { HealthSection } from "@/components/HealthSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { TecnicheSection } from "@/components/TecnicheSection";
import { ProcessSection } from "@/components/ProcessSection";
import { PricingSection } from "@/components/PricingSection";
import { ResultsSection } from "@/components/ResultsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InstagramSection } from "@/components/InstagramSection";
import { FAQSection } from "@/components/FAQSection";
import { FormSection } from "@/components/FormSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <StatsSection />
      <ChiSiamoSection />
      <WhyChooseSection />
      <HealthSection />
      <BeforeAfterSection />
      <TecnicheSection />
      <ProcessSection />
      <PricingSection />
      <ResultsSection />
      <TestimonialsSection />
      <ReviewsSection />
      <InstagramSection />
      <FAQSection />
      <FormSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
