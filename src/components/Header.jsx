import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Hakkımızda", href: "#about" },
  { name: "Hizmetler", href: "#services" },
  { name: "Projeler", href: "#projects" },
  { name: "İletişim", href: "#contact" },
  { name: "SSS", href: "/faq", external: true },
];

export default function Header() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link =>
        link.href.startsWith("#") ? document.querySelector(link.href) : null
      );
      const scrollY = window.scrollY + 80;
      let current = "";
      sections.forEach((section, i) => {
        if (section && section.offsetTop <= scrollY) {
          current = navLinks[i].href;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors duration-200">Artema Mimarlık</Link>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              {link.external ? (
                <a
                  href={link.href}
                  className="relative transition-colors duration-200 pb-1 hover:text-primary/80"
                >
                  {link.name}
                </a>
              ) : (
                <a
                  href={link.href}
                  className={`relative transition-colors duration-200 pb-1 ${
                    active === link.href
                      ? "text-primary after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-primary after:rounded-full"
                      : "hover:text-primary/80"
                  }`}
                >
                  {link.name}
                </a>
              )}
            </li>
          ))}
        </ul>
        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50"
          aria-label="Menüyü Aç/Kapat"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block w-6 h-0.5 bg-gray-900 mb-1.5 rounded transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-gray-900 mb-1.5 rounded transition-all duration-300"></span>
          <span className="block w-6 h-0.5 bg-gray-900 rounded transition-all duration-300"></span>
        </button>
      </nav>
      {/* Right-side sliding mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
            />
            {/* Sliding panel */}
            <motion.div
              className="fixed inset-y-0 right-0 h-screen w-4/5 max-w-xs bg-white shadow-2xl z-[100] flex flex-col rounded-l-3xl overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 35 }}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link to="/" className="text-xl font-bold tracking-tight text-gray-900 hover:text-primary transition-colors duration-200">Artema Mimarlık</Link>
                <Link
                  to="/"
                  className="ml-4 px-4 py-1 rounded-full bg-primary text-white font-semibold text-sm shadow hover:bg-primary/90 transition hidden md:inline-block"
                  style={{ marginLeft: 16 }}
                >
                  Ana Sayfa
                </Link>
                <button
                  className="text-gray-500 text-3xl focus:outline-none hover:text-primary"
                  aria-label="Menüyü Kapat"
                  onClick={() => setMenuOpen(false)}
                >
                  &times;
                </button>
              </div>
              {/* Mobile menu Ana Sayfa button */}
              <div className="md:hidden flex justify-center mt-4">
                <Link
                  to="/"
                  className="px-9 py-2 rounded-full font-semibold text-black bg-white hover:bg-gray-500 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Ana Sayfa
                </Link>
              </div>
              <div className="flex flex-col gap-8 px-6 py-8">
                <nav className="flex flex-col items-center gap-6">
                  {navLinks.map((link, i) => (
                    link.external ? (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className="text-lg font-semibold px-6 py-3 w-full text-center rounded-xl transition-colors duration-200 text-black hover:bg-gray-100"
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ delay: 0.08 * i, duration: 0.35, type: "spring" }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </motion.a>
                    ) : (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className={`text-lg font-semibold px-6 py-3 w-full text-center rounded-xl transition-colors duration-200 ${
                          active === link.href ? "bg-primary/10 text-primary" : "text-black hover:bg-gray-100"
                        }`}
                        style={{
                          boxShadow: active === link.href ? "0 2px 8px 0 rgba(59,130,246,0.08)" : undefined,
                        }}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 0 }}
                        transition={{ delay: 0.08 * i, duration: 0.35, type: "spring" }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </motion.a>
                    )
                  ))}
                </nav>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="https://instagram.com/voesa.technology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-200 text-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                    Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
} 