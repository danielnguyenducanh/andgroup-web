import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A&D Group — Kiến tạo giá trị bền vững",
  description: "Hệ sinh thái dịch vụ chuyên nghiệp: Pháp lý, Kế toán & Thuế, Công nghệ — kiến tạo giá trị bền vững cho doanh nghiệp Việt Nam.",
  keywords: "A&D Group, luật, kế toán, thuế, công nghệ, pháp lý, doanh nghiệp Việt Nam",
  openGraph: {
    title: "A&D Group",
    description: "Pháp lý – Kế toán – Công nghệ",
    url: "https://andgroup.com.vn",
    siteName: "A&D Group",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
