import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, BarChart2, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "About A&D Group",
  description: "A&D Group — an integrated ecosystem of Legal, Accounting & Tax, and Technology services for businesses, individuals and freelancers in Vietnam.",
};

const values = [
  {
    n: "01",
    title: "Integrity",
    desc: "Honest and transparent in every advisory engagement. We place our clients' interests above all else, with no conflicts of interest.",
  },
  {
    n: "02",
    title: "Deep expertise",
    desc: "Our lawyers, accountants and engineers are rigorously trained and continuously updated on the latest knowledge and technology.",
  },
  {
    n: "03",
    title: "Client-centric",
    desc: "Every solution is designed specifically for each need — whether a large corporation, startup, or independent professional.",
  },
  {
    n: "04",
    title: "Continuous innovation",
    desc: "Applying technology to digitize and elevate service quality, delivering the best possible experience for our clients.",
  },
];

const pillars = [
  {
    Icon: Scale,
    title: "Legal",
    company: "A&D Law Firm",
    desc: "Comprehensive legal advisory for businesses and individuals: incorporation, contracts, M&A, disputes and employment law.",
  },
  {
    Icon: BarChart2,
    title: "Accounting & Tax",
    company: "A&D Accounting & Tax",
    desc: "Professional accounting, audit and tax advisory services that optimize finances and ensure full legal compliance.",
  },
  {
    Icon: Cpu,
    title: "Technology",
    company: "A&D Tech",
    desc: "LegalTech products for businesses, individuals and freelancers: ERP, AI legal research, e-signing and escrow.",
  },
];

export default function AboutPageEN() {
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
            About A&D Group
          </p>
          <h1 className="font-display about-h1" style={{ fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 500, lineHeight: 1.08, color: "var(--text-primary)", maxWidth: 700, marginBottom: 24 }}>
            A professional &amp; comprehensive<br />
            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>service ecosystem</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: "var(--text-secondary)", maxWidth: 560 }}>
            A&D Group builds an integrated ecosystem of Legal – Accounting – Technology services, serving businesses, individuals and freelancers across Vietnam to international standards.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container about-mission-grid" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span style={{ display: "block", width: 48, height: 1, background: "var(--gold)", marginBottom: 24 }} />
            <h2 className="font-display about-h2" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.15, marginBottom: 24 }}>
              Our mission
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: 20 }}>
              We believe that every individual and organization — whether a large corporation, SME, startup or freelancer — deserves access to world-class legal, financial and technology services.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: 32 }}>
              A&D Group exists to bridge that gap — by combining deep expertise with modern technology to deliver solutions that are both accessible and professional.
            </p>
            <Link href="/en/ecosystem" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "var(--gold)", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid var(--gold)", paddingBottom: 2 }}>
              Explore our ecosystem <ArrowRight size={14} />
            </Link>
          </div>

          {/* Team photo + Quote */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", marginBottom: 0 }}>
              <Image
                src="/images/team-group.jpg"
                alt="A&D Group team"
                fill
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
                quality={90}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(12,12,12,0.45) 0%, transparent 50%)" }} />
            </div>
            <div style={{ background: "var(--bg-secondary)", padding: "48px 40px", borderLeft: "3px solid var(--gold)" }}>
              <blockquote className="font-display" style={{ fontSize: "clamp(20px, 2.2vw, 26px)", fontStyle: "italic", fontWeight: 400, lineHeight: 1.6, color: "var(--text-primary)", marginBottom: 32 }}>
                &ldquo;We don&apos;t just provide services — we are a trusted companion, helping clients navigate every legal, financial and technology challenge.&rdquo;
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
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="section" style={{ background: "var(--bg-secondary)", padding: "96px 0" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ marginBottom: 56 }}>
            <span style={{ display: "block", width: 48, height: 1, background: "var(--gold)", marginBottom: 20 }} />
            <h2 className="font-display about-h2" style={{ fontSize: "clamp(30px, 3.5vw, 48px)", fontWeight: 500, color: "var(--text-primary)" }}>
              Three pillars of expertise
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
              Core values
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
            Let us be your trusted partner
          </h2>
          <p style={{ color: "rgba(247,243,237,0.55)", marginBottom: 36, fontSize: 15 }}>
            Whether you&apos;re a business, individual or freelancer — A&D Group is always ready to support you.
          </p>
          <Link href="/en/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "var(--gold)", color: "#fff", fontSize: 14, fontWeight: 500, padding: "14px 32px", textDecoration: "none" }}>
            Contact us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
