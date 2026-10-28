/**
 * IndexNow — báo URL mới/sửa/gỡ cho Bing (và các công cụ dùng IndexNow) ngay khi ERP đăng bài.
 * Google KHÔNG dùng IndexNow; Google đọc sitemap (revalidate ngay trong /api/revalidate) + link nội bộ.
 * Key công khai theo chuẩn IndexNow, file xác minh: /public/79ae358f4c6ab4a601be4ac117c06806.txt (28/10/2026).
 * Lỗi/timeout không được làm hỏng luồng đăng bài -> nuốt lỗi, trả trạng thái để log.
 */
export const INDEXNOW_KEY = '79ae358f4c6ab4a601be4ac117c06806';
export const INDEXNOW_HOST = 'andgroup.com.vn';

export async function pingIndexNow(urls: string[]): Promise<{ status?: number; error?: string; skipped?: boolean }> {
  const list = Array.from(new Set(urls)).filter((u) => u.startsWith(`https://${INDEXNOW_HOST}/`));
  if (list.length === 0) return { skipped: true };
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 4000);
  try {
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({
        host: INDEXNOW_HOST,
        key: INDEXNOW_KEY,
        keyLocation: `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`,
        urlList: list,
      }),
      signal: ctrl.signal,
    });
    return { status: res.status };
  } catch (e) {
    return { error: e instanceof Error ? e.message : String(e) };
  } finally {
    clearTimeout(timer);
  }
}
