"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

/* ── animated counter ── */
function Count({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const el = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let v = 0;
      // Step theo nghìn nếu to >= 1000, ngược lại step nhỏ
      const step = to >= 1000 ? Math.ceil(to / 60 / 1000) * 1000 : Math.ceil(to / 55);
      const t = setInterval(() => { v = Math.min(v + step, to); setN(v); if (v >= to) clearInterval(t); }, 30);
    }, { threshold: 0.5 });
    if (el.current) obs.observe(el.current);
    return () => obs.disconnect();
  }, [to]);
  // Format số có dấu chấm nghìn
  const formatted = n >= 1000 ? n.toLocaleString("vi-VN") : n.toString();
  return <span ref={el}>{formatted}{suffix}</span>;
}

const mobileStyles = `
  @media (max-width: 768px) {
    .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; min-height: unset !important; }
    .hero-img { display: none !important; }
    .hero-h1 { font-size: 40px !important; }
    .companies-grid { grid-template-columns: 1fr !important; }
    .products-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
    .products-sticky { position: static !important; }
    .mission-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
    .leadership-card { grid-template-columns: 1fr !important; }
    .leadership-photo { aspect-ratio: 4/3 !important; max-height: 300px !important; }
    .container { padding-left: 20px !important; padding-right: 20px !important; }
    .section { padding-top: 64px !important; padding-bottom: 64px !important; }
    .stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
    .values-grid { grid-template-columns: 1fr 1fr !important; }
    .hero-section { min-height: unset !important; padding-top: 100px !important; padding-bottom: 48px !important; }
  }
  @media (max-width: 480px) {
    .hero-h1 { font-size: 34px !important; }
    .stats-grid { grid-template-columns: 1fr 1fr !important; }
  }
`;

export default function Home() {
  return (
    <>
      <style>{mobileStyles}</style>

      {/* ══════════════════════════════
          HERO — split layout
      ══════════════════════════════ */}
      <section className="hero-section" style={{ background: "var(--bg-primary)", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 72 }}>
        <div className="container" style={{ width: "100%", paddingTop: 40, paddingBottom: 40 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "55% 1fr", gap: 80, alignItems: "center", minHeight: "calc(100vh - 160px)" }}>

            {/* ── LEFT ── */}
            <div>
              <p className="label" style={{ color: "var(--gold)", marginBottom: 28, display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 40, height: 1, background: "var(--gold)", display: "inline-block" }} />
                A&D Group
              </p>

              <h1 className="hero-h1 font-display" style={{ fontSize: "clamp(48px, 5.8vw, 80px)", fontWeight: 500, lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--text-primary)", marginBottom: 28 }}>
                Kiến tạo giá trị<br />
                bền vững cho<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>doanh nghiệp Việt.</em>
              </h1>

              <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 460, marginBottom: 40 }}>
                Hệ sinh thái tích hợp Pháp lý – Kế toán – Công nghệ, phục vụ doanh nghiệp, cá nhân và freelancer tại Việt Nam.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
                <Link href="/ecosystem" style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "var(--gold)", color: "#fff", fontSize: 14,
                  fontWeight: 500, letterSpacing: "0.04em", padding: "14px 28px",
                  textDecoration: "none", transition: "opacity 0.2s",
                }}>
                  Khám phá hệ sinh thái <ArrowRight size={15} />
                </Link>
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  border: "1px solid var(--border-dark, #C8C0B0)", color: "var(--text-primary)",
                  fontSize: 14, fontWeight: 400, padding: "14px 28px",
                  textDecoration: "none", transition: "border-color 0.2s",
                }}>
                  Liên hệ tư vấn
                </Link>
              </div>

              {/* Stats */}
              <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid var(--border)", paddingTop: 36 }}>
                {[
                  { val: 10, suf: "+", label: "Năm kinh nghiệm" },
                  { val: 10000, suf: "+", label: "Khách hàng tin tưởng" },
                  { val: 3, suf: "", label: "Công ty thành viên" },
                ].map((s, i) => (
                  <div key={i} style={{ paddingRight: 24 }}>
                    <div className="font-display" style={{ fontSize: 48, fontWeight: 500, lineHeight: 1, color: "var(--text-primary)", marginBottom: 6 }}>
                      <Count to={s.val} suffix={s.suf} />
                    </div>
                    <p style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-muted)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT — ảnh ── */}
            <div className="hero-img" style={{ position: "relative", height: "calc(100vh - 160px)", maxHeight: 700, minHeight: 500 }}>
              <Image
                src="/images/team-unity.jpg"
                alt="Đội ngũ A&D Group"
                fill
                style={{ objectFit: "cover", objectPosition: "center 20%" }}
                priority
                quality={90}
              />
              {/* Gradient trái để blend với nền */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, var(--bg-primary) 0%, transparent 18%)" }} />
              {/* Gradient dưới nhẹ */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,12,12,0.3) 0%, transparent 40%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          3 CÔNG TY THÀNH VIÊN
      ══════════════════════════════ */}
      <section className="section" style={{ background: "#fff", padding: "100px 0" }}>
        <div className="container">
          <div style={{ marginBottom: 64 }}>
            <p className="label" style={{ color: "var(--gold)", marginBottom: 16 }}>Công ty thành viên</p>
            <h2 className="font-display" style={{ fontSize: "clamp(36px, 4vw, 56px)", fontWeight: 500, lineHeight: 1.1, color: "var(--text-primary)", marginBottom: 16 }}>
              Ba trụ cột của tập đoàn
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: 520, lineHeight: 1.7 }}>
              Mỗi công ty thành viên là chuyên gia đầu ngành, cùng tạo nên giải pháp dịch vụ toàn diện.
            </p>
          </div>

          <div className="companies-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              {
                tag: "Pháp lý", tagColor: "#2C4A7C",
                logo: "/images/project/logo-andlaw.png", logoH: 56,
                name: "A&D Law Firm",
                tagline: "Tư vấn pháp lý doanh nghiệp",
                services: ["Tư vấn pháp lý thường xuyên", "Soạn thảo & rà soát hợp đồng", "Tranh tụng & giải quyết tranh chấp", "M&A & Pháp lý đầu tư"],
                url: "https://andlaw.vn",
              },
              {
                tag: "Kế toán & Thuế", tagColor: "#1E5C3A",
                logo: "/images/project/logo-andacc.png", logoH: 56,
                name: "A&D Accounting & Tax",
                tagline: "Kế toán, thuế & tài chính doanh nghiệp",
                services: ["Dịch vụ kế toán trọn gói", "Tư vấn & quyết toán thuế", "Kiểm toán nội bộ", "Báo cáo tài chính"],
                url: "https://andacc.vn",
              },
              {
                tag: "Công nghệ", tagColor: "#5B2D8E",
                logo: "/images/project/logo-andtech.png", logoH: 56,
                name: "A&D Tech",
                tagline: "LegalTech & chuyển đổi số pháp lý",
                services: ["A&D OS — ERP tích hợp", "QuyĐịnh.vn — AI pháp lý", "iAgree.vn — Ký số & escrow", "Phần mềm quản trị doanh nghiệp"],
                url: null,
              },
            ].map((c: {logo:string;logoH:number;name:string;tagline:string;services:string[];url:string|null;tag:string;tagColor:string}, i) => (
              <div key={i} style={{
                border: "1px solid var(--border)",
                padding: "36px 32px",
                display: "flex", flexDirection: "column",
                transition: "box-shadow 0.25s, transform 0.25s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.08)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
              >
                {/* Tag */}
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: c.tagColor, fontWeight: 600, background: c.tagColor + "15", padding: "4px 10px", borderRadius: 2 }}>
                    {c.tag}
                  </span>
                </div>

                {/* Company identity */}
                <div style={{ marginBottom: 20 }}>
                  <div style={{ height: 56, marginBottom: 12, display: "flex", alignItems: "center" }}>
                    <Image src={c.logo} alt={c.name} width={160} height={56}
                      style={{ height: 56, width: "auto", maxWidth: 180, objectFit: "contain", objectPosition: "left" }} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 20, fontWeight: 600, lineHeight: 1.2,
                    color: "var(--text-primary)", marginBottom: 4
                  }}>{c.name}</h3>
                </div>

                <p style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 28, lineHeight: 1.6 }}>{c.tagline}</p>

                <ul style={{ listStyle: "none", marginBottom: 36, flex: 1 }}>
                  {c.services.map(s => (
                    <li key={s} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: "var(--text-secondary)", padding: "7px 0", borderBottom: "1px solid #F0EBE3" }}>
                      <span style={{ width: 16, height: 1, background: "var(--gold)", flexShrink: 0 }} />
                      {s}
                    </li>
                  ))}
                </ul>

                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--gold)", fontWeight: 500, textDecoration: "none", letterSpacing: "0.03em" }}>
                    Truy cập website <ArrowUpRight size={13} />
                  </a>
                ) : (
                  <Link href="/ecosystem" style={{ fontSize: 13, color: "var(--gold)", fontWeight: 500, textDecoration: "none" }}>
                    Xem sản phẩm →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          A&D TECH PRODUCTS — dark section
      ══════════════════════════════ */}
      <section className="section" style={{ background: "var(--bg-dark)", padding: "100px 0" }}>
        <div className="container">
          <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* Left */}
            <div className="products-sticky" style={{ position: "sticky", top: 100 }}>
              <p className="label" style={{ color: "var(--gold-light, #D4A832)", marginBottom: 16 }}>Hệ sinh thái công nghệ</p>
              <h2 className="font-display" style={{ fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 500, lineHeight: 1.1, color: "#F7F3ED", marginBottom: 24 }}>
                3 sản phẩm số<br />
                <em style={{ color: "var(--gold-light, #D4A832)", fontStyle: "italic" }}>của A&D Tech</em>
              </h2>
              <p style={{ color: "rgba(247,243,237,0.55)", lineHeight: 1.75, fontSize: 15, marginBottom: 36, maxWidth: 380 }}>
                Từ quản trị nội bộ, tra cứu pháp luật đến ký kết hợp đồng điện tử — A&D Tech số hóa toàn diện hoạt động pháp lý doanh nghiệp.
              </p>
              <Link href="/ecosystem" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                border: "1px solid rgba(201,168,76,0.5)", color: "#D4A832",
                fontSize: 13, fontWeight: 500, padding: "12px 24px",
                textDecoration: "none", letterSpacing: "0.05em",
              }}>
                Khám phá hệ sinh thái <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right — product list */}
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {[
                { tag: "ERP", tagColor: "#6B9FD4", logo: "/images/project/logo-andos-white.png", name: "A&D Operating System", url: "https://andos.vn", desc: "Nền tảng quản trị doanh nghiệp tích hợp HR, kế toán, hợp đồng và workflow trên một hệ thống duy nhất." },
                { tag: "Legal AI", tagColor: "#9B8FD4", logo: "/images/project/logo-quydinh-white.png", name: "QuyĐịnh.vn", url: "https://quydinh.vn", desc: "Tra cứu toàn bộ văn bản pháp luật Việt Nam bằng AI — chính xác, nhanh, cập nhật mỗi ngày." },
                { tag: "Platform", tagColor: "#6BB5A0", logo: "/images/project/logo-iagree-white.png", name: "iAgree.vn", url: "https://iagree.vn", desc: "Ký kết hợp đồng điện tử có giá trị pháp lý, cơ chế escrow bảo vệ cả hai bên." },
              ].map((p: {tag:string;tagColor:string;logo:string;name:string;url:string;desc:string}, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 24, padding: "28px 32px", border: "1px solid rgba(255,255,255,0.06)", textDecoration: "none", transition: "background 0.2s, border-color 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)"; }}
                >
                  <span style={{ fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: p.tagColor, fontWeight: 600, background: p.tagColor + "25", padding: "4px 8px", borderRadius: 2, flexShrink: 0, minWidth: 64, textAlign: "center" }}>
                    {p.tag}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: 6, display: "flex", alignItems: "center" }}>
                      <Image src={p.logo} alt={p.name} width={120} height={28}
                        style={{ height: 28, width: "auto", maxWidth: 140, objectFit: "contain" }} />
                    </div>
                    <div style={{ fontSize: 13, color: "rgba(247,243,237,0.5)", lineHeight: 1.5 }}>{p.desc}</div>
                  </div>
                  <ArrowUpRight size={16} style={{ color: "rgba(247,243,237,0.25)", flexShrink: 0 }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          SỨ MỆNH & GIÁ TRỊ
      ══════════════════════════════ */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "100px 0" }}>
        <div className="container">
          <div className="mission-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>

            {/* Left — quote + chairman */}
            <div>
              <p className="label" style={{ color: "var(--gold)", marginBottom: 24 }}>Sứ mệnh & Tầm nhìn</p>
              <blockquote className="font-display" style={{ fontSize: "clamp(22px, 2.5vw, 30px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.55, color: "var(--text-primary)", marginBottom: 40, borderLeft: "3px solid var(--gold)", paddingLeft: 28 }}>
                "Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi là người bạn đồng hành tin cậy trong hành trình phát triển của doanh nghiệp Việt."
              </blockquote>

              {/* Chairman — đầy đủ hơn */}
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", overflow: "hidden", position: "relative", flexShrink: 0, border: "2px solid var(--gold)" }}>
                  <Image src="/images/leadership/daniel-nguyen.jpg" alt="Daniel Nguyen" fill style={{ objectFit: "cover", objectPosition: "center top" }} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 15, marginBottom: 2 }}>Daniel Nguyen</div>
                  <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 500 }}>Chairman, A&D Group</div>
                </div>
              </div>
            </div>

            {/* Right — values */}
            <div className="values-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {[
                { n: "01", t: "Chính trực", d: "Trung thực và minh bạch trong mọi quan hệ tư vấn." },
                { n: "02", t: "Chuyên môn sâu", d: "Đội ngũ được đào tạo bài bản, liên tục cập nhật kiến thức." },
                { n: "03", t: "Lấy khách hàng làm trung tâm", d: "Mỗi giải pháp được thiết kế riêng, không áp dụng đồng loạt." },
                { n: "04", t: "Đổi mới liên tục", d: "Ứng dụng công nghệ để nâng cao chất lượng dịch vụ mỗi ngày." },
              ].map(v => (
                <div key={v.n} style={{ padding: "24px", background: "#fff", border: "1px solid var(--border)" }}>
                  <div className="font-display" style={{ fontSize: 32, fontWeight: 500, color: "var(--gold)", opacity: 0.3, lineHeight: 1, marginBottom: 12 }}>{v.n}</div>
                  <div style={{ fontWeight: 600, color: "var(--text-primary)", fontSize: 14, marginBottom: 8 }}>{v.t}</div>
                  <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>{v.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          BAN LÃNH ĐẠO
      ══════════════════════════════ */}
      <section className="section" style={{ background: "#fff", padding: "100px 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p className="label" style={{ color: "var(--gold)", marginBottom: 12 }}>Ban lãnh đạo</p>
            <h2 className="font-display" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 500, color: "var(--text-primary)" }}>
              Người dẫn dắt A&D Group
            </h2>
          </div>

          {/* Chairman — full card */}
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <div className="leadership-card" style={{ display: "grid", gridTemplateColumns: "280px 1fr", border: "1px solid var(--border)", overflow: "hidden" }}>
              {/* Photo */}
              <div className="leadership-photo" style={{ position: "relative", aspectRatio: "3/4" }}>
                <Image
                  src="/images/leadership/daniel-nguyen.jpg"
                  alt="Daniel Nguyen"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center 10%" }}
                />
              </div>
              {/* Info */}
              <div style={{ padding: "40px 40px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#FAFAF8" }}>
                <p className="label" style={{ color: "var(--gold)", marginBottom: 16 }}>Chairman</p>
                <h3 className="font-display" style={{ fontSize: 34, fontWeight: 500, color: "var(--text-primary)", marginBottom: 8 }}>Daniel Nguyen</h3>
                <p style={{ fontSize: 13, color: "var(--gold)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 24 }}>Chủ tịch Hội đồng Quản trị</p>
                <div style={{ width: 40, height: 1, background: "var(--gold)", marginBottom: 24 }} />
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.75, marginBottom: 32 }}>
                  Nhà sáng lập và lãnh đạo A&D Group với hơn 10 năm kinh nghiệm trong lĩnh vực pháp lý doanh nghiệp, M&A và phát triển hệ sinh thái LegalTech tại Việt Nam.
                </p>
                <Link href="/leadership" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--gold)", textDecoration: "none", fontWeight: 500, letterSpacing: "0.04em" }}>
                  Xem hồ sơ đầy đủ <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          CTA FINAL
      ══════════════════════════════ */}
      <section style={{ position: "relative", padding: "120px 0", overflow: "hidden" }}>
        <Image src="/images/banner2.avif" alt="" fill style={{ objectFit: "cover", objectPosition: "center" }} quality={85} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.78)" }} />
        <div className="container" style={{ position: "relative", textAlign: "center" }}>
          <p className="label" style={{ color: "var(--gold)", marginBottom: 20 }}>Bắt đầu hợp tác</p>
          <h2 className="font-display" style={{ fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 500, color: "#F7F3ED", lineHeight: 1.15, maxWidth: 640, margin: "0 auto 20px" }}>
            Sẵn sàng đồng hành cùng doanh nghiệp của bạn
          </h2>
          <p style={{ color: "rgba(247,243,237,0.55)", fontSize: 16, maxWidth: 480, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Pháp lý, kế toán, công nghệ — giải pháp toàn diện cho doanh nghiệp của bạn.
          </p>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 12,
            background: "var(--gold)", color: "#fff",
            fontSize: 14, fontWeight: 500, letterSpacing: "0.05em",
            padding: "16px 36px", textDecoration: "none",
          }}>
            Liên hệ tư vấn ngay <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
