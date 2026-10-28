'use client';
import { useEffect } from 'react';

/**
 * Bắt lỗi JS phía trình duyệt -> /api/client-error (Telegram CMO).
 * ChunkLoadError (khách mở tab cũ đúng lúc deploy bản mới): tự tải lại trang 1 lần, chỉ báo nếu vẫn lỗi.
 */
const RELOAD_KEY = 'chunk-reload-at';

export function reportClientError(e: { name?: string; message?: string; stack?: string; digest?: string; kind?: 'client' | 'render' }) {
  try {
    const payload = JSON.stringify({ ...e, url: location.href });
    if (navigator.sendBeacon) {
      navigator.sendBeacon('/api/client-error', new Blob([payload], { type: 'application/json' }));
    } else {
      fetch('/api/client-error', { method: 'POST', body: payload, headers: { 'Content-Type': 'application/json' }, keepalive: true }).catch(() => {});
    }
  } catch {
    /* bỏ qua */
  }
}

function isChunkError(name?: string, message?: string) {
  return /ChunkLoadError/i.test(name || '') || /Loading (CSS )?chunk [\w-]+ failed|Failed to fetch dynamically imported module/i.test(message || '');
}

export function handleChunkError(name?: string, message?: string): boolean {
  if (!isChunkError(name, message)) return false;
  const last = Number(sessionStorage.getItem(RELOAD_KEY) || 0);
  if (Date.now() - last > 60_000) {
    sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
    location.reload();
    return true;
  }
  return false; // đã reload trong 60s mà vẫn lỗi -> cho báo
}

export default function ErrorReporter() {
  useEffect(() => {
    const onError = (ev: ErrorEvent) => {
      const err = ev.error as Error | undefined;
      const name = err?.name || 'Error';
      const message = err?.message || ev.message;
      if (handleChunkError(name, message)) return;
      reportClientError({ name, message, stack: err?.stack });
    };
    const onRejection = (ev: PromiseRejectionEvent) => {
      const r = ev.reason as Error | undefined;
      const name = r?.name || 'UnhandledRejection';
      const message = r?.message || String(ev.reason);
      if (handleChunkError(name, message)) return;
      reportClientError({ name, message, stack: r?.stack });
    };
    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);
  return null;
}
