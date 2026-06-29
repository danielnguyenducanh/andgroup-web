import Image from "next/image";
import Link from "next/link";

const milestones = [
  { year: "2013", title: "Thành lập A&D Law Firm", desc: "Khởi đầu với dịch vụ tư vấn pháp lý cho doanh nghiệp vừa và nhỏ tại TP.HCM." },
  { year: "2017", title: "Thành lập A&D Accounting & Tax", desc: "Mở rộng sang dịch vụ kế toán, thuế và tài chính doanh nghiệp." },
  { year: "2020", title: "Ra mắt A&D Tech", desc: "Bộ phận công nghệ được thành lập, phát triển các sản phẩm LegalTech và FinTech." },
  { year: "2022", title: "Ra mắt QuyĐịnh.vn", desc: "Nền tảng tra cứu văn bản pháp luật Việt Nam bằng AI — phục vụ hàng nghìn người dùng." },
  { year: "2024", title: "Thành lập A&D Group", desc: "Ba công ty thành viên hợp nhất dưới một tập đoàn, với hơn 500 doanh nghiệp được phục vụ." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 720 }}>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>Về A&D Group</span>
            <h1 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              marginBottom: 24,
              lineHeight: 1.1,
            }}>
              Hành trình xây dựng<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>tập đoàn tư vấn</em>
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: 560 }}>
              Hơn 10 năm phát triển, A&D Group đã trở thành tập đoàn tư vấn chuyên sâu, kết hợp pháp lý, kế toán và công nghệ để phục vụ hàng trăm doanh nghiệp Việt Nam.
            </p>
          </div>
        </div>
      </section>

      {/* Split: story + image */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
            <div>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Câu chuyện của chúng tôi</span>
              <h2 className="font-display display-md" style={{ color: "var(--text-primary)", marginBottom: 24 }}>
                Từ một văn phòng luật đến tập đoàn đa ngành
              </h2>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 16 }}>
                A&D Group được xây dựng từ niềm tin rằng doanh nghiệp Việt Nam xứng đáng được hưởng dịch vụ tư vấn chuyên nghiệp, toàn diện và minh bạch như các tập đoàn quốc tế.
              </p>
              <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.8, marginBottom: 32 }}>
                Chúng tôi đặt chuyên môn sâu làm nền tảng, kết hợp công nghệ để tăng hiệu quả, và luôn đặt lợi ích khách hàng lên hàng đầu trong mọi quyết định.
              </p>
              <Link href="/contact" className="btn-gold">
                Liên hệ với chúng tôi →
              </Link>
            </div>
            <div style={{ position: "relative", height: 480, overflow: "hidden" }}>
              <Image
                src="/images/banner1.avif"
                alt="A&D Group office"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Lịch sử phát triển</span>
            <h2 className="font-display display-lg" style={{ color: "var(--text-primary)" }}>
              Các cột mốc quan trọng
            </h2>
          </div>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {milestones.map((m, i) => (
              <div key={m.year} style={{
                display: "flex",
                gap: 32,
                paddingBottom: i < milestones.length - 1 ? 40 : 0,
                position: "relative",
              }}>
                {/* Year + line */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                  <div style={{
                    width: 72,
                    height: 36,
                    background: "var(--gold)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "white", letterSpacing: "0.05em" }}>{m.year}</span>
                  </div>
                  {i < milestones.length - 1 && (
                    <div style={{ width: 1, flex: 1, background: "var(--border)", marginTop: 8 }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ paddingTop: 6, paddingBottom: 8 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text-primary)", marginBottom: 8 }}>{m.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-sm" style={{ background: "var(--bg-dark)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32, textAlign: "center" }}>
            {[
              { v: "10+", l: "Năm kinh nghiệm" },
              { v: "500+", l: "Doanh nghiệp" },
              { v: "50+", l: "Chuyên gia" },
              { v: "3", l: "Công ty thành viên" },
            ].map((s) => (
              <div key={s.l} style={{ padding: "24px 0" }}>
                <p className="font-display" style={{ fontSize: 48, fontWeight: 600, color: "var(--gold-light)", marginBottom: 8 }}>{s.v}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: "var(--white)", textAlign: "center" }}>
        <div className="container">
          <h2 className="font-display display-md" style={{ color: "var(--text-primary)", marginBottom: 20 }}>
            Hãy để chúng tôi đồng hành cùng bạn
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-secondary)", marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
            Liên hệ để được tư vấn miễn phí và tìm hiểu cách A&D Group có thể hỗ trợ doanh nghiệp của bạn.
          </p>
          <Link href="/contact" className="btn-gold">Liên hệ tư vấn →</Link>
        </div>
      </section>
    </>
  );
}
