import type { Metadata } from 'next';
import { getInsights } from '@/lib/insights';
import InsightsGrid from '@/components/InsightsGrid';

export const metadata: Metadata = {
  title: 'News & Insights | A&D Group',
  description:
    'Updates on operations, achievements and perspectives from A&D Group — a legal, accounting & tax, and technology advisory group.',
  alternates: {
    canonical: 'https://andgroup.com.vn/en/insights',
    languages: {
      vi: 'https://andgroup.com.vn/tin-tuc',
      en: 'https://andgroup.com.vn/en/insights',
    },
  },
};

export default async function InsightsPageEN() {
  const articles = await getInsights('en');

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '60vh' }}>
        <section style={{
          background: 'linear-gradient(180deg, rgba(184,150,46,0.08), transparent)',
          borderBottom: '1px solid var(--border)',
          padding: 'clamp(5rem, 9vw, 8rem) clamp(1.25rem, 5vw, 4rem) clamp(3rem, 5vw, 4rem)',
          textAlign: 'center',
        }}>
          <p style={{
            fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.16em',
            color: 'var(--gold)', fontWeight: 700, marginBottom: '1rem',
          }}>
            News & Insights
          </p>
          <h1 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', color: 'var(--text-primary)',
            marginBottom: '1rem', fontWeight: 800, lineHeight: 1.2,
          }}>
            Updates, achievements and perspectives from A&D Group
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
            Corporate news, investment & finance insights, and stories from A&D Group's
            legal, accounting & tax, and technology ecosystem.
          </p>
        </section>

        <InsightsGrid
          articles={articles}
          isEN={true}
          readMore="Read more"
          comingSoon="New articles coming soon. Please check back later."
          allLabel="All"
        />
    </main>
  );
}
