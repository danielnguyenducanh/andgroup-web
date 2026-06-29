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
    dept: "Legal",
    deptColor: "#5B2E8C",
    title: "Corporate Legal Advisor",
    company: "A&D Law Firm",
    type: "Full-time",
    location: "Ho Chi Minh City",
    desc: "Provide legal advice to businesses, draft contracts, support M&A transactions and investment legal matters.",
    requirements: ["Bachelor's degree in Law or above", "2+ years of corporate advisory experience", "Business English proficiency"],
  },
  {
    dept: "Accounting",
    deptColor: "#5B2E8C",
    title: "Senior Service Accountant",
    company: "A&D Accounting & Tax",
    type: "Full-time",
    location: "Ho Chi Minh City",
    desc: "Manage accounting services for a portfolio of mid-to-large enterprise clients.",
    requirements: ["Accounting / auditing qualification", "5+ years of corporate accounting experience", "CPA certification is a plus"],
  },
  {
    dept: "Technology",
    deptColor: "#5B2E8C",
    title: "Full-stack Developer",
    company: "A&D Tech",
    type: "Full-time",
    location: "HCMC / Remote",
    desc: "Develop and maintain A&D OS, QuyĐịnh.vn and iAgree.vn products.",
    requirements: ["React/Next.js and Node.js", "2+ years of experience", "AI/ML experience is a plus"],
  },
  {
    dept: "Technology",
    deptColor: "#5B2E8C",
    title: "AI / Legal Tech Engineer",
    company: "A&D Tech",
    type: "Full-time",
    location: "HCMC / Remote",
    desc: "Build AI features for QuyĐịnh.vn — embedding, RAG, and NLP for legal text.",
    requirements: ["Python, PyTorch or TensorFlow", "NLP and LLM experience", "Knowledge of legal documents is a plus"],
  },
];

const perks = [
  { Icon: DollarSign,  title: "Competitive salary",       desc: "Attractive compensation with bi-annual salary reviews." },
  { Icon: BookOpen,    title: "Continuous learning",      desc: "Learning budget, access to workshops and training programs locally and internationally." },
  { Icon: Heart,       title: "Health insurance",         desc: "Premium health insurance package for employees and their families." },
  { Icon: Globe,       title: "Professional environment", desc: "Work alongside leading experts in law, accounting and technology." },
  { Icon: TrendingUp,  title: "Growth opportunities",    desc: "Clear career progression with opportunities to lead teams." },
  { Icon: Zap,         title: "Flexible working",        desc: "Select roles support remote/hybrid arrangements with a results-first culture." },
];

export default function CareersPageEN() {
  return (
    <>
      <style>{mobileStyles}</style>

      {/* Hero */}
      <section className="careers-hero" style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ maxWidth: 640 }}>
            <p style={{ fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 40, height: 1, background: "var(--gold)", display: "inline-block" }} />
              Careers
            </p>
            <h1 className="font-display" style={{ fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: 24 }}>
              Build the future of<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>A&D Group together</em>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              We are looking for talented, passionate people who want to create real value — in law, finance and technology.
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
              Why join A&D Group?
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
              Open positions
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
                    <Link href="/en/contact" className="careers-apply-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold)", color: "#fff", fontSize: 13, fontWeight: 500, padding: "12px 24px", textDecoration: "none", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>
                      Apply now <ArrowRight size={14} />
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
            Don&apos;t see a matching role?
          </p>
          <h2 className="font-display" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", fontWeight: 500, color: "#F7F3ED", marginBottom: 16 }}>
            Send an open application
          </h2>
          <p style={{ fontSize: 15, color: "rgba(247,243,237,0.55)", marginBottom: 36, lineHeight: 1.7 }}>
            We&apos;re always looking for great talent. Send your CV — we&apos;ll reach out when a suitable role opens.
          </p>
          <Link href="/en/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold)", color: "#fff", fontSize: 14, fontWeight: 500, padding: "14px 32px", textDecoration: "none" }}>
            Send application <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
