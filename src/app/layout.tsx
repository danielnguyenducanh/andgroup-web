import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lora = Lora({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A&D Group — Pháp lý · Kế toán · Công nghệ",
  description:
    "A&D Group là tập đoàn tư vấn chuyên sâu gồm A&D Law Firm, A&D Accounting & Tax và A&D Tech — kiến tạo hệ sinh thái pháp lý, tài chính và công nghệ cho doanh nghiệp Việt Nam.",
  metadataBase: new URL("https://andgroup.com.vn"),
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "A&D Group — Pháp lý · Kế toán · Công nghệ",
    description: "Hệ sinh thái tích hợp Pháp lý – Kế toán – Công nghệ, phục vụ doanh nghiệp, cá nhân và freelancer tại Việt Nam.",
    url: "https://andgroup.com.vn",
    siteName: "A&D Group",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "A&D Group — Pháp lý · Kế toán · Công nghệ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A&D Group — Pháp lý · Kế toán · Công nghệ",
    description: "Hệ sinh thái tích hợp Pháp lý – Kế toán – Công nghệ",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${lora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
