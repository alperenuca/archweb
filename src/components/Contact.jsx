import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">İletişim</h2>
        <p className="mb-8 text-gray-700">Bizimle iletişime geçmek veya Instagram'dan takip etmek için aşağıdaki formu doldurun ya da sosyal medya hesabımıza göz atın.</p>
        <a
          href="https://instagram.com/voesa.technology"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 px-8 py-3 bg-gradient-to-r from-primary via-accent-700 to-accent-400 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200"
        >
          Instagram'da Takip Et
        </a>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 flex flex-col gap-4 text-left border border-gray-100">
          <input
            type="text"
            name="name"
            placeholder="Adınız"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
          />
          <textarea
            name="message"
            placeholder="Mesajınız"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/60 transition"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 relative font-semibold rounded-full group focus:outline-none focus:ring-2 focus:ring-primary/60 ring-offset-2"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent-700 to-accent-400 blur-sm opacity-60 group-hover:opacity-90 group-hover:blur group-hover:scale-105 transition-all duration-300 z-0"></span>
            <span className="relative z-10 text-white">Gönder</span>
            <span className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-primary via-accent-700 to-accent-400 opacity-80 group-hover:opacity-100 transition-all duration-300 z-0"></span>
          </button>
          {submitted && (
            <p className="text-green-600 mt-2">Mesajınız iletildi. Teşekkürler!</p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
