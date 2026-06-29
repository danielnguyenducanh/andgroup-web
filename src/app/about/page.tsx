import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Scale, BarChart2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Về A&D Group",
  description: "A&D Group — hệ sinh thái dịch vụ Pháp lý, Kế toán & Thuế, Công nghệ phục vụ doanh nghiệp, cá nhân và freelancer tại Việt Nam.",
};

const values = [
  {
    n: "01",
    title: "Chính trực",
    desc: "Trung thực và minh bạch trong mọi tư vấn. Chúng tôi đặt lợi ích của khách hàng lên trên hết, không có xung đột lợi ích.",
  },
  {
    n: "02",
    title: "Chuyên môn sâu",
    desc: "Đội ngũ luật sư, kế toán và kỹ sư được đào tạo bài bản, liên tục cập nhật kiến thức và công nghệ mới nhất.",
  },
  {
    n: "03",
    title: "Lấy khách hàng làm trung tâm",
    desc: "Mỗi giải pháp được thiết kế riêng cho từng nhu cầu — dù là doanh nghiệp lớn, startup, hay cá nhân tự do.",
  },
  {
    n: "04",
    title: "Đổi mới liên tục",
    desc: "Ứng dụng công nghệ để số hóa và nâng cao chất lượng dịch vụ, mang lại trải nghiệm tốt nhất cho khách hàng.",
  },
];

const pillars = [
  {
    Icon: Scale,
    title: "Pháp lý",
    company: "A&D Law Firm",
    desc: "Tư vấn pháp lý toàn diện cho doanh nghiệp và cá nhân: thành lập, hợp đồng, M&A, tranh chấp và pháp lý lao động.",
  },
  {
    Icon: BarChart2,
    title: "Kế toán & Thuế",
    company: "A&D Accounting & Tax",
    desc: "Dịch vụ kế toán, kiểm toán và tư vấn thuế chuyên nghiệp giúp tối ưu tài chính và đảm bảo tuân thủ pháp luật.",
  },
  {
    Icon: Cpu,
    title: "Công nghệ",
    company: "A&D Tech",
    desc: "Phát triển sản phẩm LegalTech phục vụ doanh nghiệp, cá nhân và freelancer: ERP, AI pháp lý, ký số và escrow.",
  },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .about-hero-pad { padding-top: 100px !important; padding-bottom: 48px !important; }
          .about-mission-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-pillars-grid { grid-template-columns: 1fr !important; }
          .about-values-grid { grid-template-columns: 1fr !important; }
          .about-h1 { font-size: 40px !important; }
          .about-h2 { font-size: 30px !important; }
          .container { padding-left: 20px !important; padding-right: 20px !important; }
          .section { padding-top: 64px !important; padding-bottom: 64px !important; }
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 72 }} className="about-hero-pad">
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ width: 40, height: 1, background: "var(--gold)", display: "inline-block" }} />
            Về A&D Group
          </p>
          <h1 className="font-display about-h1" style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 500, lineHeight: 1.08, color: "var(--text-primary)", maxWidth: 700, marginBottom: 24 }}>
            Hệ sinh thái dịch vụ<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>chuyên nghiệp & toàn diện</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: 560 }}>
            A&D Group xây dựng hệ sinh thái tích hợp Pháp lý – Kế toán – Công nghệ, phục vụ doanh nghiệp, cá nhân và freelancer tại Việt Nam với tiêu chuẩn quốc tế.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container about-mission-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span style={{ display: "block", width: 48, height: 1, background: "var(--gold)", marginBottom: 24 }} />
            <h2 className="font-display about-h2" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.15, marginBottom: 24 }}>
              Sứ mệnh của chúng tôi
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: 20 }}>
              Chúng tôi tin rằng mọi cá nhân và tổ chức — dù là tập đoàn lớn, doanh nghiệp vừa nhỏ, startup hay freelancer — đều xứng đáng được tiếp cận dịch vụ pháp lý, tài chính và công nghệ ở đẳng cấp cao nhất.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: 32 }}>
              A&D Group tồn tại để thu hẹp khoảng cách đó — bằng cách kết hợp chuyên môn sâu với công nghệ hiện đại, tạo ra giải pháp vừa accessible vừa professional.
            </p>
            <Link href="/ecosystem" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--gold)", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: 2 }}>
              Khám phá hệ sinh thái <ArrowRight size={14} />
            </Link>
          </div>

          {/* Quote */}
          <div style={{ background: "var(--bg-secondary)", padding: "48px 40px", borderLeft: "3px solid var(--gold)" }}>
            <blockquote className="font-display" style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: 32 }}>
              "Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi là người đồng hành tin cậy, giúp khách hàng vượt qua mọi thách thức pháp lý, tài chính và công nghệ."
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span className="font-display" style={{ color: "#fff", fontWeight: 600, fontSize: 16 }}>DN</span>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, color: "var(--text-primary)" }}>Daniel Nguyen</div>
                <div style={{ fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gold)" }}>Chairman, A&D Group</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "96px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 56 }}>
            <span style={{ display: "block", width: 48, height: 1, background: "var(--gold)", marginBottom: 20 }} />
            <h2 className="font-display about-h2" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 500, color: "var(--text-primary)" }}>
              Ba trụ cột chuyên môn
            </h2>
          </div>

          <div className="about-pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {pillars.map((p) => (
              <div key={p.title} style={{ background: "#fff", padding: "40px 32px", border: "1px solid var(--border)" }}>
                <div style={{ width: 40, height: 40, marginBottom: 16, color: "var(--gold)" }}><p.Icon size={36} strokeWidth={1.5} /></div>
                <p style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", fontWeight: 600, marginBottom: 6 }}>{p.company}</p>
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", marginBottom: 16 }}>{p.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 56 }}>
            <span style={{ display: "block", width: 48, height: 1, background: "var(--gold)", marginBottom: 20 }} />
            <h2 className="font-display about-h2" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 500, color: "var(--text-primary)" }}>
              Giá trị cốt lõi
            </h2>
          </div>

          <div className="about-values-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
            {values.map((v) => (
              <div key={v.n} style={{ background: "var(--bg-secondary)", padding: "32px", border: "1px solid var(--border)" }}>
                <div className="font-display" style={{ fontSize: 40, fontWeight: 500, color: "var(--gold)", opacity: 0.25, lineHeight: 1, marginBottom: 16 }}>{v.n}</div>
                <h4 style={{ fontWeight: 600, fontSize: 16, color: "var(--text-primary)", marginBottom: 10 }}>{v.title}</h4>
                <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--bg-dark)", padding: "80px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", textAlign: "center" }}>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 500, color: "#F7F3ED", marginBottom: 16 }}>
            Hãy để chúng tôi đồng hành cùng bạn
          </h2>
          <p style={{ color: "rgba(247,243,237,0.55)", marginBottom: 36, fontSize: 15 }}>
            Dù là doanh nghiệp, cá nhân hay freelancer — A&D Group luôn sẵn sàng hỗ trợ.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--gold)", color: "#fff", fontSize: 14, fontWeight: 500, padding: "14px 32px", textDecoration: "none" }}>
            Liên hệ ngay <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
