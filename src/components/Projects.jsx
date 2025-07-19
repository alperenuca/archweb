import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Villa Projesi",
    image: "/images/villa.jpg",
  },
  {
    title: "Ofis Binası",
    image: "/images/office.jpg",
  },
  {
    title: "Konut Kompleksi",
    image: "/images/housing.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:border-accent-400 bg-white/60 backdrop-blur-md transition-all duration-300"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
            >
              <div className="relative aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-accent-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end backdrop-blur-sm">
                  <span className="w-full text-center text-white text-lg font-bold pb-4 drop-shadow-lg group-hover:translate-y-0 translate-y-4 transition-all duration-300">
                    {project.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 