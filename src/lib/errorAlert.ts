/**
 * Báo lỗi web về Telegram bot CMO (CT duyệt 28/10/2026).
 * Env (Vercel, production): WEB_ERROR_TG_TOKEN, WEB_ERROR_TG_CHAT. Thiếu env -> bỏ qua, không làm hỏng site.
 * Chống spam (theo từng instance serverless): lỗi trùng chỉ báo 1 lần/giờ (kèm số lần lặp), tối đa 30 tin/giờ.
 * Không gửi dữ liệu cá nhân: chỉ URL (cắt query), loại lỗi, stack rút gọn, trình duyệt.
 */
const SITE = 'andgroup.com.vn';
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 30;
const seen = new Map<string, { at: number; count: number }>();
let windowStart = 0;
let sentInWindow = 0;

export type ErrorReport = {
  kind: 'client' | 'server' | 'render';
  name?: string;
  message?: string;
  stack?: string;
  url?: string;
  digest?: string;
  ua?: string;
};

const IGNORE = [
  /chrome-extension:|moz-extension:|safari-extension:/i,
  /ResizeObserver loop/i,
  /Script error\.?$/i,
  /Non-Error promise rejection captured/i,
];
const BOT_UA = /bot|crawler|spider|crawling|headless|lighthouse|pagespeed|preview/i;

function clip(s: unknown, n: number): string {
  const t = typeof s === 'string' ? s : s == null ? '' : String(s);
  return t.length > n ? t.slice(0, n) + '…' : t;
}

function cleanUrl(u?: string): string {
  if (!u) return 'n/a';
  try {
    const x = new URL(u, 'https://' + SITE);
    return x.origin + x.pathname + (x.search ? '?…' : '');
  } catch {
    return clip(u, 200);
  }
}

export async function sendErrorAlert(r: ErrorReport): Promise<'sent' | 'skipped' | 'error'> {
  const token = process.env.WEB_ERROR_TG_TOKEN;
  const chat = process.env.WEB_ERROR_TG_CHAT;
  if (!token || !chat) return 'skipped';
  const text0 = `${r.name || ''} ${r.message || ''} ${r.stack || ''}`;
  if (IGNORE.some((re) => re.test(text0))) return 'skipped';
  if (r.ua && BOT_UA.test(r.ua)) return 'skipped';

  const now = Date.now();
  if (now - windowStart > WINDOW_MS) { windowStart = now; sentInWindow = 0; }
  const key = `${r.kind}|${r.name}|${clip(r.message, 120)}|${cleanUrl(r.url).split('?')[0]}`;
  const prev = seen.get(key);
  if (prev && now - prev.at < WINDOW_MS) { prev.count += 1; return 'skipped'; }
  if (sentInWindow >= MAX_PER_WINDOW) return 'skipped';
  const repeats = prev ? prev.count : 0;
  seen.set(key, { at: now, count: 0 });
  if (seen.size > 500) seen.clear();
  sentInWindow += 1;

  const lines = [
    `🐛 ${SITE} — lỗi ${r.kind === 'server' ? 'máy chủ' : r.kind === 'render' ? 'hiển thị' : 'trình duyệt'}`,
    `Tên: ${clip(r.name || 'Error', 80)}`,
    `URL: ${cleanUrl(r.url)}`,
    `Nội dung: ${clip(r.message, 400)}`,
    r.digest ? `Digest: ${clip(r.digest, 40)}` : '',
    repeats ? `(Lặp thêm ${repeats} lần trong giờ trước)` : '',
    r.stack ? `Stack:\n${clip(r.stack, 900)}` : '',
    r.ua ? `UA: ${clip(r.ua, 160)}` : '',
  ].filter(Boolean);

  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 4000);
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text: clip(lines.join('\n'), 3800), disable_web_page_preview: true }),
      signal: ctrl.signal,
    });
    clearTimeout(t);
    return res.ok ? 'sent' : 'error';
  } catch {
    return 'error';
  }
}
