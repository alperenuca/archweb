import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const projects = [
  {
    title: "Villa Projesi",
    images: [
      "/images/villa.jpg",
      "/images/villa.jpg",
      "/images/villa.jpg"
    ],
    slug: "villa-projesi",
    description: "Modern ve lüks bir villa projesi."
  },
  {
    title: "Ofis Binası",
    images: [
      "/images/office.jpg",
      "/images/office.jpg"
    ],
    slug: "ofis-binasi",
    description: "Yenilikçi ve fonksiyonel ofis binası."
  },
  {
    title: "Konut Kompleksi",
    images: [
      "/images/housing.jpg",
      "/images/housing.jpg"
    ],
    slug: "konut-kompleksi",
    description: "Aileler için konforlu konut kompleksi."
  },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [current, setCurrent] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Proje bulunamadı</h2>
        <Link to="/projects" className="text-primary underline">Projeler listesine dön</Link>
      </div>
    );
  }

  const images = project.images || [];
  const hasMultiple = images.length > 1;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center">
        {/* Image Slider */}
        {hasMultiple ? (
          <div className="relative w-full mb-6">
            <img
              src={images[current]}
              alt={project.title}
              className="w-full rounded-xl shadow object-cover h-64 sm:h-80"
            />
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-primary text-primary hover:text-white rounded-full p-2 shadow transition"
              aria-label="Önceki görsel"
            >
              &#8592;
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-primary text-primary hover:text-white rounded-full p-2 shadow transition"
              aria-label="Sonraki görsel"
            >
              &#8594;
            </button>
            <div className="flex justify-center gap-2 mt-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full ${i === current ? "bg-primary" : "bg-gray-300"}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Görsel ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          <img src={images[0]} alt={project.title} className="w-full rounded-xl mb-6 shadow object-cover h-64 sm:h-80" />
        )}
        <h1 className="text-3xl font-bold mb-4 text-center">{project.title}</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">{project.description}</p>
        <Link to="/projects" className="inline-block px-6 py-2 bg-primary text-white rounded-full font-semibold shadow hover:bg-primary/90 transition">Projeler listesine dön</Link>
      </div>
    </div>
  );
} 