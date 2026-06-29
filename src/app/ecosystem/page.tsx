import Link from "next/link";
import Image from "next/image";

const companies = [
  {
    logo: "/images/project/andlaw-logo.png",
    logoType: "image" as const,
    tag: "Pháp lý",
    tagColor: "#1A5276",
    name: "A&D Law Firm",
    url: "https://andlaw.vn",
    domain: "andlaw.vn",
    desc: "Tư vấn pháp lý toàn diện — từ hợp đồng, đầu tư, M&A đến tranh tụng cho doanh nghiệp Việt Nam.",
    services: ["Tư vấn pháp lý thường xuyên", "Soạn thảo & rà soát hợp đồng", "Tranh tụng & giải quyết tranh chấp", "Pháp lý đầu tư & M&A", "Sở hữu trí tuệ", "Lao động & nhân sự"],
  },
  {
    logo: "/images/project/andacc-logo.png",
    logoType: "image" as const,
    tag: "Kế toán",
    tagColor: "#1E6B3C",
    name: "A&D Accounting & Tax",
    url: "https://andacc.vn",
    domain: "andacc.vn",
    desc: "Kế toán, thuế và tài chính doanh nghiệp — chính xác, minh bạch và đúng hạn.",
    services: ["Kế toán trọn gói", "Tư vấn thuế & quyết toán", "Kiểm toán nội bộ", "Lập báo cáo tài chính", "Tư vấn tài chính doanh nghiệp", "Kế toán quản trị"],
  },
];

const products = [
  {
    tag: "ERP",
    name: "A&D OS",
    url: "https://andos.vn",
    domain: "andos.vn",
    desc: "Hệ thống quản trị doanh nghiệp tích hợp — HR, kế toán, hợp đồng và workflow trên một nền tảng. Thiết kế riêng cho doanh nghiệp Việt Nam.",
    features: ["Quản lý nhân sự & chấm công", "Kế toán & tài chính", "Quản lý hợp đồng", "Workflow & phê duyệt", "Báo cáo & dashboard", "API mở cho tích hợp"],
  },
  {
    tag: "Legal AI",
    name: "QuyĐịnh.vn",
    url: "https://quydinh.vn",
    domain: "quydinh.vn",
    desc: "Tra cứu văn bản pháp luật Việt Nam bằng AI — nhanh, chính xác, cập nhật liên tục. Hỏi bằng ngôn ngữ tự nhiên, nhận câu trả lời có nguồn.",
    features: ["Tìm kiếm ngữ nghĩa AI", "Cơ sở dữ liệu 1.5M+ điều khoản", "Tra cứu theo số hiệu", "Theo dõi hiệu lực văn bản", "Xuất báo cáo pháp lý", "API tích hợp"],
  },
  {
    tag: "Platform",
    name: "iAgree.vn",
    url: "https://iagree.vn",
    domain: "iagree.vn",
    desc: "Ký kết hợp đồng điện tử có giá trị pháp lý — an toàn, minh bạch, lưu trữ vĩnh viễn theo quy định pháp luật Việt Nam.",
    features: ["Chữ ký điện tử pháp lý", "Xác thực eKYC", "Lưu trữ blockchain", "Template hợp đồng chuẩn", "Đa bên ký kết", "Audit trail đầy đủ"],
  },
];

export default function EcosystemPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>Hệ sinh thái A&D</span>
            <h1 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 24,
            }}>
              Ba công ty, ba sản phẩm —<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>một hệ sinh thái</em>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              A&D Group xây dựng hệ sinh thái dịch vụ và công nghệ toàn diện — giúp doanh nghiệp Việt Nam quản trị pháp lý, tài chính và vận hành hiệu quả hơn.
            </p>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Công ty thành viên</span>
            <h2 className="font-display display-lg" style={{ color: "var(--text-primary)" }}>
              Dịch vụ chuyên nghiệp
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
            {companies.map((c) => (
              <div key={c.name} className="card-light" style={{ padding: 40 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 28 }}>
                  <div>
                    <span style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: c.tagColor,
                      background: c.tagColor + "15",
                      padding: "4px 10px",
                      marginBottom: 16,
                    }}>
                      {c.tag}
                    </span>
                    <div style={{ height: 40 }}>
                      {c.logoType === "image" ? (
                        <Image src={c.logo} alt={c.name} width={130} height={40} style={{ objectFit: "contain", objectPosition: "left center", maxHeight: 40 }} />
                      ) : (
                        <span className="font-display" style={{ fontSize: 22, fontWeight: 600 }}>{c.name}</span>
                      )}
                    </div>
                  </div>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 12,
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      border: "1px solid var(--border)",
                      padding: "6px 12px",
                      flexShrink: 0,
                    }}
                  >
                    {c.domain} ↗
                  </a>
                </div>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: 24 }}>{c.desc}</p>
                <div className="divider" style={{ marginBottom: 24 }} />
                <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {c.services.map((s) => (
                    <li key={s} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                      <span style={{ color: "var(--gold)", flexShrink: 0 }}>✓</span> {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section" style={{ background: "var(--bg-dark)" }}>
        <div className="container">
          <div style={{ marginBottom: 56 }}>
            <span className="label-dark" style={{ display: "block", marginBottom: 16 }}>Sản phẩm công nghệ</span>
            <h2 className="font-display display-lg" style={{ color: "var(--white)" }}>
              A&D Tech Products
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {products.map((p, i) => (
              <div key={p.name} className="card-dark" style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr",
                gap: 48,
                padding: "40px 44px",
              }}>
                <div>
                  <span style={{
                    display: "inline-block",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold-light)",
                    background: "rgba(212,168,50,0.12)",
                    padding: "4px 10px",
                    marginBottom: 16,
                    border: "1px solid rgba(212,168,50,0.2)",
                  }}>
                    {p.tag}
                  </span>
                  <h3 className="font-display" style={{ fontSize: 32, fontWeight: 600, color: "var(--white)", marginBottom: 12 }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 24 }}>{p.desc}</p>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-light"
                    style={{ display: "inline-flex", padding: "10px 20px", fontSize: 13 }}
                  >
                    Xem {p.domain} ↗
                  </a>
                </div>
                <div>
                  <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontWeight: 600, marginBottom: 16 }}>
                    Tính năng chính
                  </p>
                  <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                    {p.features.map((f) => (
                      <li key={f} style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                        <span style={{ color: "var(--gold-light)", flexShrink: 0, marginTop: 1 }}>→</span> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--bg-secondary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="font-display display-md" style={{ color: "var(--text-primary)", marginBottom: 20 }}>
            Hãy trải nghiệm hệ sinh thái A&D
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Liên hệ để tìm hiểu cách tích hợp các dịch vụ và sản phẩm A&D phù hợp với doanh nghiệp của bạn.
          </p>
          <Link href="/contact" className="btn-gold">Tư vấn miễn phí →</Link>
        </div>
      </section>
    </>
  );
}
