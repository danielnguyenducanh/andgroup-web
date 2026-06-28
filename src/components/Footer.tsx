import Link from "next/link";

const subsidiaries = [
  { name: "A&D Law Firm", url: "https://andlaw.vn", desc: "Pháp lý" },
  { name: "A&D Accounting & Tax", url: "https://andacc.vn", desc: "Kế toán & Thuế" },
  { name: "A&D Tech", url: "#", desc: "Công nghệ" },
];

const products = [
  { name: "A&D OS", url: "https://andos.vn" },
  { name: "QuyĐịnh.vn", url: "https://quydinh.vn" },
  { name: "iAgree.vn", url: "https://iagree.vn" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-gold-700/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 border border-gold-500 rounded flex items-center justify-center">
                <span className="text-gold-400 font-serif font-bold text-sm">A&D</span>
              </div>
              <div>
                <div className="text-cream font-serif font-semibold text-lg leading-tight">A&D Group</div>
                <div className="text-gold-500 text-[10px] tracking-[0.2em] uppercase">Tập đoàn</div>
              </div>
            </Link>
            <p className="text-cream/50 text-sm leading-relaxed">
              Kiến tạo giá trị bền vững qua Pháp lý – Kế toán – Công nghệ cho doanh nghiệp Việt Nam.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-5">
              Về chúng tôi
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "Giới thiệu" },
                { href: "/leadership", label: "Ban lãnh đạo" },
                { href: "/ecosystem", label: "Hệ sinh thái" },
                { href: "/careers", label: "Tuyển dụng" },
                { href: "/contact", label: "Liên hệ" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-cream/50 text-sm hover:text-gold-400 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h4 className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-5">
              Công ty thành viên
            </h4>
            <ul className="space-y-3">
              {subsidiaries.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/50 text-sm hover:text-gold-400 transition-colors"
                  >
                    {s.name}
                    <span className="text-cream/30 text-xs ml-1">— {s.desc}</span>
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mt-6 mb-3">
              Sản phẩm A&D Tech
            </h4>
            <ul className="space-y-2">
              {products.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/50 text-sm hover:text-gold-400 transition-colors"
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-5">
              Liên hệ
            </h4>
            <ul className="space-y-4 text-cream/50 text-sm">
              <li className="leading-relaxed">
                Tầng 7, 520 Cách Mạng Tháng Tám<br />
                P. Nhiêu Lộc, TP. Hồ Chí Minh
              </li>
              <li>
                <a href="tel:0896868989" className="hover:text-gold-400 transition-colors">
                  0896 868 989
                </a>
              </li>
              <li>
                <a href="mailto:support@andgroup.com.vn" className="hover:text-gold-400 transition-colors">
                  support@andgroup.com.vn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-gold-700/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs tracking-wide">
            © {new Date().getFullYear()} A&D Group. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs">
            Pháp lý · Kế toán · Công nghệ
          </p>
        </div>
      </div>
    </footer>
  );
}
