import { MetadataRoute } from "next";

const BASE_URL = "https://andgroup.com.vn";

type Entry = MetadataRoute.Sitemap[number];

/**
 * andgroup-web KHÔNG dùng next-intl routing plugin — thư mục `en/` là route tĩnh.
 * Vì vậy khai trực tiếp các đường dẫn thật (đã verify trả HTTP 200):
 *   vi: /about /ecosystem /leadership /tin-tuc /careers /contact /privacy
 *   en: /en/about /en/ecosystem /en/leadership /en/insights /en/careers /en/contact /en/privacy
 * Lưu ý: bản vi dùng /tin-tuc, bản en dùng /en/insights (khác slug).
 */

// [path, priority, changeFrequency]
const VI_ROUTES: [string, number, Entry["changeFrequency"]][] = [
  ["/", 1, "weekly"],
  ["/about", 0.8, "monthly"],
  ["/ecosystem", 0.8, "monthly"],
  ["/leadership", 0.8, "monthly"],
  ["/tin-tuc", 0.7, "weekly"],
  ["/careers", 0.6, "monthly"],
  ["/contact", 0.8, "monthly"],
  ["/privacy", 0.3, "yearly"],
];

const EN_ROUTES: [string, number, Entry["changeFrequency"]][] = [
  ["/en", 0.9, "weekly"],
  ["/en/about", 0.7, "monthly"],
  ["/en/ecosystem", 0.7, "monthly"],
  ["/en/leadership", 0.7, "monthly"],
  ["/en/insights", 0.6, "weekly"],
  ["/en/careers", 0.5, "monthly"],
  ["/en/contact", 0.7, "monthly"],
  ["/en/privacy", 0.3, "yearly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [...VI_ROUTES, ...EN_ROUTES].map(([path, priority, changeFrequency]) => ({
    url: BASE_URL + path,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
