"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const linksVI = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/ecosystem", label: "Hệ sinh thái" },
  { href: "/leadership", label: "Lãnh đạo" },
  { href: "/tin-tuc", label: "Tin tức" },
  { href: "/careers", label: "Tuyển dụng" },
];

const linksEN = [
  { href: "/en/about", label: "About" },
  { href: "/en/ecosystem", label: "Ecosystem" },
  { href: "/en/leadership", label: "Leadership" },
  { href: "/en/insights", label: "News" },
  { href: "/en/careers", label: "Careers" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isEN = pathname.startsWith("/en");
  const links = isEN ? linksEN : linksVI;
  const contactLabel = isEN ? "Contact" : "Liên hệ ngay";
  const contactHref = isEN ? "/en/contact" : "/contact";
  const logoHref = isEN ? "/en" : "/";
  const logoSrc = "/images/adgroup-black-nobg-v2.png";

  // Chuyển ngôn ngữ nhưng GIỮ NGUYÊN trang đang xem (chỉ thêm/bỏ prefix /en),
  // không navigate về trang chủ. Cấu trúc: VI = không prefix, EN = /en/...
  const switchLocale = (next: "vi" | "en") => {
    if (typeof window === "undefined") return;
    const { pathname, search, hash } = window.location;
    // Bỏ prefix /en hiện có để lấy path gốc (VI).
    let base = pathname.replace(/^\/en(?=\/|$)/, "");
    if (base === "") base = "/";
    // Localized pathname: VI "/tin-tuc" ⇔ EN "/insights" (khác tên segment).
    // Đổi đúng segment theo chiều chuyển để không ra 404 (/en/tin-tuc không tồn tại).
    if (next === "en") {
      base = base.replace(/^\/tin-tuc(?=\/|$)/, "/insights");
    } else {
      base = base.replace(/^\/insights(?=\/|$)/, "/tin-tuc");
    }
    const target = next === "en" ? (base === "/" ? "/en" : `/en${base}`) : base;
    window.location.href = target + search + hash;
  };

  // 2 nút VI | EN giống andlaw.vn (chỉ khác màu brand = gold).
  const LangToggle = () => (
    <div style={{ display: "flex", gap: 4, fontSize: 11, fontWeight: 600 }}>
      <button onClick={() => switchLocale("vi")} aria-label="Tiếng Việt" style={{
        padding: "5px 10px", borderRadius: 2, border: "none", cursor: "pointer", letterSpacing: "0.06em",
        background: !isEN ? "var(--gold)" : "transparent",
        color: !isEN ? "#fff" : "var(--text-secondary)", transition: "all 0.2s",
      }}>VI</button>
      <button onClick={() => switchLocale("en")} aria-label="English" style={{
        padding: "5px 10px", borderRadius: 2, border: "none", cursor: "pointer", letterSpacing: "0.06em",
        background: isEN ? "var(--gold)" : "transparent",
        color: isEN ? "#fff" : "var(--text-secondary)", transition: "all 0.2s",
      }}>EN</button>
    </div>
  );

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      height: 72,
      background: scrolled ? "rgba(250,250,248,0.97)" : "transparent",
      borderBottom: scrolled ? "1px solid var(--border)" : "none",
      backdropFilter: scrolled ? "blur(8px)" : "none",
      transition: "background 0.35s, border-color 0.35s",
    }}>
      <div className="container" style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>

        {/* Logo */}
        <Link href={logoHref} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
          <Image
            src={logoSrc}
            alt="A&D Group"
            width={130}
            height={48}
            style={{ height: 44, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontSize: 13.5, letterSpacing: "0.02em",
              color: pathname === l.href ? "var(--gold)" : "var(--text-secondary)",
              textDecoration: "none", fontWeight: 400,
              borderBottom: pathname === l.href ? "1px solid var(--gold)" : "1px solid transparent",
              paddingBottom: 2,
              transition: "color 0.2s, border-color 0.2s",
            }}>
              {l.label}
            </Link>
          ))}
          {/* Language switcher */}
          <LangToggle />
          <Link href={contactHref} style={{
            fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
            background: "var(--gold)", color: "#fff",
            padding: "9px 22px", textDecoration: "none",
            flexShrink: 0, transition: "opacity 0.2s",
          }}>
            {contactLabel}
          </Link>
        </nav>

        {/* Mobile: language toggle hiện ngay topbar cạnh hamburger (giống andlaw.vn) */}
        <div className="mobile-top-actions" style={{ display: "none", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <LangToggle />
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }} className="mobile-toggle" aria-label="menu">
            {open ? <X size={22} color="var(--text-primary)" /> : <Menu size={22} color="var(--text-primary)" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "24px 24px 32px" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 0", fontSize: 15, color: "var(--text-primary)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </Link>
          ))}
          <Link href={contactHref} onClick={() => setOpen(false)} style={{ display: "block", marginTop: 20, textAlign: "center", background: "var(--gold)", color: "#fff", padding: "12px", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            {contactLabel}
          </Link>
        </div>
      )}

      <style>{`
        .nav-lang { transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease; }
        .nav-lang:hover { border-color: var(--gold); color: var(--gold); background: rgba(184,150,46,0.06); }

        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-top-actions { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
