"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "Java", "JavaScript"],
  },
  {
    title: "Data Engineering & Databases",
    skills: ["MySQL", "PostgreSQL", "MariaDB", "ETL", "Data Warehousing"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["Deep Learning", "NLP", "Computer Vision", "Model Deployment", "RAG"],
  },
  {
    title: "Visualization & BI",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Plotly"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Git/GitHub"],
  },
  {
    title: "Tools / Other",
    skills: ["MLflow", "Weights & Biases", "Airflow", "Prefect", "REST APIs"],
  },
];

const randomRotation = () => Math.floor(Math.random() * 21) - 10;

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6 sm:px-12 py-16"
    >
      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold mb-12 text-purple-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={idx}
            className="group perspective w-full h-64"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180 rounded-xl">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-zinc-800 border border-purple-500 rounded-xl flex items-center justify-center text-center p-4 text-xl font-semibold text-purple-400 backface-hidden">
                {category.title}
              </div>

              {/* Back Side */}
              <div className="absolute w-full h-full border border-purple-500 rounded-xl backface-hidden rotate-y-180 flex flex-wrap items-center justify-center gap-4 p-4">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skillIdx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: randomRotation() }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, textShadow: "0 0 8px #a855f7" }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.1 }}
                    className="border border-purple-500 text-purple-400 font-semibold px-4 py-2 rounded-lg text-lg sm:text-xl"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}