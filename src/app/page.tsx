import {
  CTASection,
  FAQSection,
  HeroSection,
  HowItWorks,
  ServicesSection,
  StatsStrip,
  TrustSection,
  WhyClearEdge,
} from "@/components/sections/home";
import { Footer } from "@/components/shell/Footer";
import { Header } from "@/components/shell/Header";

export default function HomePage() {
  return (
    <>
      <div className="min-h-screen light-gradient-bg">
        <Header />
        <main id="main-content">
          <HeroSection />
          <div className="relative z-10">
            <StatsStrip />
            <WhyClearEdge />
            <ServicesSection />
            <TrustSection />
            <HowItWorks />
            <div className="flex justify-center py-2" aria-hidden="true">
              <div className="h-20 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            </div>
            <FAQSection />
            <CTASection />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
