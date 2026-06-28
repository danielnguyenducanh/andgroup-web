import { Metadata } from "next";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuyển dụng — A&D Group",
  description: "Cơ hội nghề nghiệp tại A&D Group và các công ty thành viên.",
};

const openings = [
  {
    title: "Luật sư Doanh nghiệp",
    company: "A&D Law Firm",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    level: "Senior",
    desc: "Tư vấn pháp lý doanh nghiệp, soạn thảo hợp đồng, hỗ trợ M&A và giải quyết tranh chấp thương mại.",
  },
  {
    title: "Kế toán Doanh nghiệp",
    company: "A&D Accounting & Tax",
    location: "TP. Hồ Chí Minh",
    type: "Toàn thời gian",
    level: "Mid-Senior",
    desc: "Lập báo cáo tài chính, khai báo thuế, hỗ trợ kiểm toán nội bộ cho danh mục khách hàng doanh nghiệp.",
  },
  {
    title: "Software Engineer (Full-stack)",
    company: "A&D Tech",
    location: "Remote / TP. HCM",
    type: "Toàn thời gian",
    level: "Mid",
    desc: "Xây dựng và phát triển các sản phẩm LegalTech: QuyĐịnh.vn, iAgree.vn, A&D OS. Stack: Next.js, Node.js, AI/ML.",
  },
];

const perks = [
  { emoji: "💼", title: "Môi trường chuyên nghiệp", desc: "Làm việc cùng đội ngũ luật sư, kế toán và kỹ sư hàng đầu." },
  { emoji: "📈", title: "Lộ trình phát triển rõ ràng", desc: "Cơ hội thăng tiến minh bạch, đánh giá 2 lần/năm." },
  { emoji: "🎓", title: "Đào tạo liên tục", desc: "Budget học tập, workshop và seminar định kỳ." },
  { emoji: "🏥", title: "Phúc lợi toàn diện", desc: "BHXH, BHYT, bảo hiểm sức khỏe cao cấp." },
];

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-navy-900 to-navy-950 border-b border-gold-700/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Tuyển dụng</span>
            <div className="w-6 h-px bg-gold-500" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-5">
            Gia nhập A&D Group
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-2xl mx-auto">
            Cùng chúng tôi xây dựng tương lai của dịch vụ pháp lý, kế toán và công nghệ tại Việt Nam.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-16 bg-navy-900 border-b border-gold-700/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {perks.map((p) => (
              <div key={p.title} className="text-center px-4">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="text-cream font-semibold text-sm mb-2">{p.title}</h3>
                <p className="text-cream/45 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="mb-10">
            <div className="gold-line mb-5" />
            <h2 className="font-serif text-2xl font-semibold text-cream mb-2">Vị trí đang tuyển</h2>
            <p className="text-cream/45 text-sm">{openings.length} vị trí · Cập nhật tháng 6/2026</p>
          </div>

          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group bg-navy-900 border border-gold-700/15 hover:border-gold-500/30 rounded-xl p-7 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(212,168,50,0.06)]"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <h3 className="font-serif text-lg font-semibold text-cream">{job.title}</h3>
                      <span className="px-2 py-0.5 bg-gold-700/15 text-gold-400 text-[10px] tracking-wide rounded uppercase">
                        {job.level}
                      </span>
                    </div>
                    <p className="text-gold-400/80 text-sm mb-3">{job.company}</p>
                    <p className="text-cream/55 text-sm leading-relaxed mb-4">{job.desc}</p>
                    <div className="flex items-center gap-5 text-cream/35 text-xs flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {job.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={12} /> {job.type}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} /> Đang tuyển
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 border border-gold-500/30 hover:border-gold-400/60 hover:bg-gold-500/5 text-gold-400 text-sm rounded transition-all"
                  >
                    Ứng tuyển <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 border border-gold-700/10 border-dashed rounded-xl text-center">
            <p className="text-cream/40 text-sm mb-2">Không thấy vị trí phù hợp?</p>
            <Link href="/contact" className="text-gold-400 text-sm hover:text-gold-300 transition-colors">
              Gửi CV tự nguyện →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
