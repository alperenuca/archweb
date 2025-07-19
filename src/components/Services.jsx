import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mimari Tasarım",
    icon: (
      <svg className="w-10 h-10 mb-4 text-primary group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M4 21V8.5a1 1 0 0 1 .553-.894l7-3.5a1 1 0 0 1 .894 0l7 3.5A1 1 0 0 1 20 8.5V21" /></svg>
    ),
  },
  {
    title: "İç Mekan Tasarımı",
    icon: (
      <svg className="w-10 h-10 mb-4 text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 21V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v13M9 21V12h6v9" /></svg>
    ),
  },
  {
    title: "Danışmanlık",
    icon: (
      <svg className="w-10 h-10 mb-4 text-primary group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Hizmetler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center border border-gray-200 group hover:border-accent-400 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
            >
              <span>{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 