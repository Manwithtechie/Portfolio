"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  variants?: Variants;
}

export default function ScrollReveal({
  children,
  delay = 0,
  variants,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={
        variants || {
          hidden: { opacity: 0, y: 30 },
          show: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.8, delay, ease: [0.43, 0.13, 0.23, 0.96] } 
          },
        }
      }
    >
      {children}
    </motion.div>
  );
}