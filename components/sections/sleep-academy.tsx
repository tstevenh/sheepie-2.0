"use client";

import { motion } from "framer-motion";
import { Coffee, Smartphone, Wind, CheckCircle2 } from "lucide-react";

const rituals = [
  {
    icon: Smartphone,
    title: "The Digital Sunset",
    desc: "Blue light suppresses melatonin. 60 minutes before bed, switch to 'Night Shift' mode or, better yet, total darkness.",
    action: "Pair with LumiCloud for 100% optical isolation."
  },
  {
    icon: Coffee,
    title: "The Caffeine Cutoff",
    desc: "Caffeine has a half-life of 5-6 hours. Your last cup should be at 2 PM to ensure your adenosine receptors are ready for sleep.",
    action: "If you're sensitive, CalmiCloud helps block the 'noise' of a racing heart."
  },
  {
    icon: Wind,
    title: "The 4-7-8 Breath",
    desc: "Inhale for 4, hold for 7, exhale for 8. This signals your parasympathetic nervous system to downregulate cortisol.",
    action: "CerviCloud opens your airways for deeper, unobstructed breathing."
  }
];

export function SleepAcademy() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Header */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 mb-12 lg:mb-0">
             <span className="text-primary/60 text-xs font-bold tracking-widest uppercase">The Sleep Academy</span>
             <h2 className="text-4xl md:text-5xl font-display font-medium text-primary leading-tight">
               Rituals for <br/>
               <span className="italic text-primary/70">Restoration.</span>
             </h2>
             <p className="text-muted-foreground font-light leading-relaxed">
               Great sleep isn't just about what you buy. It's about what you do. 
               Adopt these simple evidence-based habits to elevate your night.
             </p>
          </div>

          {/* Cards */}
          <div className="lg:col-span-8 grid gap-6">
            {rituals.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/40 hover:shadow-md transition-shadow group"
              >
                 <div className="flex gap-6 items-start">
                   <div className="p-4 bg-primary/5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                     <item.icon className="w-6 h-6" />
                   </div>
                   <div className="space-y-3">
                     <h3 className="text-xl font-display font-medium text-foreground">{item.title}</h3>
                     <p className="text-muted-foreground font-light leading-relaxed">
                       {item.desc}
                     </p>
                     <div className="flex items-center gap-2 text-sm text-primary font-medium bg-primary/5 w-fit px-3 py-1 rounded-full">
                       <CheckCircle2 className="w-4 h-4" />
                       {item.action}
                     </div>
                   </div>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
