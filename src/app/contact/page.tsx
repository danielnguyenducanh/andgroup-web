export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container">
          <div style={{ maxWidth: 560 }}>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>Liên hệ</span>
            <h1 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Kết nối với<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>A&D Group</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn và hỗ trợ doanh nghiệp của bạn. Hãy bắt đầu cuộc trò chuyện.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72 }}>

            {/* Left: Info */}
            <div>
              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 500, color: "var(--text-primary)", marginBottom: 32 }}>
                Thông tin liên hệ
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  {
                    icon: "📍",
                    label: "Địa chỉ",
                    lines: ["Tầng 10, Tòa nhà A&D", "TP. Hồ Chí Minh, Việt Nam"],
                  },
                  {
                    icon: "📧",
                    label: "Email",
                    lines: ["info@andgroup.com.vn", "legal@andlaw.vn"],
                  },
                  {
                    icon: "📞",
                    label: "Điện thoại",
                    lines: ["+84 28 xxxx xxxx", "Thứ 2 – Thứ 6, 8:00 – 17:30"],
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      background: "var(--bg-secondary)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 18,
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>
                        {item.label}
                      </p>
                      {item.lines.map((line) => (
                        <p key={line} style={{ fontSize: 15, color: "var(--text-primary)", lineHeight: 1.7 }}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="divider" style={{ margin: "36px 0" }} />

              {/* Companies */}
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
                  Liên hệ trực tiếp
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { name: "A&D Law Firm", email: "legal@andlaw.vn", url: "https://andlaw.vn" },
                    { name: "A&D Accounting & Tax", email: "accounting@andacc.vn", url: "https://andacc.vn" },
                    { name: "A&D Tech", email: "tech@andgroup.com.vn", url: "https://andos.vn" },
                  ].map((c) => (
                    <div key={c.name} style={{
                      padding: "14px 18px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{c.name}</p>
                        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{c.email}</p>
                      </div>
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", fontWeight: 600 }}
                      >
                        Truy cập ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div style={{
                background: "var(--bg-primary)",
                border: "1px solid var(--border)",
                padding: "44px 40px",
              }}>
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", marginBottom: 8 }}>
                  Gửi tin nhắn
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 32 }}>
                  Chúng tôi sẽ phản hồi trong vòng 24 giờ làm việc.
                </p>

                <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    {[
                      { label: "Họ và tên", placeholder: "Nguyễn Văn A", type: "text" },
                      { label: "Email", placeholder: "email@company.vn", type: "email" },
                    ].map((field) => (
                      <div key={field.label}>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                          {field.label} <span style={{ color: "var(--gold)" }}>*</span>
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.placeholder}
                          style={{
                            width: "100%",
                            padding: "11px 14px",
                            background: "var(--white)",
                            border: "1px solid var(--border)",
                            fontSize: 14,
                            color: "var(--text-primary)",
                            outline: "none",
                            fontFamily: "Inter, sans-serif",
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {[
                    { label: "Công ty / Tổ chức", placeholder: "Tên doanh nghiệp của bạn", type: "text" },
                    { label: "Số điện thoại", placeholder: "+84 xxx xxx xxx", type: "tel" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        style={{
                          width: "100%",
                          padding: "11px 14px",
                          background: "var(--white)",
                          border: "1px solid var(--border)",
                          fontSize: 14,
                          color: "var(--text-primary)",
                          outline: "none",
                          fontFamily: "Inter, sans-serif",
                        }}
                      />
                    </div>
                  ))}

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                      Dịch vụ quan tâm
                    </label>
                    <select style={{
                      width: "100%",
                      padding: "11px 14px",
                      background: "var(--white)",
                      border: "1px solid var(--border)",
                      fontSize: 14,
                      color: "var(--text-primary)",
                      outline: "none",
                      fontFamily: "Inter, sans-serif",
                      appearance: "none",
                    }}>
                      <option value="">Chọn dịch vụ...</option>
                      <option>Tư vấn pháp lý (A&D Law Firm)</option>
                      <option>Kế toán & Thuế (A&D Accounting)</option>
                      <option>Công nghệ & Phần mềm (A&D Tech)</option>
                      <option>Tư vấn tổng thể</option>
                      <option>Khác</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                      Nội dung <span style={{ color: "var(--gold)" }}>*</span>
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Mô tả nhu cầu hoặc vấn đề bạn muốn được tư vấn..."
                      style={{
                        width: "100%",
                        padding: "11px 14px",
                        background: "var(--white)",
                        border: "1px solid var(--border)",
                        fontSize: 14,
                        color: "var(--text-primary)",
                        outline: "none",
                        fontFamily: "Inter, sans-serif",
                        resize: "vertical",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-gold"
                    style={{ alignSelf: "flex-start", cursor: "pointer" }}
                  >
                    Gửi tin nhắn →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div style={{
        height: 300,
        background: "var(--bg-secondary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderTop: "1px solid var(--border)",
      }}>
        <p style={{ fontSize: 14, color: "var(--text-muted)" }}>📍 TP. Hồ Chí Minh, Việt Nam</p>
      </div>
    </>
  );
}
