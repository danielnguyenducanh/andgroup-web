import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import HomeEN from "./HomeClientEN";

export const metadata: Metadata = pageMeta("home", "en");

export default function Page() {
  return <HomeEN />;
}
