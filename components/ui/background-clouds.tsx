"use client";

import { motion } from "framer-motion";

export function BackgroundClouds() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#FDFEFE]">
      <motion.div
        animate={{
          x: [-100, 100],
          y: [-50, 50],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-[#a2c1e0]/20 to-[#a2c1e0]/5 blur-[120px] will-change-transform backface-hidden transform-gpu"
      />
      
      <motion.div
        animate={{
          x: [100, -100],
          y: [50, -50],
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-l from-[#213368]/5 to-[#a2c1e0]/10 blur-[150px] will-change-transform backface-hidden transform-gpu"
      />
    </div>
  );
}
