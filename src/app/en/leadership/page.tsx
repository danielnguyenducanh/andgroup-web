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

export default function LeadershipPageEN() {
  return (
    <>
      <style>{mobileStyles}</style>

      {/* Hero */}
      <section className="leadership-hero" style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 600 }}>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>Leadership</span>
            <h1 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              The people leading<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>A&D Group</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              A leadership team with deep expertise and strategic vision, guiding the long-term growth of the group.
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
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 4 }}>Title</p>
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
              <p style={{ fontSize: 16, color: "var(--text-muted)", marginBottom: 32 }}>Chairman of the Board</p>

              <div className="divider" style={{ marginBottom: 32 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  Daniel Nguyen is the founder and Chairman of A&D Group — a specialized advisory group encompassing legal, accounting and technology services for businesses in Vietnam.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  With over 10 years of experience in corporate advisory, he has grown A&D Group from a small law office into a multi-sector group with three member companies and more than 50 specialists.
                </p>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8 }}>
                  He holds a vision for applying technology to democratize legal and accounting services in Vietnam, realized through the development of products such as QuyĐịnh.vn, A&D OS and iAgree.vn.
                </p>
              </div>

              {/* Expertise */}
              <div style={{ marginTop: 36 }}>
                <p style={{ fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", fontWeight: 600, marginBottom: 16 }}>
                  Areas of expertise
                </p>
                <div className="leadership-tags" style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Corporate law", "M&A", "Investment advisory", "LegalTech", "Group governance", "Digital transformation"].map((tag) => (
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
            &ldquo;I believe Vietnamese businesses deserve world-class advisory services right here at home.&rdquo;
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
            Connect with us
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 36, maxWidth: 400, margin: "0 auto 36px" }}>
            Reach out to speak directly with the A&D Group leadership team.
          </p>
          <Link href="/en/contact" className="btn-gold">Contact us →</Link>
        </div>
      </section>
    </>
  );
}
