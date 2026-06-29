"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "Về chúng tôi" },
  { href: "/ecosystem", label: "Hệ sinh thái" },
  { href: "/leadership", label: "Lãnh đạo" },
  { href: "/careers", label: "Tuyển dụng" },
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

  const onDark = pathname !== "/" || scrolled;
  // Hero nền sáng → dùng logo dark; trang khác hoặc scroll → nền trắng
  const logoSrc = "/images/project/adgroup-final.png"; // logo A&D Group chuẩn — tam giác đen, no background

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
        <Link href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
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
          <Link href="/contact" style={{
            fontSize: 13, fontWeight: 500, letterSpacing: "0.06em",
            background: "var(--gold)", color: "#fff",
            padding: "9px 22px", textDecoration: "none",
            flexShrink: 0, transition: "opacity 0.2s",
          }}>
            Liên hệ ngay
          </Link>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }} className="mobile-toggle" aria-label="menu">
          {open ? <X size={22} color="var(--text-primary)" /> : <Menu size={22} color="var(--text-primary)" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{ background: "#fff", borderTop: "1px solid var(--border)", padding: "24px 24px 32px" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 0", fontSize: 15, color: "var(--text-primary)", textDecoration: "none", borderBottom: "1px solid var(--border)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ display: "block", marginTop: 20, textAlign: "center", background: "var(--gold)", color: "#fff", padding: "12px", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
            Liên hệ ngay
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
