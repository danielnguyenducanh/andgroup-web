import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink-900 border-t border-gold-muted">
      <div className="container mx-auto max-w-[1280px] px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

          {/* Brand col */}
          <div className="lg:col-span-4">
            <Link href="/">
              <Image src="/images/ad-logo-white.png" alt="A&D Group" width={140} height={52}
                className="h-9 w-auto object-contain mb-6" />
            </Link>
            <p className="text-cream/40 text-sm leading-relaxed max-w-xs">
              Hệ sinh thái dịch vụ chuyên nghiệp — Pháp lý, Kế toán, Công nghệ — kiến tạo giá trị bền vững cho doanh nghiệp Việt Nam.
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-2">
            <p className="label mb-6">Điều hướng</p>
            <ul className="space-y-3">
              {["/about:Giới thiệu", "/leadership:Ban lãnh đạo", "/ecosystem:Hệ sinh thái", "/careers:Tuyển dụng", "/contact:Liên hệ"].map((s) => {
                const [href, label] = s.split(":");
                return (
                  <li key={href}>
                    <Link href={href} className="text-sm text-cream/45 hover:text-gold transition-colors">
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Ecosystem */}
          <div className="lg:col-span-3">
            <p className="label mb-6">Công ty thành viên</p>
            <ul className="space-y-3 mb-8">
              {[
                ["https://andlaw.vn", "A&D Law Firm"],
                ["https://andacc.vn", "A&D Accounting & Tax"],
                ["#", "A&D Tech"],
              ].map(([url, name]) => (
                <li key={name}>
                  <a href={url} target={url !== "#" ? "_blank" : undefined} rel="noopener noreferrer"
                    className="text-sm text-cream/45 hover:text-gold transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
            <p className="label mb-4">Sản phẩm</p>
            <ul className="space-y-2">
              {[
                ["https://andos.vn", "A&D OS"],
                ["https://quydinh.vn", "QuyĐịnh.vn"],
                ["https://iagree.vn", "iAgree.vn"],
              ].map(([url, name]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-cream/45 hover:text-gold transition-colors">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="label mb-6">Liên hệ</p>
            <address className="not-italic space-y-4">
              <p className="text-sm text-cream/45 leading-relaxed">
                Tầng 7, 520 Cách Mạng Tháng Tám<br />
                P. Nhiêu Lộc, TP. Hồ Chí Minh
              </p>
              <a href="tel:0896868989" className="block text-sm text-cream/45 hover:text-gold transition-colors">
                0896 868 989
              </a>
              <a href="mailto:support@andgroup.com.vn" className="block text-sm text-cream/45 hover:text-gold transition-colors">
                support@andgroup.com.vn
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold-muted flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs tracking-wide">
            © {new Date().getFullYear()} A&D Group. All rights reserved.
          </p>
          <p className="text-cream/20 text-[11px] tracking-widest uppercase">
            Law · Accounting · Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
