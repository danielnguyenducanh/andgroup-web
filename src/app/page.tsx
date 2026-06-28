"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ── animated number ── */
function AnimatedNumber({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let n = 0;
      const step = Math.ceil(to / 50);
      const t = setInterval(() => {
        n = Math.min(n + step, to);
        setVal(n);
        if (n >= to) clearInterval(t);
      }, 30);
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  return <span ref={ref}>{val}{suffix}</span>;
}

const subsidiaries = [
  {
    num: "01",
    name: "A&D Law Firm",
    url: "https://andlaw.vn",
    domain: "andlaw.vn",
    tagline: "Pháp lý doanh nghiệp",
    desc: "Tư vấn pháp lý toàn diện cho doanh nghiệp: thành lập, M&A, hợp đồng và giải quyết tranh chấp thương mại phức tạp.",
    logo: "/images/project/andlaw-logo.png",
    services: ["Thành lập doanh nghiệp", "M&A & Đầu tư", "Hợp đồng thương mại", "Tranh chấp & Tố tụng"],
  },
  {
    num: "02",
    name: "A&D Accounting & Tax",
    url: "https://andacc.vn",
    domain: "andacc.vn",
    tagline: "Kế toán & Thuế",
    desc: "Dịch vụ kế toán, kiểm toán và tư vấn thuế chuyên nghiệp — tối ưu tài chính và đảm bảo tuân thủ cho doanh nghiệp.",
    logo: "/images/project/andacc-logo.png",
    services: ["Kế toán doanh nghiệp", "Khai báo thuế", "Kiểm toán nội bộ", "Báo cáo tài chính"],
  },
  {
    num: "03",
    name: "A&D Tech",
    url: null,
    domain: null,
    tagline: "LegalTech & Công nghệ",
    desc: "Nghiên cứu và phát triển sản phẩm công nghệ pháp lý tiên phong — số hóa dịch vụ pháp lý và quản trị doanh nghiệp.",
    logo: null,
    services: ["A&D OS — ERP Platform", "QuyĐịnh.vn — AI Pháp lý", "iAgree.vn — Freelance", "LegalTech R&D"],
  },
];

const products = [
  { name: "A&D OS", url: "https://andos.vn", tag: "ERP", desc: "Nền tảng quản trị doanh nghiệp tích hợp pháp lý và kế toán.", logo: null },
  { name: "QuyĐịnh.vn", url: "https://quydinh.vn", tag: "Legal AI", desc: "AI tra cứu pháp luật, văn bản quy định chính xác và nhanh.", logo: null },
  { name: "iAgree.vn", url: "https://iagree.vn", tag: "Platform", desc: "Kết nối freelancer – doanh nghiệp với hợp đồng và escrow.", logo: "/images/project/iagree-logo.svg" },
];

const stats = [
  { val: 10, suf: "+", label: "Năm kinh nghiệm" },
  { val: 500, suf: "+", label: "Khách hàng" },
  { val: 3, suf: "", label: "Công ty thành viên" },
  { val: 3, suf: "", label: "Sản phẩm số" },
];

export default function Home() {
  return (
    <>
      {/* ════ HERO ════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden bg-ink-950">

        {/* Background image: banner1 */}
        <div className="absolute inset-0">
          <Image
            src="/images/banner1.avif"
            alt=""
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto max-w-[1280px] px-12 pb-24 pt-40">
          <p className="label mb-6 flex items-center gap-3">
            <span className="gold-rule" />
            A&D Group — Tập đoàn đa ngành nghề
          </p>

          <h1 className="font-display text-[72px] md:text-[96px] lg:text-[120px] font-light leading-[0.9] text-cream mb-8 max-w-3xl">
            Kiến tạo<br />
            <em className="text-gold not-italic">giá trị</em><br />
            bền vững.
          </h1>

          <p className="text-cream/55 text-lg max-w-lg leading-relaxed mb-12">
            Hệ sinh thái tích hợp <strong className="text-cream/80 font-normal">Pháp lý – Kế toán – Công nghệ</strong> phục vụ doanh nghiệp Việt Nam.
          </p>

          <div className="flex items-center gap-6 flex-wrap">
            <Link
              href="/ecosystem"
              className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-ink-950 font-medium text-sm tracking-wide px-8 py-4 transition-all duration-300"
            >
              Khám phá hệ sinh thái
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 text-cream/70 hover:text-gold text-sm tracking-wide border-b border-cream/20 hover:border-gold pb-0.5 transition-all duration-300"
            >
              Liên hệ tư vấn
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-12 flex flex-col items-center gap-2">
          <div className="w-px h-16 bg-gradient-to-b from-gold/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ════ STATS ════ */}
      <section className="bg-ink-900 border-y border-gold-muted">
        <div className="container mx-auto max-w-[1280px] px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-gold-muted">
            {stats.map((s, i) => (
              <div key={i} className="py-14 px-10 text-center">
                <div className="font-display text-5xl md:text-6xl font-light text-gold mb-2">
                  <AnimatedNumber to={s.val} suffix={s.suf} />
                </div>
                <div className="label text-cream/40">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ SUBSIDIARIES ════ */}
      <section className="section bg-ink-950">
        <div className="container mx-auto max-w-[1280px] px-12">

          {/* Header */}
          <div className="flex items-end justify-between mb-16 gap-8">
            <div>
              <span className="gold-rule mb-5 block" />
              <h2 className="font-display text-5xl md:text-6xl font-light text-cream leading-tight">
                Công ty<br />thành viên
              </h2>
            </div>
            <Link href="/ecosystem"
              className="hidden md:inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light border-b border-gold/30 hover:border-gold pb-0.5 transition-all shrink-0">
              Xem tất cả <ArrowRight size={14} />
            </Link>
          </div>

          {/* Cards — horizontal list */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gold-muted border border-gold-muted">
            {subsidiaries.map((s, i) => (
              <div key={s.num} className="bg-ink-950 p-10 flex flex-col group hover:bg-ink-800 transition-colors duration-300">
                {/* Number + logo */}
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display text-7xl font-light text-gold/15 leading-none select-none">
                    {s.num}
                  </span>
                  {s.logo ? (
                    <Image src={s.logo} alt={s.name} width={80} height={36}
                      className="h-8 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
                  ) : (
                    <div className="w-8 h-8 border border-gold/30 flex items-center justify-center">
                      <span className="text-gold text-[10px] font-medium">A&D</span>
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="mb-2">
                  <span className="label text-gold/70">{s.tagline}</span>
                </div>
                <h3 className="font-display text-2xl font-light text-cream mb-4">{s.name}</h3>
                <p className="text-cream/45 text-sm leading-relaxed mb-8 flex-1">{s.desc}</p>

                {/* Services */}
                <ul className="space-y-2 mb-8">
                  {s.services.map((sv) => (
                    <li key={sv} className="flex items-center gap-2 text-[13px] text-cream/50">
                      <span className="w-3 h-px bg-gold/40 shrink-0" />
                      {sv}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {s.url ? (
                  <a href={s.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[13px] text-gold hover:text-gold-light transition-colors">
                    {s.domain} <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <span className="text-[13px] text-cream/20 italic">Sản phẩm bên dưới</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PRODUCTS (A&D Tech) ════ */}
      <section className="section bg-ink-900">
        <div className="container mx-auto max-w-[1280px] px-12">
          <div className="mb-16">
            <span className="gold-rule mb-5 block" />
            <div className="flex items-end gap-4">
              <h2 className="font-display text-5xl md:text-6xl font-light text-cream">Sản phẩm <em className="text-gold not-italic">A&D Tech</em></h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
                className="group block bg-ink-800 border border-gold-muted hover:border-gold/40 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between mb-6">
                  <span className="label text-gold/60 border border-gold/20 px-2 py-1 rounded-sm">{p.tag}</span>
                  <ArrowUpRight size={16} className="text-cream/25 group-hover:text-gold transition-colors" />
                </div>
                {p.logo ? (
                  <Image src={p.logo} alt={p.name} width={100} height={32}
                    className="h-7 w-auto object-contain mb-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                ) : (
                  <h3 className="font-display text-2xl font-light text-cream mb-4 group-hover:text-gold transition-colors">{p.name}</h3>
                )}
                <p className="text-cream/45 text-sm leading-relaxed">{p.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ════ ABOUT / MISSION SPLIT ════ */}
      <section className="section bg-ink-950 overflow-hidden">
        <div className="container mx-auto max-w-[1280px] px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            {/* Left — text */}
            <div>
              <span className="gold-rule mb-8 block" />
              <h2 className="font-display text-5xl md:text-6xl font-light text-cream leading-tight mb-8">
                Sứ mệnh<br />
                <em className="text-gold not-italic">& Giá trị</em>
              </h2>
              <p className="text-cream/55 leading-relaxed mb-6">
                A&D Group được thành lập với sứ mệnh mang đến hệ sinh thái dịch vụ chuyên nghiệp đẳng cấp quốc tế — nơi Pháp lý, Kế toán và Công nghệ hội tụ để kiến tạo giải pháp toàn diện cho doanh nghiệp Việt Nam.
              </p>
              <p className="text-cream/40 text-sm leading-relaxed mb-10">
                Với hơn 10 năm kinh nghiệm, chúng tôi không chỉ cung cấp dịch vụ — chúng tôi là đối tác chiến lược đồng hành trên mỗi hành trình phát triển của doanh nghiệp.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-2 text-sm text-gold border-b border-gold/30 hover:border-gold pb-0.5 transition-all">
                Câu chuyện của chúng tôi <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — values grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "01", t: "Chính trực", d: "Minh bạch và đạo đức trong mọi quan hệ." },
                { n: "02", t: "Tận tâm", d: "Lợi ích khách hàng là trung tâm mọi quyết định." },
                { n: "03", t: "Đổi mới", d: "Ứng dụng công nghệ nâng cao chất lượng liên tục." },
                { n: "04", t: "Bền vững", d: "Tạo giá trị lâu dài cho khách hàng và cộng đồng." },
              ].map((v) => (
                <div key={v.n}
                  className="bg-ink-800 border border-gold-muted p-6 hover:border-gold/35 transition-colors">
                  <div className="font-display text-4xl font-light text-gold/20 mb-3">{v.n}</div>
                  <h4 className="text-cream font-medium text-base mb-2">{v.t}</h4>
                  <p className="text-cream/40 text-sm leading-relaxed">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ LEADERSHIP TEASER ════ */}
      <section className="section bg-ink-900">
        <div className="container mx-auto max-w-[1280px] px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <span className="gold-rule mb-6 block" />
              <h2 className="font-display text-4xl md:text-5xl font-light text-cream mb-6">Ban lãnh đạo</h2>
              <p className="text-cream/45 text-sm leading-relaxed mb-8">
                Đội ngũ lãnh đạo với chuyên môn sâu và tầm nhìn dài hạn dẫn dắt A&D Group phát triển bền vững.
              </p>
              <Link href="/leadership"
                className="inline-flex items-center gap-2 text-sm text-gold border-b border-gold/30 hover:border-gold pb-0.5 transition-all">
                Gặp gỡ ban lãnh đạo <ArrowRight size={14} />
              </Link>
            </div>

            {/* Chairman card */}
            <div className="lg:col-span-4">
              <div className="group relative bg-ink-800 border border-gold-muted hover:border-gold/35 transition-all duration-300 overflow-hidden">
                {/* Photo */}
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src="/images/leadership/daniel-nguyen.jpg"
                    alt="Daniel Nguyen"
                    fill
                    className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-light text-cream mb-1">Daniel Nguyen</h3>
                  <p className="label text-gold/70">Chairman — A&D Group</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FINAL CTA ════ */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/banner2.avif" alt="" fill className="object-cover" quality={80} />
          <div className="absolute inset-0 bg-ink-950/85" />
        </div>
        <div className="relative container mx-auto max-w-[1280px] px-12 text-center">
          <span className="label mb-6 inline-block">Hợp tác cùng chúng tôi</span>
          <h2 className="font-display text-5xl md:text-7xl font-light text-cream mb-8 max-w-2xl mx-auto leading-tight">
            Đồng hành<br />
            <em className="text-gold not-italic">cùng A&D Group</em>
          </h2>
          <p className="text-cream/45 max-w-lg mx-auto mb-12 leading-relaxed">
            Từ pháp lý, tài chính đến công nghệ — chúng tôi sẵn sàng đồng hành trên mọi hành trình của doanh nghiệp bạn.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-ink-950 font-medium text-sm tracking-wide px-10 py-4 transition-all duration-300"
          >
            Liên hệ ngay <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
