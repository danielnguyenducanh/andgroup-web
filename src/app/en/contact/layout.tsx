import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// Trang contact là client component nên metadata đặt ở layout của segment này.
export const metadata: Metadata = pageMeta("contact", "en");

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
