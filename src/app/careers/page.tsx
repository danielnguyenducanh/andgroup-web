import Link from "next/link";
import { ArrowRight, MapPin, Clock, DollarSign, BookOpen, Heart, Globe, TrendingUp, Zap } from "lucide-react";

const mobileStyles = `
  @media (max-width: 768px) {
    .careers-perks-grid { grid-template-columns: 1fr 1fr !important; }
    .careers-job-header { flex-direction: column !important; align-items: flex-start !important; }
    .careers-apply-btn { width: 100% !important; text-align: center !important; justify-content: center !important; }
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
    deptColor: "#5B2E8C",
    title: "Luật sư tư vấn doanh nghiệp",
    company: "A&D Law Firm",
    type: "Toàn thời gian",
    location: "TP. Hồ Chí Minh",
    desc: "Tư vấn pháp lý cho doanh nghiệp, soạn thảo hợp đồng, hỗ trợ giao dịch M&A và pháp lý đầu tư.",
    requirements: ["Tốt nghiệp cử nhân luật trở lên", "2+ năm kinh nghiệm tư vấn doanh nghiệp", "Tiếng Anh thương mại"],
  },
  {
    dept: "Kế toán",
    deptColor: "#5B2E8C",
    title: "Kế toán trưởng dịch vụ",
    company: "A&D Accounting & Tax",
    type: "Toàn thời gian",
    location: "TP. Hồ Chí Minh",
    desc: "Quản lý dịch vụ kế toán cho portfolio khách hàng doanh nghiệp vừa và lớn.",
    requirements: ["Bằng kế toán/kiểm toán", "5+ năm kinh nghiệm kế toán doanh nghiệp", "Chứng chỉ CPA là lợi thế"],
  },
  {
    dept: "Công nghệ",
    deptColor: "#5B2E8C",
    title: "Full-stack Developer",
    company: "A&D Tech",
    type: "Toàn thời gian",
    location: "TP. HCM / Remote",
    desc: "Phát triển và duy trì các sản phẩm A&D OS, QuyĐịnh.vn, iAgree.vn.",
    requirements: ["React/Next.js và Node.js", "2+ năm kinh nghiệm", "Kinh nghiệm với AI/ML là lợi thế"],
  },
  {
    dept: "Công nghệ",
    deptColor: "#5B2E8C",
    title: "AI/Legal Tech Engineer",
    company: "A&D Tech",
    type: "Toàn thời gian",
    location: "TP. HCM / Remote",
    desc: "Xây dựng các tính năng AI cho QuyĐịnh.vn — embedding, RAG, và NLP cho văn bản pháp luật.",
    requirements: ["Python, PyTorch hoặc TensorFlow", "Kinh nghiệm NLP và LLM", "Hiểu biết văn bản pháp luật là lợi thế"],
  },
];

const perks = [
  { Icon: DollarSign,  title: "Lương cạnh tranh",       desc: "Mức thu nhập hấp dẫn, xem xét tăng lương định kỳ 6 tháng." },
  { Icon: BookOpen,    title: "Đào tạo liên tục",        desc: "Budget học tập, tham gia hội thảo và khóa đào tạo trong và ngoài nước." },
  { Icon: Heart,       title: "Bảo hiểm sức khỏe",      desc: "Gói bảo hiểm sức khỏe cao cấp cho nhân viên và người thân." },
  { Icon: Globe,       title: "Môi trường chuyên nghiệp", desc: "Làm việc với chuyên gia hàng đầu trong pháp lý, kế toán và công nghệ." },
  { Icon: TrendingUp,  title: "Cơ hội phát triển",      desc: "Lộ trình thăng tiến rõ ràng, cơ hội dẫn dắt đội nhóm." },
  { Icon: Zap,         title: "Linh hoạt thời gian",    desc: "Một số vị trí hỗ trợ remote/hybrid, tập trung vào kết quả." },
];

export default function CareersPage() {
  return (
    <>
      <style>{mobileStyles}</style>

      {/* Hero */}
      <section className="careers-hero" style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ maxWidth: 640 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 40, height: 1, background: "var(--gold)", display: "inline-block" }} />
              Tuyển dụng
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: 24 }}>
              Cùng nhau xây dựng<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>tương lai A&D Group</em>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Chúng tôi tìm kiếm những người tài năng, đam mê và muốn tạo ra giá trị thực sự — trong pháp lý, tài chính và công nghệ.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section style={{ background: "var(--bg-secondary)", padding: "72px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 48, textAlign: "center" }}>
            <span style={{ display: "block", width: 48, height: 1, background: "var(--gold)", margin: "0 auto 20px" }} />
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500, color: "var(--text-primary)" }}>
              Tại sao gia nhập A&D Group?
            </h2>
          </div>

          <div className="careers-perks-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {perks.map(({ Icon, title, desc }) => (
              <div key={title} style={{ padding: "32px 28px", background: "#fff", border: "1px solid var(--border)" }}>
                <div style={{ width: 40, height: 40, border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <Icon size={18} style={{ color: "var(--gold)" }} />
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--text-secondary)", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 48 }}>
            <span style={{ display: "block", width: 48, height: 1, background: "var(--gold)", marginBottom: 20 }} />
            <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500, color: "var(--text-primary)" }}>
              Vị trí đang mở
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {positions.map((pos) => (
              <div key={pos.title} style={{ padding: "36px", border: "1px solid var(--border)", background: "var(--bg-primary)", transition: "box-shadow 0.2s" }}>
                <div className="careers-job-header" style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24 }}>
                  <div style={{ flex: 1 }}>
                    {/* Dept + company */}
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
                      <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: pos.deptColor, background: pos.deptColor + "15", padding: "3px 10px" }}>
                        {pos.dept}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)" }}>{pos.company}</span>
                    </div>

                    <h3 className="font-display" style={{ fontSize: 22, fontWeight: 500, color: "var(--text-primary)", marginBottom: 10 }}>
                      {pos.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.65, marginBottom: 16, maxWidth: 560 }}>
                      {pos.desc}
                    </p>

                    {/* Meta */}
                    <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 20 }}>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 5 }}>
                        <MapPin size={13} style={{ color: "var(--gold)" }} /> {pos.location}
                      </span>
                      <span style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: 5 }}>
                        <Clock size={13} style={{ color: "var(--gold)" }} /> {pos.type}
                      </span>
                    </div>

                    {/* Requirements */}
                    <ul style={{ listStyle: "none" }}>
                      {pos.requirements.map((r) => (
                        <li key={r} style={{ fontSize: 13, color: "var(--text-secondary)", display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 5 }}>
                          <span style={{ width: 14, height: 1, background: "var(--gold)", flexShrink: 0, marginTop: 8 }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Apply btn */}
                  <div style={{ flexShrink: 0 }}>
                    <Link href="/contact" className="careers-apply-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold)", color: "#fff", fontSize: 13, fontWeight: 500, padding: "12px 24px", textDecoration: "none", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                      Ứng tuyển <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-dark)", padding: "80px 0", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 560, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>
            Không thấy vị trí phù hợp?
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, color: "#F7F3ED", marginBottom: 16 }}>
            Gửi hồ sơ tự do
          </h2>
          <p style={{ fontSize: 15, color: "rgba(247,243,237,0.55)", marginBottom: 36, lineHeight: 1.7 }}>
            Chúng tôi luôn tìm kiếm người tài. Gửi CV — chúng tôi sẽ liên hệ khi có vị trí phù hợp.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold)", color: "#fff", fontSize: 14, fontWeight: 500, padding: "14px 32px", textDecoration: "none" }}>
            Gửi hồ sơ <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
