"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-center px-6 sm:px-12"
    >
      <ScrollReveal delay={0.2}>
        <h2 className="text-5xl sm:text-6xl font-extrabold mb-6 text-purple-400">
          About Me
        </h2>
      </ScrollReveal>

      <ScrollReveal delay={0.4}>
        <p className="max-w-3xl text-gray-300 text-lg sm:text-xl leading-relaxed">
          I’m <span className="text-white font-semibold">Manvith</span> — a data scientist
          passionate about building intelligent systems, uncovering insights from data,
          and crafting elegant dashboards that tell powerful stories.
          <br />
          <br />
          Currently based in <span className="text-purple-400">Adelaide</span>, I combine
          technical depth with creative storytelling to bring data to life.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <a
          href="#contact"
          className="mt-8 inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
        >
          Contact Me
        </a>
      </ScrollReveal>
    </section>
  );
}