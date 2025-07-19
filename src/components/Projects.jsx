import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Villa Projesi",
    image: "/images/villa.jpg",
    slug: "villa-projesi",
    description: "Modern ve lüks bir villa projesi."
  },
  {
    title: "Ofis Binası",
    image: "/images/office.jpg",
    slug: "ofis-binasi",
    description: "Yenilikçi ve fonksiyonel ofis binası."
  },
  {
    title: "Konut Kompleksi",
    image: "/images/housing.jpg",
    slug: "konut-kompleksi",
    description: "Aileler için konforlu konut kompleksi."
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-20 px-3 sm:px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Projeler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group rounded-2xl overflow-hidden shadow-2xl border border-gray-200 hover:border-accent-400 bg-white/60 backdrop-blur-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/60"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.10)" }}
            >
              <div className="relative aspect-w-4 aspect-h-3 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-accent-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end backdrop-blur-sm">
                  <span className="w-full text-center text-base sm:text-lg font-bold pb-2 sm:pb-4 drop-shadow-lg group-hover:translate-y-0 translate-y-2 sm:translate-y-4 transition-all duration-300">
                    {project.title}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 