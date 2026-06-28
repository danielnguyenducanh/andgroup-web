import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Giới thiệu — A&D Group",
  description: "Tìm hiểu về lịch sử, sứ mệnh và giá trị cốt lõi của A&D Group.",
};

const milestones = [
  { year: "2014", title: "Thành lập A&D Law Firm", desc: "Ra đời với đội ngũ luật sư chuyên nghiệp, tập trung vào tư vấn doanh nghiệp tại TP. Hồ Chí Minh." },
  { year: "2018", title: "Mở rộng sang Kế toán & Thuế", desc: "A&D Accounting & Tax được thành lập, hoàn thiện hệ sinh thái dịch vụ tài chính–pháp lý." },
  { year: "2021", title: "A&D Tech ra đời", desc: "Đặt nền móng cho hành trình LegalTech với sứ mệnh số hóa dịch vụ pháp lý tại Việt Nam." },
  { year: "2023", title: "Ra mắt QuyĐịnh.vn & iAgree.vn", desc: "Hai sản phẩm AI pháp lý tiên phong được phát hành, phục vụ hàng nghìn người dùng." },
  { year: "2024", title: "A&D OS — Nền tảng ERP", desc: "Hệ thống quản trị doanh nghiệp tích hợp pháp lý và kế toán ra mắt thị trường." },
  { year: "2026", title: "Tầm nhìn 2030", desc: "Mở rộng hệ sinh thái, phục vụ 2.000+ doanh nghiệp, trở thành tập đoàn dịch vụ chuyên nghiệp hàng đầu Đông Nam Á." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-navy-900 to-navy-950 border-b border-gold-700/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Về chúng tôi</span>
            <div className="w-6 h-px bg-gold-500" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-6">
            Về A&D Group
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-2xl mx-auto">
            Uy tín & Tận tâm — Đối tác đáng tin cậy của doanh nghiệp Việt Nam trong hơn một thập kỷ.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-12 h-px bg-gold-500 mb-6" />
              <h2 className="font-serif text-3xl font-semibold text-cream mb-6">
                Câu chuyện của chúng tôi
              </h2>
              <div className="space-y-5 text-cream/60 leading-relaxed text-[15px]">
                <p>
                  A&D Group được thành lập với niềm tin rằng doanh nghiệp Việt Nam xứng đáng được tiếp cận dịch vụ pháp lý, kế toán và công nghệ ở đẳng cấp quốc tế.
                </p>
                <p>
                  Từ một công ty luật chuyên nghiệp tại TP. Hồ Chí Minh, chúng tôi đã xây dựng hệ sinh thái tích hợp — nơi Pháp lý, Kế toán và Công nghệ hội tụ để tạo ra giải pháp toàn diện, vượt trội.
                </p>
                <p>
                  Ngày nay, A&D Group là điểm tựa của hơn 500 doanh nghiệp — từ startup đến tập đoàn đa quốc gia — trên hành trình phát triển bền vững tại Việt Nam.
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-navy-900 border border-gold-700/20 rounded-2xl p-10">
              <div className="text-gold-400 font-serif text-6xl leading-none mb-4 opacity-50">"</div>
              <blockquote className="font-serif text-xl text-cream/90 leading-relaxed mb-6 italic">
                Chúng tôi không chỉ cung cấp dịch vụ — chúng tôi đồng hành cùng sự phát triển của mỗi doanh nghiệp như thể đó là doanh nghiệp của chính mình.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-700/30 to-gold-500/10 border border-gold-500/40 flex items-center justify-center">
                  <span className="font-serif text-sm font-bold text-gold-400">DN</span>
                </div>
                <div>
                  <div className="text-cream font-semibold text-sm">Daniel Nguyen</div>
                  <div className="text-gold-400 text-xs">Chairman, A&D Group</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-navy-900">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="gold-line mx-auto mb-5" />
            <h2 className="font-serif text-3xl font-semibold text-cream mb-3">Hành trình phát triển</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gold-700/20 -translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className={`flex-1 pl-14 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:pl-10"}`}>
                    <div className="text-gold-400 font-serif text-2xl font-bold mb-1">{m.year}</div>
                    <h3 className="text-cream font-semibold text-base mb-1">{m.title}</h3>
                    <p className="text-cream/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gold-500 border-2 border-navy-900 mt-1.5" />

                  {/* Empty side */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950 border-t border-gold-700/15 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-serif text-2xl font-semibold text-cream mb-5">
            Tham gia cùng hơn 500 doanh nghiệp tin tưởng A&D Group
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm tracking-wide rounded transition-all"
          >
            Kết nối với chúng tôi <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
