"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function SEOPage() {
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "3 Juta",
      duration: "/bulan",
      target: "Bisnis baru yang mulai fokus SEO",
      features: ["10 keywords target", "AI keyword research", "On-page optimization", "Technical SEO audit", "Google Search Console setup", "Monthly reports", "Basic competitor analysis", "Email support"],
    },
    {
      name: "Growth",
      price: "6 Juta",
      duration: "/bulan",
      popular: true,
      target: "Bisnis yang butuh pertumbuhan organik signifikan",
      features: ["25 keywords target", "Full on-page & off-page optimization", "4 artikel/bulan + AI enhancement", "10 quality backlinks/bulan", "Bi-weekly reports & dashboard", "Detailed competitor analysis", "WhatsApp priority support"],
    },
    {
      name: "Scale",
      price: "12 Juta",
      duration: "/bulan",
      target: "Target agresif di market kompetitif",
      features: ["Unlimited keywords target", "Complete technical SEO", "10 artikel/bulan + AI optimization", "25 quality backlinks/bulan", "Local SEO & schema markup", "Weekly dashboard & strategy calls", "Dedicated SEO specialist", "Monthly strategy review"],
    },
  ];

  const faqs = [
    { q: "Berapa lama hasil SEO terlihat?", a: "Hasil awal biasanya terlihat dalam 1-2 bulan. Peningkatan signifikan dalam 3-6 bulan tergantung kompetisi keyword dan kondisi website saat ini." },
    { q: "Apa bedanya AI keyword research dengan tools biasa?", a: "AI kami menganalisis search intent, semantic keywords, dan peluang tersembunyi yang sering terlewat oleh tools tradisional. Hasilnya, coverage topik 2x lebih comprehensive." },
    { q: "Apakah ada jaminan ranking #1?", a: "Tidak ada yang bisa menjamin ranking #1 secara pasti. Kami fokus pada best practices dan continuous improvement yang terbukti memberikan hasil di 95% klien kami." },
    { q: "Apakah artikel sudah termasuk?", a: "Ya, paket Growth sudah termasuk 4 artikel/bulan dan Scale 10 artikel/bulan. Semua ditulis oleh professional writer dan dioptimasi dengan AI." },
    { q: "Bisa pause atau stop layanan?", a: "Ya, dengan notice 2 minggu sebelumnya. Kontrak minimum 3 bulan untuk memastikan SEO mendapat waktu cukup menunjukkan hasil." },
  ];

  const currentTier = tiers[activeTier];

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Header */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 text-center relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              AI-Powered
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Jasa SEO & Content Marketing
            </h1>
            <p className="text-base text-white/70 max-w-[600px] mx-auto leading-relaxed mb-4">
              Tingkatkan ranking Google dengan strategi SEO berbasis AI — keyword research otomatis, content optimization, dan quality link building untuk pertumbuhan organik berkelanjutan
            </p>
            <p className="text-white font-semibold text-lg">Mulai Rp 3 Juta/bulan</p>
          </div>
        </section>

        {/* Interactive Pricing */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Pilih Paket SEO Anda</h2>
              <p className="text-sm text-white/60">Klik paket untuk melihat detail lengkap</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Tier Selector */}
              <div className="lg:col-span-4 space-y-3">
                {tiers.map((tier, i) => (
                  <button
                    key={tier.name}
                    onClick={() => setActiveTier(i)}
                    className={`w-full text-left p-5 rounded-xl transition-all border ${
                      activeTier === i
                        ? "bg-gradient-to-r from-primary/15 to-transparent border-primary shadow-[0_0_20px_rgba(97,6,223,0.15)]"
                        : "border-white/10 bg-white/[0.02] hover:border-primary/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-semibold">{tier.name}</h3>
                        {tier.popular && (
                          <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full">POPULAR</span>
                        )}
                      </div>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        activeTier === i ? "border-primary" : "border-white/20"
                      }`}>
                        {activeTier === i && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white">
                      Rp {tier.price}
                      <span className="text-sm font-normal text-white/50 ml-1">{tier.duration}</span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Detail Panel */}
              <div className="lg:col-span-8">
                <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-8 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-2xl font-bold text-white">{currentTier.name}</h3>
                        {currentTier.popular && (
                          <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">Recommended</span>
                        )}
                      </div>
                      <p className="text-sm text-white/60">{currentTier.target}</p>
                    </div>
                    <div className="sm:text-right">
                      <div className="text-3xl font-bold text-white">Rp {currentTier.price}</div>
                      <p className="text-sm text-white/50">{currentTier.duration}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-8 flex-1">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Yang Anda Dapatkan</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {currentTier.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm text-white/70">
                          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-primary shrink-0 mt-0.5">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="https://wa.me/6285280452688" target="_blank" className="flex-1 text-center px-6 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all">
                      Mulai {currentTier.name}
                    </a>
                    <a href="/pricing" className="flex-1 text-center px-6 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all">
                      Bandingkan Semua Layanan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/50 text-center mt-6">Semua harga belum termasuk PPN 11%. Minimum kontrak 3 bulan.</p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">AI-Powered Keyword Discovery</h2>
              <p className="text-sm text-white/60 leading-relaxed">AI kami mengidentifikasi keyword opportunities yang terlewat kompetitor, menganalisis search intent, dan menghasilkan coverage topik <strong className="text-white">2x lebih comprehensive</strong> dibanding SEO tools tradisional.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Layanan yang Kami Berikan
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "AI Keyword Research", desc: "Identifikasi peluang keyword tersembunyi dengan AI, termasuk long-tail dan semantic keywords" },
                { title: "Content Creation & AI Optimization", desc: "Artikel ditulis professional writer dan dioptimasi AI untuk relevansi, readability, dan SEO" },
                { title: "Quality Link Building", desc: "Backlink dari sumber berkualitas dan relevan untuk meningkatkan domain authority" },
                { title: "Technical SEO Audit", desc: "Audit komprehensif — site speed, crawlability, mobile-friendliness, structured data" },
                { title: "Transparent Reporting", desc: "Dashboard real-time dengan metrik ranking, traffic, dan actionable insights" },
                { title: "Competitor Analysis", desc: "Analisis strategi kompetitor untuk menemukan celah dan peluang yang bisa dimanfaatkan" },
              ].map((f) => (
                <div key={f.title} className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300 group">
                  <h3 className="text-white font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Process
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Proses Kerja
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { step: "Audit", desc: "Analisis website, kompetitor, dan keyword" },
                { step: "Strategy", desc: "SEO roadmap dan target prioritization" },
                { step: "Execute", desc: "Implementasi dan pembuatan konten" },
                { step: "Optimize", desc: "Monitoring dan continuous improvement" },
              ].map((s, i) => (
                <div key={s.step} className="text-center border border-white/10 bg-white/[0.02] rounded-xl p-5">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full font-bold mx-auto mb-3 shadow-[0_4px_15px_rgba(97,6,223,0.3)]">{i + 1}</div>
                  <h3 className="text-white font-semibold text-sm mb-1">{s.step}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[720px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Pertanyaan Umum
              </h2>
            </div>
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/10 bg-white/[0.02] rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left text-white font-medium text-sm hover:text-primary transition-colors"
                  >
                    <span>{faq.q}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 text-white/50 shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`}>
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-[200px]" : "max-h-0"}`}>
                    <p className="px-5 pb-5 text-sm text-white/60 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[550px] mx-auto px-6 md:px-16 text-center relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Siap Ranking #1 di Google?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Dapatkan free SEO audit untuk website Anda. Kami tunjukkan peluang yang bisa langsung dioptimasi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <a href="https://wa.me/6285280452688" target="_blank" className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all">Chat via WhatsApp</a>
              <a href="mailto:contact@ashari.tech" className="px-8 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all">Email Kami</a>
            </div>
            <p className="text-xs text-white/50 mt-6">Melayani seluruh Indonesia — Jakarta, Surabaya, Bandung, Medan, Semarang</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
