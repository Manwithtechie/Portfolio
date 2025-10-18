"use client";

import { motion } from "framer-motion";
import MotionWrapper from "@/components/ui/MotionWrapper";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-3xl"
        animate={{ 
          x: [0, 20, -20, 0],
          y: [0, -20, 20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />

      {/* Content */}
      <MotionWrapper>
        <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
          Hey, I’m <span className="text-purple-400">Manvith</span> 👋
        </h1>
      </MotionWrapper>

      <MotionWrapper delay={0.2}>
        <p className="mt-6 text-lg sm:text-xl max-w-2xl opacity-80">
          A passionate <span className="text-purple-400">Data Scientist</span> crafting insights,
          visual stories, and intelligent systems with precision & creativity.
        </p>
      </MotionWrapper>

      <MotionWrapper delay={0.4}>
  <div className="mt-10 flex gap-4">
    <button
      onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
      className="px-6 py-3 bg-purple-600 hover:bg-purple-700 transition rounded-xl font-semibold"
    >
      Explore My Work
    </button>

    <button
      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      className="px-6 py-3 border border-purple-500 text-purple-400 hover:bg-purple-500/10 transition rounded-xl font-semibold"
    >
      Contact Me
    </button>
  </div>
</MotionWrapper>
    </section>
  );
}