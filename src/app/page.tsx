import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Home from "./HomeClient";

export const metadata: Metadata = pageMeta("home", "vi");

export default function Page() {
  return <Home />;
}
