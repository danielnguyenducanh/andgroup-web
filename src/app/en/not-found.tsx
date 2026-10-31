import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page not found | A&D Group",
  robots: { index: false, follow: true },
};

export default function NotFoundEN() {
  return (
    <section lang="en" style={{ background: "var(--bg-primary, #FAFAF8)", minHeight: "70vh", display: "flex", alignItems: "center", paddingTop: 140, paddingBottom: 100 }}>
      <div className="container">
        <div style={{ maxWidth: 640 }}>
          <span className="label" style={{ display: "block", marginBottom: 20 }}>Error 404</span>
          <h1 className="font-display" style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: 24 }}>
            Page <em style={{ color: "var(--gold)", fontStyle: "italic" }}>not found</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 36 }}>
            The page you are looking for may have been moved or no longer exists. Please return to the homepage or explore the A&D Group ecosystem.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/en" className="btn-gold">Back to home →</Link>
            <Link href="/en/ecosystem" style={{ border: "1px solid var(--border-dark, #C8C0B0)", color: "var(--text-primary)", fontSize: 14, padding: "14px 28px", textDecoration: "none" }}>
              Ecosystem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
