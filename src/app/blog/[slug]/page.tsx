import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  "ashari-tech-enterprise-software-development-comparison": {
    slug: "ashari-tech-enterprise-software-development-comparison",
    title: "Enterprise-Grade AI Solutions for Indonesian Businesses: The Ashari Tech Advantage",
    description: "Discover how growing Indonesian businesses can access enterprise-quality AI and software development without enterprise pricing.",
    category: "Business Strategy",
    readTime: "12 menit",
    date: "18 Januari 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          Memilih partner pengembangan software adalah keputusan bisnis yang kritis. Artikel ini membahas
          tiga opsi yang tersedia untuk bisnis Indonesia dan mengapa specialized AI firms menjadi pilihan
          pragmatis untuk banyak perusahaan.
        </p>

        <h2>The Enterprise Software Development Landscape</h2>
        <p>
          Saat ini, bisnis Indonesia memiliki beberapa pilihan untuk kebutuhan pengembangan software:
        </p>

        <h3>1. Global IT Service Giants</h3>
        <p>
          Perusahaan seperti Accenture, Deloitte, IBM, dan TCS menawarkan layanan komprehensif dengan
          track record global. Namun, budget yang diperlukan seringkali di luar jangkauan UMKM Indonesia.
        </p>

        <h3>2. Platform-Specific Development Services</h3>
        <p>
          Partner resmi Azure, Salesforce, atau AWS berfokus pada ekosistem tertentu. Cocok jika Anda
          sudah committed dengan satu platform, tapi kurang fleksibel untuk kebutuhan custom.
        </p>

        <h3>3. Specialized AI Development Firms</h3>
        <p>
          Perusahaan seperti Ashari Tech berada di kategori ini — menawarkan kapabilitas teknis
          enterprise-grade dengan agility startup dan harga yang lebih accessible.
        </p>

        <h2>Why Ashari Tech: Six Core Advantages</h2>

        <h3>Enterprise-Grade Technical Capabilities, Startup-Level Agility</h3>
        <p>
          Kami menggabungkan keahlian teknis yang biasa ditemukan di enterprise consultancy dengan
          kecepatan dan fleksibilitas startup. Tidak ada birokrasi berlebih — langsung bicara dengan
          engineer yang akan mengerjakan project Anda.
        </p>

        <h3>Production-Ready AI Systems</h3>
        <p>
          Brainy Buddy adalah contoh sistem AI production kami yang melayani ribuan user setiap hari.
          Bukan prototype atau demo — ini sistem yang sudah proven di real environment.
        </p>

        <h3>Transparent, Flexible Pricing</h3>
        <p>
          Range harga kami:
        </p>
        <ul>
          <li><strong>MVP Development:</strong> Rp 15-50 juta</li>
          <li><strong>Production v1.0:</strong> Rp 50-200 juta</li>
        </ul>
        <p>
          Clients typically save 20-30% dibanding global consultancies dengan delivery time yang lebih cepat.
        </p>

        <h3>Understanding Indonesian Business Requirements</h3>
        <p>
          Kami memahami konteks bisnis lokal — dari integrasi dengan sistem perbankan Indonesia,
          compliance requirements, hingga preferensi user Indonesia dalam interaksi dengan AI.
        </p>

        <h3>Scalable Architecture Design</h3>
        <p>
          Case study: E-commerce client kami didesain untuk 5,000 orders/day. Saat campaign besar,
          sistem berhasil handle 15,000 orders — tanpa downtime, tanpa emergency scaling.
        </p>

        <h3>Integration Expertise</h3>
        <p>
          Kami berpengalaman mengintegrasikan AI solutions dengan berbagai sistem — dari legacy
          ERP hingga modern cloud infrastructure.
        </p>

        <h2>Selection Framework</h2>
        <p>
          Gunakan weighted scorecard ini untuk mengevaluasi development partner:
        </p>
        <ul>
          <li><strong>Technical Capabilities (30%):</strong> Stack expertise, AI/ML track record</li>
          <li><strong>Business Alignment (25%):</strong> Industry experience, size fit</li>
          <li><strong>Communication & Process (20%):</strong> Responsiveness, project management</li>
          <li><strong>Support & Longevity (15%):</strong> Post-launch support, company stability</li>
          <li><strong>Innovation & Future-Proofing (10%):</strong> Tech adoption, scalability</li>
        </ul>

        <h2>When Ashari Tech is NOT the Right Choice</h2>
        <p>
          Kami percaya pada honest assessment. Ashari Tech mungkin bukan pilihan tepat jika:
        </p>
        <ul>
          <li>Anda memerlukan vendor dengan presence di multiple countries untuk compliance</li>
          <li>Project memerlukan team size 50+ developers simultaneously</li>
          <li>Anda sudah heavily invested di satu platform dan memerlukan certified partner</li>
          <li>Budget unlimited dan prefer brand recognition dari Big 4 consultancy</li>
        </ul>

        <h2>Ready to Discuss Your Project?</h2>
        <p>
          Kami menawarkan konsultasi strategi 60 menit gratis — tanpa sales pressure, murni diskusi
          teknis untuk memahami kebutuhan Anda. Bahkan jika akhirnya Anda memilih vendor lain,
          Anda akan mendapat insight berharga dari sesi ini.
        </p>
      </>
    ),
  },
  "5-proses-bisnis-otomasi-ai": {
    slug: "5-proses-bisnis-otomasi-ai",
    title: "5 Proses Bisnis yang Bisa Diotomasi AI (Tanpa Budget Besar)",
    description: "Discover 5 operational processes yang paling cocok untuk AI automation tanpa memerlukan investasi besar.",
    category: "AI Automation",
    readTime: "8 menit",
    date: "10 Januari 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          AI automation tidak harus mahal. Berikut 5 proses bisnis yang bisa diotomasi dengan
          investasi reasonable dan ROI yang cepat.
        </p>

        <h2>1. Customer Service dengan AI Chatbot</h2>
        <p>
          AI chatbot modern bisa handle 60-80% pertanyaan rutin customer — product inquiries,
          order status, FAQ. Tim CS Anda bisa fokus pada case yang benar-benar memerlukan human touch.
        </p>

        <h2>2. Document Processing</h2>
        <p>
          OCR + AI bisa extract data dari invoice, receipt, form dengan akurasi tinggi. Tidak perlu
          lagi input manual yang time-consuming dan error-prone.
        </p>

        <h2>3. Lead Qualification</h2>
        <p>
          AI bisa score dan qualify leads berdasarkan behavior, engagement, dan fit dengan ideal
          customer profile. Sales team fokus pada leads dengan probability tinggi.
        </p>

        <h2>4. Inventory Forecasting</h2>
        <p>
          Machine learning bisa predict demand berdasarkan historical data, seasonal patterns,
          dan external factors. Kurangi stockout dan overstock.
        </p>

        <h2>5. Content Categorization</h2>
        <p>
          AI bisa auto-categorize, tag, dan organize content — dari email triage hingga
          document management. Hemat waktu searching dan organizing.
        </p>

        <h2>Getting Started</h2>
        <p>
          Mulai dari satu proses yang paling pain point. Prove value, lalu scale ke proses lain.
          Konsultasikan dengan kami untuk assessment gratis.
        </p>
      </>
    ),
  },
  "roi-realistis-implementasi-ai": {
    slug: "roi-realistis-implementasi-ai",
    title: "ROI Realistis dari Implementasi AI di UMKM",
    description: "Berapa lama break-even dari investasi AI automation? Data real dari implementasi di berbagai bisnis.",
    category: "Business Strategy",
    readTime: "10 menit",
    date: "9 Januari 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          Banyak vendor AI menjanjikan ROI fantastis. Mari kita lihat data realistis dari
          implementasi actual di UMKM Indonesia.
        </p>

        <h2>Typical ROI Timeline</h2>
        <p>
          Berdasarkan pengalaman kami:
        </p>
        <ul>
          <li><strong>AI Chatbot:</strong> Break-even 3-6 bulan</li>
          <li><strong>Document Processing:</strong> Break-even 4-8 bulan</li>
          <li><strong>Predictive Analytics:</strong> Break-even 6-12 bulan</li>
        </ul>

        <h2>Faktor yang Mempengaruhi ROI</h2>
        <p>
          ROI tergantung pada volume transaksi, current manual effort, dan seberapa well-defined
          prosesnya. Semakin repetitive dan high-volume, semakin cepat ROI.
        </p>

        <h2>Hidden Costs to Consider</h2>
        <p>
          Jangan lupa faktor: training time, change management, ongoing maintenance. Realistic
          planning lebih baik dari optimistic projection.
        </p>
      </>
    ),
  },
  "chatbot-ai-vs-chatbot-biasa": {
    slug: "chatbot-ai-vs-chatbot-biasa",
    title: "Chatbot AI vs Chatbot Biasa: Apa Bedanya?",
    description: "Penjelasan teknis tapi mudah dipahami tentang perbedaan rule-based chatbot dengan AI-powered chatbot.",
    category: "AI Technology",
    readTime: "5 menit",
    date: "8 Januari 2026",
    author: "Andi Ashari",
    content: (
      <>
        <p>
          Tidak semua chatbot sama. Mari pahami perbedaan fundamental antara rule-based chatbot
          dan AI-powered chatbot.
        </p>

        <h2>Rule-Based Chatbot</h2>
        <p>
          Bekerja dengan decision tree yang predefined. User harus mengikuti flow tertentu.
          Bagus untuk use case sederhana dengan path yang jelas.
        </p>

        <h2>AI-Powered Chatbot</h2>
        <p>
          Menggunakan NLP (Natural Language Processing) untuk memahami intent user. Bisa handle
          variasi pertanyaan dan context yang lebih kompleks.
        </p>

        <h2>Mana yang Tepat untuk Bisnis Anda?</h2>
        <p>
          Rule-based: Budget terbatas, use case sederhana, flow predictable.
          <br />
          AI-powered: Volume tinggi, pertanyaan bervariasi, butuh natural conversation.
        </p>
      </>
    ),
  },
};

const categoryColors: Record<string, string> = {
  "Business Strategy": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI Automation": "bg-green-500/10 text-green-400 border-green-500/20",
  "AI Technology": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts[slug];

  if (!post) {
    return (
      <main className="bg-black min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Artikel Tidak Ditemukan</h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Kembali ke Blog
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-[800px] mx-auto px-6 md:px-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 rounded-full border text-xs ${categoryColors[post.category]}`}
            >
              {post.category}
            </span>
            <span className="text-white/40 text-sm">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>Oleh {post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 relative">
        <div className="max-w-[800px] mx-auto px-6 md:px-16">
          <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-semibold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-white/70 prose-p:leading-relaxed prose-p:mb-6 prose-li:text-white/70 prose-ul:my-6 prose-li:my-2 prose-strong:text-white">
            {post.content}
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-[800px] mx-auto px-6 md:px-16">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Butuh Konsultasi AI untuk Bisnis Anda?
            </h2>
            <p className="text-white/60 mb-8">
              Diskusikan kebutuhan spesifik bisnis Anda dengan tim ahli kami. Gratis, tanpa komitmen.
            </p>
            <a
              href="https://wa.me/6285280452688"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full text-sm font-medium transition-all hover:scale-105"
            >
              Konsultasi Gratis
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
