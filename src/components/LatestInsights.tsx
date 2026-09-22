// Khối "Bài viết mới nhất" — có thể nhúng trên homepage andgroup.com.vn.
// Server component: đọc 3 bài mới nhất brand=andgroup-corp, TỰ ẨN khi 0 bài (không hiện khối trống).
// Best practice landing page: blog là vệ tinh SEO, đặt trước section liên hệ, có nút "Xem tất cả".
import Link from 'next/link';
import { getInsights, insightPath } from '@/lib/insights';

interface Props {
  lang?: 'vi' | 'en';
}

export default async function LatestInsights({ lang = 'vi' }: Props) {
  const isEN = lang === 'en';
  let articles = [] as Awaited<ReturnType<typeof getInsights>>;
  try {
    articles = await getInsights(lang);
  } catch {
    return null; // lỗi đọc DB → ẩn khối, không vỡ homepage
  }
  if (!articles || articles.length === 0) return null; // 0 bài → tự ẩn

  const latest = articles.slice(0, 3);
  const listHref = isEN ? '/en/insights' : '/tin-tuc';
  const label = isEN ? 'News' : 'Tin tức & Sự kiện';
  const heading = isEN
    ? 'Latest updates from A&D Group'
    : 'Cập nhật mới nhất từ A&D Group';
  const viewAll = isEN ? 'View all articles' : 'Xem tất cả bài viết';
  const readMore = isEN ? 'Read more' : 'Đọc thêm';

  return (
    <section id="tin-tuc" className="section-sm" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p className="label" style={{ marginBottom: 14 }}>{label}</p>
          <h2
            className="font-display"
            style={{ fontSize: 'clamp(26px, 3.4vw, 40px)', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.2 }}
          >
            {heading}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {latest.map((a) => (
            <article
              key={a.slug}
              style={{
                border: '1px solid var(--border)', borderRadius: 6, overflow: 'hidden',
                display: 'flex', flexDirection: 'column', background: 'var(--white)',
              }}
            >
              {a.cover_image_url && (
                <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={a.cover_image_url} alt={a.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
              <div style={{ padding: '1.4rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 500 }}>
                  {new Date(a.published_at).toLocaleDateString(isEN ? 'en-US' : 'vi-VN', {
                    year: 'numeric', month: 'long', day: 'numeric',
                  })}
                </span>
                <Link href={insightPath(lang, a.slug)} style={{ textDecoration: 'none', flex: 1 }}>
                  <h3
                    style={{
                      fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.4, fontWeight: 700,
                      display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    } as React.CSSProperties}
                  >
                    {a.title}
                  </h3>
                </Link>
                {a.excerpt && (
                  <p
                    style={{
                      color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6,
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                    } as React.CSSProperties}
                  >
                    {a.excerpt}
                  </p>
                )}
                <Link
                  href={insightPath(lang, a.slug)}
                  style={{
                    marginTop: 'auto', paddingTop: '0.7rem', color: 'var(--gold)', fontSize: '0.8rem',
                    fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none',
                  }}
                >
                  {readMore} →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link href={listHref} className="btn-outline">{viewAll} →</Link>
        </div>
      </div>
    </section>
  );
}
