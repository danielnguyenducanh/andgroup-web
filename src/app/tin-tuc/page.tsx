import type { Metadata } from 'next';
import { getInsights } from '@/lib/insights';
import InsightsGrid from '@/components/InsightsGrid';

export const metadata: Metadata = {
  title: 'Tin tức & Sự kiện | A&D Group',
  description:
    'Cập nhật hoạt động, thành tựu và góc nhìn từ A&D Group — tập đoàn tư vấn Pháp lý, Kế toán & Thuế và Công nghệ.',
  alternates: {
    canonical: 'https://andgroup.com.vn/tin-tuc',
    languages: {
      vi: 'https://andgroup.com.vn/tin-tuc',
      en: 'https://andgroup.com.vn/en/insights',
    },
  },
};

export default async function TinTucPage() {
  const articles = await getInsights('vi');

  return (
    <main style={{ background: 'var(--bg-primary)', minHeight: '60vh' }}>
        {/* Hero */}
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
            Tin tức & Sự kiện
          </p>
          <h1 style={{
            fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', color: 'var(--text-primary)',
            marginBottom: '1rem', fontWeight: 800, lineHeight: 1.2,
          }}>
            Cập nhật hoạt động, thành tựu và góc nhìn từ A&D Group
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}>
            Tin doanh nghiệp, đầu tư & tài chính, cùng những chia sẻ từ hệ sinh thái
            Pháp lý – Kế toán & Thuế – Công nghệ của A&D Group.
          </p>
        </section>

        <InsightsGrid
          articles={articles}
          isEN={false}
          readMore="Đọc thêm"
          comingSoon="Bài viết mới sắp ra mắt. Vui lòng quay lại sau."
          allLabel="Tất cả"
        />
    </main>
  );
}
