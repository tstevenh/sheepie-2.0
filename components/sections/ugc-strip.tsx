"use client";

import Image from "next/image";
import photoshoot from "@/data/photoshoot.json";
import { cn } from "@/lib/utils";

// Split images into two rows for the marquee
const mid = Math.ceil(photoshoot.length / 2);
const row1 = photoshoot.slice(0, mid);
const row2 = photoshoot.slice(mid);

export function UGCStrip() {
  return (
    <section className="py-24 bg-white overflow-hidden space-y-8">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-display font-medium text-primary">
          Life with Sheepie
        </h2>
        <p className="text-muted-foreground mt-4 font-light text-lg">
          Join thousands of well-rested sleepers. #SleepWithSheepie
        </p>
      </div>

      <div className="relative w-full flex flex-col gap-4 md:gap-8">
        {/* Row 1: Left to Right */}
        <div className="flex gap-4 md:gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...row1, ...row1].map((src, i) => (
            <div key={`r1-${i}`} className="relative h-64 md:h-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
               <Image 
                 src={src} 
                 alt="Sheepie Moment" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-700"
                 sizes="(max-width: 768px) 50vw, 25vw"
               />
            </div>
          ))}
        </div>

        {/* Row 2: Right to Left */}
        <div className="flex gap-4 md:gap-8 w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {[...row2, ...row2].map((src, i) => (
            <div key={`r2-${i}`} className="relative h-64 md:h-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-sm flex-shrink-0">
               <Image 
                 src={src} 
                 alt="Sheepie Moment" 
                 fill 
                 className="object-cover hover:scale-110 transition-transform duration-700"
                 sizes="(max-width: 768px) 50vw, 25vw"
               />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}