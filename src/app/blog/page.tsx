"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { BentoCard } from "@/components/BentoGrid";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    slug: "ashari-tech-enterprise-software-development-comparison",
    title: "Enterprise-Grade AI Solutions for Indonesian Businesses: The Ashari Tech Advantage",
    description: "Discover how growing Indonesian businesses can access enterprise-quality AI and software development without enterprise pricing...",
    category: "Business Strategy",
    readTime: "12 menit",
    date: "18 Januari 2026",
    featured: true,
  },
  {
    slug: "5-proses-bisnis-otomasi-ai",
    title: "5 Proses Bisnis yang Bisa Diotomasi AI (Tanpa Budget Besar)",
    description: "Discover 5 operational processes yang paling cocok untuk AI automation tanpa memerlukan investasi besar...",
    category: "AI Automation",
    readTime: "8 menit",
    date: "10 Januari 2026",
  },
  {
    slug: "roi-realistis-implementasi-ai",
    title: "ROI Realistis dari Implementasi AI di UMKM",
    description: "Berapa lama break-even dari investasi AI automation? Data real dari implementasi di berbagai bisnis...",
    category: "Business Strategy",
    readTime: "10 menit",
    date: "9 Januari 2026",
  },
  {
    slug: "chatbot-ai-vs-chatbot-biasa",
    title: "Chatbot AI vs Chatbot Biasa: Apa Bedanya?",
    description: "Penjelasan teknis tapi mudah dipahami tentang perbedaan rule-based chatbot dengan AI-powered chatbot...",
    category: "AI Technology",
    readTime: "5 menit",
    date: "8 Januari 2026",
  },
];

const categoryColors: Record<string, string> = {
  "Business Strategy": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Automation": "bg-green-500/10 text-green-400 border-green-500/20",
  "AI Technology": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const latestPosts = blogPosts.filter((post) => !post.featured);

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1100px] mx-auto px-6 md:px-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs tracking-wider mb-6">
            BLOG
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI Solutions & Business Automation Insights
          </h1>
          <p className="text-lg text-white/70 max-w-2xl">
            Artikel, panduan, dan insights tentang{" "}
            <span className="text-white">AI solutions</span>,{" "}
            <span className="text-white">otomasi bisnis</span>, dan transformasi
            digital untuk UMKM Indonesia.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 relative">
          <div className="max-w-[1100px] mx-auto px-6 md:px-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs">
                Featured Article
              </span>
            </div>

            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="group rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 hover:border-primary/30 hover:bg-white/[0.04] transition-all cursor-pointer">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className={`px-3 py-1 rounded-full border text-xs ${categoryColors[featuredPost.category]}`}
                  >
                    {featuredPost.category}
                  </span>
                  <span className="text-white/40 text-sm">{featuredPost.readTime}</span>
                  <span className="text-white/40 text-sm">•</span>
                  <span className="text-white/40 text-sm">{featuredPost.date}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/60 text-lg mb-6 max-w-3xl">
                  {featuredPost.description}
                </p>

                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  Baca Selengkapnya
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Latest Articles */}
      <section className="py-20 relative">
        <div className="max-w-[1100px] mx-auto px-6 md:px-16">
          <h2 className="text-2xl font-bold text-white mb-8">Artikel Terbaru</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <BentoCard className="p-6 h-full group cursor-pointer">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className={`px-2 py-1 rounded-full border text-xs ${categoryColors[post.category]}`}
                      >
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-white/60 mb-4 line-clamp-3 flex-grow">
                      {post.description}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-white/40 mt-auto">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </BentoCard>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Dapatkan Update Artikel Terbaru
            </h2>
            <p className="text-white/60 mb-8">
              Subscribe untuk mendapat artikel, tips, dan case study tentang AI automation langsung ke email Anda.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-1 px-5 py-3 rounded-full bg-white/[0.05] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
