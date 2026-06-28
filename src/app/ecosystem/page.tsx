import { Metadata } from "next";
import { ExternalLink, Scale, Calculator, Cpu, FileText, Users, Monitor } from "lucide-react";

export const metadata: Metadata = {
  title: "Hệ sinh thái — A&D Group",
  description: "Ba công ty thành viên và ba sản phẩm công nghệ tiên phong của A&D Group.",
};

const subsidiaries = [
  {
    id: "01",
    name: "A&D Law Firm",
    url: "https://andlaw.vn",
    icon: Scale,
    tagline: "Đồng hành pháp lý toàn diện",
    desc: "Cung cấp dịch vụ pháp lý chuyên sâu cho doanh nghiệp Việt Nam: tư vấn thành lập, M&A, hợp đồng và giải quyết tranh chấp thương mại phức tạp. Được công nhận trong Top 100 Cố vấn Pháp lý hàng đầu Việt Nam.",
    services: [
      "Thành lập & cấu trúc doanh nghiệp",
      "Soạn thảo & thẩm định hợp đồng",
      "M&A – Đầu tư chiến lược",
      "Giải quyết tranh chấp",
      "Pháp lý lao động",
      "Sở hữu trí tuệ",
    ],
    accent: "from-indigo-900/40 to-transparent",
    border: "border-indigo-500/20 hover:border-indigo-400/40",
  },
  {
    id: "02",
    name: "A&D Accounting & Tax",
    url: "https://andacc.vn",
    icon: Calculator,
    tagline: "Quản trị tài chính vững chắc",
    desc: "Dịch vụ kế toán, kiểm toán và tư vấn thuế toàn diện — giúp doanh nghiệp tối ưu chi phí, tuân thủ nghĩa vụ thuế và xây dựng hệ thống quản trị tài chính vững chắc.",
    services: [
      "Kế toán doanh nghiệp",
      "Tư vấn & khai báo thuế",
      "Kiểm toán nội bộ",
      "Lập báo cáo tài chính",
      "Tư vấn tái cơ cấu tài chính",
      "Payroll & nhân sự",
    ],
    accent: "from-emerald-900/40 to-transparent",
    border: "border-emerald-500/20 hover:border-emerald-400/40",
  },
  {
    id: "03",
    name: "A&D Tech",
    url: null,
    icon: Cpu,
    tagline: "Công nghệ kiến tạo tương lai",
    desc: "Nghiên cứu và phát triển các sản phẩm LegalTech tiên phong — ứng dụng AI để số hóa dịch vụ pháp lý, kế toán và quản trị doanh nghiệp tại Việt Nam.",
    services: [
      "Phát triển sản phẩm LegalTech",
      "AI & Machine Learning",
      "Nền tảng SaaS doanh nghiệp",
      "Tích hợp hệ thống",
    ],
    accent: "from-blue-900/40 to-transparent",
    border: "border-blue-500/20 hover:border-blue-400/40",
  },
];

const products = [
  {
    name: "A&D OS",
    url: "https://andos.vn",
    icon: Monitor,
    tag: "ERP Platform",
    desc: "Nền tảng quản trị doanh nghiệp tích hợp — kết nối pháp lý, kế toán và vận hành trong một hệ thống duy nhất.",
    color: "text-blue-400",
    border: "border-blue-500/20 hover:border-blue-400/40",
  },
  {
    name: "QuyĐịnh.vn",
    url: "https://quydinh.vn",
    icon: FileText,
    tag: "Legal AI",
    desc: "Cơ sở dữ liệu pháp lý thông minh với AI — tra cứu quy định, văn bản pháp luật nhanh chóng và chính xác.",
    color: "text-purple-400",
    border: "border-purple-500/20 hover:border-purple-400/40",
  },
  {
    name: "iAgree.vn",
    url: "https://iagree.vn",
    icon: Users,
    tag: "Freelance Platform",
    desc: "Nền tảng kết nối freelancer và doanh nghiệp với hợp đồng pháp lý chuẩn và thanh toán bảo mật (Escrow).",
    color: "text-green-400",
    border: "border-green-500/20 hover:border-green-400/40",
  },
];

export default function EcosystemPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-navy-900 to-navy-950 border-b border-gold-700/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Hệ sinh thái</span>
            <div className="w-6 h-px bg-gold-500" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-5">
            Hệ sinh thái A&D Group
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-2xl mx-auto">
            3 công ty thành viên chuyên biệt · 3 sản phẩm công nghệ tiên phong — cùng tạo nên giải pháp tích hợp toàn diện.
          </p>
        </div>
      </section>

      {/* Subsidiaries */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-semibold text-cream mb-1">Công ty thành viên</h2>
            <div className="w-10 h-px bg-gold-500 mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {subsidiaries.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className={`relative bg-gradient-to-b ${s.accent} border ${s.border} bg-navy-900 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col`}
                >
                  <div className="absolute top-6 right-7 font-serif text-5xl font-bold text-white/5 select-none">
                    {s.id}
                  </div>
                  <div className="mb-6">
                    <div className="w-11 h-11 border border-gold-600/30 rounded-lg flex items-center justify-center mb-5">
                      <Icon size={20} className="text-gold-400" />
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-cream mb-1">{s.name}</h3>
                    <p className="text-gold-400 text-sm mb-4">{s.tagline}</p>
                    <p className="text-cream/55 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {s.services.map((svc) => (
                      <li key={svc} className="flex items-center gap-2 text-sm text-cream/55">
                        <div className="w-1 h-1 rounded-full bg-gold-500 flex-shrink-0" />
                        {svc}
                      </li>
                    ))}
                  </ul>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gold-400 hover:text-gold-300 transition-colors mt-auto"
                    >
                      Truy cập website <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-1">
              <h2 className="font-serif text-2xl font-semibold text-cream">Sản phẩm của A&D Tech</h2>
              <span className="px-2.5 py-1 bg-blue-900/40 border border-blue-500/20 text-blue-400 text-xs rounded-full tracking-wide">
                LegalTech
              </span>
            </div>
            <div className="w-10 h-px bg-gold-500 mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-navy-950 border ${p.border} rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] block`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <Icon size={22} className={p.color} />
                    <span className={`text-[10px] tracking-[0.15em] uppercase px-2 py-1 rounded border ${p.color} border-current/20 opacity-70`}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-cream mb-3 group-hover:text-gold-400 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="flex items-center gap-1.5 text-xs text-cream/35 group-hover:text-gold-400/70 transition-colors">
                    Truy cập <ExternalLink size={11} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
