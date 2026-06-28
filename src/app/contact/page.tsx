"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    label: "Địa chỉ",
    value: "Tầng 7, 520 Cách Mạng Tháng Tám\nP. Nhiêu Lộc, TP. Hồ Chí Minh",
    href: "https://maps.google.com/?q=520+Cách+Mạng+Tháng+Tám,+TP+HCM",
  },
  {
    icon: Phone,
    label: "Hotline",
    value: "0896 868 989",
    href: "tel:0896868989",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@andgroup.com.vn",
    href: "mailto:support@andgroup.com.vn",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    // TODO: integrate email/form service
    await new Promise((r) => setTimeout(r, 1200));
    setSent(true);
    setSending(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-navy-900 to-navy-950 border-b border-gold-700/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Liên hệ</span>
            <div className="w-6 h-px bg-gold-500" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-5">
            Kết nối với chúng tôi
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-xl mx-auto">
            Đội ngũ A&D Group sẵn sàng tư vấn và đồng hành cùng doanh nghiệp của bạn.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Info */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <div className="gold-line mb-6" />
                <h2 className="font-serif text-2xl font-semibold text-cream mb-5">Thông tin liên lạc</h2>
                <div className="space-y-6">
                  {contacts.map((c) => {
                    const Icon = c.icon;
                    return (
                      <a
                        key={c.label}
                        href={c.href}
                        target={c.label === "Địa chỉ" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-10 h-10 border border-gold-600/25 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:border-gold-400/50 transition-colors">
                          <Icon size={16} className="text-gold-400" />
                        </div>
                        <div>
                          <div className="text-cream/35 text-xs tracking-wide mb-1">{c.label}</div>
                          <div className="text-cream/80 text-sm leading-relaxed group-hover:text-gold-400 transition-colors whitespace-pre-line">
                            {c.value}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Office hours */}
              <div className="bg-navy-900 border border-gold-700/15 rounded-xl p-6">
                <h3 className="text-cream font-semibold text-sm mb-4">Giờ làm việc</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-cream/50">Thứ Hai — Thứ Sáu</span>
                    <span className="text-cream/80">8:00 — 17:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/50">Thứ Bảy</span>
                    <span className="text-cream/80">8:00 — 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-cream/50">Chủ Nhật</span>
                    <span className="text-cream/35">Nghỉ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-navy-900 border border-gold-700/15 rounded-2xl p-10">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={48} className="text-gold-400 mb-5" />
                    <h3 className="font-serif text-2xl text-cream font-semibold mb-3">Đã gửi thành công!</h3>
                    <p className="text-cream/55 text-sm leading-relaxed max-w-sm">
                      Cảm ơn bạn đã liên hệ. Đội ngũ A&D Group sẽ phản hồi trong vòng 24 giờ làm việc.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-serif text-xl font-semibold text-cream mb-8">Gửi tin nhắn</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-cream/50 text-xs tracking-wide mb-2 uppercase">Họ và tên *</label>
                          <input
                            required
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-navy-800 border border-gold-700/15 focus:border-gold-500/40 rounded-lg px-4 py-3 text-cream text-sm outline-none transition-colors placeholder:text-cream/25"
                            placeholder="Nguyễn Văn A"
                          />
                        </div>
                        <div>
                          <label className="block text-cream/50 text-xs tracking-wide mb-2 uppercase">Doanh nghiệp</label>
                          <input
                            type="text"
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full bg-navy-800 border border-gold-700/15 focus:border-gold-500/40 rounded-lg px-4 py-3 text-cream text-sm outline-none transition-colors placeholder:text-cream/25"
                            placeholder="Công ty ABC"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-cream/50 text-xs tracking-wide mb-2 uppercase">Email *</label>
                          <input
                            required
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full bg-navy-800 border border-gold-700/15 focus:border-gold-500/40 rounded-lg px-4 py-3 text-cream text-sm outline-none transition-colors placeholder:text-cream/25"
                            placeholder="email@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-cream/50 text-xs tracking-wide mb-2 uppercase">Số điện thoại</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full bg-navy-800 border border-gold-700/15 focus:border-gold-500/40 rounded-lg px-4 py-3 text-cream text-sm outline-none transition-colors placeholder:text-cream/25"
                            placeholder="0900 000 000"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-cream/50 text-xs tracking-wide mb-2 uppercase">Nội dung *</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full bg-navy-800 border border-gold-700/15 focus:border-gold-500/40 rounded-lg px-4 py-3 text-cream text-sm outline-none transition-colors placeholder:text-cream/25 resize-none"
                          placeholder="Mô tả nhu cầu của doanh nghiệp bạn..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        className="w-full py-3.5 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-navy-950 font-semibold text-sm tracking-wide rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        {sending ? "Đang gửi..." : <>Gửi tin nhắn <ArrowRight size={15} /></>}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
