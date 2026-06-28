"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Trang chủ" },
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-navy-900/95 backdrop-blur-md border-b border-gold-700/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-gold-500 rounded flex items-center justify-center">
            <span className="text-gold-400 font-serif font-bold text-sm leading-none">
              A&D
            </span>
          </div>
          <div>
            <div className="text-cream font-serif font-semibold text-lg leading-tight tracking-wide">
              A&D Group
            </div>
            <div className="text-gold-500 text-[10px] tracking-[0.2em] uppercase">
              Tập đoàn
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-wide transition-colors duration-200 ${
                pathname === link.href
                  ? "text-gold-400"
                  : "text-cream/70 hover:text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 border border-gold-500 text-gold-400 text-sm tracking-wide hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 rounded"
          >
            Liên hệ
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-cream/70 hover:text-cream"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-navy-900/98 border-t border-gold-700/20 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-base tracking-wide ${
                pathname === link.href ? "text-gold-400" : "text-cream/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="px-5 py-2.5 border border-gold-500 text-gold-400 text-sm text-center tracking-wide hover:bg-gold-500 hover:text-navy-950 transition-all rounded"
          >
            Liên hệ
          </Link>
        </div>
      )}
    </header>
  );
}
