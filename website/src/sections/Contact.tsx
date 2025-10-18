"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        "service_x61sx0w",
        "template_gmcpal5",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "DVr_gH71na-1ygXZK"
      );

      setStatus("✅ Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white px-6 sm:px-12 py-16"
    >
      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold mb-12 text-purple-400"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-zinc-800 p-8 rounded-xl shadow-lg flex flex-col gap-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="p-3 rounded-lg bg-zinc-700 text-white placeholder-gray-400 border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px #a855f7" }}
          transition={{ duration: 0.3 }}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg text-lg disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>

        {status && (
          <p className="text-center mt-2 text-sm text-gray-300">{status}</p>
        )}

        <div className="mt-4 flex justify-center gap-6 text-gray-300">
          <a href="mailto:manvith@example.com" className="hover:text-purple-400 transition">Email</a>
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-purple-400 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" className="hover:text-purple-400 transition">LinkedIn</a>
        </div>
      </motion.form>
    </section>
  );
}