"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const companies = [
  { name: "A&D Law Firm", url: "https://andlaw.vn" },
  { name: "A&D Accounting & Tax", url: "https://andacc.vn" },
  { name: "A&D Tech", url: "#" },
];

const products = [
  { name: "A&D OS", url: "https://andos.vn" },
  { name: "QuyĐịnh.vn", url: "https://quydinh.vn" },
  { name: "iAgree.vn", url: "https://iagree.vn" },
];

const navLinksVI = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/ecosystem", label: "Hệ sinh thái" },
  { href: "/leadership", label: "Lãnh đạo" },
  { href: "/careers", label: "Tuyển dụng" },
  { href: "/contact", label: "Liên hệ" },
];

const navLinksEN = [
  { href: "/en/about", label: "About" },
  { href: "/en/ecosystem", label: "Ecosystem" },
  { href: "/en/leadership", label: "Leadership" },
  { href: "/en/careers", label: "Careers" },
  { href: "/en/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const navLinks = isEN ? navLinksEN : navLinksVI;

  const t = {
    tagline: isEN
      ? "A specialized advisory group encompassing legal, accounting & tax and technology — serving Vietnamese businesses with sustainable growth."
      : "Tập đoàn tư vấn chuyên sâu gồm pháp lý, kế toán & thuế và công nghệ — phục vụ doanh nghiệp Việt Nam phát triển bền vững.",
    nav: isEN ? "Navigation" : "Điều hướng",
    memberCompanies: isEN ? "Member companies" : "Công ty thành viên",
    techProducts: isEN ? "Tech products" : "Sản phẩm công nghệ",
    contact: isEN ? "Contact" : "Liên hệ",
    address: isEN ? "Address" : "Địa chỉ",
    addressLines: isEN
      ? "Floor 7, 520 Cach Mang Thang Tam\nNhieu Loc Ward, Ho Chi Minh City"
      : "Tầng 7, 520 Cách Mạng Tháng Tám\nPhường Nhiêu Lộc, TP. Hồ Chí Minh",
    email: "Email",
    website: "Website",
    privacy: isEN ? "Privacy policy" : "Chính sách bảo mật",
    terms: isEN ? "Terms of use" : "Điều khoản sử dụng",
  };

  return (
    <footer style={{ background: "var(--bg-dark)", color: "rgba(255,255,255,0.75)" }}>
      {/* Main footer */}
      <div className="container" style={{ padding: "72px 48px 48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1.5fr 1.5fr",
          gap: 48,
        }}>
          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/ad-logo-white.png"
              alt="A&D Group"
              width={120}
              height={40}
              style={{ objectFit: "contain", height: 40, width: "auto", marginBottom: 20 }}
            />
            <p style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", maxWidth: 280 }}>
              {t.tagline}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20, fontWeight: 600 }}>
              {t.nav}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: 14,
                      color: "rgba(255,255,255,0.6)",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Companies + Products */}
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20, fontWeight: 600 }}>
              {t.memberCompanies}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {companies.map((c) => (
                <li key={c.name}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16, fontWeight: 600 }}>
              {t.techProducts}
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
              {products.map((p) => (
                <li key={p.name}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                  >
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20, fontWeight: 600 }}>
              {t.contact}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 4, letterSpacing: "0.05em" }}>{t.address}</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, whiteSpace: "pre-line" }}>
                  {t.addressLines}
                </p>
              </div>
              <div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 4, letterSpacing: "0.05em" }}>{t.email}</p>
                <a href="mailto:support@andgroup.com.vn" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  support@andgroup.com.vn
                </a>
              </div>
              <div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginBottom: 4, letterSpacing: "0.05em" }}>{t.website}</p>
                <a href="https://andgroup.com.vn" style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", textDecoration: "none" }}>
                  andgroup.com.vn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="container" style={{
          padding: "20px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} A&D Group. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <Link href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
              {t.privacy}
            </Link>
            <Link href="#" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>
              {t.terms}
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div:first-child > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 600px) {
          footer > div:first-child > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
