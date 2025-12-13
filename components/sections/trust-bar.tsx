"use client";

import { motion } from "framer-motion";
import { Truck, ShieldCheck, Heart, Moon } from "lucide-react";

const benefits = [
  { icon: Moon, title: "Better Sleep", desc: "Ergonomically designed for deep rest." },
  { icon: ShieldCheck, title: "Quality Guarantee", desc: "Premium materials, built to last." },
  { icon: Truck, title: "Fast Shipping", desc: "Delivered across Indonesia in days." },
  { icon: Heart, title: "Loved by Thousands", desc: "Join our community of sleepers." },
];

export function TrustBar() {
  return (
    <section className="py-20 border-b border-border/40 bg-white relative z-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              <div className="p-4 rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                <item.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-medium text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-[15ch] mx-auto">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}