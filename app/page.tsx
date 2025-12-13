import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ProductShowcase } from "@/components/product/product-showcase";
import { UGCStrip } from "@/components/sections/ugc-strip";
import { FAQPreview } from "@/components/sections/faq-preview";
import { ScienceScroll } from "@/components/sections/science-scroll";
import { SleepAcademy } from "@/components/sections/sleep-academy";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />
      <Hero />
      <TrustBar />
      
      {/* The WOW Factor: Science Scroll */}
      <ScienceScroll />
      
      {/* The Product Experience */}
      <ProductShowcase />
      
      {/* The Useful Content: Education */}
      <SleepAcademy />
      
      <div className="relative z-10 bg-background">
        <UGCStrip />
        <FAQPreview />
      </div>
      <Footer />
    </main>
  );
}