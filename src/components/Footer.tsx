export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] relative">
      {/* Main footer content */}
      <div className="relative">
        {/* Border top line */}
        <div className="w-full h-px bg-primary" />

        {/* Footer content */}
        <div className="max-w-[1100px] mx-auto px-6 md:px-16 relative z-10 pt-14 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <a href="/" className="flex items-center gap-2 mb-4">
                <svg className="w-7 h-5" viewBox="105 154 290 191" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M198.965 221L257.586 221L250 249.5L242.414 278L227.242 335H285.863L301.035 278L316.208 221H374.827L390 164L331.38 164H272.759H214.137H155.517L198.965 221ZM198.965 221L191.379 249.5L183.792 278L168.62 335H110L125.172 278L140.345 221L198.965 221Z" fill="#6106DF"/>
                </svg>
                <span className="text-sm font-medium text-white tracking-tight">
                  Ashari<span className="text-white/40">.Tech</span>
                </span>
              </a>
              <p className="text-xs text-white/40 leading-relaxed max-w-[280px] font-light">
                Perusahaan teknologi AI Indonesia yang berfokus pada solusi AI untuk bisnis dan transformasi digital SME.
              </p>
            </div>

            {/* AI Solutions */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white/60 font-medium mb-4">AI Solutions</h4>
              <ul className="space-y-3">
                {[
                  "Operational Automation",
                  "Custom AI Development",
                  "Website & Company Profile",
                  "SEO & Content Marketing",
                  "Social Media & Digital Ads",
                ].map((item) => (
                  <li key={item}>
                    <a href="/#services" className="text-xs text-white/40 hover:text-primary/70 transition-colors font-light">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white/60 font-medium mb-4">Company</h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/#about" },
                  { label: "Portfolio", href: "/#portfolio" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "FAQ", href: "/#faq" },
                ].map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="text-xs text-white/40 hover:text-primary/70 transition-colors font-light">{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Partners */}
            <div>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white/60 font-medium mb-4">Contact</h4>
              <ul className="space-y-3 mb-6">
                <li>
                  <a href="mailto:contact@ashari.tech" className="text-xs text-white/40 hover:text-primary/70 transition-colors font-light">
                    contact@ashari.tech
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/6285280452688" target="_blank" className="text-xs text-white/40 hover:text-primary/70 transition-colors font-light">
                    +62 852-8045-2688
                  </a>
                </li>
              </ul>
              <h4 className="text-xs uppercase tracking-[0.15em] text-white/60 font-medium mb-4">Partners</h4>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.brainybuddy.app" target="_blank" className="text-xs text-white/40 hover:text-primary/70 transition-colors font-light">
                    Brainy Buddy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-white/40 hover:text-primary/70 transition-colors font-light">
                    Mitra Edukasi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - outside the background element wrapper */}
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">
        <div className="pt-6 pb-8 border-t border-white/10 text-center">
          <p className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-light">&copy; 2026 AshariTech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
