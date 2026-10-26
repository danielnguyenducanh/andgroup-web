import type { Metadata } from "next";

/**
 * SEO metadata dùng chung cho các trang tĩnh (26/10/2026 — audit GSC):
 * mỗi trang có title/description RIÊNG + canonical tự trỏ + hreflang vi/en/x-default.
 * Trước đây 10 trang dùng chung title/description của layout và không có canonical
 * → Google coi như trùng lặp, index thấp.
 */
const BASE = "https://andgroup.com.vn";
const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: "A&D Group" };

type Lang = "vi" | "en";
type Entry = { vi: string; en: string; title: Record<Lang, string>; description: Record<Lang, string> };

export const PAGES = {
  home: {
    vi: "/",
    en: "/en",
    title: {
      vi: "A&D Group — Tập đoàn Pháp lý · Kế toán · Công nghệ",
      en: "A&D Group — Legal · Accounting · Technology Group in Vietnam",
    },
    description: {
      vi: "A&D Group là tập đoàn tư vấn chuyên sâu gồm A&D Law Firm, A&D Accounting & Tax và A&D Tech — kiến tạo hệ sinh thái pháp lý, tài chính và công nghệ cho doanh nghiệp Việt Nam.",
      en: "A&D Group is an advisory group of A&D Law Firm, A&D Accounting & Tax and A&D Tech — an integrated legal, finance and technology ecosystem for businesses in Vietnam.",
    },
  },
  about: {
    vi: "/about",
    en: "/en/about",
    title: { vi: "Về chúng tôi — Câu chuyện và giá trị cốt lõi | A&D Group", en: "About Us — Our Story and Core Values | A&D Group" },
    description: {
      vi: "A&D Group — hệ sinh thái dịch vụ Pháp lý, Kế toán & Thuế, Công nghệ phục vụ doanh nghiệp, cá nhân và freelancer tại Việt Nam. Tìm hiểu sứ mệnh, giá trị và cách chúng tôi làm việc.",
      en: "A&D Group — an integrated ecosystem of Legal, Accounting & Tax, and Technology services for businesses, individuals and freelancers in Vietnam. Learn about our mission and values.",
    },
  },
  ecosystem: {
    vi: "/ecosystem",
    en: "/en/ecosystem",
    title: { vi: "Hệ sinh thái: A&D Law Firm, A&D Accounting & Tax, A&D Tech | A&D Group", en: "Ecosystem: A&D Law Firm, A&D Accounting & Tax, A&D Tech | A&D Group" },
    description: {
      vi: "Các công ty thành viên và sản phẩm công nghệ của A&D Group: dịch vụ pháp lý, kế toán – thuế và giải pháp số hoá pháp lý cho doanh nghiệp, cá nhân, freelancer.",
      en: "Member companies and technology products of A&D Group: legal services, accounting & tax, and legal digitization solutions for businesses, individuals and freelancers.",
    },
  },
  leadership: {
    vi: "/leadership",
    en: "/en/leadership",
    title: { vi: "Ban lãnh đạo | A&D Group", en: "Leadership | A&D Group" },
    description: {
      vi: "Đội ngũ lãnh đạo A&D Group — luật sư, chuyên gia kế toán thuế và công nghệ dẫn dắt hệ sinh thái dịch vụ cho doanh nghiệp Việt Nam.",
      en: "Meet the leadership of A&D Group — lawyers, accounting & tax and technology experts leading an integrated service ecosystem for Vietnamese businesses.",
    },
  },
  careers: {
    vi: "/careers",
    en: "/en/careers",
    title: { vi: "Tuyển dụng — Cơ hội nghề nghiệp | A&D Group", en: "Careers — Join Our Team | A&D Group" },
    description: {
      vi: "Cơ hội nghề nghiệp tại A&D Group: luật sư tư vấn doanh nghiệp, kế toán, kỹ sư phần mềm và AI/Legal Tech. Môi trường chuyên nghiệp, lộ trình phát triển rõ ràng.",
      en: "Career opportunities at A&D Group: corporate lawyers, accountants, software and AI/Legal Tech engineers. A professional environment with a clear growth path.",
    },
  },
  contact: {
    vi: "/contact",
    en: "/en/contact",
    title: { vi: "Liên hệ tư vấn | A&D Group", en: "Contact Us | A&D Group" },
    description: {
      vi: "Liên hệ A&D Group để được tư vấn pháp lý, kế toán – thuế và giải pháp công nghệ cho doanh nghiệp. Gửi yêu cầu, chúng tôi sẽ phản hồi sớm.",
      en: "Contact A&D Group for legal, accounting & tax and technology advice for your business. Send us your request and we will get back to you shortly.",
    },
  },
} satisfies Record<string, Entry>;

export function pageMeta(key: keyof typeof PAGES, lang: Lang): Metadata {
  const p: Entry = PAGES[key];
  const path = p[lang];
  return {
    title: p.title[lang],
    description: p.description[lang],
    alternates: {
      canonical: BASE + path,
      languages: { vi: BASE + p.vi, en: BASE + p.en, "x-default": BASE + p.vi },
    },
    openGraph: {
      title: p.title[lang],
      description: p.description[lang],
      url: BASE + path,
      siteName: "A&D Group",
      locale: lang === "vi" ? "vi_VN" : "en_US",
      type: "website",
      images: [OG_IMAGE],
    },
  };
}
