"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import faqData from "@/data/faqs.json";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Flatten the structure to pick a few top FAQs for the homepage
// We'll pick one from each category + general
const featuredFAQs = [
  faqData.categories[0].items[0], // Calmi
  faqData.categories[1].items[0], // LumiCloud Sleep Mask
  faqData.categories[2].items[0], // Cervi
  faqData.categories[3].items[1], // Shipping
];

export function FAQPreview() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-primary/60 text-xs font-bold tracking-widest uppercase">Common Questions</span>
          <h2 className="text-4xl font-display font-medium text-primary mt-2">
            Curious about better sleep?
          </h2>
        </div>
        
        <div className="space-y-4">
          {featuredFAQs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-primary text-lg" asChild>
            <Link href="/faq">View all FAQs &rarr;</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-border/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-6 text-left"
      >
        <span className="font-medium text-lg text-primary">{question}</span>
        <div className={`p-1 rounded-full bg-primary/5 transition-colors ${isOpen ? 'bg-primary text-white' : 'text-primary'}`}>
           {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 text-muted-foreground font-light leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}