export type Lang = "vi" | "en";

export const translations = {
  vi: {
    nav: {
      about: "Về chúng tôi",
      ecosystem: "Hệ sinh thái",
      leadership: "Lãnh đạo",
      careers: "Tuyển dụng",
      contact: "Liên hệ ngay",
    },
    hero: {
      label: "A&D Group",
      h1: "Kiến tạo giá trị\nbền vững cho",
      h1em: "doanh nghiệp Việt.",
      sub: "Hệ sinh thái tích hợp Pháp lý – Kế toán – Công nghệ, đồng hành cùng doanh nghiệp từ khởi sự đến phát triển bền vững.",
      cta1: "Khám phá hệ sinh thái",
      cta2: "Liên hệ tư vấn",
    },
    companies: {
      sectionLabel: "Công ty thành viên",
      sectionTitle: "Ba trụ cột của tập đoàn",
      sectionDesc: "Mỗi công ty thành viên là chuyên gia đầu ngành, cùng tạo nên giải pháp dịch vụ toàn diện.",
    },
    products: {
      sectionLabel: "Hệ sinh thái công nghệ",
      sectionTitle: "3 sản phẩm số",
      sectionTitleEm: "của A&D Tech",
      sectionDesc: "Từ quản trị nội bộ, tra cứu pháp luật đến ký kết hợp đồng điện tử — A&D Tech số hóa toàn diện hoạt động pháp lý doanh nghiệp.",
      cta: "Khám phá hệ sinh thái",
    },
  },
  en: {
    nav: {
      about: "About",
      ecosystem: "Ecosystem",
      leadership: "Leadership",
      careers: "Careers",
      contact: "Contact",
    },
    hero: {
      label: "A&D Group",
      h1: "Building sustainable\nvalue for",
      h1em: "Vietnamese businesses.",
      sub: "An integrated ecosystem of Legal – Accounting – Technology services, partnering with businesses from inception to sustainable growth.",
      cta1: "Explore ecosystem",
      cta2: "Contact us",
    },
    companies: {
      sectionLabel: "Member companies",
      sectionTitle: "Three pillars of the group",
      sectionDesc: "Each member company is an industry expert, together creating comprehensive service solutions.",
    },
    products: {
      sectionLabel: "Tech ecosystem",
      sectionTitle: "3 digital products",
      sectionTitleEm: "by A&D Tech",
      sectionDesc: "From internal management, legal research to e-contract signing — A&D Tech fully digitizes legal operations for businesses.",
      cta: "Explore ecosystem",
    },
  },
} as const;
