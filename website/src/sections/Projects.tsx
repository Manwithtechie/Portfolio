"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "LLM Based Market News Analyzer",
    timeline: "Dec 2024 – May 2025",
    bullets: [
      "Web-based app to analyze financial news & stock trends using NLP.",
      "Integrated sentiment analysis & finance APIs.",
      "Personalized watchlist, stock price alerts, AI-powered news summarization.",
    ],
    reference: "https://ieeexplore.ieee.org/document/11069851",
    live: "#",
  },
  {
    title: "Retail Analytics Platform",
    timeline: "Oct 2025 – Present",
    bullets: [
      "Engineered data pipeline simulating Coles supermarket operations.",
      "SQL data warehouse & automated ETL with Python + AWS Lambda.",
      "ML-based sales forecasting models (ARIMA, Prophet).",
    ],
    reference: "https://github.com/Manwithtechie/coles-analytics",
    live: "#",
  },
];

export default function ProjectsHoverOverlay() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-800 text-white px-6 sm:px-12 py-16"
    >
      <h2 className="text-5xl sm:text-6xl font-extrabold mb-12 text-purple-400">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#a855f7"
              glarePosition="all"
              className="relative bg-zinc-900 border border-purple-500 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Front Side */}
              <div className="p-8 h-72 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-3xl font-bold text-purple-400 self-center">
                  {project.title}
                </h3>
                <span className="text-gray-300 text-sm sm:text-base mt-1 self-center">
                  {project.timeline}
                </span>
              </div>

              {/* Hover Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-zinc-900/95 flex flex-col justify-center p-6 space-y-4"
              >
                <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base">
                  {project.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex justify-center space-x-4">
                  {project.reference && (
                    <a
                      href={project.reference}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-lg hover:bg-purple-600 hover:text-white transition"
                    >
                      Reference
                    </a>
                  )}
                  {/* {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-purple-600/30 text-purple-200 rounded-lg hover:bg-purple-600 hover:text-white transition"
                    >
                      Live Demo
                    </a>
                  )} */}
                </div>
              </motion.div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}