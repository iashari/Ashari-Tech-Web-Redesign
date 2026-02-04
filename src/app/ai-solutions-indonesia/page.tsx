"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import FaultyTerminal from "@/components/FaultyTerminal";
import GlassSurface from "@/components/GlassSurface";

export default function AISolutionsPage() {
  const services = [
    {
      title: "Chatbot AI Indonesia",
      desc: "Chatbot cerdas berbahasa Indonesia untuk customer service, automasi sales, dan internal support menggunakan teknologi GPT dan NLP.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Computer Vision",
      desc: "Deteksi objek, facial recognition, OCR, dan quality control otomatis menggunakan deep learning untuk berbagai industri.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Predictive Analytics",
      desc: "Machine learning untuk forecasting, demand prediction, analisis perilaku pelanggan, dan keputusan berbasis data.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Natural Language Processing",
      desc: "Sentiment analysis, text classification, dan document processing untuk pemahaman bahasa Indonesia yang akurat.",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
  ];

  const whyUs = [
    {
      title: "Tim Ahli AI",
      desc: "Engineer berpengalaman membangun AI solutions di berbagai industri Indonesia",
    },
    {
      title: "Custom & Scalable",
      desc: "Solusi dirancang khusus untuk bisnis Anda, dari MVP hingga enterprise deployment",
    },
    {
      title: "Teknologi Terkini",
      desc: "Menggunakan OpenAI GPT, TensorFlow, PyTorch, dan teknologi AI terbaru",
    },
    {
      title: "Support Penuh",
      desc: "Layanan end-to-end dari konsultasi hingga maintenance berkelanjutan",
    },
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "Analisis kebutuhan dan use case bisnis Anda" },
    { step: "02", title: "Data Prep", desc: "Pengumpulan dan persiapan data training" },
    { step: "03", title: "Development", desc: "Pengembangan dan training model AI" },
    { step: "04", title: "Deploy", desc: "Deployment ke production dan monitoring" },
  ];

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

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
                AI SOLUTIONS INDONESIA
              </span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            AI Solutions Indonesia
          </h1>

          {/* Subtitle */}
          <h2
            className="text-xl md:text-2xl lg:text-3xl font-medium text-white mb-6"
            style={{ textShadow: "0 0 20px rgba(97, 6, 223, 0.8), 0 0 40px rgba(97, 6, 223, 0.4)" }}
          >
            untuk Bisnis Modern
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
            Custom artificial intelligence untuk automasi bisnis, chatbot cerdas,
            dan machine learning dari perusahaan AI Indonesia terpercaya.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-28 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-primary/80 uppercase mb-4 block">
              Layanan AI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Solusi AI yang Kami Tawarkan
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Berbagai layanan AI untuk memenuhi kebutuhan transformasi digital bisnis Anda
            </p>
          </div>

          <BentoGrid cols={2}>
            {services.map((service) => (
              <BentoCard key={service.title} className="p-8 group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 transition-all group-hover:bg-primary/20 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.desc}</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-28 relative">
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-primary/80 uppercase mb-4 block">
              Keunggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Mengapa Pilih Ashari Tech?
            </h2>
          </div>

          <BentoGrid cols={2}>
            {whyUs.map((item, i) => (
              <BentoCard key={item.title} className="p-8 group">
                <span className="text-5xl font-bold text-primary/20 mb-4 block">0{i + 1}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-28 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-primary/80 uppercase mb-4 block">
              Proses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bagaimana Kami Bekerja
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item, i) => (
              <div
                key={item.step}
                className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-primary/30 transition-all group"
              >
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/20" />
                )}
                <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-white mt-4 mb-2">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Siap Implementasi AI untuk Bisnis Anda?
            </h2>
            <p className="text-white/60 mb-8">
              Konsultasi dengan tim ahli Ashari Tech. Gratis, tanpa komitmen.
            </p>
            <a
              href="https://wa.me/6285280452688"
              target="_blank"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
            >
              Konsultasi Gratis
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <p className="text-white/40 text-sm mt-4">contact@ashari.tech</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
