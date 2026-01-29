import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PortfolioPage() {
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
              Portfolio
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Portfolio & Case Studies
            </h1>
            <p className="text-base text-white/70 max-w-[600px] mx-auto leading-relaxed">
              Sistem dan solusi AI yang kami develop untuk berbagai kebutuhan bisnis
            </p>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="rounded-2xl p-8 md:p-12 border border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary/15 text-primary text-xs font-semibold rounded-full">2025</span>
                <span className="px-3 py-1 bg-white/10 text-white/60 text-xs rounded-full">Production</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
                Internal Employee Management Platform
              </h2>
              <p className="text-base text-white/70 mb-8 max-w-[700px] leading-relaxed">
                Full-stack platform untuk manajemen PKL dengan AI integration, attendance automation, learning management, dan workflow optimization.
              </p>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="rounded-xl p-6 border border-white/10 bg-white/[0.02]">
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Challenge</h3>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Manual management 30+ interns melalui spreadsheets dan WhatsApp, termasuk attendance tracking, progress monitoring, assignment grading, dan parent coordination.
                  </p>
                </div>
                <div className="rounded-xl p-6 border border-white/10 bg-white/[0.02]">
                  <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Solution</h3>
                  <ul className="text-sm text-white/60 space-y-2">
                    <li className="flex gap-2"><span className="text-primary">-</span> Holiday-aware attendance system</li>
                    <li className="flex gap-2"><span className="text-primary">-</span> Integrated learning paths</li>
                    <li className="flex gap-2"><span className="text-primary">-</span> Automated assignment workflows</li>
                    <li className="flex gap-2"><span className="text-primary">-</span> Parent portal (token-based access)</li>
                    <li className="flex gap-2"><span className="text-primary">-</span> AI-powered onboarding</li>
                  </ul>
                </div>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "75%", label: "Admin Time Saved" },
                  { value: "100%", label: "Attendance Accuracy" },
                  { value: "24/7", label: "Parent Access" },
                  { value: "Zero", label: "Manual Errors" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl p-4 text-center border border-white/10 bg-white/[0.02]">
                    <div className="text-2xl font-bold text-primary mb-1">{m.value}</div>
                    <div className="text-xs text-white/60">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["Next.js 16", "TypeScript", "MongoDB", "Supabase Auth", "AWS S3", "Docker Swarm", "Google Workspace API", "RBAC System"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Projects */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[180px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
            <div className="mb-12">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
                Coming Soon
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-[1.15]">
                More Projects
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "E-Commerce Customer Service Bot", desc: "AI chatbot berbahasa Indonesia untuk handle product inquiries, order tracking, dan basic troubleshooting" },
                { title: "Inventory Prediction System", desc: "Machine learning model untuk demand forecasting dan stock optimization berdasarkan historical data" },
                { title: "Document Processing Automation", desc: "OCR + NLP untuk extracting invoice/receipt data dengan auto-categorization" },
              ].map((p) => (
                <div key={p.title} className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] opacity-70">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-5">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.desc}</p>
                  <span className="inline-block mt-3 text-xs text-white/40 italic">Coming soon</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 bg-black relative overflow-hidden">
          {/* Gradient orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/30 rounded-full blur-[200px] pointer-events-none" />

          <div className="max-w-[1100px] mx-auto px-6 md:px-16 text-center relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-medium mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight leading-[1.15]">
              Butuh Custom AI Solution?
            </h2>
            <p className="text-base text-white/70 mb-8 max-w-[500px] mx-auto leading-relaxed">
              Dari employee management hingga operational automation, kami develop sistem sesuai kebutuhan spesifik bisnis Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/#about" className="px-8 py-3.5 border border-white/20 text-white rounded-full font-medium text-sm hover:border-primary/50 hover:bg-primary/[0.04] transition-all">
                Tentang Kami
              </a>
              <a href="https://wa.me/6285280452688" target="_blank" className="px-8 py-3.5 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary/90 transition-all">
                Konsultasi Gratis
              </a>
            </div>
            <p className="text-xs text-white/50 mt-6">contact@ashari.tech • Response time &lt; 24 jam</p>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
