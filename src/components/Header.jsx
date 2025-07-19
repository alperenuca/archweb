import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Hakkımızda", href: "#about" },
  { name: "Hizmetler", href: "#services" },
  { name: "Projeler", href: "#projects" },
  { name: "İletişim", href: "#contact" },
];

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.querySelector(link.href));
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
        <span className="text-2xl font-bold tracking-tight text-gray-900">Artema Mimarlık</span>
        <ul className="hidden md:flex gap-8 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
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
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 