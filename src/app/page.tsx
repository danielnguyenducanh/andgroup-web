"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown, Scale, Calculator, Cpu, ExternalLink } from "lucide-react";

/* ── Animated counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const step = Math.ceil(target / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(start);
          }, 25);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ── Data ── */
const subsidiaries = [
  {
    id: "01",
    name: "A&D Law Firm",
    tagline: "Đồng hành pháp lý toàn diện",
    desc: "Cung cấp dịch vụ pháp lý chuyên sâu cho doanh nghiệp: từ thành lập, M&A đến giải quyết tranh chấp thương mại phức tạp.",
    icon: Scale,
    url: "https://andlaw.vn",
    color: "from-indigo-900/30 to-navy-900",
    services: ["Thành lập & cấu trúc doanh nghiệp", "Soạn thảo & thẩm định hợp đồng", "M&A – Đầu tư chiến lược", "Giải quyết tranh chấp"],
  },
  {
    id: "02",
    name: "A&D Accounting & Tax",
    tagline: "Quản trị tài chính vững chắc",
    desc: "Dịch vụ kế toán, kiểm toán và tư vấn thuế chuyên nghiệp — giúp doanh nghiệp tối ưu chi phí và tuân thủ pháp lý thuế.",
    icon: Calculator,
    url: "https://andacc.vn",
    color: "from-emerald-900/30 to-navy-900",
    services: ["Kế toán doanh nghiệp", "Tư vấn thuế", "Kiểm toán nội bộ", "Báo cáo tài chính"],
  },
  {
    id: "03",
    name: "A&D Tech",
    tagline: "Công nghệ kiến tạo tương lai",
    desc: "Nghiên cứu và phát triển các sản phẩm công nghệ pháp lý (LegalTech) tiên phong tại Việt Nam.",
    icon: Cpu,
    url: "#",
    color: "from-blue-900/30 to-navy-900",
    services: ["A&D OS — Nền tảng ERP", "QuyĐịnh.vn — AI Pháp lý", "iAgree.vn — Freelance Platform", "LegalTech R&D"],
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Năm kinh nghiệm" },
  { value: 500, suffix: "+", label: "Khách hàng tin tưởng" },
  { value: 3, suffix: "", label: "Công ty thành viên" },
  { value: 3, suffix: "", label: "Sản phẩm công nghệ" },
];

const values = [
  { title: "Chính trực", desc: "Cam kết minh bạch và đạo đức nghề nghiệp trong mọi quan hệ hợp tác." },
  { title: "Tận tâm", desc: "Lấy lợi ích của khách hàng làm trung tâm của mọi quyết định và hành động." },
  { title: "Đổi mới", desc: "Không ngừng ứng dụng công nghệ để nâng cao chất lượng dịch vụ." },
  { title: "Bền vững", desc: "Xây dựng giá trị lâu dài cho khách hàng, đối tác và cộng đồng." },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        {/* Gold accent top-right */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gold-600/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/4 blur-3xl pointer-events-none" />
        {/* Grid lines subtle */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#D4A832 1px, transparent 1px), linear-gradient(90deg, #D4A832 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center pt-28 pb-20">
          {/* Label */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase font-medium">
              A&D Group — Tập đoàn
            </span>
            <div className="w-8 h-px bg-gold-500" />
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-cream leading-[1.1] mb-6 max-w-4xl mx-auto">
            Kiến tạo giá trị{" "}
            <span className="text-gold-400 italic">bền vững</span>
          </h1>

          <p className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            Hệ sinh thái tích hợp{" "}
            <span className="text-cream/90">Pháp lý – Kế toán – Công nghệ</span>
            {" "}kiến tạo giải pháp toàn diện cho doanh nghiệp Việt Nam.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/ecosystem"
              className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm tracking-wide transition-all duration-300 rounded flex items-center gap-2"
            >
              Khám phá hệ sinh thái
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border border-cream/20 hover:border-gold-500 text-cream/80 hover:text-gold-400 font-medium text-sm tracking-wide transition-all duration-300 rounded"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="text-[10px] tracking-[0.2em] uppercase">Cuộn xuống</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-navy-900 border-y border-gold-700/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-gold-700/20">
            {stats.map((s, i) => (
              <div key={i} className="text-center lg:px-8">
                <div className="font-serif text-4xl md:text-5xl font-bold text-gold-400 mb-2">
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div className="text-cream/50 text-sm tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSIDIARIES ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-4">
              Hệ sinh thái A&D Group
            </h2>
            <p className="text-cream/50 max-w-xl mx-auto leading-relaxed">
              Ba công ty thành viên chuyên biệt — cùng nhau tạo nên giải pháp tích hợp toàn diện.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {subsidiaries.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className={`relative group bg-gradient-to-b ${s.color} border border-gold-700/15 hover:border-gold-500/40 rounded-xl p-8 transition-all duration-400 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(212,168,50,0.08)]`}
                >
                  {/* Number */}
                  <div className="absolute top-6 right-8 font-serif text-5xl font-bold text-gold-700/20 select-none">
                    {s.id}
                  </div>

                  <div className="mb-6">
                    <div className="w-12 h-12 border border-gold-600/30 rounded-lg flex items-center justify-center mb-5 group-hover:border-gold-400/60 transition-colors">
                      <Icon size={22} className="text-gold-400" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-cream mb-1">{s.name}</h3>
                    <p className="text-gold-400 text-sm mb-4">{s.tagline}</p>
                    <p className="text-cream/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>

                  {/* Services list */}
                  <ul className="space-y-2 mb-8">
                    {s.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-sm text-cream/60">
                        <div className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>

                  {s.url !== "#" && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors group/link"
                    >
                      Khám phá ngay
                      <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div>
              <div className="gold-line mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-6 leading-snug">
                Sứ mệnh & <br />
                <span className="text-gold-400 italic">Giá trị cốt lõi</span>
              </h2>
              <p className="text-cream/55 leading-relaxed mb-10 text-[15px]">
                A&D Group được thành lập với sứ mệnh kiến tạo hệ sinh thái dịch vụ chuyên nghiệp — nơi Pháp lý, Kế toán và Công nghệ hội tụ để trao quyền cho doanh nghiệp Việt Nam phát triển bền vững trong kỷ nguyên số.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 border-b border-gold-500/40 pb-1 transition-colors"
              >
                Tìm hiểu thêm về chúng tôi
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right values grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-navy-800/60 border border-gold-700/15 hover:border-gold-500/30 rounded-xl p-6 transition-all duration-300"
                >
                  <div className="text-gold-400 font-serif text-2xl font-bold mb-1">0{i + 1}</div>
                  <h4 className="text-cream font-semibold text-base mb-2">{v.title}</h4>
                  <p className="text-cream/50 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP PREVIEW ── */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <div className="gold-line mx-auto mb-5" />
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-4">
            Ban lãnh đạo
          </h2>
          <p className="text-cream/50 max-w-xl mx-auto mb-14">
            Đội ngũ lãnh đạo giàu kinh nghiệm, dẫn dắt A&D Group phát triển bền vững.
          </p>

          {/* Leadership card */}
          <div className="max-w-xs mx-auto">
            <div className="bg-navy-900 border border-gold-700/20 rounded-2xl p-8 hover:border-gold-500/40 transition-all duration-300">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-700/30 to-gold-500/10 border-2 border-gold-500/40 mx-auto mb-5 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-gold-400">DN</span>
              </div>
              <h3 className="font-serif text-lg font-semibold text-cream mb-1">Daniel Nguyen</h3>
              <p className="text-gold-400 text-sm tracking-wide mb-4">Chairman</p>
              <div className="w-8 h-px bg-gold-600/40 mx-auto" />
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 border border-gold-500/30 hover:border-gold-400/60 px-6 py-2.5 rounded transition-all"
            >
              Xem đầy đủ ban lãnh đạo
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 border-t border-gold-700/15">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-cream mb-5">
            Sẵn sàng hợp tác với chúng tôi?
          </h2>
          <p className="text-cream/55 mb-10 leading-relaxed">
            Hãy để A&D Group đồng hành cùng doanh nghiệp của bạn — từ pháp lý, tài chính đến công nghệ.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold tracking-wide transition-all duration-300 rounded"
          >
            Liên hệ ngay
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
