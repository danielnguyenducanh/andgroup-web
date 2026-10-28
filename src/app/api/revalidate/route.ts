import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { pingIndexNow, INDEXNOW_HOST } from '@/lib/indexnow';

/**
 * On-demand ISR revalidation — gọi từ andos-erp khi publish/unpublish bài.
 * POST /api/revalidate
 * Header: x-revalidate-secret: <ANDGROUP_REVALIDATE_SECRET>
 * Body:   { "paths": ["/duong-dan-danh-sach", "/duong-dan-bai"] }  (ERP gửi đúng URL công khai)
 *
 * 28/10/2026: ngoài các path ERP gửi, luôn làm mới /sitemap.xml (bài mới vào sitemap ngay,
 * không chờ 1 giờ) và báo IndexNow cho các URL đó (Bing). Google đọc sitemap + link nội bộ.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.ANDGROUP_REVALIDATE_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Revalidate chưa được cấu hình' }, { status: 503 });
  }

  const provided = req.headers.get('x-revalidate-secret');
  if (provided !== secret) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const paths: unknown = body?.paths;

  if (!Array.isArray(paths) || paths.length === 0) {
    return NextResponse.json({ error: 'Cần mảng paths' }, { status: 400 });
  }
  if (paths.length > 20) {
    return NextResponse.json({ error: 'Tối đa 20 paths mỗi lần' }, { status: 400 });
  }

  const done: string[] = [];
  for (const p of paths) {
    // Chỉ nhận đường dẫn nội bộ, chặn absolute URL / path traversal
    if (typeof p !== 'string' || !p.startsWith('/') || p.startsWith('//') || p.includes('..')) {
      continue;
    }
    revalidatePath(p);
    done.push(p);
  }

  revalidatePath('/sitemap.xml');
  const indexnow = await pingIndexNow(done.map((p) => `https://${INDEXNOW_HOST}${p}`));

  return NextResponse.json({ ok: true, revalidated: [...done, '/sitemap.xml'], indexnow });
}
