import { Variants } from "framer-motion";

export const fadeInUp = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.1, 0.25, 1], // <-- replaced string "easeOut" with numeric cubic-bezier for type safety
    },
  },
});