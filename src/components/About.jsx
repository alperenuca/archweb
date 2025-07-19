import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Hakkımızda</h2>
        <p className="text-lg text-gray-700">
        Artema Mimarlık olarak, estetik ve fonksiyonelliği bir araya getiren, yenilikçi ve sürdürülebilir mimari çözümler sunuyoruz. Her projede güven, şeffaflık ve kaliteyi ön planda tutarak; yaşam alanlarına sadece yapı değil, değer katmayı hedefliyoruz.

Uzman ekibimizle konut, ticari yapı ve iç mekan tasarımı alanlarında çağdaş ve özgün projeler üretiyoruz. Çevreye duyarlı, kullanıcı odaklı ve modern yaklaşımlarımızla, hayal ettiğiniz mekanları gerçeğe dönüştürüyoruz.

Mimariyi bir yaşam felsefesi olarak görüyor; sizi yansıtan, bulunduğu çevreyle uyumlu alanlar tasarlıyoruz.
        </p>
      </motion.div>
    </section>
  );
} 