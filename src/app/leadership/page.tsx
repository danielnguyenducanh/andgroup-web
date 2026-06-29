import Image from "next/image";
import Link from "next/link";

const mobileStyles = `
  @media (max-width: 768px) {
    .leadership-feature-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .leadership-hero { padding-top: 100px !important; padding-bottom: 56px !important; }
    .leadership-bio-photo { padding-bottom: 75% !important; }
    .leadership-tags { gap: 6px !important; }
    .container { padding-left: 20px !important; padding-right: 20px !important; }
    .section { padding-top: 64px !important; padding-bottom: 64px !important; }
  }
`;

export default function LeadershipPage() {
  return (
    <>
      <style>{mobileStyles}</style>
      {/* Hero */}
      <section className="leadership-hero" style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>Ban lãnh đạo</span>
            <h1 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Người dẫn dắt<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>A&D Group</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Đội ngũ lãnh đạo với chuyên môn sâu và tầm nhìn chiến lược, định hướng sự phát triển của tập đoàn.
            </p>
          </div>
        </div>
      </section>

      {/* Chairman feature */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="leadership-feature-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 72, alignItems: "start" }}>
            {/* Photo */}
            <div>
              <div className="leadership-bio-photo" style={{
                position: "relative",
                paddingBottom: "125%",
                overflow: "hidden",
                background: "var(--bg-secondary)",
              }}>
                <Image
                  src="/images/leadership/daniel-nguyen.jpg"
                  alt="Daniel Nguyen"
                  fill
                  style={{ objectFit: "cover", objectPosition: "top center" }}
                />
              </div>
              <div style={{
                marginTop: 20,
                padding: "20px 24px",
                background: "var(--bg-secondary)",
                borderLeft: "3px solid var(--gold)",
              }}>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>Chức danh</p>
                <p style={{ fontSize: 15, fontWeight: 600, color: "var(--text-primary)" }}>Chairman & Co-Founder</p>
                <p style={{ fontSize: 14, color: "var(--text-secondary)" }}>A&D Group</p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Chairman</span>
              <h2 className="font-display" style={{ fontSize: 48, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>
                Daniel Nguyen
              </h2>
              <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 32 }}>Chủ tịch Hội đồng Quản trị</p>

              <div className="divider" style={{ marginBottom: 32 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  Daniel Nguyen là nhà sáng lập và Chủ tịch Hội đồng Quản trị của A&D Group — tập đoàn tư vấn chuyên sâu gồm pháp lý, kế toán và công nghệ phục vụ doanh nghiệp Việt Nam.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  Với hơn 10 năm kinh nghiệm trong lĩnh vực tư vấn doanh nghiệp, ông đã xây dựng A&D Group từ một văn phòng luật nhỏ trở thành tập đoàn đa ngành với ba công ty thành viên và hơn 50 chuyên gia.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  Ông có tầm nhìn về việc ứng dụng công nghệ để democratize dịch vụ pháp lý và kế toán tại Việt Nam, thể hiện qua việc phát triển các sản phẩm như QuyĐịnh.vn, A&D OS và iAgree.vn.
                </p>
              </div>

              {/* Expertise */}
              <div style={{ marginTop: 36 }}>
                <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600, marginBottom: 16 }}>
                  Lĩnh vực chuyên môn
                </p>
                <div className="leadership-tags" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Pháp lý doanh nghiệp", "M&A", "Tư vấn đầu tư", "LegalTech", "Quản trị tập đoàn", "Chuyển đổi số"].map((tag) => (
                    <span key={tag} style={{
                      fontSize: 13,
                      padding: "6px 14px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      color: "var(--text-secondary)",
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section" style={{ background: "var(--bg-dark)" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div className="gold-rule-light" style={{ margin: "0 auto 32px" }} />
          <blockquote className="font-display" style={{
            fontSize: "clamp(22px, 2.5vw, 34px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "var(--white)",
            lineHeight: 1.5,
            marginBottom: 32,
          }}>
            &ldquo;Tôi tin rằng doanh nghiệp Việt Nam xứng đáng được hưởng dịch vụ tư vấn đẳng cấp quốc tế ngay trên quê hương mình.&rdquo;
          </blockquote>
          <p style={{ fontSize: 14, color: "var(--gold-light)", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>
            Daniel Nguyen — Chairman, A&D Group
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--bg-primary)", textAlign: "center" }}>
        <div className="container">
          <h2 className="font-display display-md" style={{ color: "var(--text-primary)", marginBottom: 20 }}>
            Kết nối với chúng tôi
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 36, maxWidth: 400, margin: "0 auto 36px" }}>
            Liên hệ để trao đổi trực tiếp với đội ngũ lãnh đạo A&D Group.
          </p>
          <Link href="/contact" className="btn-gold">Liên hệ ngay →</Link>
        </div>
      </section>
    </>
  );
}
