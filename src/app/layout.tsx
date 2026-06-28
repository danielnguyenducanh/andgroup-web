import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A&D Group — Kiến tạo giá trị bền vững",
  description:
    "A&D Group là tập đoàn tích hợp Pháp lý – Kế toán – Công nghệ, kiến tạo giải pháp toàn diện cho doanh nghiệp Việt Nam.",
  keywords: "A&D Group, luật, kế toán, công nghệ, pháp lý, doanh nghiệp",
  openGraph: {
    title: "A&D Group",
    description: "Kiến tạo giá trị bền vững qua Pháp lý – Kế toán – Công nghệ",
    url: "https://andgroup.com.vn",
    siteName: "A&D Group",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className="bg-navy-950 text-cream antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
