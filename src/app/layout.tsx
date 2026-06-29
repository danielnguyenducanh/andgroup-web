import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A&D Group — Pháp lý · Kế toán · Công nghệ",
  description:
    "A&D Group là tập đoàn tư vấn chuyên sâu gồm A&D Law Firm, A&D Accounting & Tax và A&D Tech — kiến tạo hệ sinh thái pháp lý, tài chính và công nghệ cho doanh nghiệp Việt Nam.",
  openGraph: {
    title: "A&D Group",
    description: "Pháp lý · Kế toán · Công nghệ",
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
    <html lang="vi">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
