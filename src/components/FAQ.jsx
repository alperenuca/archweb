import React, { useState } from "react";

const faqs = [
  {
    question: "Mimari projelerinizde hangi yazılımları kullanıyorsunuz?",
    answer: "Projelerimizde AutoCAD, Revit, SketchUp ve Adobe Creative Suite gibi güncel yazılımları kullanıyoruz."
  },
  {
    question: "Anahtar teslim projeler yapıyor musunuz?",
    answer: "Evet, tasarımdan uygulamaya kadar anahtar teslim projeler sunuyoruz. Tüm süreçleri profesyonel ekibimizle yönetiyoruz."
  },
  {
    question: "Sadece konut projeleri mi yapıyorsunuz?",
    answer: "Hayır, konutun yanı sıra ofis, ticari alan, iç mekan ve renovasyon projeleri de gerçekleştiriyoruz."
  },
  {
    question: "Proje sürecinde müşteriyle nasıl iletişim kuruyorsunuz?",
    answer: "Her aşamada düzenli toplantılar ve dijital raporlamalar ile müşterilerimizi bilgilendiriyoruz."
  },
  {
    question: "Fiyatlandırma nasıl yapılıyor?",
    answer: "Proje kapsamı ve müşteri taleplerine göre şeffaf ve detaylı bir fiyatlandırma sunuyoruz."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <section className="max-w-2xl mx-auto my-16 px-4">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Sıkça Sorulan Sorular</h2>
      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl bg-white shadow-sm">
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/60 rounded-xl"
              onClick={() => toggle(idx)}
              aria-expanded={open === idx}
            >
              <span>{faq.question}</span>
              <span className={`ml-4 transition-transform duration-200 ${open === idx ? "rotate-45" : "rotate-0"}`}>+</span>
            </button>
            {open === idx && (
              <div className="px-6 pb-4 text-gray-700 animate-fade-in">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 