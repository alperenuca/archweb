import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center mt-12 border-t border-gray-800 relative overflow-hidden">
      {/* Animasyon svg bg */}
      <svg className="absolute top-0 left-0 w-full h-8 md:h-12" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:1}}>
        <path fill="#3b82f6" fillOpacity="0.10" d="M0,32L60,42.7C120,53,240,75,360,69.3C480,64,600,32,720,5.3C840,-21,960,-43,1080,-26.7C1200,-11,1320,43,1380,69.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"/>
      </svg>
      <div className="flex flex-col items-center gap-2 relative z-10">
        <a
          href="https://instagram.com/voesa.technology"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          Instagram
        </a>
        <span className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Artema Mimarlık. Tüm hakları saklıdır.</span>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent-700 to-accent-400 opacity-60 z-10" />
    </footer>
  );
} 