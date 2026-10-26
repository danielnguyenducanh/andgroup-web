import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";

// Trang contact là client component nên metadata đặt ở layout của segment này.
export const metadata: Metadata = pageMeta("contact", "vi");

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
