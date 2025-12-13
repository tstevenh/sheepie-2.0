import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";
import photoshoot from "@/data/photoshoot.json";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Philosophy | Sheepie.",
  description: "We believe rest is the foundation of a clearer tomorrow. Learn how we bridge the gap between ergonomic science and cloud-like comfort.",
};

// Pick a few distinct images for the grid to tell a story
const aboutImages = [
  "/images/edited/DSC01241.JPG", // Heroic
  "/images/edited/DSC01263.JPG", // Detail
  "/images/edited/DSC01334.JPG", // Relaxed (Hero variant)
  "/images/edited/DSC01148.JPG", // Texture
  "/images/edited/DSC01313.JPG", // Context
  "/images/edited/DSC01225.JPG", // Lifestyle
];

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-24">
          <span className="text-primary/60 text-sm font-bold tracking-widest uppercase">Our Philosophy</span>
          <h1 className="font-display text-5xl md:text-7xl font-medium text-primary leading-[1.1]">
            Rest is not a Luxury.<br/>
            <span className="italic text-primary/70">It's a Foundation.</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            We believe that a clearer tomorrow starts with the night before. 
            Sheepie was born to bridge the gap between ergonomic science and the gentle comfort you crave.
          </p>
        </div>

        {/* Masonry-ish Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-24">
           {aboutImages.map((src, idx) => (
             <div key={idx} className={`relative rounded-2xl overflow-hidden bg-muted ${idx % 2 === 0 ? 'aspect-[3/4]' : 'aspect-square md:aspect-[3/4]'} ${idx === 1 ? 'md:translate-y-12' : ''} ${idx === 4 ? 'md:-translate-y-12' : ''}`}>
               <Image 
                 src={src} 
                 alt="Sheepie Lifestyle" 
                 fill 
                 className="object-cover hover:scale-105 transition-transform duration-700"
                 sizes="(max-width: 768px) 50vw, 33vw"
               />
             </div>
           ))}
        </div>

        <div className="max-w-3xl mx-auto prose prose-lg prose-headings:font-display prose-headings:font-medium prose-p:font-light prose-p:text-muted-foreground text-center">
          <h2>Designed for Every Sleeper</h2>
          <p>
            We spent months obsessed with density, rebound rates, and fabric breathability. 
            Whether you need the cervical precision of the <strong>CerviCloud Pillow</strong>, the silence of our <strong>CalmiCloud</strong> earplugs, or the total darkness of the <strong>LumiCloud Eye Mask</strong>, every curve is intentional.
          </p>
          <p>
            We don't just sell sleep products. We sell the feeling of waking up ready.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}