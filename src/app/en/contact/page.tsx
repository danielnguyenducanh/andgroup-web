"use client";
import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const mobileStyles = `
  @media (max-width: 768px) {
    .contact-content-grid { grid-template-columns: 1fr !important; }
    .contact-form-grid { grid-template-columns: 1fr !important; }
    .contact-hero { padding-top: 100px !important; padding-bottom: 56px !important; }
    .container { padding-left: 20px !important; padding-right: 20px !important; }
    .section { padding-top: 64px !important; padding-bottom: 64px !important; }
  }
`;

export default function ContactPageEN() {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", company: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    background: "var(--white)",
    border: "1px solid var(--border)",
    fontSize: 14,
    color: "var(--text-primary)",
    outline: "none",
    fontFamily: "Inter, sans-serif",
    boxSizing: "border-box",
  };

  return (
    <>
      <style>{mobileStyles}</style>

      {/* Hero */}
      <section className="contact-hero" style={{ background: "var(--bg-primary)", paddingTop: 140, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div style={{ maxWidth: 560 }}>
            <span className="label" style={{ display: "block", marginBottom: 20 }}>Contact</span>
            <h1 className="font-display" style={{
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 500,
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Get in touch with<br />
              <em style={{ color: "var(--gold)", fontStyle: "italic" }}>A&D Group</em>
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.8 }}>
              Our expert team is ready to advise and support your business. Let&apos;s start the conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact content */}
      <section className="section" style={{ background: "var(--white)" }}>
        <div className="container" style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px" }}>
          <div className="contact-content-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 72 }}>

            {/* Left: Info */}
            <div>
              <h2 className="font-display" style={{ fontSize: 28, fontWeight: 500, color: "var(--text-primary)", marginBottom: 32 }}>
                Contact information
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {[
                  {
                    Icon: MapPin,
                    label: "Address",
                    lines: ["Floor 7, 520 Cach Mang Thang Tam", "Nhieu Loc Ward, Ho Chi Minh City"],
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    lines: ["support@andgroup.com.vn"],
                  },
                  {
                    Icon: Phone,
                    label: "Phone",
                    lines: ["0896 868 989", "Mon – Fri, 8:00 – 17:30"],
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                    <div style={{
                      width: 44, height: 44,
                      background: "var(--bg-secondary)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--gold)", flexShrink: 0,
                    }}>
                      <item.Icon size={20} strokeWidth={1.5} />
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

              <div className="divider" style={{ margin: "36px 0" }} />

              {/* Companies */}
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
                  Direct contact
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { name: "A&D Law Firm", email: "support@andlaw.vn", url: "https://andlaw.vn" },
                    { name: "A&D Accounting & Tax", email: "support@andacc.vn", url: "https://andacc.vn" },
                    { name: "A&D Tech", email: "support@andgroup.com.vn", url: "https://andos.vn" },
                  ].map((c) => (
                    <div key={c.name} style={{
                      padding: "14px 18px",
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>{c.name}</p>
                        <p style={{ fontSize: 13, color: "var(--text-muted)" }}>{c.email}</p>
                      </div>
                      <a href={c.url} target="_blank" rel="noopener noreferrer"
                        style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", fontWeight: 600 }}>
                        Visit ↗
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              <div style={{ background: "var(--bg-primary)", border: "1px solid var(--border)", padding: "44px 40px" }}>
                <h3 className="font-display" style={{ fontSize: 24, fontWeight: 500, color: "var(--text-primary)", marginBottom: 8 }}>
                  Send a message
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 32 }}>
                  We will respond within 24 business hours.
                </p>

                {status === "success" ? (
                  <div style={{ padding: "32px 24px", background: "#F0FDF4", border: "1px solid #BBF7D0", textAlign: "center" }}>
                    <p style={{ fontSize: 16, fontWeight: 600, color: "#15803D", marginBottom: 8 }}>Message sent!</p>
                    <p style={{ fontSize: 14, color: "#166534" }}>We will get back to you within 24 business hours.</p>
                    <button onClick={() => setStatus("idle")} style={{
                      marginTop: 20, fontSize: 13, color: "var(--gold)", background: "none",
                      border: "none", cursor: "pointer", textDecoration: "underline",
                    }}>Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                          Full name <span style={{ color: "var(--gold)" }}>*</span>
                        </label>
                        <input name="name" type="text" placeholder="John Smith" required value={form.name} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                          Email <span style={{ color: "var(--gold)" }}>*</span>
                        </label>
                        <input name="email" type="email" placeholder="email@company.com" required value={form.email} onChange={handleChange} style={inputStyle} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                        Company / Organisation
                      </label>
                      <input name="company" type="text" placeholder="Your company name" value={form.company} onChange={handleChange} style={inputStyle} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                        Phone
                      </label>
                      <input name="phone" type="tel" placeholder="+84 xxx xxx xxx" value={form.phone} onChange={handleChange} style={inputStyle} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                        Service of interest
                      </label>
                      <select name="service" value={form.service} onChange={handleChange} style={{ ...inputStyle, appearance: "none" as const }}>
                        <option value="">Select a service...</option>
                        <option>Legal advisory (A&D Law Firm)</option>
                        <option>Accounting &amp; Tax (A&D Accounting)</option>
                        <option>Technology &amp; Software (A&D Tech)</option>
                        <option>General consultation</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: "var(--text-secondary)", marginBottom: 8 }}>
                        Message <span style={{ color: "var(--gold)" }}>*</span>
                      </label>
                      <textarea name="message" rows={5} required placeholder="Describe your needs or the issue you would like to discuss..."
                        value={form.message} onChange={handleChange}
                        style={{ ...inputStyle, resize: "vertical" }} />
                    </div>

                    {status === "error" && (
                      <p style={{ fontSize: 13, color: "#DC2626", margin: 0 }}>
                        Failed to send — please try again or contact us directly by email.
                      </p>
                    )}

                    <button type="submit" disabled={status === "loading"} className="btn-gold"
                      style={{ alignSelf: "flex-start", cursor: status === "loading" ? "wait" : "pointer", opacity: status === "loading" ? 0.7 : 1 }}>
                      {status === "loading" ? "Sending..." : "Send message →"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps embed */}
      <div style={{ height: 380, borderTop: "1px solid var(--border)", overflow: "hidden" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.1!2d106.6744!3d10.7956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528b2bdb20f01%3A0x5d5b9c5b5b5b5b5b!2s520%20C%C3%A1ch%20M%E1%BA%A1ng%20Th%C3%A1ng%20T%C3%A1m%2C%20Ph%C6%B0%E1%BB%9Dng%2011%2C%20Qu%E1%BA%ADn%203%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1sen!2svn!4v1700000000000!5m2!1sen!2svn"
          width="100%"
          height="380"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="A&D Group — 520 Cach Mang Thang Tam, Ho Chi Minh City"
        />
      </div>
    </>
  );
}
