import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Không tìm thấy trang | A&D Group",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section style={{ background: "var(--bg-primary, #FAFAF8)", minHeight: "70vh", display: "flex", alignItems: "center", paddingTop: 140, paddingBottom: 100 }}>
      <div className="container">
        <div style={{ maxWidth: 640 }}>
          <span className="label" style={{ display: "block", marginBottom: 20 }}>Lỗi 404</span>
          <h1 className="font-display" style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 500, color: "var(--text-primary)", lineHeight: 1.1, marginBottom: 24 }}>
            Không tìm thấy <em style={{ color: "var(--gold)", fontStyle: "italic" }}>trang này</em>
          </h1>
          <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 36 }}>
            Trang bạn tìm có thể đã được đổi địa chỉ hoặc không còn tồn tại. Vui lòng quay về trang chủ hoặc khám phá hệ sinh thái A&D Group.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Link href="/" className="btn-gold">Về trang chủ →</Link>
            <Link href="/ecosystem" style={{ border: "1px solid var(--border-dark, #C8C0B0)", color: "var(--text-primary)", fontSize: 14, padding: "14px 28px", textDecoration: "none" }}>
              Hệ sinh thái
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
