"use client";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqData from "@/data/faqs.json";
import { Link as ScrollLink } from "react-scroll";

export function FAQClient() {
  return (
    <main className="min-h-screen flex flex-col bg-white selection:bg-primary/20">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 text-center bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-medium text-primary mb-6"
          >
            Support Center
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground font-light max-w-lg mx-auto leading-relaxed"
          >
            Everything you need to know about your journey to better rest.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Sticky Sidebar Navigation */}
          <div className="hidden lg:block lg:col-span-3">
             <div className="sticky top-32 space-y-2">
               <span className="text-xs font-bold tracking-widest text-primary/40 uppercase block mb-4 px-3">Categories</span>
               {faqData.categories.map((cat, i) => (
                 <ScrollLink 
                   key={i} 
                   to={`cat-${i}`} 
                   smooth={true} 
                   offset={-120} 
                   duration={500}
                   className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg cursor-pointer transition-colors text-sm font-medium"
                   activeClass="bg-primary/5 text-primary font-bold"
                   spy={true}
                 >
                   {cat.name}
                 </ScrollLink>
               ))}
             </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-8 lg:col-start-5 space-y-16">
            {faqData.categories.map((cat, i) => (
              <div key={i} id={`cat-${i}`} className="scroll-mt-32">
                <h2 className="text-2xl font-display font-medium text-primary mb-6 flex items-center gap-4">
                  {cat.name}
                  <div className="h-px flex-1 bg-border/50" />
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {cat.items.map((item, j) => (
                    <AccordionItem key={j} value={`${i}-${j}`} className="border-border/40">
                      <AccordionTrigger className="text-lg font-medium text-foreground/80 hover:text-primary hover:no-underline py-6">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground font-light leading-relaxed text-base pb-6 pr-8">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
            
            {/* Contact Box */}
            <div className="bg-primary/5 rounded-3xl p-10 text-center mt-12">
               <h3 className="font-display text-2xl font-medium text-primary mb-2">Still have questions?</h3>
               <p className="text-muted-foreground font-light mb-6">
                 Our sleep experts are ready to help guide your choice.
               </p>
               <a 
                 href="mailto:hello@sheepiesleep.com" 
                 className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
               >
                 Contact Support
               </a>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
