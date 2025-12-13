"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import products from "@/data/products.json";

// Specific image overrides for the Trinity Showcase
const showcaseImages: Record<string, string> = {
  "lumicloud": "/images/edited/DSC01278.JPG",
  "cervicloud": "/images/photoshoot/DSC01110.JPG",
  "calmicloud": "/images/edited/DSC01313.JPG"
};

export function ProductShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} id="products" className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24">
          
          {/* Intro Card */}
          <div className="relative h-[70vh] w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center text-white z-10">
            <h2 className="text-6xl md:text-8xl font-display font-medium leading-tight mb-8">
              The <br/> Trinity <br/> of Sleep.
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light max-w-md">
              Three essentials designed to conquer the three enemies of rest: Noise, Light, and Discomfort.
            </p>
            <div className="mt-12 flex gap-4">
               <div className="h-px w-24 bg-white/20 my-auto" />
               <span className="text-xs uppercase tracking-widest text-white/40">Scroll to Explore</span>
            </div>
          </div>

          {/* Product Cards */}
          {products.map((product, i) => (
            <ProductSlide key={product.slug} product={product} index={i} />
          ))}

          {/* CTA Card */}
           <div className="relative h-[70vh] w-[80vw] md:w-[40vw] flex-shrink-0 flex flex-col justify-center items-center text-center text-white bg-white/5 rounded-[3rem] backdrop-blur-sm border border-white/10">
              <h3 className="text-4xl font-display mb-6">Ready to upgrade your night?</h3>
              <Button size="lg" className="rounded-full px-12 h-16 text-lg bg-white text-black hover:bg-white/90" asChild>
                <Link href="/products">Shop All Essentials</Link>
              </Button>
           </div>

        </motion.div>
      </div>
    </section>
  );
}

function ProductSlide({ product, index }: { product: any, index: number }) {
  // Use the override image if it exists, otherwise fall back to the first product image
  const displayImage = showcaseImages[product.slug] || product.images[0];

  return (
    <div className="group relative h-[70vh] w-[85vw] md:w-[50vw] flex-shrink-0 bg-white rounded-[3rem] overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
      <Link href={`/products/${product.slug}`} className="block h-full w-full">
        {/* Image Half */}
        <div className="absolute inset-0 h-full w-full">
           <Image
            src={displayImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 80vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
          <div className="flex items-end justify-between">
            <div className="space-y-2">
              <span className="inline-block px-3 py-1 rounded-full border border-white/30 bg-black/20 backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-2">
                0{index + 1} — {product.slug === 'calmicloud' ? 'Silence' : product.slug === 'lumicloud' ? 'Darkness' : 'Comfort'}
              </span>
              <h3 className="text-4xl md:text-6xl font-display font-medium leading-none">
                {product.name === "CerviCloud Ortho" ? "CerviCloud Pillow" : product.name === "LumiCloud Mask" ? "LumiCloud Sleep Mask" : product.name}
              </h3>
              <p className="text-lg md:text-xl text-white/80 font-light max-w-md pt-2 line-clamp-2">
                {product.tagline}
              </p>
            </div>
            
            <div className="hidden md:flex h-20 w-20 rounded-full border border-white/30 bg-white/10 backdrop-blur-md items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
              <ArrowRight className="w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}