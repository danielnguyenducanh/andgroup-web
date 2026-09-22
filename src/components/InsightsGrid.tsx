'use client';

// Trang tin-tuc/insights andgroup.com.vn (trang tin tức tập đoàn A&D Group).
// Lưới bài + thanh filter category (đa chọn) — tái dùng pattern office.andgroup.com.vn,
// giữ tông GOLD (--gold #B8962E) đã có sẵn trong andgroup-web.
import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { InsightPost } from '../lib/insights';
import { insightPath } from '../lib/insights';

// Nhãn danh mục khớp bộ CATEGORIES bên ERP (NewPostForm.tsx) cho brand andgroup-corp:
// corporate, investment + 4 COMMON (announcement/company/product/news).
const CATEGORY_LABELS: Record<string, { vi: string; en: string }> = {
  corporate:    { vi: 'Doanh nghiệp & Quản trị',   en: 'Corporate & Governance' },
  investment:   { vi: 'Đầu tư & Tài chính',        en: 'Investment & Finance' },
  announcement: { vi: 'Thông báo & Cập nhật',      en: 'Announcements' },
  company:      { vi: 'Hoạt động & Tin nội bộ',    en: 'Company News' },
  product:      { vi: 'Sản phẩm & Dịch vụ',        en: 'Products & Services' },
  news:         { vi: 'Tin tức chung',             en: 'General News' },
};

function catLabel(key: string, isEN: boolean): string {
  const l = CATEGORY_LABELS[key];
  if (!l) return key;
  return isEN ? l.en : l.vi;
}

interface Props {
  articles: InsightPost[];
  isEN: boolean;
  readMore: string;
  comingSoon: string;
  allLabel: string;
}

export default function InsightsGrid({ articles, isEN, readMore, comingSoon, allLabel }: Props) {
  const lang = isEN ? 'en' : 'vi';
  const [selected, setSelected] = useState<string[]>([]);

  const availableCats = useMemo(() => {
    const set = new Set<string>();
    for (const a of articles) if (a.practice_area) set.add(a.practice_area);
    return Object.keys(CATEGORY_LABELS).filter((k) => set.has(k));
  }, [articles]);

  const filtered = useMemo(() => {
    if (selected.length === 0) return articles;
    return articles.filter((a) => a.practice_area && selected.includes(a.practice_area));
  }, [articles, selected]);

  function toggle(cat: string) {
    setSelected((prev) => (prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]));
  }

  const chipBase: React.CSSProperties = {
    padding: '0.5rem 1rem', borderRadius: '999px', fontSize: '0.82rem', fontWeight: 600,
    cursor: 'pointer', border: '1px solid var(--gold)', transition: 'all 0.15s', userSelect: 'none',
    background: 'transparent', color: 'var(--gold)',
  };
  const chipActive: React.CSSProperties = { ...chipBase, background: 'var(--gold)', color: '#0A0A0A', borderColor: 'var(--gold)' };

  return (
    <div style={{ maxWidth: '1280px', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6rem) clamp(1.25rem, 5vw, 4rem)' }}>
      {availableCats.length >= 2 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
          <span onClick={() => setSelected([])} style={selected.length === 0 ? chipActive : chipBase}>
            {allLabel}
          </span>
          {availableCats.map((cat) => (
            <span key={cat} onClick={() => toggle(cat)} style={selected.includes(cat) ? chipActive : chipBase}>
              {catLabel(cat, isEN)}
            </span>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {filtered.map((article) => (
            <article
              key={article.slug}
              style={{
                border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden',
                display: 'flex', flexDirection: 'column', background: 'var(--white)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
            >
              {article.cover_image_url && (
                <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={article.cover_image_url}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    loading="lazy"
                  />
                </div>
              )}

              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 500 }}>
                  {new Date(article.published_at).toLocaleDateString(
                    isEN ? 'en-US' : 'vi-VN',
                    { year: 'numeric', month: 'long', day: 'numeric' }
                  )}
                  {article.practice_area && CATEGORY_LABELS[article.practice_area] && (
                    <span style={{ color: 'var(--gold)', fontWeight: 600 }}> · {catLabel(article.practice_area, isEN)}</span>
                  )}
                </span>

                <Link href={insightPath(lang, article.slug)} style={{ textDecoration: 'none', flex: 1 }}>
                  <h2 style={{
                    fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.4, fontWeight: 700,
                    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  } as React.CSSProperties}>
                    {article.title}
                  </h2>
                </Link>

                {article.excerpt && (
                  <p style={{
                    color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6,
                    display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
                  } as React.CSSProperties}>
                    {article.excerpt}
                  </p>
                )}

                <Link
                  href={insightPath(lang, article.slug)}
                  style={{
                    marginTop: 'auto', paddingTop: '0.75rem',
                    color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.06em', textDecoration: 'none',
                  }}
                >
                  {readMore} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div style={{
          textAlign: 'center', padding: '4rem 2rem',
          background: 'var(--bg-secondary)', borderRadius: '6px', border: '1px solid var(--border)',
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{comingSoon}</p>
        </div>
      )}
    </div>
  );
}
