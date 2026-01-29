# Ashari.Tech Website Redesign

Website company profile modern untuk **Ashari.Tech** - Perusahaan teknologi AI Indonesia yang berfokus pada solusi AI untuk bisnis dan transformasi digital UMKM.

![Screenshot](public/screenshot.png)

![Next.js](https://img.shields.io/badge/Next.js-16.1.4-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)

## ✨ Fitur

- **Modern UI/UX** - Desain glassmorphism dengan visual yang clean dan profesional
- **Magic Bento Grid** - Kartu interaktif dengan efek spotlight dan tilt menggunakan GSAP & Framer Motion
- **Responsive Design** - Optimal di semua ukuran layar (mobile, tablet, desktop)
- **Performance Optimized** - Built dengan Next.js 16 Turbopack untuk loading cepat
- **SEO Ready** - Struktur semantic HTML dan meta tags yang teroptimasi
- **Indonesian Language** - Konten dalam Bahasa Indonesia untuk target pasar lokal

## 🛠️ Tech Stack

| Teknologi | Versi | Kegunaan |
|-----------|-------|----------|
| [Next.js](https://nextjs.org/) | 16.1.4 | React Framework dengan App Router |
| [React](https://react.dev/) | 19 | UI Library |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Type Safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Utility-first CSS |
| [GSAP](https://greensock.com/gsap/) | 3 | Animasi spotlight effect |
| [Framer Motion](https://www.framer.com/motion/) | 12 | Animasi tilt effect |

## 📁 Struktur Project

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── portfolio/          # Halaman portofolio
│   ├── pricing/            # Halaman harga
│   └── layanan/            # Halaman detail layanan
│       ├── website-company-profile/
│       ├── seo-content-marketing/
│       └── social-media-digital-ads/
├── components/             # React components
│   ├── Navbar.tsx          # Navigasi dengan glass effect
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # Tentang kami
│   ├── Services.tsx        # Layanan
│   ├── Industries.tsx      # Industri yang dilayani
│   ├── FAQ.tsx             # Frequently Asked Questions
│   ├── Contact.tsx         # Call to action
│   ├── Footer.tsx          # Footer
│   ├── BentoGrid.tsx       # Magic Bento Grid component
│   ├── GlassSurface.tsx    # Glassmorphism effect
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── context/                # React Context
│   └── LanguageContext.tsx # Translations (Indonesian)
└── shaders/                # WebGL shaders untuk efek visual
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/iashari/Ashari-Tech-Web-Redesign.git

# Masuk ke direktori project
cd Ashari-Tech-Web-Redesign

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build untuk Production

```bash
# Build project
npm run build

# Jalankan production server
npm start
```

## 🎨 Komponen Utama

### BentoGrid
Komponen grid interaktif dengan efek:
- **Global Spotlight** - Efek cahaya yang mengikuti cursor
- **Border Glow** - Glow pada border berdasarkan jarak cursor
- **Tilt Effect** - Rotasi subtle saat hover (1.5° max)

```tsx
import { BentoGrid, BentoCard } from "@/components/BentoGrid";

<BentoGrid cols={3}>
  <BentoCard>Content 1</BentoCard>
  <BentoCard>Content 2</BentoCard>
  <BentoCard>Content 3</BentoCard>
</BentoGrid>
```

### GlassSurface
Efek glassmorphism dengan WebGL shader untuk navbar dan button.

## 🎯 Halaman

| Halaman | Route | Deskripsi |
|---------|-------|-----------|
| Homepage | `/` | Landing page dengan semua section |
| Portfolio | `/portfolio` | Showcase project |
| Pricing | `/pricing` | Paket harga layanan |
| Website Service | `/layanan/website-company-profile` | Detail layanan website |
| SEO Service | `/layanan/seo-content-marketing` | Detail layanan SEO |
| Social Media | `/layanan/social-media-digital-ads` | Detail layanan social media |

## 🎨 Brand Colors

| Warna | Hex | Kegunaan |
|-------|-----|----------|
| Primary | `#6106DF` | Warna utama brand |
| Background | `#000000` | Background gelap |
| Text Primary | `#FFFFFF` | Teks utama |
| Text Secondary | `rgba(255,255,255,0.7)` | Teks sekunder |
| Border | `rgba(255,255,255,0.1)` | Border subtle |

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📄 License

MIT License - Lihat [LICENSE](LICENSE) untuk detail.

## 👤 Author

**Ashari.Tech**
- Website: [ashari.tech](https://ashari.tech)
- GitHub: [@iashari](https://github.com/iashari)

---

Dibuat dengan ❤️ di Indonesia
