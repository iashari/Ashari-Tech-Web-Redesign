"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";

export default function WebsitePage() {
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const tiers = [
    {
      name: "Starter",
      price: "2.5 Juta",
      duration: "One-time",
      target: "Bisnis baru yang butuh kehadiran online profesional",
      features: ["1-5 halaman, mobile-responsive", "Basic SEO & contact forms", "WhatsApp integration", "1 bulan AI chatbot trial", "SSL certificate", "1 revisi included", "1 tahun hosting & domain"],
      timeline: "5-7 hari kerja",
    },
    {
      name: "Professional",
      price: "5 Juta",
      duration: "One-time",
      popular: true,
      target: "Bisnis yang butuh website lengkap dengan fitur advanced",
      features: ["6-10 halaman, custom branding", "Full SEO optimization", "CMS included (kelola konten sendiri)", "3 bulan AI chatbot access", "Google Analytics & tracking setup", "Blog dan portfolio galleries", "3 revisi, training included"],
      timeline: "10-14 hari kerja",
    },
    {
      name: "Enterprise",
      price: "12 Juta+",
      duration: "One-time",
      target: "Bisnis besar dengan kebutuhan custom & kompleks",
      features: ["Unlimited halaman", "Premium custom design", "1 tahun AI chatbot access", "E-commerce & payment gateway", "Multi-language support", "Custom API integrations", "Unlimited revisi, priority support", "Monthly maintenance included"],
      timeline: "3-4 minggu",
    },
  ];

  const faqs = [
    { q: "Berapa lama pengerjaan website?", a: "Starter: 5-7 hari kerja, Professional: 10-14 hari kerja, Enterprise: 3-4 minggu. Timeline dimulai setelah konten dan referensi lengkap." },
    { q: "Apakah saya bisa update konten sendiri?", a: "Ya, paket Professional dan Enterprise sudah termasuk CMS sehingga Anda bisa update konten sendiri. Kami juga menyediakan training penggunaan." },
    { q: "Apakah ada biaya maintenance bulanan?", a: "Hosting dan domain gratis 1 tahun. Setelahnya, biaya perpanjangan mulai Rp 500K/tahun. Maintenance optional mulai Rp 500K/bulan." },
    { q: "Bisa request fitur custom?", a: "Ya, fitur custom tersedia untuk semua paket. Harga menyesuaikan kompleksitas fitur yang diminta. Konsultasikan kebutuhan Anda." },
    { q: "Bagaimana AI chatbot bekerja?", a: "AI chatbot kami di-train dengan informasi bisnis Anda untuk menjawab pertanyaan pengunjung 24/7 secara otomatis, meningkatkan engagement dan konversi." },
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
                  AI-ENHANCED
                </span>
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Jasa Pembuatan Website & Company Profile
            </h1>

            {/* Subtitle */}
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6"
              style={{ textShadow: "0 0 20px rgba(97, 6, 223, 0.8), 0 0 40px rgba(97, 6, 223, 0.4)" }}
            >
              Mulai Rp 2.5 Juta
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Tingkatkan kredibilitas bisnis dengan website modern yang dilengkapi AI chatbot untuk engagement lebih baik
            </p>
          </div>
        </section>

        {/* Interactive Pricing */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">Pilih Paket yang Sesuai</h2>
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

                  <div className="flex items-center gap-2 mb-6 px-3 py-2 bg-primary/10 rounded-lg w-fit border border-primary/20">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-primary">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="text-sm text-primary font-medium">Estimasi: {currentTier.timeline}</span>
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
            <p className="text-xs text-white/50 text-center mt-6">Semua harga belum termasuk PPN 11%. Hosting & domain included 1 tahun pertama.</p>
          </div>
        </section>

        {/* Value Prop */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[800px] mx-auto px-6 md:px-16 relative">
            <div className="bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl font-bold text-white mb-3">Setiap Website Termasuk AI Chatbot Gratis</h2>
              <p className="text-sm text-white/60 leading-relaxed">AI chatbot menjawab pertanyaan pengunjung 24/7. Meningkatkan engagement <strong className="text-white">40%</strong> dan mengurangi bounce rate. Tidak ada agency lain yang memberikan ini sebagai standar.</p>
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
                Features
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                Fitur yang Anda Dapatkan
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "AI Chatbot 24/7", desc: "Chatbot cerdas yang di-train dengan info bisnis Anda, menjawab pertanyaan pengunjung otomatis" },
                { title: "Mobile Responsive", desc: "Tampil sempurna di semua perangkat — desktop, tablet, dan smartphone" },
                { title: "SEO Optimized", desc: "Struktur dan konten dioptimasi agar mudah ditemukan di Google" },
                { title: "Fast Loading", desc: "Loading time di bawah 3 detik untuk pengalaman user terbaik dan ranking lebih tinggi" },
                { title: "SSL & Security", desc: "SSL certificate gratis, 99.9% uptime guarantee, dan protection dari serangan umum" },
                { title: "Support & Training", desc: "Pelatihan penggunaan CMS dan dukungan teknis via WhatsApp" },
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
                Timeline Pengerjaan
              </h2>
            </div>
            <div className="space-y-3">
              {[
                { day: "Day 1", title: "Konsultasi", desc: "Diskusi requirements, target audience, referensi design, dan konten yang dibutuhkan" },
                { day: "Day 2-3", title: "Design Mockup", desc: "Pembuatan mockup design untuk approval sebelum masuk tahap development" },
                { day: "Day 4-6", title: "Development", desc: "Full website build, responsive testing, integrasi AI chatbot dan fitur lainnya" },
                { day: "Day 7", title: "Launch & Training", desc: "Final review, hosting & domain setup, pelatihan penggunaan CMS, dan handover" },
              ].map((s) => (
                <div key={s.day} className="flex gap-4 items-start border border-white/10 bg-white/[0.02] rounded-xl p-5">
                  <span className="px-3 py-1.5 bg-primary/15 text-primary text-xs font-semibold rounded-full shrink-0 mt-0.5 border border-primary/20">{s.day}</span>
                  <div>
                    <h3 className="text-white font-semibold text-sm">{s.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                  </div>
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
              Siap Punya Website Profesional?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Konsultasi gratis tanpa komitmen. Kami bantu tentukan paket terbaik untuk bisnis Anda.
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
