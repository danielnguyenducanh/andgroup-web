"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/about", label: "Giới thiệu" },
  { href: "/leadership", label: "Ban lãnh đạo" },
  { href: "/ecosystem", label: "Hệ sinh thái" },
  { href: "/careers", label: "Tuyển dụng" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-ink-950/95 backdrop-blur-sm border-b border-gold-muted"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-[1280px] px-12 flex items-center justify-between h-[72px]">

        {/* Left nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-wide hover-line transition-colors ${
                pathname === l.href ? "text-gold" : "text-cream/60 hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Logo center */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/ad-logo-white.png"
            alt="A&D Group"
            width={140}
            height={52}
            className="h-9 w-auto object-contain"
            priority
          />
        </Link>

        {/* Right nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.slice(2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] tracking-wide hover-line transition-colors ${
                pathname === l.href ? "text-gold" : "text-cream/60 hover:text-cream"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-[13px] tracking-widest uppercase text-gold border border-gold/40 hover:border-gold hover:bg-gold/5 px-5 py-2 rounded-sm transition-all duration-300"
          >
            Liên hệ
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden ml-auto text-cream/70 hover:text-cream"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-ink-950 border-t border-gold-muted px-6 py-8 flex flex-col gap-6">
          <Link href="/" onClick={() => setOpen(false)}>
            <Image src="/images/ad-logo-white.png" alt="A&D Group" width={120} height={45} className="h-8 w-auto mb-2" />
          </Link>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-base text-cream/70 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)}
            className="text-sm text-gold border border-gold/40 px-5 py-2.5 text-center rounded-sm">
            Liên hệ
          </Link>
        </div>
      )}
    </header>
  );
}
