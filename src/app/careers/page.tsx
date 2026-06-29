import Link from "next/link";

const mobileStyles = `
  @media (max-width: 768px) {
    .careers-perks-grid { grid-template-columns: 1fr 1fr !important; }
    .careers-job-header { flex-direction: column !important; align-items: flex-start !important; }
    .careers-apply-btn { width: 100% !important; text-align: center !important; }
    .careers-hero { padding-top: 100px !important; padding-bottom: 56px !important; }
    .container { padding-left: 20px !important; padding-right: 20px !important; }
    .section { padding-top: 64px !important; padding-bottom: 64px !important; }
    .section-sm { padding-top: 48px !important; padding-bottom: 48px !important; }
  }
  @media (max-width: 480px) {
    .careers-perks-grid { grid-template-columns: 1fr !important; }
  }
`;

const positions = [
  {
    dept: "Pháp lý",
    deptColor: "#1A5276",
    title: "Luật sư tư vấn doanh nghiệp",
    company: "A&D Law Firm",
    type: "Toàn thời gian",
    location: "TP. Hồ Chí Minh",
    desc: "Tư vấn pháp lý cho doanh nghiệp, soạn thảo hợp đồng, hỗ trợ giao dịch M&A.",
    requirements: ["Tốt nghiệp cử nhân luật trở lên", "2+ năm kinh nghiệm tư vấn doanh nghiệp", "Tiếng Anh thương mại"],
  },
  {
    dept: "Kế toán",
    deptColor: "#1E6B3C",
    title: "Kế toán trưởng dịch vụ",
    company: "A&D Accounting & Tax",
    type: "Toàn thời gian",
    location: "TP. Hồ Chí Minh",
    desc: "Quản lý dịch vụ kế toán cho portfolio khách hàng doanh nghiệp vừa và lớn.",
    requirements: ["Bằng kế toán/kiểm toán", "5+ năm kinh nghiệm kế toán doanh nghiệp", "Chứng chỉ CPA là lợi thế"],
  },
  {
    dept: "Công nghệ",
    deptColor: "#7D3C98",
    title: "Full-stack Developer",
    company: "A&D Tech",
    type: "Toàn thời gian",
    location: "TP. HCM / Remote",
    desc: "Phát triển và duy trì các sản phẩm A&D OS, QuyĐịnh.vn, iAgree.vn.",
    requirements: ["React/Next.js và Node.js", "2+ năm kinh nghiệm", "Kinh nghiệm với AI/ML là lợi thế"],
  },
  {
    dept: "Công nghệ",
    deptColor: "#7D3C98",
    title: "AI/Legal Tech Engineer",
    company: "A&D Tech",
    type: "Toàn thời gian",
    location: "TP. HCM / Remote",
    desc: "Xây dựng các tính năng AI cho QuyĐịnh.vn — embedding, RAG, và NLP cho văn bản pháp luật.",
    requirements: ["Python, PyTorch hoặc TensorFlow", "Kinh nghiệm NLP và LLM", "Hiểu biết về văn bản pháp luật là lợi thế"],
  },
];

const perks = [
  { icon: "💰", title: "Lương cạnh tranh", desc: "Mức thu nhập hấp dẫn, xem xét tăng lương định kỳ 6 tháng." },
  { icon: "📚", title: "Đào tạo liên tục", desc: "Budget học tập, tham gia hội thảo và khóa đào tạo trong và ngoài nước." },
  { icon: "🏥", title: "Bảo hiểm sức khỏe", desc: "Gói bảo hiểm sức khỏe cao cấp cho nhân viên và người thân." },
  { icon: "🌏", title: "Môi trường chuyên nghiệp", desc: "Làm việc với các chuyên gia hàng đầu trong pháp lý, kế toán và công nghệ." },
  { icon: "🚀", title: "Cơ hội phát triển", desc: "Lộ trình thăng tiến rõ ràng, cơ hội dẫn dắt đội nhóm." },
  { icon: "⚡", title: "Linh hoạt thời gian", desc: "Một số vị trí hỗ trợ remote/hybrid, tập trung vào kết quả." },
];

export default function CareersPage() {
  return (
    <>
      <style>{mobileStyles}</style>
      {/* Hero */}
      <section className="careers-hero" style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 640 }}>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>Tuyển dụng</span>
            <h1 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 24,
            }}>
              Cùng nhau xây dựng<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>tương lai doanh nghiệp</em>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              A&D Group tìm kiếm những người tài năng, đam mê và muốn tạo ra giá trị thực sự cho doanh nghiệp Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="section-sm" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ marginBottom: 40, textAlign: "center" }}>
            <h2 className="font-display display-md" style={{ color: "var(--text-primary)" }}>Tại sao gia nhập A&D Group?</h2>
          </div>
          <div className="careers-perks-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {perks.map((p) => (
              <div key={p.title} style={{ padding: "28px 24px", background: "var(--white)", border: "1px solid var(--border)" }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{p.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Vị trí tuyển dụng</span>
            <h2 className="font-display display-lg" style={{ color: "var(--text-primary)" }}>
              Vị trí đang mở
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {positions.map((pos) => (
              <div key={pos.title} className="card-light" style={{ padding: "32px 36px" }}>
                <div className="careers-job-header" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                      <span style={{
                        fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase",
                        color: pos.deptColor, background: pos.deptColor + "15", padding: "3px 9px",
                      }}>
                        {pos.dept}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{pos.company}</span>
                    </div>
                    <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>{pos.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: 16, maxWidth: 560 }}>{pos.desc}</p>
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                        📍 {pos.location}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 6 }}>
                        ⏰ {pos.type}
                      </span>
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <p style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600, marginBottom: 8 }}>
                        Yêu cầu
                      </p>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                        {pos.requirements.map((r) => (
                          <li key={r} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 8 }}>
                            <span style={{ color: "var(--gold)", flexShrink: 0 }}>✓</span> {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div style={{ flexShrink: 0 }}>
                    <Link href="/contact" className="btn-gold careers-apply-btn" style={{ padding: "12px 24px", fontSize: 13, whiteSpace: "nowrap" }}>
                      Ứng tuyển →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--bg-dark)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600, margin: "0 auto" }}>
          <span className="label-dark" style={{ display: "block", marginBottom: 16 }}>Không thấy vị trí phù hợp?</span>
          <h2 className="font-display display-md" style={{ color: "var(--white)", marginBottom: 20 }}>
            Gửi hồ sơ tự do
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 36, lineHeight: 1.7 }}>
            Chúng tôi luôn tìm kiếm người tài. Gửi CV và thư giới thiệu — chúng tôi sẽ liên hệ khi có vị trí phù hợp.
          </p>
          <Link href="/contact" className="btn-gold">Gửi hồ sơ →</Link>
        </div>
      </section>
    </>
  );
}
