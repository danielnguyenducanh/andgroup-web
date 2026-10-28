import { NextRequest, NextResponse } from 'next/server';
import { sendErrorAlert } from '@/lib/errorAlert';

/** Nhận báo lỗi từ trình duyệt (ErrorReporter / global-error) -> Telegram. Luôn trả 204, không lộ chi tiết. */
export async function POST(req: NextRequest) {
  const len = Number(req.headers.get('content-length') || 0);
  if (len > 16000) return new NextResponse(null, { status: 204 });
  const body = await req.json().catch(() => null);
  if (body && typeof body === 'object') {
    await sendErrorAlert({
      kind: body.kind === 'render' ? 'render' : 'client',
      name: body.name,
      message: body.message,
      stack: body.stack,
      url: body.url,
      digest: body.digest,
      ua: req.headers.get('user-agent') || undefined,
    });
  }
  return new NextResponse(null, { status: 204 });
}
