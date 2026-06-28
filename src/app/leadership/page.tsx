import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ban lãnh đạo — A&D Group",
  description: "Đội ngũ lãnh đạo dẫn dắt A&D Group phát triển bền vững.",
};

const leaders = [
  {
    initials: "DN",
    name: "Daniel Nguyen",
    title: "Chairman",
    company: "A&D Group",
    bio: "Người sáng lập và Chủ tịch A&D Group, với hơn 10 năm kinh nghiệm trong lĩnh vực pháp lý doanh nghiệp, M&A và phát triển hệ sinh thái công nghệ pháp lý tại Việt Nam. Daniel dẫn dắt tầm nhìn chiến lược của tập đoàn hướng tới mục tiêu trở thành đối tác dịch vụ chuyên nghiệp hàng đầu Đông Nam Á.",
    expertise: ["Pháp lý doanh nghiệp", "M&A & Đầu tư chiến lược", "LegalTech", "Quản trị tập đoàn"],
  },
];

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-b from-navy-900 to-navy-950 border-b border-gold-700/15">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-6 h-px bg-gold-500" />
            <span className="text-gold-400 text-xs tracking-[0.3em] uppercase">Đội ngũ</span>
            <div className="w-6 h-px bg-gold-500" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-semibold text-cream mb-5">
            Ban lãnh đạo
          </h1>
          <p className="text-cream/55 text-lg leading-relaxed max-w-xl mx-auto">
            Những người tiên phong dẫn dắt A&D Group trên hành trình kiến tạo giá trị bền vững.
          </p>
        </div>
      </section>

      {/* Leaders */}
      <section className="section-pad bg-navy-950">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {leaders.map((leader) => (
            <div
              key={leader.name}
              className="bg-navy-900 border border-gold-700/20 rounded-2xl overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {/* Photo panel */}
                <div className="bg-gradient-to-br from-navy-800 to-navy-900 border-b md:border-b-0 md:border-r border-gold-700/15 flex flex-col items-center justify-center p-12">
                  {/* Avatar */}
                  <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-gold-500/40 mb-6 relative">
                    <Image
                      src="/images/leadership/daniel-nguyen.jpg"
                      alt={leader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                  <h2 className="font-serif text-xl font-semibold text-cream text-center mb-1">
                    {leader.name}
                  </h2>
                  <p className="text-gold-400 text-sm text-center mb-1">{leader.title}</p>
                  <p className="text-cream/40 text-xs text-center">{leader.company}</p>
                </div>

                {/* Bio panel */}
                <div className="md:col-span-2 p-10">
                  <div className="w-8 h-px bg-gold-500 mb-6" />
                  <p className="text-cream/65 leading-relaxed text-[15px] mb-8">{leader.bio}</p>

                  <h4 className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium mb-4">
                    Lĩnh vực chuyên môn
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((e) => (
                      <span
                        key={e}
                        className="px-3 py-1.5 bg-navy-800 border border-gold-700/20 text-cream/60 text-xs rounded tracking-wide"
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for future leaders */}
          <div className="mt-8 border border-gold-700/10 border-dashed rounded-2xl p-10 text-center">
            <p className="text-cream/25 text-sm italic">
              Các vị trí lãnh đạo đang được cập nhật...
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
