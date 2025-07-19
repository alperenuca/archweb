import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-accent-50 to-gray-100 overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Full-section SVG Backgrounds */}
      <svg className="absolute top-0 left-0 w-full h-40 sm:h-56 md:h-80 lg:h-[28rem] object-cover" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:1}} preserveAspectRatio="none">
        <path fill="#3b82f6" fillOpacity="0.10" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
      </svg>
      <svg className="absolute bottom-0 left-0 w-full h-36 sm:h-52 md:h-72 lg:h-[22rem] object-bottom" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:1}} preserveAspectRatio="none">
        <path fill="#3b82f6" fillOpacity="0.08" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-2xl relative z-10"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent-700 to-accent-400 bg-clip-text text-transparent">
          Modern ve Güvenilir Mimarlık Çözümleri
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
          Artema Mimarlık, estetik ve fonksiyonelliği bir araya getirerek yaşam alanlarınızı dönüştürür.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 sm:px-8 py-2 sm:py-3 relative font-semibold rounded-full group focus:outline-none focus:ring-2 focus:ring-primary/60 ring-offset-2 text-base sm:text-lg"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent-700 to-accent-400 blur-sm opacity-60 group-hover:opacity-90 group-hover:blur group-hover:scale-105 transition-all duration-300 z-0"></span>
          <span className="relative z-10 text-white">İletişime Geç</span>
          <span className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-primary via-accent-700 to-accent-400 opacity-80 group-hover:opacity-100 transition-all duration-300 z-0"></span>
        </a>
      </motion.div>
    </section>
  );
}
