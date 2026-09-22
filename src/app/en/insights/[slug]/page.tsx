import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getInsightBySlug } from '@/lib/insights';

export const dynamicParams = true;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getInsightBySlug(slug, 'en');
  if (!post) return {};
  return {
    title: post.meta_title || post.title,
    description: post.meta_description || post.excerpt || undefined,
    alternates: { canonical: `https://andgroup.com.vn/en/insights/${slug}` },
    openGraph: {
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || undefined,
      images: post.cover_image_url ? [post.cover_image_url] : [],
      type: 'article',
      publishedTime: post.published_at,
      locale: 'en_US',
    },
  };
}

function estimateReadTime(html: string): number {
  const text = html.replace(/<[^>]+>/g, ' ');
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function stripDuplicateCover(html: string, cover: string | null): string {
  let out = html || '';
  if (!cover) return out;
  const before = out;
  out = out.replace(
    /<!--\s*wp:image[^>]*-->\s*<figure[^>]*>\s*<img[^>]*class="[^"]*wp-image-cover[^"]*"[^>]*>\s*<\/figure>\s*(<!--\s*\/wp:image\s*-->)?/i,
    ''
  );
  if (out === before) {
    const esc = cover.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(
      new RegExp('<!--\\s*wp:image[^>]*-->\\s*<figure[^>]*>\\s*<img[^>]*src="' + esc + '"[^>]*>\\s*</figure>\\s*(<!--\\s*/wp:image\\s*-->)?', 'i'),
      ''
    );
  }
  out = out.replace(/^\s*(<div[^>]*wp-block-spacer[^>]*>\s*<\/div>\s*)+/i, '');
  return out;
}

export default async function InsightDetailEN({ params }: PageProps) {
  const { slug } = await params;
  // Fallback song ngữ: bản EN dùng CHUNG slug với vi. Chưa có bản EN → hiện bản vi + banner.
  let post = await getInsightBySlug(slug, 'en');
  let translationPending = false;
  if (!post) {
    post = await getInsightBySlug(slug, 'vi');
    if (post) translationPending = true;
  }
  if (!post) notFound();

  const contentHtml = stripDuplicateCover(post.content || '', post.cover_image_url);
  const readTime = estimateReadTime(contentHtml);
  const publishDate = new Date(post.published_at).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.meta_description || post.excerpt || undefined,
    image: post.cover_image_url ? [post.cover_image_url] : undefined,
    datePublished: post.published_at,
    dateModified: post.published_at,
    author: { '@type': post.author_name ? 'Person' : 'Organization', name: post.author_name || 'A&D Group' },
    publisher: {
      '@type': 'Organization',
      name: 'A&D Group',
      logo: { '@type': 'ImageObject', url: 'https://andgroup.com.vn/images/logo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://andgroup.com.vn/en/insights/${slug}` },
  };
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://andgroup.com.vn/en' },
      { '@type': 'ListItem', position: 2, name: 'News & Insights', item: 'https://andgroup.com.vn/en/insights' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://andgroup.com.vn/en/insights/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <main style={{ background: 'var(--bg-primary)' }}>
        <div style={{
          background: 'linear-gradient(180deg, rgba(184,150,46,0.08), transparent)',
          borderBottom: '1px solid var(--border)',
          padding: 'clamp(5rem, 8vw, 7rem) clamp(1.25rem, 5vw, 4rem) clamp(2.5rem, 4vw, 3.5rem)',
        }}>
          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <Link href="/en/insights" style={{ color: 'var(--gold)', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginBottom: '1.5rem' }}>
              ← News & Insights
            </Link>
            {translationPending && (
              <div style={{ background: 'rgba(184,150,46,0.12)', border: '1px solid var(--gold-muted, rgba(184,150,46,0.3))', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1.25rem', fontSize: '0.85rem', color: 'var(--gold-light)', lineHeight: 1.5 }}>
                🌐 The English translation is being prepared. Showing the Vietnamese version in the meantime.
              </div>
            )}
            <h1 style={{ fontSize: 'clamp(1.6rem, 3.2vw, 2.5rem)', color: 'var(--text-primary)', lineHeight: 1.25, marginBottom: '1.25rem', fontWeight: 800 }}>
              {post.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {post.author_name && <span style={{ color: 'var(--text-primary)', fontSize: '0.85rem', fontWeight: 600 }}>{post.author_name}</span>}
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}>{publishDate}</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{readTime} min read</span>
            </div>
          </div>
        </div>

        {post.cover_image_url && (
          <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 clamp(1.25rem, 5vw, 4rem)' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.cover_image_url} alt={post.title} style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '6px', marginTop: '2rem', display: 'block' }} />
          </div>
        )}

        <article style={{ maxWidth: '820px', margin: '0 auto', padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.25rem, 5vw, 4rem)' }}>
          {post.excerpt && (
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.75, borderLeft: '3px solid var(--gold)', paddingLeft: '1.25rem', marginBottom: '2rem', fontStyle: 'italic' }}>
              {post.excerpt}
            </p>
          )}
          <div className="prose-andgroup" style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: '1rem' }} dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </main>

      <style>{`
        .prose-andgroup h2 { font-size: 1.4rem; color: var(--text-primary); margin: 2rem 0 0.75rem; line-height: 1.3; font-weight: 800; }
        .prose-andgroup h3 { font-size: 1.15rem; color: var(--text-primary); margin: 1.5rem 0 0.5rem; font-weight: 700; }
        .prose-andgroup p { margin-bottom: 1.25rem; }
        .prose-andgroup figure { margin: 1.75rem 0; }
        .prose-andgroup figure img, .prose-andgroup img { display: block; width: 100%; height: auto; border-radius: 6px; margin: 0 0 0.5rem; }
        .prose-andgroup figure figcaption { font-size: 0.85rem; color: var(--text-muted); text-align: center; margin-top: 0.5rem; font-style: italic; }
        .prose-andgroup ul, .prose-andgroup ol { padding-left: 1.75rem; margin-bottom: 1.25rem; }
        .prose-andgroup ul { list-style: disc outside; }
        .prose-andgroup ol { list-style: decimal outside; }
        .prose-andgroup li { margin-bottom: 0.5rem; display: list-item; }
        .prose-andgroup blockquote { border-left: 3px solid var(--gold); padding-left: 1rem; color: var(--text-secondary); font-style: italic; margin: 1.5rem 0; }
        .prose-andgroup a { color: #96751F; text-decoration: underline; }
        .prose-andgroup strong { color: var(--text-primary); }
        .prose-andgroup table { width: 100%; border-collapse: collapse; margin-bottom: 1.5rem; font-size: 0.9rem; }
        .prose-andgroup th { background: var(--gold); color: #FFFFFF; padding: 0.6rem 0.75rem; text-align: left; }
        .prose-andgroup td { border: 1px solid var(--border); padding: 0.6rem 0.75rem; }
      `}</style>
    </>
  );
}
