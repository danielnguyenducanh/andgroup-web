import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * On-demand ISR revalidation — gọi từ andos-erp khi publish/unpublish bài brand=andgroup-corp.
 * Không có route này thì bài mới phải chờ ISR 60s mới hiện.
 *
 * POST /api/revalidate
 * Header: x-revalidate-secret: <ANDGROUP_REVALIDATE_SECRET>
 * Body:   { "paths": ["/tin-tuc", "/tin-tuc/slug-bai", "/en/insights"] }
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
    if (typeof p !== 'string' || !p.startsWith('/') || p.startsWith('//') || p.includes('..')) {
      continue;
    }
    revalidatePath(p);
    done.push(p);
  }

  return NextResponse.json({ ok: true, revalidated: done });
}
