"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const categories = [
  {
    id: "website",
    label: "Website",
    title: "Website & Company Profile",
    desc: "Website profesional dengan AI chatbot included",
    link: "/layanan/website-company-profile",
    tiers: [
      {
        name: "Starter",
        price: "2.5 Juta",
        duration: "One-time",
        target: "Bisnis baru yang butuh kehadiran online",
        features: ["1-5 halaman, mobile-responsive", "Basic SEO & contact forms", "WhatsApp integration", "1 bulan AI chatbot trial", "SSL certificate", "1 revisi included", "1 tahun hosting & domain"],
      },
      {
        name: "Professional",
        price: "5 Juta",
        duration: "One-time",
        popular: true,
        target: "Bisnis yang butuh website lengkap dan profesional",
        features: ["6-10 halaman, custom branding", "Full SEO optimization", "CMS included (kelola sendiri)", "3 bulan AI chatbot access", "Analytics & tracking setup", "Blog dan portfolio galleries", "3 revisi, training included"],
      },
      {
        name: "Enterprise",
        price: "12 Juta+",
        duration: "One-time",
        target: "Bisnis besar dengan kebutuhan custom",
        features: ["Unlimited halaman", "Premium custom design", "1 tahun AI chatbot access", "E-commerce & payment gateway", "Multi-language support", "Custom API integrations", "Unlimited revisi, priority support", "Monthly maintenance included"],
      },
    ],
  },
  {
    id: "seo",
    label: "SEO",
    title: "SEO & Content Marketing",
    desc: "Tingkatkan ranking Google dengan AI-powered SEO",
    link: "/layanan/seo-content-marketing",
    tiers: [
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
        features: ["25 keywords target", "Full optimization", "4 artikel/bulan + AI enhancement", "10 quality backlinks", "Bi-weekly reports", "Detailed competitor analysis", "WhatsApp priority support"],
      },
      {
        name: "Scale",
        price: "12 Juta",
        duration: "/bulan",
        target: "Target agresif di market kompetitif",
        features: ["Unlimited keywords", "Complete technical SEO", "10 artikel/bulan", "25 quality backlinks", "Local SEO & schema markup", "Weekly dashboard", "Dedicated specialist", "Monthly strategy calls"],
      },
    ],
  },
  {
    id: "socmed",
    label: "Social Media",
    title: "Social Media & Digital Ads",
    desc: "Kelola social media dengan AI audience optimization",
    link: "/layanan/social-media-digital-ads",
    tiers: [
      {
        name: "Starter",
        price: "3 Juta",
        duration: "/bulan",
        target: "Bisnis yang baru mulai social media",
        features: ["2 platform (Instagram + 1)", "12 post designs/bulan", "Content calendar & copywriting", "Basic ads management", "AI creative suggestions", "Monthly reports", "Email support"],
      },
      {
        name: "Professional",
        price: "7 Juta",
        duration: "/bulan",
        popular: true,
        target: "Bisnis yang butuh growth signifikan",
        features: ["3 platform pilihan", "20 post designs/bulan", "4 Reels/TikTok videos", "Meta Ads + Google Ads management", "AI audience optimization & A/B testing", "Bi-weekly reports", "Competitor monitoring", "WhatsApp priority support"],
      },
      {
        name: "Scale",
        price: "15 Juta",
        duration: "/bulan",
        target: "Bisnis dengan target agresif",
        features: ["All platforms", "Unlimited post designs", "10 videos/bulan", "All ads platform management", "AI campaign optimization", "Influencer outreach", "Real-time monitoring & weekly dashboard", "Dedicated account manager"],
      },
    ],
  },
];

const faqs = [
  { q: "Apakah harga sudah termasuk pajak?", a: "Harga belum termasuk PPN 11% yang akan ditambahkan saat invoice." },
  { q: "Berapa lama kontrak minimum?", a: "Layanan bulanan memerlukan minimum 3 bulan komitmen. Website bersifat one-time project." },
  { q: "Bagaimana metode pembayaran?", a: "Transfer bank. Website: 50% di awal, 50% saat selesai. Layanan bulanan: pembayaran di muka setiap bulan." },
  { q: "Bisa custom package?", a: "Ya, hubungi kami untuk paket custom sesuai kebutuhan dan budget spesifik bisnis Anda." },
  { q: "Ada garansi?", a: "Website: 1 bulan bug fix warranty. Layanan recurring: execution guarantee sesuai deliverables yang disepakati." },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("website");
  const [activeTier, setActiveTier] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;
  const currentTier = currentCategory.tiers[activeTier];

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
              Pricing
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Investasi yang Terukur
            </h1>
            <p className="text-base text-white/70 max-w-[500px] mx-auto leading-relaxed">
              Semua layanan termasuk AI enhancement. Harga transparan, tanpa biaya tersembunyi.
            </p>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="flex justify-center mb-12">
              <div className="inline-flex border border-white/10 bg-white/[0.02] rounded-xl p-1.5 gap-1">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => { setActiveCategory(cat.id); setActiveTier(1); }}
                    className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-primary text-white shadow-[0_4px_15px_rgba(97,6,223,0.3)]"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Header */}
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-white mb-2">{currentCategory.title}</h2>
              <p className="text-sm text-white/60">{currentCategory.desc}</p>
            </div>

            {/* Tier Selector + Detail View */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Tier Cards (Left) */}
              <div className="lg:col-span-4 space-y-3">
                {currentCategory.tiers.map((tier, i) => (
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
                          <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold rounded-full">
                            POPULAR
                          </span>
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

              {/* Detail Panel (Right) */}
              <div className="lg:col-span-8">
                <div className="border border-white/10 bg-white/[0.02] rounded-2xl p-8 h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">{currentTier.name}</h3>
                        {currentTier.popular && (
                          <span className="px-2 py-0.5 bg-primary text-white text-xs font-bold rounded-full">Recommended</span>
                        )}
                      </div>
                      <p className="text-sm text-white/60">{currentTier.target}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-white">Rp {currentTier.price}</div>
                      <p className="text-sm text-white/50">{currentTier.duration}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-6 mb-8">
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
                    <a
                      href="https://wa.me/6285280452688"
                      target="_blank"
                      className="flex-1 text-center px-6 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all"
                    >
                      Pilih {currentTier.name}
                    </a>
                    <a
                      href={currentCategory.link}
                      className="flex-1 text-center px-6 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all"
                    >
                      Lihat Detail Layanan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-16 bg-black relative overflow-hidden">
          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: "✓", label: "AI Enhancement Included" },
                { icon: "✓", label: "Tanpa Biaya Tersembunyi" },
                { icon: "✓", label: "Konsultasi Gratis" },
                { icon: "✓", label: "Support Berkelanjutan" },
              ].map((b) => (
                <div key={b.label} className="flex items-center justify-center gap-2 py-3">
                  <span className="w-5 h-5 bg-primary/20 text-primary text-xs rounded-full flex items-center justify-center font-bold">{b.icon}</span>
                  <span className="text-sm text-white/70">{b.label}</span>
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
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className={`w-4 h-4 text-white/50 shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`}
                    >
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

          <div className="max-w-[600px] mx-auto px-6 md:px-16 text-center relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Butuh Penawaran Khusus?
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Budget terbatas? Kami bisa bantu carikan solusi terbaik sesuai kemampuan Anda.
            </p>
            <a
              href="https://wa.me/6285280452688"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all"
            >
              Chat via WhatsApp
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
