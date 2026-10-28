'use client';
import { useEffect } from 'react';
import { reportClientError, handleChunkError } from '@/components/ErrorReporter';

/** Lỗi làm sập cả trang (root) -> báo Telegram + màn hình thay thế tối giản. */
export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    if (handleChunkError(error?.name, error?.message)) return;
    reportClientError({ kind: 'render', name: error?.name, message: error?.message, stack: error?.stack, digest: error?.digest });
  }, [error]);
  return (
    <html lang="vi">
      <body style={{ fontFamily: 'system-ui, sans-serif', padding: '3rem 1.5rem', textAlign: 'center', color: '#333' }}>
        <h1 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Đã có lỗi xảy ra / Something went wrong</h1>
        <p style={{ marginBottom: '1.25rem', color: '#666' }}>Vui lòng tải lại trang. Please reload the page.</p>
        <button onClick={() => reset()} style={{ padding: '0.6rem 1.2rem', border: '1px solid #522D55', background: '#fff', color: '#522D55', borderRadius: 6, cursor: 'pointer' }}>
          Tải lại / Reload
        </button>
      </body>
    </html>
  );
}
