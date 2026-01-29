"use client";

import { createContext, useContext, ReactNode } from "react";

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  // Navbar
  "nav.home": "Beranda",
  "nav.about": "Tentang",
  "nav.services": "Layanan",
  "nav.portfolio": "Portofolio",
  "nav.pricing": "Harga",
  "nav.faq": "FAQ",
  "nav.contact": "Kontak",

  // Hero
  "hero.label": "Studio Solusi AI",
  "hero.prefix": "Kami bangun",
  "hero.description": "AI custom untuk bisnis Indonesia.\nSiap produksi & terukur",
  "hero.cta": "Konsultasi",
  "hero.portfolio": "Portofolio",

  // About
  "about.label": "Tentang Kami",
  "about.title": "Solusi AI untuk\nTransformasi Digital",
  "about.description": "Memberdayakan bisnis Indonesia dengan solusi AI yang inovatif dan terjangkau",
  "about.value1.title": "Keahlian AI",
  "about.value1.desc": "Spesialis machine learning dengan pengalaman di berbagai industri",
  "about.value2.title": "Teknologi Terkini",
  "about.value2.desc": "GPT, Computer Vision, NLP dan teknologi AI terdepan lainnya",
  "about.value3.title": "Fokus pada UMKM",
  "about.value3.desc": "Solusi AI yang terjangkau untuk semua ukuran bisnis",
  "about.value4.title": "Buatan Indonesia",
  "about.value4.desc": "Memahami kebutuhan dan tantangan bisnis lokal Indonesia",
  "about.why": "Mengapa Memilih Kami",
  "about.benefit1.title": "Kustom & Skalabel",
  "about.benefit1.desc": "Solusi yang disesuaikan dengan kebutuhan bisnis Anda dan siap berkembang",
  "about.benefit2.title": "Pengembangan Menyeluruh",
  "about.benefit2.desc": "Dari konsultasi hingga deployment dan maintenance",
  "about.benefit3.title": "Terjangkau untuk UMKM",
  "about.benefit3.desc": "Harga transparan dan terjangkau untuk UMKM Indonesia",
  "about.benefit4.title": "Dukungan & Pelatihan",
  "about.benefit4.desc": "Pelatihan tim dan dukungan berkelanjutan setelah deployment",

  // Services
  "services.label": "Layanan",
  "services.title": "Agensi Digital dengan\nTeknologi AI",
  "services.viewAll": "Lihat Semua",
  "services.viewDetail": "Lihat Detail",
  "services.badge1": "Populer",
  "services.badge2": "Terbaik",
  "services.badge3": "Berkembang",
  "services.service1.title": "Website & Company Profile",
  "services.service1.f1": "Desain responsif",
  "services.service1.f2": "Optimasi SEO",
  "services.service1.f3": "AI chatbot included",
  "services.service1.f4": "UI/UX modern",
  "services.service2.title": "SEO & Content Marketing",
  "services.service2.f1": "Riset keyword AI",
  "services.service2.f2": "Optimasi konten",
  "services.service2.f3": "Laporan bulanan",
  "services.service2.f4": "Peningkatan ranking",
  "services.service3.title": "Social Media & Digital Ads",
  "services.service3.f1": "Target audience AI",
  "services.service3.f2": "Multi-platform",
  "services.service3.f3": "Dashboard performa",
  "services.service3.f4": "Optimasi bulanan",
  "services.process": "Proses Kerja",
  "services.step1.title": "Konsultasi",
  "services.step1.desc": "Diskusi kebutuhan dan target bisnis Anda",
  "services.step2.title": "Proposal",
  "services.step2.desc": "Rekomendasi solusi dengan harga transparan",
  "services.step3.title": "Eksekusi",
  "services.step3.desc": "Pengerjaan dengan update progress berkala",
  "services.step4.title": "Dukungan",
  "services.step4.desc": "Pelatihan, maintenance, dan optimasi berkelanjutan",

  // Industries
  "industries.label": "Industri",
  "industries.title": "Industri yang Kami Layani",
  "industries.description": "Pengalaman di berbagai sektor dengan solusi AI yang terukur",
  "industries.stat1": "Proyek Selesai",
  "industries.stat2": "Klien Puas",
  "industries.stat3": "Tingkat Kepuasan",
  "industries.ind1": "Retail & E-Commerce",
  "industries.ind2": "Kesehatan & Med-Tech",
  "industries.ind3": "Keuangan & Fintech",
  "industries.ind4": "Pendidikan & Edtech",
  "industries.ind5": "Manufaktur & Logistik",
  "industries.ind6": "Marketing & Periklanan",

  // FAQ
  "faq.label": "FAQ",
  "faq.title": "Pertanyaan yang Sering Ditanyakan",
  "faq.q1": "Apakah bisnis kecil perlu website?",
  "faq.a1": "Ya, website adalah investasi penting untuk bisnis kecil. Website meningkatkan kredibilitas, memperluas jangkauan pelanggan, dan memungkinkan bisnis beroperasi 24/7.",
  "faq.q2": "Berapa lama pembuatan website?",
  "faq.a2": "Waktu pengerjaan bervariasi tergantung kompleksitas. Website company profile biasanya selesai dalam 2-4 minggu, sedangkan proyek yang lebih kompleks bisa memakan waktu lebih lama.",
  "faq.q3": "Bagaimana perbandingan harga dengan kompetitor?",
  "faq.a3": "Kami menawarkan harga yang kompetitif dengan value lebih karena sudah termasuk integrasi AI, SEO optimization, dan support berkelanjutan.",
  "faq.q4": "Bagaimana proses update teknologi?",
  "faq.a4": "Kami menyediakan maintenance rutin dan update teknologi untuk memastikan website dan sistem AI Anda selalu up-to-date dengan perkembangan terbaru.",
  "faq.q5": "Apakah bisa bayar cicilan?",
  "faq.a5": "Ya, kami menyediakan opsi pembayaran cicilan untuk memudahkan UMKM. Hubungi kami untuk diskusi skema pembayaran yang sesuai.",
  "faq.q6": "Bagaimana mengukur keberhasilan?",
  "faq.a6": "Kami menyediakan dashboard analytics dan laporan bulanan dengan metrik yang jelas seperti traffic, conversion rate, dan ROI.",
  "faq.q7": "Bagaimana proses migrasi dari vendor lain?",
  "faq.a7": "Kami memiliki tim berpengalaman untuk proses migrasi yang smooth. Data dan konten Anda akan dipindahkan dengan aman tanpa downtime yang berarti.",
  "faq.q8": "Bagaimana cara memulai?",
  "faq.a8": "Cukup hubungi kami melalui email atau WhatsApp untuk konsultasi gratis. Tim kami akan membantu menganalisis kebutuhan dan memberikan rekomendasi solusi terbaik.",

  // Contact
  "contact.label": "Mulai Sekarang",
  "contact.title": "Siap Transformasi\nBisnis Anda?",
  "contact.description": "Konsultasi gratis tanpa komitmen. Ceritakan kebutuhan bisnis Anda dan kami bantu carikan solusi terbaik.",
  "contact.whatsapp": "Chat via WhatsApp",
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const t = (key: string): string => {
    return translations[key as keyof typeof translations] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
