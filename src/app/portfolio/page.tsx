"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BentoGrid, BentoCard } from "@/components/BentoGrid";
import Link from "next/link";
import Squares from "@/components/Squares";

export default function PortfolioPage() {
  const metrics = [
    { value: "75%", label: "Admin Time Saved" },
    { value: "100%", label: "Attendance Accuracy" },
    { value: "24/7", label: "Parent Access" },
    { value: "Zero", label: "Manual Errors" },
  ];

  const features = [
    {
      title: "Smart Attendance System",
      desc: "Holiday-aware clock-in/out dengan integrasi hari libur nasional Indonesia",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Learning Management",
      desc: "Course modules dengan progress tracking untuk setiap peserta",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "Assignment Workflows",
      desc: "Distribusi dan penilaian tugas otomatis dengan notifikasi",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Parent Portal",
      desc: "Token-based access untuk orang tua monitoring attendance dan progress",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "AI Integration",
      desc: "Onboarding wizard dan automasi provisioning akun",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Google Workspace Sync",
      desc: "Auto-provision @ashari.tech email untuk approved employees",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const techStack = [
    "Next.js 16",
    "TypeScript",
    "MongoDB",
    "Supabase Auth",
    "AWS S3",
    "Docker Swarm",
    "Google Workspace API",
    "RBAC System",
  ];

  const upcomingProjects = [
    {
      title: "E-Commerce Customer Service Bot",
      desc: "AI chatbot berbahasa Indonesia untuk handle product inquiries, order tracking, dan basic troubleshooting",
      status: "In Development",
    },
    {
      title: "Inventory Prediction System",
      desc: "Machine learning model untuk forecast demand dan optimize stock levels berdasarkan historical data",
      status: "In Development",
    },
    {
      title: "Document Processing Automation",
      desc: "OCR + NLP untuk extract data dari invoice/receipt, auto-categorize, dan export ke accounting system",
      status: "In Development",
    },
  ];

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Squares Background */}
        <div className="absolute inset-0">
          <Squares
            color="#6106DF"
            size={40}
            speed={0.5}
            direction="diagonal"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 md:px-16 pointer-events-none">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-wider mb-6">
            PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Portfolio & Case Studies
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Sistem dan solusi AI yang kami develop untuk berbagai kebutuhan bisnis. Dari{" "}
            <span className="text-white">employee management platforms</span> hingga{" "}
            <span className="text-white">custom automation workflows</span>.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16">
          {/* Case Study Header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs">
              2025
            </span>
            <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs">
              Featured Project
            </span>
          </div>

          {/* Main Case Study Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Internal Employee Management Platform
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-3xl">
              Full-stack platform untuk mengelola PKL (praktik kerja lapangan) dengan AI integration,
              attendance automation, learning management, dan workflow optimization.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="text-sm text-white/60">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Challenge & Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </span>
                  Challenge
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Managing 30+ interns secara manual via spreadsheets dan WhatsApp — attendance tracking,
                  course monitoring, assignment grading, dan koordinasi dengan orang tua.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Solution
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Custom platform dengan intelligent automation: holiday-aware attendance system,
                  integrated learning paths, automated assignment workflows, dan parent portal.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <h3 className="text-lg font-semibold text-white mb-6">Key Features</h3>
            <BentoGrid cols={3} className="mb-12">
              {features.map((feature) => (
                <BentoCard key={feature.title} className="p-6 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-all">
                    {feature.icon}
                  </div>
                  <h4 className="text-white font-medium mb-2">{feature.title}</h4>
                  <p className="text-sm text-white/60">{feature.desc}</p>
                </BentoCard>
              ))}
            </BentoGrid>

            {/* Tech Stack */}
            <h3 className="text-lg font-semibold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-white/[0.05] border border-white/10 text-sm text-white/70"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Projects */}
      <section className="py-20 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs">
              Coming Soon
            </span>
          </div>

          <h2 className="text-2xl font-bold text-white mb-8">Upcoming Projects</h2>

          <BentoGrid cols={3}>
            {upcomingProjects.map((project) => (
              <BentoCard key={project.title} className="p-6 group">
                <span className="inline-block px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs mb-4">
                  {project.status}
                </span>
                <h3 className="text-lg font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{project.desc}</p>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Butuh Custom AI Solution?
            </h2>
            <p className="text-white/60 mb-8">
              Dari employee management hingga operational automation — kami develop sistem
              yang sesuai kebutuhan spesifik bisnis Anda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#about"
                className="px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-full text-sm font-medium transition-all"
              >
                Tentang Kami
              </Link>
              <a
                href="mailto:contact@ashari.tech"
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                Konsultasi Gratis →
              </a>
            </div>
            <p className="text-white/40 text-sm mt-6">
              contact@ashari.tech • Response time &lt; 24 hours
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
