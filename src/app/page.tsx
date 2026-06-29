import Image from "next/image";
import Link from "next/link";

/* ───────── DATA ───────── */
const stats = [
  { value: "10+", label: "Năm kinh nghiệm" },
  { value: "500+", label: "Doanh nghiệp phục vụ" },
  { value: "3", label: "Công ty thành viên" },
  { value: "50+", label: "Chuyên gia" },
];

const companies = [
  {
    logo: "/images/project/andlaw-logo.png",
    logoType: "image",
    name: "A&D Law Firm",
    tagline: "Tư vấn pháp lý toàn diện cho doanh nghiệp",
    services: [
      "Tư vấn pháp lý thường xuyên",
      "Soạn thảo & rà soát hợp đồng",
      "Tranh tụng & giải quyết tranh chấp",
      "Pháp lý đầu tư & M&A",
    ],
    url: "https://andlaw.vn",
    tag: "Pháp lý",
    tagColor: "#1A5276",
  },
  {
    logo: "/images/project/andacc-logo.png",
    logoType: "image",
    name: "A&D Accounting & Tax",
    tagline: "Kế toán, thuế và tài chính doanh nghiệp",
    services: [
      "Dịch vụ kế toán trọn gói",
      "Tư vấn thuế & quyết toán thuế",
      "Kiểm toán nội bộ",
      "Lập báo cáo tài chính",
    ],
    url: "https://andacc.vn",
    tag: "Kế toán",
    tagColor: "#1E6B3C",
  },
  {
    logo: null,
    logoType: "text",
    name: "A&D Tech",
    tagline: "Công nghệ pháp lý & quản trị doanh nghiệp",
    services: [
      "Phần mềm ERP doanh nghiệp",
      "Nền tảng tra cứu pháp luật AI",
      "Ký kết hợp đồng điện tử",
      "Chuyển đổi số pháp lý",
    ],
    url: "https://andos.vn",
    tag: "Công nghệ",
    tagColor: "#7D3C98",
  },
];

const products = [
  {
    tag: "ERP",
    name: "A&D OS",
    desc: "Hệ thống quản trị doanh nghiệp tích hợp — HR, kế toán, hợp đồng và workflow trên một nền tảng.",
    url: "https://andos.vn",
    accent: "#D4A832",
  },
  {
    tag: "Legal AI",
    name: "QuyĐịnh.vn",
    desc: "Tra cứu văn bản pháp luật Việt Nam bằng AI — nhanh, chính xác, cập nhật liên tục.",
    url: "https://quydinh.vn",
    accent: "#D4A832",
  },
  {
    tag: "Platform",
    name: "iAgree.vn",
    desc: "Ký kết hợp đồng điện tử có giá trị pháp lý — an toàn, minh bạch, lưu trữ vĩnh viễn.",
    url: "https://iagree.vn",
    accent: "#D4A832",
  },
];

const values = [
  { n: "01", title: "Chính trực", desc: "Trung thực và minh bạch trong mọi tư vấn, không có xung đột lợi ích." },
  { n: "02", title: "Chuyên môn sâu", desc: "Đội ngũ luật sư, kế toán và kỹ sư được đào tạo bài bản, liên tục cập nhật." },
  { n: "03", title: "Lấy khách hàng làm trung tâm", desc: "Mọi giải pháp được thiết kế riêng cho từng doanh nghiệp, không áp dụng đồng loạt." },
  { n: "04", title: "Đổi mới liên tục", desc: "Ứng dụng công nghệ để nâng cao hiệu quả dịch vụ và trải nghiệm khách hàng." },
];

/* ───────── PAGE ───────── */
export default function HomePage() {
  return (
    <>
      {/* ──────────── HERO ──────────── */}
      <section
        style={{
          background: "var(--bg-primary)",
          paddingTop: 120,
          paddingBottom: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container" style={{ width: "100%" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
            minHeight: "calc(100vh - 120px)",
          }}>
            {/* Left */}
            <div style={{ paddingBottom: 80 }}>
              <span className="label" style={{ display: "block", marginBottom: 20 }}>
                Tập đoàn A&D Group
              </span>
              <h1 className="font-display" style={{
                fontSize: "clamp(44px, 5.5vw, 76px)",
                fontWeight: 500,
                lineHeight: 1.1,
                color: "var(--text-primary)",
                marginBottom: 24,
                letterSpacing: "-0.02em",
              }}>
                Pháp lý · Kế toán<br />
                <em style={{ color: "var(--gold)", fontStyle: "italic" }}>& Công nghệ</em>
              </h1>
              <p style={{
                fontSize: 17,
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                maxWidth: 480,
                marginBottom: 40,
              }}>
                A&D Group kiến tạo hệ sinh thái dịch vụ chuyên nghiệp — từ pháp lý, kế toán đến công nghệ — giúp doanh nghiệp Việt Nam vận hành hiệu quả và phát triển bền vững.
              </p>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
                <Link href="/about" className="btn-gold">
                  Khám phá tập đoàn →
                </Link>
                <Link href="/contact" className="btn-outline">
                  Liên hệ tư vấn
                </Link>
              </div>

              {/* Stats */}
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 24,
                paddingTop: 32,
                borderTop: "1px solid var(--border)",
              }}>
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display" style={{
                      fontSize: 32,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      marginBottom: 4,
                    }}>
                      {s.value}
                    </p>
                    <p style={{ fontSize: 12, color: "var(--text-muted)", lineHeight: 1.4 }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — image */}
            <div style={{
              position: "relative",
              height: "100%",
              minHeight: 520,
              display: "flex",
              alignItems: "stretch",
              overflow: "hidden",
            }}>
              <div style={{
                position: "absolute",
                inset: 0,
                marginTop: -120,
                marginRight: -48,
              }}>
                <Image
                  src="/images/banner1.avif"
                  alt="TP. Hồ Chí Minh"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  priority
                />
                {/* Overlay gradient */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to right, var(--bg-primary) 0%, transparent 20%)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── MARQUEE ──────────── */}
      <div style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "16px 0",
        overflow: "hidden",
      }}>
        <div className="marquee-track">
          {Array(4).fill(null).map((_, i) => (
            <span key={i} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 0,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              paddingRight: 0,
            }}>
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>✦</span>
              A&D Law Firm
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>·</span>
              A&D Accounting &amp; Tax
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>·</span>
              A&D Tech
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>·</span>
              LegalTech
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>·</span>
              Pháp lý
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>·</span>
              Kế toán &amp; Thuế
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>·</span>
              Công nghệ
              <span style={{ color: "var(--gold)", marginRight: 16, marginLeft: 16 }}>·</span>
              andgroup.com.vn
            </span>
          ))}
        </div>
      </div>

      {/* ──────────── COMPANIES ──────────── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          {/* Header */}
          <div style={{ marginBottom: 64, maxWidth: 600 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>
              Công ty thành viên
            </span>
            <h2 className="font-display display-lg" style={{ color: "var(--text-primary)", marginBottom: 16 }}>
              Ba trụ cột của tập đoàn
            </h2>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7 }}>
              Mỗi công ty thành viên là chuyên gia đầu ngành trong lĩnh vực của mình, cùng tạo thành hệ sinh thái dịch vụ toàn diện cho doanh nghiệp.
            </p>
          </div>

          {/* Cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
          }}>
            {companies.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target={c.url.startsWith("http") ? "_blank" : "_self"}
                rel={c.url.startsWith("http") ? "noopener noreferrer" : ""}
                className="card-light"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 36,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Tag */}
                <span style={{
                  display: "inline-block",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: c.tagColor,
                  background: c.tagColor + "15",
                  padding: "4px 10px",
                  marginBottom: 24,
                  alignSelf: "flex-start",
                }}>
                  {c.tag}
                </span>

                {/* Logo */}
                <div style={{ marginBottom: 20, height: 48, display: "flex", alignItems: "center" }}>
                  {c.logoType === "image" && c.logo ? (
                    <Image
                      src={c.logo}
                      alt={c.name}
                      width={140}
                      height={44}
                      style={{ objectFit: "contain", objectPosition: "left center", maxHeight: 44 }}
                    />
                  ) : (
                    <span className="font-display" style={{
                      fontSize: 24,
                      fontWeight: 600,
                      color: "var(--text-primary)",
                      letterSpacing: "-0.02em",
                    }}>
                      A&D Tech
                    </span>
                  )}
                </div>

                {/* Name & tagline */}
                <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>
                  {c.name}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 24, lineHeight: 1.6 }}>
                  {c.tagline}
                </p>

                {/* Divider */}
                <div className="divider" style={{ marginBottom: 20 }} />

                {/* Services */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  {c.services.map((s) => (
                    <li key={s} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text-secondary)" }}>
                      <span style={{ color: "var(--gold)", marginTop: 2, flexShrink: 0 }}>—</span>
                      {s}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div style={{
                  marginTop: 28,
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--gold)",
                  letterSpacing: "0.05em",
                }}>
                  Xem chi tiết →
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────── ECOSYSTEM (DARK) ──────────── */}
      <section className="section" style={{ background: "var(--bg-dark)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: 80,
            alignItems: "center",
          }}>
            {/* Left text */}
            <div>
              <span className="label-dark" style={{ display: "block", marginBottom: 16 }}>
                Hệ sinh thái công nghệ
              </span>
              <h2 className="font-display" style={{
                fontSize: "clamp(36px, 3.5vw, 52px)",
                fontWeight: 500,
                lineHeight: 1.15,
                color: "var(--white)",
                marginBottom: 24,
              }}>
                A&D Tech kiến tạo<br />
                <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>nền tảng số</em>
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 36 }}>
                Ba sản phẩm công nghệ phục vụ hàng ngàn doanh nghiệp Việt Nam — từ quản trị nội bộ, tra cứu pháp luật đến ký kết hợp đồng điện tử.
              </p>
              <Link href="/ecosystem" className="btn-outline-light">
                Khám phá hệ sinh thái →
              </Link>
            </div>

            {/* Right cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {products.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-dark"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 20,
                    padding: "24px 28px",
                    textDecoration: "none",
                  }}
                >
                  <div style={{
                    width: 48,
                    height: 48,
                    background: "rgba(212,168,50,0.1)",
                    border: "1px solid rgba(212,168,50,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--gold-light)",
                    }}>
                      {p.tag}
                    </span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--white)", marginBottom: 6 }}>
                      {p.name}
                    </h3>
                    <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                      {p.desc}
                    </p>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 18, flexShrink: 0, marginTop: 2 }}>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── MISSION ──────────── */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}>
            {/* Left: Quote */}
            <div>
              <span className="label" style={{ display: "block", marginBottom: 20 }}>
                Sứ mệnh & Tầm nhìn
              </span>
              <blockquote className="font-display" style={{
                fontSize: "clamp(26px, 2.5vw, 38px)",
                fontWeight: 400,
                fontStyle: "italic",
                lineHeight: 1.4,
                color: "var(--text-primary)",
                marginBottom: 32,
                borderLeft: "3px solid var(--gold)",
                paddingLeft: 28,
              }}>
                &ldquo;Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi là người bạn đồng hành tin cậy trong hành trình phát triển của doanh nghiệp Việt.&rdquo;
              </blockquote>
              {/* Chairman */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, paddingLeft: 28 }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: "2px solid var(--border)",
                }}>
                  <Image
                    src="/images/leadership/daniel-nguyen.jpg"
                    alt="Daniel Nguyen"
                    width={52}
                    height={52}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  />
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>Daniel Nguyen</p>
                  <p style={{ fontSize: 13, color: "var(--text-muted)" }}>Chairman, A&D Group</p>
                </div>
              </div>
            </div>

            {/* Right: Values */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {values.map((v) => (
                <div key={v.n} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <span className="font-display" style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    flexShrink: 0,
                    marginTop: 2,
                    minWidth: 24,
                  }}>
                    {v.n}
                  </span>
                  <div>
                    <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 6 }}>
                      {v.title}
                    </h4>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── LEADERSHIP ──────────── */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>
              Ban lãnh đạo
            </span>
            <h2 className="font-display display-lg" style={{ color: "var(--text-primary)" }}>
              Người dẫn dắt A&D Group
            </h2>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="card-light" style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
              padding: "40px 48px",
              maxWidth: 680,
              width: "100%",
            }}>
              {/* Photo */}
              <div style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "3px solid var(--border)",
              }}>
                <Image
                  src="/images/leadership/daniel-nguyen.jpg"
                  alt="Daniel Nguyen"
                  width={120}
                  height={120}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              </div>

              {/* Info */}
              <div>
                <p style={{
                  fontSize: 12,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  fontWeight: 600,
                  marginBottom: 8,
                }}>
                  Chairman
                </p>
                <h3 className="font-display" style={{ fontSize: 28, fontWeight: 600, color: "var(--text-primary)", marginBottom: 4 }}>
                  Daniel Nguyen
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 16 }}>
                  Chủ tịch Hội đồng Quản trị
                </p>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 400 }}>
                  Nhà sáng lập và lãnh đạo tập đoàn với hơn 10 năm kinh nghiệm xây dựng các dịch vụ pháp lý, kế toán và công nghệ tại Việt Nam.
                </p>
                <Link
                  href="/leadership"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "var(--gold)", marginTop: 16, textDecoration: "none" }}
                >
                  Xem hồ sơ đầy đủ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────── CTA FINAL ──────────── */}
      <section style={{ position: "relative", minHeight: 400, display: "flex", alignItems: "center", overflow: "hidden" }}>
        {/* Background image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/images/banner2.avif"
            alt="TP HCM night"
            fill
            style={{ objectFit: "cover" }}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, rgba(15,15,15,0.92) 0%, rgba(15,15,15,0.75) 100%)",
          }} />
        </div>

        <div className="container" style={{ position: "relative", textAlign: "center", padding: "80px 48px" }}>
          <span className="label-dark" style={{ display: "block", marginBottom: 20 }}>
            Bắt đầu hợp tác
          </span>
          <h2 className="font-display" style={{
            fontSize: "clamp(32px, 4vw, 56px)",
            fontWeight: 500,
            color: "var(--white)",
            marginBottom: 20,
            maxWidth: 640,
            margin: "0 auto 20px",
          }}>
            Sẵn sàng đồng hành cùng doanh nghiệp của bạn
          </h2>
          <p style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.6)",
            maxWidth: 480,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}>
            Từ pháp lý, kế toán đến công nghệ — A&D Group cung cấp giải pháp tích hợp giúp doanh nghiệp phát triển bền vững.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-gold">
              Liên hệ tư vấn ngay →
            </Link>
            <Link href="/about" className="btn-outline-light">
              Tìm hiểu thêm
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
