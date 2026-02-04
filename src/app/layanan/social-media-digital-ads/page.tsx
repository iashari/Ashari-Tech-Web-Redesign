"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";

export default function SocialMediaPage() {
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "3 Juta",
      duration: "/bulan",
      target: "Bisnis yang baru mulai membangun social media presence",
      features: ["2 platform (Instagram + 1)", "12 post designs/bulan", "Content calendar & copywriting", "Basic ads management", "AI creative suggestions", "Monthly performance reports", "Email support"],
    },
    {
      name: "Professional",
      price: "7 Juta",
      duration: "/bulan",
      popular: true,
      target: "Bisnis yang butuh growth signifikan di social media",
      features: ["3 platform pilihan", "20 post designs/bulan", "4 Reels/TikTok videos", "Meta Ads + Google Ads management", "AI audience optimization & A/B testing", "Bi-weekly reports & dashboard", "Competitor monitoring", "WhatsApp priority support"],
    },
    {
      name: "Scale",
      price: "15 Juta",
      duration: "/bulan",
      target: "Bisnis dengan target agresif dan budget ads besar",
      features: ["All platforms", "Unlimited post designs", "10 videos/bulan (Reels, TikTok, Shorts)", "All ads platform management", "AI campaign optimization", "Influencer outreach & coordination", "Real-time monitoring & weekly dashboard", "Dedicated account manager & monthly calls"],
    },
  ];

  const faqs = [
    { q: "Apakah biaya ads terpisah dari management fee?", a: "Ya, management fee terpisah dari ad spend. Budget iklan dikontrol langsung oleh klien. Kami rekomendasikan minimum Rp 3-5 juta/bulan untuk ads." },
    { q: "Bagaimana AI audience optimization bekerja?", a: "AI kami menganalisis data audience, engagement patterns, dan conversion data untuk menemukan segmen audience dengan CPA (cost-per-acquisition) terendah secara otomatis." },
    { q: "Siapa yang membuat konten visual?", a: "Tim designer in-house kami yang membuat semua visual content. Kami mengikuti brand guidelines Anda dan memberikan approval sebelum posting." },
    { q: "Bisa fokus di satu platform saja?", a: "Ya, kami bisa customize paket untuk fokus di satu platform. Hubungi kami untuk penawaran custom sesuai kebutuhan." },
    { q: "Berapa minimum kontrak?", a: "Minimum 3 bulan untuk memastikan strategi mendapat waktu cukup menunjukkan hasil. Setelah itu, bisa berhenti dengan notice 2 minggu." },
  ];

  const currentTier = tiers[activeTier];

  return (
    <>
      <Navbar />
      <main className="pb-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* FaultyTerminal Background */}
          <div className="absolute inset-0">
            <FaultyTerminal
              tint="#6106DF"
              scale={2.5}
              gridMul={[2, 1]}
              digitSize={1.5}
              timeScale={0.4}
              scanlineIntensity={0.4}
              glitchAmount={1.2}
              flickerAmount={1}
              noiseAmp={1.2}
              chromaticAberration={0}
              curvature={0.1}
              mouseReact={true}
              mouseStrength={0.4}
              pageLoadAnimation={true}
              brightness={1.3}
            />
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

          {/* Main Content - Centered */}
          <div className="relative z-10 text-center px-6 md:px-16 pt-20 pointer-events-none">
            {/* Badge */}
            <div className="mb-8">
              <span className="relative inline-flex rounded-full overflow-hidden">
                <div className="absolute inset-0">
                  <GlassSurface
                    width="100%"
                    height="100%"
                    borderRadius={50}
                    borderWidth={1}
                    brightness={40}
                    opacity={0.9}
                    blur={4}
                    displace={0}
                    distortionScale={-300}
                    redOffset={-50}
                    greenOffset={-50}
                    blueOffset={-50}
                    className="!w-full !h-full"
                  />
                </div>
                <span className="relative z-10 px-4 py-1.5 text-white text-xs tracking-wider font-medium">
                  AI-OPTIMIZED
                </span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jasa Social Media & Digital Ads
            </h1>

            {/* Subtitle */}
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6"
              style={{ textShadow: "0 0 20px rgba(97, 6, 223, 0.8), 0 0 40px rgba(97, 6, 223, 0.4)" }}
            >
              Mulai Rp 3 Juta/bulan
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Kelola social media dan iklan digital dengan AI optimization — content creation, community management, dan ads management dengan targeting presisi untuk ROI maksimal
            </p>
          </div>
        </section>

        {/* Interactive Pricing */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Pilih Paket Social Media</h2>
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
                      Pilih {currentTier.name}
                    </a>
                    <a href="/pricing" className="flex-1 text-center px-6 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all">
                      Bandingkan Semua Layanan
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xs text-white/50 text-center mt-6">Semua harga belum termasuk PPN 11%. Ad spend terpisah. Minimum kontrak 3 bulan.</p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">AI-Powered Targeting = Budget Lebih Efisien</h2>
              <p className="text-sm text-white/60 leading-relaxed">AI kami menganalisis ribuan data points untuk menemukan audience segment dengan conversion rate tertinggi. Rata-rata klien melihat <strong className="text-white">30% improvement di ROAS</strong> setelah 3 bulan optimasi.</p>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Platforms
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Platform yang Kami Kelola
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
              {[
                { name: "Instagram", desc: "Feed, Stories, Reels" },
                { name: "TikTok", desc: "Video content & ads" },
                { name: "Facebook", desc: "Page management & ads" },
                { name: "LinkedIn", desc: "B2B & professional" },
                { name: "Google Ads", desc: "Search & Display" },
                { name: "YouTube", desc: "Video & Shorts ads" },
              ].map((p) => (
                <div key={p.name} className="border border-white/10 bg-white/[0.02] rounded-xl p-4 text-center hover:border-primary/40 hover:bg-primary/[0.04] transition-all">
                  <h3 className="text-white font-semibold text-sm mb-1">{p.name}</h3>
                  <p className="text-xs text-white/60">{p.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Core Services
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "AI Audience Targeting", desc: "Precision targeting berdasarkan behavior, interest, dan lookalike untuk CPA lebih rendah" },
                { title: "Creative Design", desc: "Visual content yang konsisten dengan brand identity — feed, stories, carousel, video" },
                { title: "Ads Management", desc: "Setup, monitoring, dan optimasi kampanye di Meta, Google, TikTok, dan platform lainnya" },
                { title: "Performance Dashboard", desc: "Real-time metrics: reach, engagement, conversions, ROAS, dan cost-per-result" },
                { title: "Community Management", desc: "Response comments, DM handling, dan membangun relationship dengan audience" },
                { title: "Growth Strategy", desc: "Content planning dan ads strategy yang aligned dengan business goals Anda" },
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
                { step: "Onboarding", desc: "Goals, brand guidelines, platform access" },
                { step: "Strategy", desc: "Content calendar, ads plan, KPI targets" },
                { step: "Execution", desc: "Content creation, posting, ads & community" },
                { step: "Optimize", desc: "Data analysis, A/B testing, improvement" },
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
              Siap Grow Social Media Anda?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Konsultasi gratis untuk audit social media dan rekomendasi strategy yang tepat untuk bisnis Anda.
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
