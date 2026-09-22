// Server-side only — never import from client components.
// Đọc bài SEO cho andgroup.com.vn (trang tin tức tập đoàn A&D Group) từ Supabase content_posts.
// Dùng CHUNG project rlfprfjdxzkcglubnlec với andlaw/andgroup(office)/quydinh, LỌC theo brand='andgroup-corp'.
// Soạn bài ở ERP (andos.vn /content) chọn Thực thể = A&D Group (Tập đoàn) → tự về đây.
const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY!;

const BRAND = 'andgroup-corp';

export interface InsightPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  published_at: string;
  created_at: string;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  lang: string;
  practice_area: string | null;
  author_name: string | null;
}

interface RawPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  cover_image_url: string | null;
  published_at: string;
  created_at: string;
  meta_title: string | null;
  meta_description: string | null;
  focus_keyword: string | null;
  lang?: string | null;
  practice_area?: string | null;
  author_name?: string | null;
}

// lang/practice_area là CỘT THẬT trong content_posts (migration 2026-08-22).
// Vẫn giữ nhánh parse prefix JSON cũ trong focus_keyword để an toàn với bản ghi tồn dư.
function normalize(raw: RawPost): InsightPost {
  let lang = raw.lang ?? 'vi';
  let practice_area = raw.practice_area ?? null;
  let focus_keyword = raw.focus_keyword;

  if (focus_keyword && focus_keyword.startsWith('{"')) {
    const pipe = focus_keyword.indexOf('}|');
    if (pipe !== -1) {
      try {
        const meta = JSON.parse(focus_keyword.substring(0, pipe + 1));
        if (!raw.lang) lang = meta.lang || 'vi';
        if (!raw.practice_area) practice_area = meta.pa || null;
        focus_keyword = focus_keyword.substring(pipe + 2);
      } catch {
        /* ignore */
      }
    }
  }

  return {
    ...raw,
    focus_keyword,
    lang,
    practice_area,
    author_name: raw.author_name ?? null,
  };
}

async function supabaseGet(path: string): Promise<RawPost[]> {
  // Guard: thiếu env (ví dụ build ở môi trường chưa inject) → trả rỗng,
  // không crash prerender. Bài sẽ tự hiện khi runtime có env + ISR revalidate.
  if (!SUPABASE_URL || !SUPABASE_KEY) return [];
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
    },
    next: { revalidate: 60 }, // ISR 60s; publish gọi /api/revalidate để lên ngay
  });
  if (!res.ok) throw new Error(`Supabase error: ${res.status}`);
  return res.json();
}

const LIST_FIELDS =
  'id,title,slug,excerpt,cover_image_url,published_at,created_at,meta_title,meta_description,focus_keyword,lang,practice_area,author_name';

export async function getInsights(lang: string): Promise<InsightPost[]> {
  const safeLang = lang === 'en' ? 'en' : 'vi';
  const rows = await supabaseGet(
    `content_posts?brand=eq.${BRAND}&status=eq.published&lang=eq.${safeLang}` +
      `&order=published_at.desc&select=${LIST_FIELDS}`
  );
  return rows.map(normalize);
}

export async function getInsightBySlug(
  slug: string,
  lang?: string
): Promise<InsightPost | null> {
  const langFilter = lang ? `&lang=eq.${lang === 'en' ? 'en' : 'vi'}` : '';
  const rows = await supabaseGet(
    `content_posts?brand=eq.${BRAND}&status=eq.published&slug=eq.${encodeURIComponent(
      slug
    )}${langFilter}&select=*&limit=1`
  );
  if (!rows.length) return null;
  return normalize(rows[0]);
}

export async function getAllInsightSlugs(): Promise<{ slug: string; lang: string }[]> {
  const rows = await supabaseGet(
    `content_posts?brand=eq.${BRAND}&status=eq.published&select=slug,lang,focus_keyword`
  );
  return rows.map((r) => {
    const p = normalize(r);
    return { slug: p.slug, lang: p.lang };
  });
}

// Đường dẫn: vi → /tin-tuc, /tin-tuc/[slug]; en → /en/insights, /en/insights/[slug]
export function insightsListPath(lang: string): string {
  return lang === 'en' ? '/en/insights' : '/tin-tuc';
}
export function insightPath(lang: string, slug: string): string {
  return lang === 'en' ? `/en/insights/${slug}` : `/tin-tuc/${slug}`;
}
